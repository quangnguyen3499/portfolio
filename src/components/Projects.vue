<template>
  <section class="projects-container" id="projects">
    <header class="section-header">
      <h2 class="section-title">Projects</h2>
      <p class="section-subtitle">Key engineering contributions across fintech, enterprise data integration, and AI systems.</p>
    </header>

    <div class="projects-grid">
      <article
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
      >
        <div class="project-header">
          <span class="project-domain">{{ project.domain }}</span>
          <span class="project-duration">{{ project.duration }}</span>
        </div>

        <h3 class="project-name">{{ project.name }}</h3>
        <div class="project-role">{{ project.role }}</div>

        <p class="project-summary">{{ project.summary }}</p>

        <div class="project-section" v-if="project.contributions && project.contributions.length">
          <h4 class="section-label">Key Contributions</h4>
          <ul class="contributions-list">
            <li v-for="(contribution, idx) in project.contributions" :key="idx">
              {{ contribution }}
            </li>
          </ul>
        </div>

        <div class="project-section" v-if="project.impact">
          <h4 class="section-label">Impact</h4>
          <p class="project-impact">{{ project.impact }}</p>
        </div>

        <div class="tech-stack" v-if="project.technologies && project.technologies.length">
          <span
            v-for="(tech, idx) in project.technologies"
            :key="idx"
            class="tech-tag"
          >
            {{ tech }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  inject: ["info"],
  computed: {
    projects() {
      return this.info.projects || [];
    }
  }
};
</script>

<style scoped>
.projects-container {
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

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px 28px;
  transition: border-color 0.2s ease;
}

.project-card:hover {
  border-color: rgba(255, 255, 255, 0.25);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}

.project-domain {
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: var(--accent-soft);
  padding: 4px 8px;
  border-radius: 4px;
}

.project-duration {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.project-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.35;
  margin: 0 0 4px;
  letter-spacing: -0.01em;
}

.project-role {
  font-size: 0.88rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 14px;
}

.project-summary {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text);
  margin-bottom: 18px;
}

.project-section {
  margin-bottom: 16px;
}

.section-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.contributions-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contributions-list li {
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--text-muted);
  padding-left: 16px;
  position: relative;
  margin-bottom: 6px;
}

.contributions-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--accent);
}

.contributions-list li:last-child {
  margin-bottom: 0;
}

.project-impact {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text);
  background: var(--surface-elevated);
  padding: 12px 14px;
  border-radius: 6px;
  border-left: 3px solid var(--accent);
  margin: 0;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 18px;
}

.tech-tag {
  font-size: 0.74rem;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--surface-elevated);
  padding: 4px 9px;
  border-radius: 4px;
  border: 1px solid var(--border);
}

@media (max-width: 768px) {
  .project-card {
    padding: 20px 16px;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
