<template>
  <article class="project-card smcard">
    <div class="project-media">
      <img :src="portfolio.pictures[0].img" :alt="portfolio.name" />
      <span class="project-category">{{ portfolio.category }}</span>
    </div>

    <div class="project-body">
      <div class="project-head">
        <h3 class="project-title">{{ portfolio.name }}</h3>
        <span class="project-date">{{ portfolio.date }}</span>
      </div>

      <p class="project-description">{{ portfolio.description }}</p>

      <div class="project-tags">
        <span
          v-for="tech in portfolio.technologies"
          :key="tech"
          class="project-tag"
        >
          {{ tech }}
        </span>
      </div>

      <div class="project-actions">
        <button
          v-if="portfolio.github"
          class="project-btn ghost"
          type="button"
          @click.prevent="open(portfolio.github)"
        >
          <i class="fab fa-github"></i>
          <span>Source</span>
        </button>
        <button
          v-if="portfolio.visit"
          class="project-btn primary"
          type="button"
          @click.prevent="open(portfolio.visit)"
        >
          <i class="fa fa-external-link-alt"></i>
          <span>Demo</span>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Card",
  props: {
    portfolio: {
      type: Object,
      required: true,
    },
  },
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.project-card {
  height: 100%;
  min-height: 470px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.015)), var(--surface-elevated);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.22);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(34, 211, 238, 0.28);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.32);
}

.project-media {
  position: relative;
  aspect-ratio: 16 / 9;
  background: var(--surface);
  overflow: hidden;
}

.project-media img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.project-card:hover .project-media img {
  transform: scale(1.04);
  opacity: 0.92;
}

.project-category {
  position: absolute;
  left: 14px;
  bottom: 14px;
  padding: 5px 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(11, 16, 32, 0.78);
  color: var(--text);
  font-size: 0.74rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
}

.project-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.project-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 10px;
}

.project-title {
  color: var(--text);
  font-size: 1.08rem;
  font-weight: 750;
  line-height: 1.35;
  margin: 0;
}

.project-date {
  flex: 0 0 auto;
  color: var(--text-muted);
  font-size: 0.74rem;
  font-weight: 700;
  opacity: 0.72;
  padding-top: 3px;
}

.project-description {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.65;
  margin: 0 0 16px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 2px;
}

.project-tag {
  color: #7dd3fc;
  background: rgba(14, 165, 233, 0.11);
  border: 1px solid rgba(125, 211, 252, 0.14);
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 0.76rem;
  font-weight: 650;
  line-height: 1;
}

.project-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.project-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 38px;
  padding: 9px 13px;
  border-radius: 8px;
  font-size: 0.84rem;
  font-weight: 750;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.project-btn:hover {
  transform: translateY(-1px);
}

.project-btn.ghost {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
}

.project-btn.ghost:hover {
  border-color: rgba(255, 255, 255, 0.18);
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
}

.project-btn.primary {
  border: 1px solid rgba(34, 211, 238, 0.38);
  background: rgba(34, 211, 238, 0.14);
  color: var(--accent-hover);
}

.project-btn.primary:hover {
  background: var(--accent);
  color: var(--bg);
}

@media (max-width: 576px) {
  .project-card {
    min-height: 0;
  }

  .project-head {
    flex-direction: column;
    gap: 4px;
  }

  .project-actions {
    flex-direction: column;
  }
}
</style>
