import json
import logging
import os
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import date, timedelta


LOGGER = logging.getLogger(__name__)
USER_AGENT = "PortfolioTechNewsAgent/1.0"


def _get(url, headers=None):
    request_headers = {"User-Agent": USER_AGENT}
    if headers:
        request_headers.update(headers)
    request = urllib.request.Request(url, headers=request_headers)
    with urllib.request.urlopen(request, timeout=20) as response:
        return response.read()


def fetch_hacker_news(limit=30):
    item_ids = json.loads(_get("https://hacker-news.firebaseio.com/v0/topstories.json"))[:limit]
    items = []
    for item_id in item_ids:
        try:
            item = json.loads(_get(f"https://hacker-news.firebaseio.com/v0/item/{item_id}.json"))
            if item and item.get("title") and item.get("url"):
                items.append({
                    "title": item["title"],
                    "url": item["url"],
                    "description": item.get("text", ""),
                    "source": "Hacker News",
                })
        except (urllib.error.URLError, TimeoutError, ValueError) as error:
            LOGGER.warning("Could not fetch Hacker News item %s: %s", item_id, error)
    return items


def _text(element, name):
    child = element.find(name)
    if child is None:
        child = element.find(f"{{http://www.w3.org/2005/Atom}}{name}")
    if child is None:
        return ""
    if name == "link" and child.get("href"):
        return child.get("href")
    return " ".join("".join(child.itertext()).split())


def parse_rss_feed(content, source="Good AI List"):
    root = ET.fromstring(content)
    entries = root.findall("./channel/item")
    if not entries:
        entries = root.findall("{http://www.w3.org/2005/Atom}entry")

    items = []
    for entry in entries:
        title = _text(entry, "title")
        url = _text(entry, "link")
        description = _text(entry, "description") or _text(entry, "summary")
        if title and url:
            items.append({"title": title, "url": url, "description": description, "source": source})
    return items


def fetch_good_ai_list(feed_url):
    if not feed_url:
        LOGGER.warning("Good AI List skipped: set GOOD_AI_LIST_FEED_URL to its RSS/Atom feed URL")
        return []
    return parse_rss_feed(_get(feed_url))


def fetch_github_trending(limit=30):
    created_after = (date.today() - timedelta(days=7)).isoformat()
    query = urllib.parse.urlencode({
        "q": f"stars:>20 created:>{created_after}",
        "sort": "stars",
        "order": "desc",
        "per_page": limit,
    })
    payload = json.loads(_get(
        f"https://api.github.com/search/repositories?{query}",
        {"Accept": "application/vnd.github+json"},
    ))
    return [
        {
            "title": repository["full_name"],
            "url": repository["html_url"],
            "description": repository.get("description") or "",
            "source": "GitHub Trending",
        }
        for repository in payload.get("items", [])
        if repository.get("full_name") and repository.get("html_url")
    ]