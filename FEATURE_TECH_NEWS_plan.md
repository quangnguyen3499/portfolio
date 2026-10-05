# Project 1 — AI Tech News Feed

## Objective

Add an automatically updated `/news` page to the existing portfolio:

`https://www.generalwinter.space/`

The portfolio is a frontend application deployed on **Vercel** with no dedicated backend.

The goal is to create a **lean V1 proof of concept** demonstrating:

* Python automation
* RSS/API data collection
* LLM-based news selection and summarization
* Scheduled GitHub Actions
* Automatic Git commits
* Vercel deployment

Do not over-engineer this feature.

---

# 1. IMPORTANT: Inspect the Existing Project First

Before changing anything, inspect the repository and understand:

* frontend framework
* routing system
* existing page/component structure
* styling system
* existing content/data structure
* whether the project already has Markdown/content/data files
* existing reusable components
* package manager
* build commands
* Vercel configuration
* existing GitHub Actions/workflows

Use the existing architecture whenever possible.

**Do not create a new architecture if the existing project already provides a suitable pattern.**

Do not modify unrelated features.

---

# 2. Feature Architecture

Use this architecture:

```text
GitHub Actions
      │
      │ every 4 hours
      ▼
Python News Agent
      │
      ├── Hacker News
      ├── Good AI List
      └── GitHub Trending
      │
      ▼
LLM API
      │
      ▼
Select + summarize 3–5 articles
      │
      ▼
Generate news data
      │
      ▼
Git commit + push
      │
      ▼
Vercel
      │
      ▼
/news
```

The Mac must NOT be required for the production workflow.

Do NOT use:

* FastAPI
* PostgreSQL
* Redis
* Docker
* CMS
* authentication
* admin panel
* vector database
* separate backend
* complex frontend state management

---

# 3. `/news` Page

Add:

```text
/news
```

The page should visually match the existing portfolio.

Do not create a completely different design system.

The page should contain:

```text
AI & TECH NEWS

Interesting AI and technology updates,
automatically curated and summarized.
```

Then display news cards/articles.

Each article should contain:

* title
* date
* category
* summary
* why it matters
* source
* source link

Example:

```text
OpenAI Introduces ...

AI · Oct 5, 2026

Short English summary of the announcement.

Why it matters:
Short explanation of why this is
interesting to software engineers.

Source → OpenAI
```

Keep the page simple.

Do NOT add:

* search
* pagination
* comments
* authentication
* filters
* bookmarks
* likes
* admin UI

---

# 4. Initial UI Data

Before implementing the automation, create **2–3 hardcoded/sample news items**.

Verify that:

* `/news` works
* the layout looks good
* responsive design works
* the design matches the existing portfolio

Only after the UI is working should the automation be implemented.

---

# 5. News Data Storage

First inspect whether the portfolio already has a content/data format.

If an existing article/content format can be reused, use it.

Otherwise use a simple JSON file such as:

```text
data/news.json
```

Example:

```json
[
  {
    "title": "Example AI News",
    "date": "2026-10-05",
    "category": "AI",
    "summary": "Short English summary of the article.",
    "why_it_matters": "Why this matters to software engineers.",
    "source": "Hacker News",
    "source_url": "https://example.com"
  }
]
```

The `/news` page should read from this data.

Do not introduce a database.

---

# 6. Python News Agent

Create a small Python automation module.

Prefer:

```text
news_agent/
├── news_agent.py
├── sources.py
├── llm.py
└── config.yaml
```

If the repository already has an appropriate `scripts/` or automation directory, use that instead.

Do not create unnecessary classes or abstractions.

---

# 7. News Sources

Start with only these three sources:

1. Hacker News
2. Good AI List
3. GitHub Trending

Prefer RSS/API endpoints where available.

Avoid HTML scraping when an RSS/API alternative exists.

Each source should return a simple structure:

```python
{
    "title": "...",
    "url": "...",
    "description": "...",
    "source": "Hacker News"
}
```

Implement simple functions such as:

```python
def fetch_hacker_news():
    ...


def fetch_good_ai_list():
    ...


def fetch_github_trending():
    ...
```

If one source fails, do not stop the entire pipeline.

Example:

```text
Hacker News ✓
Good AI List ✗
GitHub Trending ✓
```

Continue with the available sources.

---

# 8. News Agent Flow

The main Python script should perform:

