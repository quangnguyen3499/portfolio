<template>
  <div class="timeline-block">
    <h3 class="timeline-heading">{{ data.title }}</h3>
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
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-meta">
            <span class="timeline-name">{{ e.name }}, {{ e.place }}</span>
            <span class="timeline-role">{{ e.degree || e.position }}{{ e.gpa ? " (" + e.gpa + ")" : "" }}</span>
            <span class="timeline-date">{{ e.date }}</span>
          </div>
          <div class="timeline-body" v-if="e.description && e.description.length">
            <p v-for="d in e.description" :key="d" class="timeline-desc">{{ d }}</p>
          </div>
          <div class="timeline-tags" v-if="e.skills && e.skills.length">
            <span v-for="s in e.skills" :key="s" class="timeline-tag">{{ s }}</span>
          </div>
        </div>
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
};
</script>

<style scoped>
.timeline-block {
  margin-bottom: 2rem;
}

.timeline-heading {
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 1.25rem;
  letter-spacing: 0.02em;
}

.timeline-list {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  padding-left: 24px;
  border-left: 2px solid var(--border);
}

.timeline-item {
  position: relative;
  padding-bottom: 1.75rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -30px;
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px var(--surface);
}

.timeline-content {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  transition: border-color 0.2s;
}

.timeline-content:hover {
  border-color: rgba(34, 211, 238, 0.25);
}

.timeline-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px 16px;
  margin-bottom: 8px;
}

.timeline-name {
  font-weight: 600;
  color: var(--text);
  font-size: 0.95rem;
}

.timeline-role {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.timeline-date {
  font-size: 0.8rem;
  color: var(--text-muted);
  opacity: 0.9;
}

.timeline-body {
  margin-top: 8px;
}

.timeline-desc {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 0 4px;
}

.timeline-desc:last-child {
  margin-bottom: 0;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.timeline-tag {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 4px 10px;
  background: var(--accent-soft);
  color: var(--accent);
  border-radius: 6px;
}
</style>
