#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
env_file="$repo_root/.env.news.local"

if [[ ! -f "$env_file" ]]; then
  printf 'Missing %s; copy .env.news.local.example and set HC_PING_URL.\n' "$env_file" >&2
  exit 1
fi

set -a
source "$env_file"
set +a

if [[ -z "${HC_PING_URL:-}" || "$HC_PING_URL" == *REPLACE-WITH-CHECK-UUID* ]]; then
  printf 'Set HC_PING_URL in %s to the local Healthchecks check URL.\n' "$env_file" >&2
  exit 1
fi

exec "$repo_root/scripts/with-healthcheck.sh" "$repo_root/scripts/publish-news-local.sh"