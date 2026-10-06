import argparse
import json
import logging
import os
import sys
from datetime import date
from pathlib import Path
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

import yaml

from .llm import select_articles
from .sources import fetch_good_ai_list, fetch_github_trending, fetch_hacker_news


ROOT = Path(__file__).resolve().parent.parent
CONFIG_PATH = Path(__file__).resolve().parent / "config.yaml"
DATA_PATH = ROOT / "data" / "news.json"
LOGGER = logging.getLogger("news_agent")
TRACKING_PARAMETERS = {"fbclid", "gclid", "mc_cid", "mc_eid"}


def normalize_url(url):
    parts = urlsplit(url.strip())
    query = [(key, value) for key, value in parse_qsl(parts.query) if not key.lower().startswith("utm_") and key.lower() not in TRACKING_PARAMETERS]
    path = parts.path.rstrip("/")
    return urlunsplit((parts.scheme.lower(), parts.netloc.lower(), path, urlencode(query), ""))


def deduplicate_candidates(candidates, existing_articles=()):
    seen_urls = {normalize_url(article["source_url"]) for article in existing_articles if article.get("source_url")}
    unique = []
    for candidate in candidates:
        url = candidate.get("url", "")
        if not url or normalize_url(url) in seen_urls:
            continue
        seen_urls.add(normalize_url(url))
        unique.append(candidate)
    return unique


def limit_candidates_by_source(candidates, limit):
    sources = {}
    for candidate in candidates:
        sources.setdefault(candidate.get("source", "Unknown"), []).append(candidate)

    selected = []
    while sources and len(selected) < limit:
        for source in list(sources):
            selected.append(sources[source].pop(0))
            if not sources[source]:
                del sources[source]
            if len(selected) == limit:
                break
    return selected


def load_config():
    with CONFIG_PATH.open(encoding="utf-8") as config_file:
        config = yaml.safe_load(config_file) or {}
    config.setdefault("sources", {})
    config.setdefault("news", {})
    config["news"].setdefault("max_posts", 10)
    config["news"].setdefault("max_candidates", 12)
    return config


def load_existing_articles():
    if not DATA_PATH.exists():
        return []
    with DATA_PATH.open(encoding="utf-8") as data_file:
        articles = json.load(data_file)
    if not isinstance(articles, list):
        raise ValueError("News data must be a JSON array")
    return articles


def fetch_candidates(config):
    sources = config["sources"]
    configured_feed = os.environ.get("GOOD_AI_LIST_FEED_URL") or sources.get("good_ai_list_feed_url", "")
    fetchers = (
        ("Hacker News", sources.get("hacker_news", True), fetch_hacker_news),
        ("Good AI List", sources.get("good_ai_list", True), lambda: fetch_good_ai_list(configured_feed)),
        ("GitHub Trending", sources.get("github_trending", True), fetch_github_trending),
    )
    candidates = []
    for name, enabled, fetcher in fetchers:
        if not enabled:
            LOGGER.info("%s: disabled", name)
            continue
        try:
            items = fetcher()
            LOGGER.info("%s: %s items", name, len(items))
            candidates.extend(items)
        except Exception as error:
            LOGGER.warning("%s: failed: %s", name, error)
    return candidates


def run(dry_run=False):
    LOGGER.info("Starting news agent...")
    config = load_config()
    existing_articles = load_existing_articles()
    candidates = deduplicate_candidates(fetch_candidates(config), existing_articles)
    LOGGER.info("Total new candidates after deduplication: %s", len(candidates))
    if not candidates:
        LOGGER.info("No new articles found. Nothing to update.")
        return

    candidates = limit_candidates_by_source(candidates, int(config["news"].get("max_candidates", 12)))
    LOGGER.info("Candidates sent to Ollama: %s", len(candidates))
    max_posts = int(config["news"].get("max_posts", 5))
    articles = select_articles(candidates, max_posts)
    if not articles:
        LOGGER.info("The LLM selected no articles. Nothing to update.")
        return
    LOGGER.info("LLM selected %s articles", len(articles))

    if dry_run:
        print(json.dumps(articles, ensure_ascii=False, indent=2))
        return

    today = date.today().isoformat()
    for article in articles:
        try:
            date.fromisoformat(article["date"])
        except ValueError:
            article["date"] = today
    DATA_PATH.parent.mkdir(parents=True, exist_ok=True)
    with DATA_PATH.open("w", encoding="utf-8") as data_file:
        json.dump(articles + existing_articles, data_file, ensure_ascii=False, indent=2)
        data_file.write("\n")
    LOGGER.info("Added %s articles to %s", len(articles), DATA_PATH.relative_to(ROOT))


def main():
    parser = argparse.ArgumentParser(description="Collect and summarize AI and technology news")
    parser.add_argument("--dry-run", action="store_true", help="Preview selected articles without modifying news data")
    args = parser.parse_args()
    logging.basicConfig(level=logging.INFO, format="%(message)s")
    try:
        run(dry_run=args.dry_run)
    except Exception as error:
        LOGGER.error("News agent failed: %s", error)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())