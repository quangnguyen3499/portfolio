<template>
  <section class="news-section" id="news">
    <header class="section-header">
      <h2 class="section-title">Latest News</h2>
      <p class="section-subtitle">AI &amp; technology updates, engineering notes, and developments.</p>
    </header>

    <div class="news-list">
      <article
        v-for="(article, index) in articles"
        :key="article.source_url || index"
        class="news-article"
      >
        <div class="article-meta">
          <span class="article-category">{{ article.category }}</span>
          <span class="meta-dot">·</span>
          <time :datetime="article.date">{{ formatDate(article.date) }}</time>
        </div>
        <h3 class="article-title">{{ article.title }}</h3>
        <p class="article-summary">{{ article.summary }}</p>
        <div class="why-it-matters" v-if="article.why_it_matters">
          <span class="why-label">Why it matters:</span>
          <span> {{ article.why_it_matters }}</span>
        </div>
        <a v-if="article.source_url" class="source-link" :href="article.source_url" target="_blank" rel="noopener noreferrer">
          Source: {{ article.source }} <span aria-hidden="true">&#8599;</span>
        </a>
      </article>
    </div>

    <p v-if="articles.length === 0" class="empty-state">No stories published yet.</p>
  </section>
</template>

<script>
import news from "../../data/news.json";

const sampleArticles = [
  {
    title: "A practical look at the latest AI engineering tools",
    date: "2026-10-05",
    category: "AI",
    summary: "Curated updates and hands-on perspectives on emerging LLM infrastructure and engineering workflows.",
    why_it_matters: "Concise context helps engineers evaluate which developments provide real architectural value.",
    source: "Engineering Notes",
    source_url: "https://example.com/ai-engineering-tools"
  },
  {
    title: "Open-source projects making developer workflows smoother",
    date: "2026-10-04",
    category: "Open Source",
    summary: "Highlights from active open-source tools and libraries modernizing data workflows and web services.",
    why_it_matters: "Incremental improvements in automation tooling compound into substantial engineering velocity.",
    source: "Developer Brief",
    source_url: "https://example.com/open-source-projects"
  },
  {
    title: "New ideas in data infrastructure and backend systems",
    date: "2026-10-03",
    category: "Infrastructure",
    summary: "Patterns in distributed pipelines, event streaming with Kafka, and modern cloud orchestrations.",
    why_it_matters: "Understanding backend trends ensures resilient architectures under high scale.",
    source: "Data Infrastructure",
    source_url: "https://example.com/data-infrastructure"
  }
];

export default {
  name: "News",
  data() {
    return {
      publishedArticles: news || [],
      sampleArticles
    };
  },
  computed: {
    usingSamples() {
      return !this.publishedArticles || this.publishedArticles.length === 0;
    },
    articles() {
      const articles = this.usingSamples ? this.sampleArticles : this.publishedArticles;
      return articles.slice(0, 8);
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
.news-section {
  padding: 0 0 32px;
}

.section-header {
  margin-bottom: 28px;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.25;
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}

.section-subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.news-article {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 24px;
  transition: border-color 0.2s ease;
}

.news-article:hover {
  border-color: rgba(255, 255, 255, 0.25);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.78rem;
  margin-bottom: 8px;
}

.article-category {
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.meta-dot {
  color: var(--border);
}

.article-title {
  color: var(--text);
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0 0 8px;
}

.article-summary {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0 0 10px;
}

.why-it-matters {
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--text-muted);
  border-left: 2px solid var(--accent);
  padding-left: 10px;
  margin: 10px 0 12px;
}

.why-label {
  color: var(--text);
  font-weight: 600;
}

.source-link {
  display: inline-block;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.source-link:hover {
  color: var(--accent-hover);
  text-decoration: underline;
}

.empty-state {
  color: var(--text-muted);
  padding: 24px 0;
  font-size: 0.9rem;
}
</style>