```text
Fetch sources
      ↓
Combine results
      ↓
Remove duplicates
      ↓
Send candidates to LLM
      ↓
Select 3–5 interesting articles
      ↓
Generate English summaries
      ↓
Generate/update news data
```

Keep duplicate detection simple.

Prefer checking normalized URLs.

Optionally also compare normalized titles.

Do not introduce a database just for deduplication.

---

# 9. LLM Integration

The LLM should be configurable through environment variables/configuration.

Do not hard-code API keys.

Example:

```text
LLM_API_KEY
LLM_MODEL
```

The implementation should allow changing the model without changing the Python code.

The LLM is responsible for:

1. Selecting the most interesting stories.
2. Creating an English title if necessary.
3. Creating a short English summary.
4. Creating a short "Why it matters" section.
5. Assigning a category.

Target audience:

```text
Software engineers interested in:

- AI
- LLMs
- Python
- backend engineering
- data engineering
- open source
- developer tools
```

---

# 10. LLM Prompt

Use a prompt similar to:

```text
You are an AI and technology editor.

From the provided news items, select the most
interesting 3–5 items for a software engineer
interested in:

- AI
- LLMs
- Python
- backend engineering
- data engineering
- open source
- developer tools

Ignore:

- advertisements
- duplicate stories
- low-value content
- trivial updates
- unrelated content

For each selected item, generate:

- title
- 2–4 sentence English summary
- short "Why it matters" explanation
- category
- source
- source URL

Only use information available in the provided
source data.

Do not invent facts.

Return valid JSON.
```

The Python code must validate/parse the response.

If the LLM response is invalid, fail safely and do not publish bad data.

---

# 11. Generated Data

The Python agent should update the existing news data file.

For example:

```text
data/news.json
```

Do not overwrite existing articles unnecessarily.

Before adding an article, check whether its `source_url` already exists.

Example:

```text
Existing:
https://example.com/article-a

New crawl:
https://example.com/article-a

→ skip
```

Keep existing articles.

Add only genuinely new articles.

---

# 12. Maximum Number of Articles

For V1:

```yaml
news:
  max_posts: 5
```

The automation should publish at most **5 new articles per run**.

Do not create hundreds of posts.

---

# 13. Configuration

Keep configuration minimal.

Example:

```yaml
sources:
  hacker_news: true
  good_ai_list: true
  github_trending: true

news:
  max_posts: 5
```

Secrets such as API keys must come from environment variables / GitHub Secrets.

Do not commit secrets.

---

# 14. Dry Run

Implement:

```bash
python news_agent/news_agent.py --dry-run
```

Dry run should:

* fetch sources
* show number of articles retrieved
* deduplicate
* call the LLM
* display selected articles
* generate a preview

But it must NOT:

* modify production news data
* commit
* push

Normal execution:

```bash
python news_agent/news_agent.py
```

should update the news data.

Git operations should preferably remain in the GitHub Actions workflow rather than being tightly coupled to the Python script.

---

# 15. Logging

Use Python's standard `logging` module.

Example output:

```text
Starting news agent...

Hacker News: 20 items
Good AI List: 15 items
GitHub Trending: 10 items

Total candidates: 45
After deduplication: 40

LLM selected: 4

New articles:
- OpenAI ...
- New open-source AI project ...
- ...
```

If a source fails:

```text
Hacker News: 20 items
Good AI List: FAILED
GitHub Trending: 10 items
```

Continue processing.

---

# 16. Error Handling

### Source failure

Continue with other sources.

### LLM failure

Stop before modifying production content.

### Invalid LLM JSON

Stop before publishing.

### No new articles

Exit successfully.

Example:

```text
No new articles found.
Nothing to update.
```

### Git failure

GitHub Actions should fail visibly.

Do not delete generated content.

---

# 17. GitHub Actions

Create:

```text
.github/
└── workflows/
    └── update-news.yml
```

Schedule it every 4 hours:

```yaml
on:
  schedule:
    - cron: "0 */4 * * *"
```

Also allow manual execution:

```yaml
workflow_dispatch:
```

The workflow should:

```text
Checkout repository
        ↓
Setup Python
        ↓
Install dependencies
        ↓
Run news agent
        ↓
Check whether files changed
        ↓
Commit changes
        ↓
Push changes
```

Use a commit message such as:

```text
chore: update tech news
```

Only add/update the news data files.

Do NOT use:

```bash
git add .
```

