<template>
  <section class="about-section" id="about">
    <header class="section-header">
      <h2 class="section-title">Education &amp; Experience</h2>
      <p class="section-subtitle">Academic background, professional engineering history, certifications, and awards.</p>
    </header>

    <div class="about-grid">
      <div class="about-col">
        <Timeline :data="education" />
      </div>
      <div class="about-col">
        <Timeline :data="experience" />
      </div>
    </div>

    <div class="about-extra" v-if="certifications.length || awards.length">
      <div class="about-card" v-if="certifications.length">
        <h3 class="about-card-title">Certifications</h3>
        <ul class="about-list">
          <li v-for="(c, i) in certifications" :key="i">
            <a v-if="c.url" :href="c.url" target="_blank" rel="noopener noreferrer" class="about-list-link">
              <strong>{{ c.name || "—" }}</strong>
              <span v-if="c.detail"> — {{ c.detail }}</span>
              <span v-if="c.date" class="muted"> ({{ c.date }})</span>
              <i class="fa fa-external-link-alt about-list-link-icon"></i>
            </a>
            <template v-else>
              <strong>{{ c.name || "—" }}</strong>
              <span v-if="c.detail"> — {{ c.detail }}</span>
              <span v-if="c.date" class="muted"> ({{ c.date }})</span>
            </template>
          </li>
        </ul>
      </div>

      <div class="about-card" v-if="awards.length">
        <h3 class="about-card-title">Awards</h3>
        <ul class="about-list">
          <li v-for="a in awards" :key="a.name">{{ a.name }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Timeline from "./helpers/Timeline";

export default {
  name: "About",
  components: { Timeline },
  inject: ["info"],
  data() {
    return {
      education: { title: "Education", data: this.info.education },
      experience: { title: "Experience", data: this.info.experience },
      certifications: this.info.certifications || [],
      awards: this.info.awards || [],
    };
  },
};
</script>

<style scoped>
.about-section {
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

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  margin-bottom: 24px;
}

.about-extra {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.about-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px;
}

.about-card-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 10px;
}

.about-list {
  margin: 0;
  padding-left: 1.2rem;
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.about-list li {
  margin-bottom: 4px;
}

.about-list .muted {
  opacity: 0.85;
}

.about-list-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

.about-list-link:hover {
  color: var(--accent);
}

.about-list-link-icon {
  margin-left: 4px;
  font-size: 0.7rem;
  color: var(--accent);
  vertical-align: middle;
}
</style>
