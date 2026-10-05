#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

current_branch="$(git branch --show-current)"
if [[ "$current_branch" != "main" ]]; then
  printf 'Refusing to publish from branch %s; run this task from main.\n' "$current_branch" >&2
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  printf 'Refusing to run with a dirty worktree; commit or stash local changes first.\n' >&2
  git status --short >&2
  exit 1
fi

git pull --ff-only origin main
"$repo_root/.venv/bin/python" -m news_agent.news_agent

if git diff --quiet -- data/news.json; then
  printf 'No news data changes; nothing to commit.\n'
  exit 0
fi

git add -- data/news.json
git commit -m "chore: update tech news"
git push origin main