Use a specific path, for example:

```bash
git add data/news.json
```

or whatever path is actually used by the project.

---

# 18. GitHub Secrets

If the LLM requires an API key, configure it as a GitHub Secret.

For example:

```text
LLM_API_KEY
```

Access it through environment variables.

Never:

* hard-code API keys
* commit `.env`
* print API keys in logs

If the existing project already has a suitable LLM configuration, reuse it.

---

# 19. Vercel Deployment

Do not create a new deployment mechanism.

The existing flow should remain:

```text
GitHub push
    ↓
Vercel automatically detects change
    ↓
Build
    ↓
Deploy
```

The new `/news` page should therefore become available automatically after the GitHub Actions workflow updates the news data.

---

# 20. Tests

Use `pytest`.

Only test the important logic:

```text
source parsing
duplicate detection
LLM response parsing
news data generation
```

Mock the LLM API.

Tests must NOT require:

* real LLM API
* real GitHub
* real Vercel
* real external news sites

The tests should be deterministic.

---

# 21. Implementation Order

Follow this exact order.

## Phase 1 — Understand Existing Project

Inspect the repository.

Do not modify anything yet.

Determine:

```text
framework
routing
content architecture
styling
build system
Vercel setup
GitHub setup
```

---

## Phase 2 — Build `/news`

Create:

```text
/news
```

Use 2–3 hardcoded sample articles.

Make the UI match the portfolio.

Test:

```text
desktop
mobile
```

---

## Phase 3 — Connect News Data

Create/reuse the appropriate data structure.

For example:

```text
data/news.json
```

Make `/news` render from this data.

---

## Phase 4 — Python Agent

Implement:

```text
news_agent.py
sources.py
llm.py
```

Start with **Hacker News only**.

Verify locally.

---

## Phase 5 — LLM

Connect the Python agent to the selected LLM API.

Test:

```text
fetch
→ select
→ summarize
→ parse JSON
```

Verify the generated English content.

---

## Phase 6 — Generate News Data

Make the agent update:

```text
data/news.json
```

Implement URL-based duplicate detection.

Verify that running the script twice does not create duplicates.

---

## Phase 7 — Add Remaining Sources

Add:

```text
Good AI List
GitHub Trending
```

If one source fails, the others should still work.

---

## Phase 8 — GitHub Actions

Add:

```text
.github/workflows/update-news.yml
```

Run manually first:

```text
workflow_dispatch
```

Verify:

```text
Python runs
→ news.json changes
→ Git commit
→ Git push
→ Vercel deployment
```

---

## Phase 9 — Enable Schedule

After manual execution works, enable:

```text
0 */4 * * *
```

Do not enable the schedule before the manual workflow is verified.

---

## Phase 10 — Observe

Let the system run for several days.

Check:

* Are the selected articles useful?
* Are there duplicates?
* Are summaries accurate?
* Does the page look good?
* Does the automation fail occasionally?
* Does Vercel deploy correctly?

Only after observing the system should additional features be considered.

---

# 22. Definition of Done

The feature is complete when this works:

```text
GitHub Actions
      │
      │ every 4 hours
      ▼
Python
      │
      ├── Fetch AI/tech news
      │
      ├── Deduplicate
      │
      ├── LLM selects interesting stories
      │
      ├── LLM generates English summaries
      │
      └── Update news.json
              │
              ▼
          Git commit
              │
              ▼
            Vercel
              │
              ▼
generalwinter.space/news
```

The final portfolio feature should demonstrate:

> **Automated AI/technology news aggregation and publishing using Python, LLMs, GitHub Actions, and Vercel.**

---

# Important Development Rules

1. **Inspect before implementing.**
2. Reuse the existing portfolio architecture.
3. Keep the implementation lean.
4. Do not add a database.
5. Do not add FastAPI.
6. Do not add Docker.
7. Do not add Redis.
8. Do not create an admin panel.
9. Do not introduce unnecessary abstractions.
10. Do not modify unrelated portfolio features.
11. Do not hard-code secrets.
12. Do not use `git add .` in the automation.
13. Prefer RSS/API over HTML scraping.
14. Do not publish invalid LLM output.
15. Make the scheduled workflow manually testable with `workflow_dispatch`.
16. Before finishing, provide a concise summary of all files created/modified and how to run/test the feature locally.

Start by **inspecting the existing repository and reporting the relevant architecture/files before making changes**.
