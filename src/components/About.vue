<template>
  <section class="about" id="about">
    <div class="section-inner">
      <header class="section-header" data-aos="fade" data-aos-once="true" data-aos-duration="600">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Education, experience, certifications & awards</p>
      </header>
      <div class="about-grid">
        <div class="about-col" data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
          <Timeline :data="education" />
        </div>
        <div class="about-col" data-aos="fade-up" data-aos-once="true" data-aos-duration="500" data-aos-delay="100">
          <Timeline :data="experience" />
        </div>
      </div>
      <div class="about-extra" v-if="certifications.length || awards.length">
        <div class="about-card" v-if="certifications.length" data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
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
        <div class="about-card" v-if="awards.length" data-aos="fade-up" data-aos-once="true" data-aos-duration="500" data-aos-delay="80">
          <h3 class="about-card-title">Awards</h3>
          <ul class="about-list">
            <li v-for="a in awards" :key="a.name">{{ a.name }}</li>
          </ul>
        </div>
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
.about {
  padding: 80px 0;
  background: var(--surface);
}

.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--text-muted);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

.about-extra {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.about-card {
  background: var(--surface-elevated);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
}

.about-card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 12px;
}

.about-list {
  margin: 0;
  padding-left: 1.25rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.8;
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
