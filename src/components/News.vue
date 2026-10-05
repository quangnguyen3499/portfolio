<template>
  <section class="news-page">
    <header class="news-header" data-aos="fade" data-aos-once="true" data-aos-duration="600">
      <p class="news-kicker">THE ENGINEERING BRIEF</p>
      <h1>AI &amp; Tech News</h1>
      <p class="news-intro">Interesting AI and technology updates, automatically curated and summarized.</p>
      <p v-if="usingSamples" class="sample-note">Preview content</p>
    </header>

    <div class="news-list">
      <article
        v-for="(article, index) in articles"
        :key="article.source_url"
        class="news-article"
        data-aos="fade-up"
        :data-aos-delay="index * 70"
        data-aos-once="true"
      >
        <div class="article-meta">
          <span class="article-category">{{ article.category }}</span>
          <time :datetime="article.date">{{ formatDate(article.date) }}</time>
        </div>
        <h2>{{ article.title }}</h2>
        <p class="article-summary">{{ article.summary }}</p>
        <div class="why-it-matters">
          <h3>Why it matters</h3>
          <p>{{ article.why_it_matters }}</p>
        </div>
        <a class="source-link" :href="article.source_url" target="_blank" rel="noopener noreferrer">
          Source: {{ article.source }} <span aria-hidden="true">&#8599;</span>
        </a>
      </article>
    </div>

    <p v-if="articles.length === 0" class="empty-state">No stories have been published yet.</p>
  </section>
</template>

<script>
import news from "../../data/news.json";

const sampleArticles = [
  {
    title: "A practical look at the latest AI engineering tools",
    date: "2026-10-05",
    category: "AI",
    summary: "This preview story demonstrates how curated news summaries will appear on this page.",
    why_it_matters: "Concise context helps engineers decide which developments are worth exploring further.",
    source: "Sample source",
    source_url: "https://example.com/ai-engineering-tools"
  },
  {
    title: "Open-source projects making developer workflows smoother",
    date: "2026-10-04",
    category: "Open Source",
    summary: "This sample shows the layout for updates about useful libraries and developer tools.",
    why_it_matters: "Small improvements to everyday workflows can make teams more effective over time.",
    source: "Sample source",
    source_url: "https://example.com/open-source-projects"
  },
  {
    title: "New ideas in data infrastructure and backend systems",
    date: "2026-10-03",
    category: "Engineering",
    summary: "A sample news item illustrating how technical announcements will be summarized.",
    why_it_matters: "Understanding infrastructure changes helps engineers make better implementation choices.",
    source: "Sample source",
    source_url: "https://example.com/data-infrastructure"
  }
];

export default {
  name: "News",
  data() {
    return {
      publishedArticles: news,
      sampleArticles
    };
  },
  computed: {
    usingSamples() {
      return this.publishedArticles.length === 0;
    },
    articles() {
      return this.usingSamples ? this.sampleArticles : this.publishedArticles;
    }
  },
  methods: {
    formatDate(value) {
      const date = new Date(`${value}T00:00:00`);
      return Number.isNaN(date.getTime())
        ? value
        : new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date);
    }
  }
};
</script>

<style scoped>
.news-page {
  min-height: 100vh;
  padding: 132px 0 96px;
  position: relative;
  z-index: 1;
}

.news-header,
.news-list,
.empty-state {
  max-width: 820px;
  margin: 0 auto;
}

.news-header {
  padding: 0 24px 36px;
  border-bottom: 1px solid var(--border);
}

.news-kicker {
  color: var(--accent);
  font-size: 0.76rem;
  font-weight: 700;
  margin: 0 0 12px;
}

.news-header h1 {
  color: var(--text);
  font-size: 2.25rem;
  line-height: 1.2;
  margin: 0 0 12px;
}

.news-intro {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
}

.sample-note {
  display: inline-block;
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.75rem;
  margin: 18px 0 0;
  padding: 5px 9px;
}

.news-article {
  padding: 30px 24px;
  border-bottom: 1px solid var(--border);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.article-category {
  color: var(--accent);
  font-weight: 600;
}

.news-article h2 {
  color: var(--text);
  font-size: 1.35rem;
  line-height: 1.45;
  margin: 14px 0 10px;
}

.article-summary,
.why-it-matters p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
}

.why-it-matters {
  border-left: 2px solid var(--accent);
  margin-top: 18px;
  padding-left: 14px;
}

.why-it-matters h3 {
  color: var(--text);
  font-size: 0.85rem;
  margin: 0 0 5px;
}

.source-link {
  display: inline-block;
  color: var(--accent);
  font-size: 0.84rem;
  font-weight: 600;
  margin-top: 18px;
  text-decoration: none;
}

.source-link:hover {
  color: var(--accent-hover);
}

.empty-state {
  color: var(--text-muted);
  padding: 48px 24px;
}

@media (max-width: 576px) {
  .news-page {
    padding-top: 112px;
  }

  .news-header h1 {
    font-size: 1.9rem;
  }

  .news-article {
    padding: 26px 24px;
  }
}
</style>