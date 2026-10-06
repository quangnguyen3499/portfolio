import json
import os
import urllib.error
import urllib.request
from datetime import date


def select_articles(candidates, max_posts):
    host = (os.environ.get("OLLAMA_HOST") or "http://localhost:11434").rstrip("/")
    endpoint = f"{host}/api/chat"
    model = os.environ.get("OLLAMA_MODEL") or "llama3.2:latest"
    dated_candidates = []
    for index, candidate in enumerate(candidates):
        dated_candidates.append({
            **candidate,
            "candidate_id": f"candidate-{index}",
            "date": candidate.get("date") or date.today().isoformat(),
        })
    allowed_ids = [candidate["candidate_id"] for candidate in dated_candidates]
    output_schema = {
        "type": "object",
        "additionalProperties": False,
        "properties": {
            "articles": {
                "type": "array",
                "maxItems": max_posts,
                "items": {
                    "type": "object",
                    "additionalProperties": False,
                    "properties": {
                        "candidate_id": {"type": "string", "enum": allowed_ids},
                        "category": {"type": "string"},
                        "summary": {"type": "string"},
                        "why_it_matters": {"type": "string"},
                    },
                    "required": ["candidate_id", "category", "summary", "why_it_matters"],
                },
            },
        },
        "required": ["articles"],
    }
    prompt = """You are an AI and technology editor writing for software engineers interested in AI, LLMs, Python, backend and data engineering, open source, and developer tools.

Select up to {max_posts} items from the candidates below. Ignore ads, duplicates, low-value items, and unrelated content. Use only facts in a candidate; do not invent stories or facts. Return only candidate_id values copied from the input. Write a short English summary and why_it_matters for each selected item. Do not return a title, source, URL, or date; the application fills those directly from the selected candidate.

Candidates:
{candidates}""".format(max_posts=max_posts, candidates=json.dumps(dated_candidates, ensure_ascii=False))
    payload = json.dumps({
        "model": model,
        "stream": False,
        "options": {"temperature": 0.1},
        "messages": [{"role": "user", "content": prompt}],
        "format": output_schema,
    }).encode("utf-8")
    request = urllib.request.Request(
        endpoint,
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=180) as response:
            result = json.loads(response.read())
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as error:
        raise RuntimeError(f"LLM request failed: {error}") from error

    try:
        content = result["message"]["content"]
    except (KeyError, TypeError) as error:
        raise ValueError("LLM response did not contain message content") from error
    return parse_ollama_response(content, dated_candidates, max_posts)


def parse_ollama_response(content, candidates, max_posts):
    try:
        decoded = json.loads(content)
    except (TypeError, json.JSONDecodeError) as error:
        raise ValueError("LLM response is not valid JSON") from error

    if isinstance(decoded, dict):
        decoded = decoded.get("articles")
    if not isinstance(decoded, list):
        raise ValueError("LLM response must be an array of articles")

    candidate_by_id = {item["candidate_id"]: item for item in candidates}
    articles = []
    seen_urls = set()
    for item in decoded[:max_posts]:
        if not isinstance(item, dict):
            raise ValueError("LLM response contains a non-object article")
        required = ("candidate_id", "category", "summary", "why_it_matters")
        if any(not isinstance(item.get(field), str) or not item[field].strip() for field in required):
            raise ValueError("LLM response is missing required article fields")
        candidate = candidate_by_id.get(item["candidate_id"])
        if candidate is None:
            raise ValueError("LLM response references a candidate not present in the input")
        if candidate["url"] in seen_urls:
            continue
        seen_urls.add(candidate["url"])
        articles.append({
            "title": candidate["title"],
            "date": candidate["date"],
            "category": item["category"].strip(),
            "summary": item["summary"].strip(),
            "why_it_matters": item["why_it_matters"].strip(),
            "source": candidate["source"],
            "source_url": candidate["url"],
        })
    return articles