#!/usr/bin/env bash
set -uo pipefail

if [[ $# -eq 0 ]]; then
  printf 'Usage: HC_PING_URL="http://localhost:8000/ping/<uuid>" %s <command> [args...]\n' "$0" >&2
  exit 64
fi

if [[ -z "${HC_PING_URL:-}" ]]; then
  printf 'HC_PING_URL must be set to this task\x27s Healthchecks ping URL.\n' >&2
  exit 64
fi

ping_url="${HC_PING_URL%/}"
output_file="$(mktemp)"
trap 'rm -f "$output_file"' EXIT

send_ping() {
  if ! curl --fail --silent --show-error --max-time 10 --retry 2 "$@"; then
    printf 'Warning: could not reach local Healthchecks at %s\n' "$HC_PING_URL" >&2
  fi
}

send_ping --output /dev/null "${ping_url}/start"

"$@" 2>&1 | tee "$output_file"
task_exit_code=${PIPESTATUS[0]}

send_ping --output /dev/null --data-binary "@${output_file}" "${ping_url}/${task_exit_code}"
exit "$task_exit_code"