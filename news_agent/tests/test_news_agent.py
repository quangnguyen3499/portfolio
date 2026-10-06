import json
from datetime import date

import pytest

from news_agent import llm
from news_agent.llm import parse_ollama_response
from news_agent.news_agent import deduplicate_candidates, limit_candidates_by_source, normalize_url
from news_agent.sources import parse_rss_feed


def test_normalize_url_removes_tracking_and_fragment():
    assert normalize_url("HTTPS://Example.com/story/?utm_source=feed#section") == "https://example.com/story"


def test_deduplicate_candidates_against_existing_and_each_other():
    candidates = [
        {"title": "Existing", "url": "https://example.com/a?utm_source=rss", "source": "Feed"},
        {"title": "New", "url": "https://example.com/b", "source": "Feed"},
        {"title": "Duplicate", "url": "https://example.com/b/", "source": "Feed"},
    ]
    existing = [{"source_url": "https://example.com/a"}]

    assert [item["title"] for item in deduplicate_candidates(candidates, existing)] == ["New"]


def test_limit_candidates_round_robins_sources():
    candidates = [
        {"title": f"HN {index}", "source": "Hacker News"} for index in range(4)
    ] + [
        {"title": f"GitHub {index}", "source": "GitHub Trending"} for index in range(4)
    ]

    selected = limit_candidates_by_source(candidates, 4)
    assert [item["title"] for item in selected] == ["HN 0", "GitHub 0", "HN 1", "GitHub 1"]


def test_parse_ollama_response_maps_ids_to_trusted_candidate_data():
    candidates = [{
        "candidate_id": "candidate-0",
        "title": "Original title",
        "date": "2026-10-06",
        "url": "https://example.com/story",
        "source": "Feed",
    }]
    selection = {
        "candidate_id": "candidate-0",
        "category": "AI",
        "summary": "A short summary.",
        "why_it_matters": "It matters to engineers.",
    }

    result = parse_ollama_response(json.dumps({"articles": [selection, selection]}), candidates, 5)
    assert result == [{
        "title": "Original title",
        "date": "2026-10-06",
        "category": "AI",
        "summary": "A short summary.",
        "why_it_matters": "It matters to engineers.",
        "source": "Feed",
        "source_url": "https://example.com/story",
    }]
    selection["candidate_id"] = "candidate-unknown"
    with pytest.raises(ValueError, match="not present"):
        parse_ollama_response(json.dumps([selection]), candidates, 5)


def test_parse_llm_response_rejects_invalid_json():
    with pytest.raises(ValueError, match="valid JSON"):
        parse_ollama_response("not json", [], 5)


def test_ollama_defaults_to_local_endpoint_without_api_key(monkeypatch):
    request_details = {}

    class FakeResponse:
        def __enter__(self):
            return self

        def __exit__(self, *_args):
            return False

        def read(self):
            return json.dumps({"message": {"content": '{"articles": [{"candidate_id": "candidate-0", "category": "AI", "summary": "A summary.", "why_it_matters": "Relevant."}]}'}}).encode()

    def fake_urlopen(request, timeout):
        request_details["url"] = request.full_url
        request_details["authorization"] = request.get_header("Authorization")
        request_details["payload"] = json.loads(request.data)
        request_details["timeout"] = timeout
        return FakeResponse()

    monkeypatch.delenv("LLM_API_KEY", raising=False)
    monkeypatch.delenv("OLLAMA_HOST", raising=False)
    monkeypatch.delenv("OLLAMA_MODEL", raising=False)
    monkeypatch.setattr(llm.urllib.request, "urlopen", fake_urlopen)

    candidate = {"title": "Test story", "url": "https://example.com/test", "description": "Test.", "source": "Test"}
    assert llm.select_articles([candidate], 5) == [{
        "title": "Test story",
        "date": date.today().isoformat(),
        "category": "AI",
        "summary": "A summary.",
        "why_it_matters": "Relevant.",
        "source": "Test",
        "source_url": "https://example.com/test",
    }]
    assert request_details["url"] == "http://localhost:11434/api/chat"
    assert request_details["authorization"] is None
    assert request_details["payload"]["model"] == "llama3.2:latest"
    assert request_details["payload"]["format"]["properties"]["articles"]["items"]["properties"]["candidate_id"]["enum"] == ["candidate-0"]


def test_parse_rss_feed_extracts_items():
    feed = b"""<rss version='2.0'><channel><item><title>Story</title><link>https://example.com/story</link><description>Summary</description></item></channel></rss>"""

    assert parse_rss_feed(feed) == [{
        "title": "Story",
        "url": "https://example.com/story",
        "description": "Summary",
        "source": "Good AI List",
    }]