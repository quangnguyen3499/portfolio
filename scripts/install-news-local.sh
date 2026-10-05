#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
current_branch="$(git -C "$repo_root" branch --show-current)"
if [[ "$current_branch" != "main" ]]; then
  printf 'Install the local schedule after this feature is merged to main (current branch: %s).\n' "$current_branch" >&2
  exit 1
fi

if [[ ! -f "$repo_root/.env.news.local" ]]; then
  cp "$repo_root/.env.news.local.example" "$repo_root/.env.news.local"
  printf 'Created %s. Edit it and set HC_PING_URL, then run this installer again.\n' "$repo_root/.env.news.local"
  exit 1
fi

ping_url="$(sed -n 's/^HC_PING_URL=//p' "$repo_root/.env.news.local")"
if [[ -z "$ping_url" || "$ping_url" == *REPLACE-WITH-CHECK-UUID* ]]; then
  printf 'Set HC_PING_URL in %s to the check UUID from Healthchecks, then retry.\n' "$repo_root/.env.news.local" >&2
  exit 1
fi

if [[ ! -x "$repo_root/.venv/bin/python" ]]; then
  python3 -m venv "$repo_root/.venv"
  "$repo_root/.venv/bin/python" -m pip install -r "$repo_root/news_agent/requirements.txt"
fi

mkdir -p "$repo_root/logs" "$HOME/Library/LaunchAgents"
agent_file="$HOME/Library/LaunchAgents/com.quangnguyen.portfolio-news.plist"
cp "$repo_root/ops/macos/com.quangnguyen.portfolio-news.plist" "$agent_file"
plutil -lint "$agent_file"
launchctl bootout "gui/$(id -u)" "$agent_file" 2>/dev/null || true
launchctl bootstrap "gui/$(id -u)" "$agent_file"
printf 'Installed. The task runs every four hours.\n'