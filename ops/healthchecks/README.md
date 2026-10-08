# Local Healthchecks

This runs the open-source Healthchecks dashboard and PostgreSQL on this Mac. The dashboard binds to `127.0.0.1`; outbound email uses the SMTP account configured in `.env`.

## Start

```sh
cd ops/healthchecks
cp .env.example .env
# Replace the placeholder secrets and SMTP App Password in .env before starting.
docker compose up -d
docker compose run --rm web /opt/healthchecks/manage.py createsuperuser
```

Open <http://localhost:8000> and log in with the superuser email. Healthchecks sends the one-time sign-in link and configured alerts to the real mailbox.

For Gmail, enable 2-Step Verification and create an App Password in Google Account security settings. Put that generated password in `HC_SMTP_PASSWORD`; do not use your regular Google password or commit `.env`. Gmail uses `smtp.gmail.com`, port `587`, STARTTLS (`HC_SMTP_USE_TLS=True`), and `HC_SMTP_USE_SSL=False`. The example is prefilled with `baoquanggogreen@gmail.com` as the SMTP user and sender; change both if using another mailbox.

The previous setup used Mailpit. After adding SMTP settings, restart the stack with `docker compose down` followed by `docker compose up -d`. This preserves the Healthchecks database volume and existing checks. To verify delivery, request a fresh sign-in link or configure an email integration for a test check.

Create one check per scheduled task. Set its schedule and grace period, then copy its Ping URL. The local Ping URL should look like `http://localhost:8000/ping/<uuid>`.

## Monitor Any Cron Command

Wrap the command with `scripts/with-healthcheck.sh`. It reports start, posts captured stdout/stderr, then sends the command's exit status. A Healthchecks outage is warned about but does not prevent the task from running.

```sh
HC_PING_URL="http://localhost:8000/ping/<uuid>" \
  /absolute/path/to/portfolio/scripts/with-healthcheck.sh \
  /absolute/path/to/venv/bin/python -m news_agent.news_agent
```

Use the same wrapper for other cron tasks, setting `HC_PING_URL` to each task's own check URL. Keep ping URLs private. Configure the check schedule to match the actual cron schedule and allow enough grace time for the task to finish.

## Portfolio News Scheduler

The portfolio news task runs locally through macOS `launchd` every four hours. It fetches stories, uses local Ollama, updates `data/news.json`, commits only that file, and pushes to `main` so Vercel can deploy it. The script refuses to run outside `main` or when the worktree has uncommitted changes.

After the portfolio changes are merged to `main`:

1. Create a Healthchecks check named `Portfolio news update` with a four-hour schedule and a grace period longer than the expected run time. Copy its local Ping URL.
2. From the repository root, create `.env.news.local` with the local Ollama settings and the check's Ping URL. The file is ignored by Git and should be mode `600`.
3. Ensure Ollama is running and the configured model is installed (`ollama pull llama3.2:latest`).
4. Run `scripts/install-news-local.sh`. It creates the Python virtual environment and installs the LaunchAgent.

The LaunchAgent only runs while this Mac is awake and logged in. Check `logs/news-agent.log` and `logs/news-agent-error.log`; inspect the scheduler with `launchctl print gui/$(id -u)/com.quangnguyen.portfolio-news`. To run a one-time update manually, execute `scripts/run-news-local.sh` from the repository root. To unload the schedule, run `launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/com.quangnguyen.portfolio-news.plist`.

## Manage

```sh
docker compose ps
docker compose logs -f web db
docker compose down
```

`docker compose down` keeps the database volume. To remove all monitoring history as well, explicitly delete the `healthchecks-db` volume; that operation is destructive.