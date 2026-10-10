<template>
  <section class="skills-section" id="skills">
    <header class="section-header">
      <h2 class="section-title">Technical Skills</h2>
      <p class="section-subtitle">Core technologies, frameworks, cloud tools, and engineering proficiencies.</p>
    </header>
    <div class="skills-grid">
      <div
        v-for="skill in skills"
        :key="skill.title"
        class="skill-card"
      >
        <div class="skill-icon">
          <i :class="skill.icon"></i>
        </div>
        <h3 class="skill-title">{{ skill.title }}</h3>
        <p class="skill-list">{{ skill.info.join(", ") }}</p>
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
.skills-section {
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

.skill-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px;
  transition: border-color 0.2s ease;
}

.skill-card:hover {
  border-color: rgba(255, 255, 255, 0.25);
}

.skill-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-soft);
  color: var(--accent);
  border-radius: 6px;
  margin-bottom: 12px;
  font-size: 1.05rem;
}

.skill-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 6px;
}

.skill-list {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}
</style>
