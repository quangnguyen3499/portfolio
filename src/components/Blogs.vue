<template>
  <section class="blogs-page">
    <div class="section-inner">
      <template v-if="selectedBlog">
        <button type="button" class="back-link" @click="goToList">
          <i class="fa fa-arrow-left"></i>
          <span>Back to blogs</span>
        </button>

        <article class="blog-article">
          <header class="article-header">
            <div class="article-meta">
              <span class="blog-tag">{{ selectedBlog.category }}</span>
              <span>{{ selectedBlog.date }}</span>
              <span>{{ selectedBlog.readTime }}</span>
            </div>
            <h1 class="article-title">{{ selectedBlog.title }}</h1>
            <p class="article-excerpt">{{ selectedBlog.excerpt }}</p>
          </header>
          <div class="blog-content" v-html="selectedBlog.content"></div>
        </article>
      </template>

      <template v-else>
        <header class="section-header" data-aos="fade" data-aos-once="true" data-aos-duration="600">
          <h1 class="section-title">Blogs</h1>
        </header>

        <div class="blogs-controls">
          <button
            v-for="cat in categories"
            :key="cat"
            class="cat-tab"
            :class="{ active: activeCategory === cat }"
            type="button"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <div class="blogs-grid">
          <article
            v-for="(blog, index) in filteredBlogs"
            :key="blog.slug"
            class="blog-card"
            data-aos="fade-up"
            :data-aos-delay="index * 80"
            data-aos-once="true"
            @click="openBlog(blog)"
          >
            <div class="blog-meta">
              <span class="blog-tag">{{ blog.category }}</span>
              <span class="blog-read-time">{{ blog.readTime }}</span>
            </div>
            <h2 class="blog-card-title">{{ blog.title }}</h2>
            <p class="blog-excerpt">{{ blog.excerpt }}</p>
            <div class="blog-footer">
              <span class="blog-date">{{ blog.date }}</span>
              <span class="blog-more-link">Read Article <i class="fa fa-arrow-right ml-1"></i></span>
            </div>
          </article>
        </div>

        <div v-if="filteredBlogs.length === 0" class="empty-state">
          No blogs found in this category.
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import blogs from "../blogs";

export default {
  name: "Blogs",
  data() {
    return {
      blogs,
      activeCategory: "All",
    };
  },
  computed: {
    selectedBlog() {
      const slug = this.$route.params.slug;
      if (!slug) return null;
      return this.blogs.find((blog) => blog.slug === slug) || null;
    },
    categories() {
      const cats = new Set(this.blogs.map((blog) => blog.category));
      return ["All", ...Array.from(cats)];
    },
    filteredBlogs() {
      if (this.activeCategory === "All") {
        return this.blogs;
      }
      return this.blogs.filter((blog) => blog.category === this.activeCategory);
    },
  },
  watch: {
    "$route.params.slug"() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  methods: {
    openBlog(blog) {
      this.$router.push(`/blogs/${blog.slug}`).catch(() => {});
    },
    goToList() {
      this.$router.push("/blogs").catch(() => {});
    },
  },
};
</script>

<style scoped>
.blogs-page {
  min-height: 100vh;
  padding: 120px 0 96px;
  background: transparent;
  position: relative;
  z-index: 1;
}

.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  margin-bottom: 32px;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--text-muted);
  margin: 0;
}

.blogs-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.cat-tab {
  background: var(--surface-elevated);
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
}

.cat-tab:hover,
.cat-tab.active {
  background: var(--accent-soft);
  color: var(--accent);
  border-color: var(--accent);
}

.blogs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.blog-card {
  min-height: 280px;
  display: flex;
  flex-direction: column;
  background: var(--surface-elevated);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.blog-card:hover {
  transform: translateY(-4px);
  border-color: rgba(34, 211, 238, 0.3);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.blog-meta,
.article-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  font-size: 0.78rem;
}

.blog-tag {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 4px 10px;
  border-radius: 6px;
}

.blog-card-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text);
  margin: 16px 0 10px;
  line-height: 1.4;
  transition: color 0.2s;
}

.blog-card:hover .blog-card-title {
  color: var(--accent);
}

.blog-excerpt {
  flex: 1;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.blog-footer {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 16px;
  margin-top: 20px;
  border-top: 1px solid var(--border);
  font-size: 0.78rem;
}

.blog-date {
  color: var(--text-muted);
}

.blog-more-link {
  color: var(--accent);
  font-weight: 500;
}

.empty-state {
  padding: 56px 0;
  text-align: center;
  color: var(--text-muted);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  border: 1px solid var(--border);
  background: var(--surface-elevated);
  color: var(--text-muted);
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-link:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.blog-article {
  max-width: 860px;
}

.article-header {
  padding-bottom: 28px;
  margin-bottom: 28px;
  border-bottom: 1px solid var(--border);
}

.article-title {
  color: var(--text);
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.1;
  margin: 18px 0 16px;
}

.article-excerpt {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0;
}

.blog-content {
  line-height: 1.75;
  font-size: 1rem;
}

.blog-content /deep/ h1,
.blog-content /deep/ h2,
.blog-content /deep/ h3 {
  color: var(--text);
  font-weight: 700;
  margin: 28px 0 12px;
}

.blog-content /deep/ h1 {
  font-size: 1.8rem;
}

.blog-content /deep/ h2 {
  font-size: 1.45rem;
}

.blog-content /deep/ h3 {
  font-size: 1.2rem;
}

.blog-content /deep/ p,
.blog-content /deep/ ul {
  color: var(--text-muted);
  margin-bottom: 18px;
}

.blog-content /deep/ ul {
  padding-left: 22px;
}

.blog-content /deep/ li {
  margin-bottom: 8px;
}

.blog-content /deep/ code {
  background: var(--surface-elevated);
  color: var(--accent);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2px 5px;
}

.blog-content /deep/ pre {
  overflow-x: auto;
  background: var(--surface-elevated);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
}

.blog-content /deep/ pre code {
  border: none;
  padding: 0;
}

.blog-content /deep/ a {
  color: var(--accent);
}

@media (max-width: 700px) {
  .blogs-page {
    padding-top: 104px;
  }

  .blog-footer {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
