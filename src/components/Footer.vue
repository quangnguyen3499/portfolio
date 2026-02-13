<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-row">
        <span class="footer-name">{{ name }}</span>
        <span class="footer-sep">·</span>
        <span class="footer-title">{{ title }}</span>
      </div>
      <div class="footer-links">
        <a :href="`mailto:${email}`" class="footer-link" aria-label="Email">Email</a>
        <a :href="links.linkedin" target="_blank" rel="noopener noreferrer" class="footer-link" aria-label="LinkedIn">LinkedIn</a>
        <a :href="links.github" target="_blank" rel="noopener noreferrer" class="footer-link" aria-label="GitHub">GitHub</a>
      </div>
      <p class="footer-copy">&copy; {{ currentYear }} {{ name }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  inject: ["info"],
  data() {
    return {
      name: this.info.name,
      title: this.info.title,
      email: this.info.email,
      links: this.info.links,
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background: var(--surface-elevated);
  border-top: 1px solid var(--border);
  padding: 32px 0;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.footer-row {
  font-size: 0.95rem;
  margin-bottom: 12px;
}

.footer-name {
  font-weight: 600;
  color: var(--text);
}

.footer-sep {
  color: var(--text-muted);
  margin: 0 8px;
}

.footer-title {
  color: var(--text-muted);
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 16px;
}

.footer-link {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--accent);
}

.footer-copy {
  font-size: 0.8rem;
  color: var(--text-muted);
  opacity: 0.8;
  margin: 0;
}
</style>
