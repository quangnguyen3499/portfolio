<template>
  <div class="timeline-block">
    <h3 class="timeline-heading">
      <span></span>
      {{ data.title }}
    </h3>

    <ul class="timeline-list">
      <li
        v-for="(e, idx) in data.data"
        :key="e.name + (e.date || '')"
        class="timeline-item"
        :style="{ '--delay': idx * 0.05 + 's' }"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="400"
      >
        <span class="timeline-date">{{ e.date }}</span>

        <article class="timeline-card">
          <div class="timeline-card-header">
            <h4 class="timeline-title">
              {{ titleText(e) }}
              <i class="fa fa-arrow-up timeline-arrow"></i>
            </h4>
            <span v-if="isEducation && e.degree" class="timeline-degree">{{ e.degree }}</span>
            <span v-if="!isEducation && e.tagline" class="timeline-tagline">{{ e.tagline }}</span>
            <span v-if="subtitleText(e)" class="timeline-subtitle">
              {{ subtitleText(e) }}
            </span>
          </div>

          <p v-if="e.summary" class="timeline-summary">{{ e.summary }}</p>

          <div class="timeline-body" v-if="e.description && e.description.length">
            <ul class="timeline-desc-list">
              <li v-for="d in e.description" :key="d" class="timeline-desc">{{ d }}</li>
            </ul>
          </div>

          <div class="timeline-tags" v-if="e.skills && e.skills.length">
            <span v-for="s in e.skills" :key="s" class="timeline-tag">{{ s }}</span>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isEducation() {
      return this.data.title === "Education";
    },
  },
  methods: {
    titleText(entry) {
      return this.isEducation ? entry.name : `${entry.position || entry.degree} · ${entry.name}`;
    },
    subtitleText(entry) {
      if (this.isEducation) {
        return [entry.gpa ? `GPA ${entry.gpa}` : "", entry.place].filter(Boolean).join(" · ");
      }

      return entry.place || "";
    },
  },
};
</script>

<style scoped>
.timeline-block {
  margin-bottom: 2rem;
}

.timeline-heading {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 1.25rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.timeline-heading span {
  display: inline-block;
  width: 52px;
  height: 1px;
  background: var(--text-muted);
  opacity: 0.55;
}

.timeline-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 28px;
}

.timeline-item {
  display: grid;
  grid-template-columns: minmax(150px, 220px) 1fr;
  gap: 28px;
}

.timeline-date {
  padding-top: 18px;
  color: var(--text-muted);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.7;
}

.timeline-card {
  padding: 18px 20px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
}

.timeline-card:hover {
  background: var(--surface-elevated);
  border-color: var(--border);
  transform: translateY(-2px);
}

.timeline-card-header {
  margin-bottom: 12px;
}

.timeline-title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.4;
  margin: 0 0 4px;
}

.timeline-arrow {
  color: var(--accent);
  font-size: 0.7rem;
  transform: rotate(45deg);
  transition: transform 0.2s ease;
}

.timeline-card:hover .timeline-arrow {
  transform: translate(2px, -2px) rotate(45deg);
}

.timeline-subtitle {
  display: block;
  color: var(--text-muted);
  font-size: 0.92rem;
  font-weight: 600;
  opacity: 0.75;
}

.timeline-tagline {
  display: block;
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 4px;
}

.timeline-degree {
  display: block;
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 4px;
  opacity: 0.9;
}

.timeline-summary {
  max-width: 760px;
  margin: 12px 0 0;
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.65;
  opacity: 0.92;
}

.timeline-body {
  margin-top: 12px;
  max-width: 760px;
}

.timeline-desc-list {
  display: grid;
  gap: 8px;
  margin: 0;
  padding-left: 18px;
}

.timeline-desc {
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0;
}

.timeline-desc:last-child {
  margin-bottom: 0;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.timeline-tag {
  font-size: 0.82rem;
  font-weight: 600;
  padding: 6px 14px;
  background: rgba(34, 211, 238, 0.12);
  color: #5eead4;
  border-radius: 999px;
}

@media (max-width: 760px) {
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .timeline-date {
    padding-top: 0;
  }

  .timeline-card {
    padding: 16px;
  }
}
</style>
