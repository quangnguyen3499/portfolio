<template>
  <footer class="footer">
    <div class="footer-inner">
      <span class="footer-copy">&copy; {{ currentYear }} {{ name }}</span>
      <span class="footer-sep">·</span>
      <span class="footer-title">{{ title }}</span>
      <span class="footer-sep">·</span>
      <div class="footer-links">
        <a :href="`mailto:${email}`" class="footer-link">Email</a>
        <a :href="links.linkedin" target="_blank" rel="noopener noreferrer" class="footer-link">LinkedIn</a>
        <a :href="links.github" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a>
      </div>
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
  background: transparent;
  border-top: 1px solid var(--border);
  padding: 14px 0;
}

.footer-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.footer-copy {
  color: var(--text-muted);
}

.footer-sep {
  color: var(--border);
}

.footer-title {
  color: var(--text-muted);
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-link {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--accent);
}
</style>
