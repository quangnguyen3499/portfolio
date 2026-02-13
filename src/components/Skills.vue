<template>
  <section class="skills" id="skills">
    <div class="section-inner">
      <header class="section-header" data-aos="fade" data-aos-once="true" data-aos-duration="600">
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-subtitle">Technologies and tools I work with</p>
      </header>
      <div class="skills-grid">
        <div
          v-for="(skill, idx) in skills"
          :key="skill.title"
          class="skill-card"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="400"
          :data-aos-delay="Math.min(idx * 50, 300)"
        >
          <div class="skill-icon">
            <i :class="skill.icon"></i>
          </div>
          <h3 class="skill-title">{{ skill.title }}</h3>
          <p class="skill-list">{{ skill.info.join(", ") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  inject: ["info"],
  data() {
    return { skills: this.info.skills };
  },
};
</script>

<style scoped>
.skills {
  padding: 80px 0;
  background: var(--bg);
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.skill-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.skill-card:hover {
  border-color: rgba(34, 211, 238, 0.3);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.skill-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-soft);
  color: var(--accent);
  border-radius: 10px;
  margin-bottom: 14px;
  font-size: 1.2rem;
}

.skill-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
}

.skill-list {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}
</style>
