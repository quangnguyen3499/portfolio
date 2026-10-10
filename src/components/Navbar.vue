<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-menu">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.path"
          class="nav-item"
          :class="{ active: activeSection === item.id }"
          @click.prevent="navigate(item.id)"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    activeSection: {
      type: String,
      default: "about"
    }
  },
  data() {
    return {
      navItems: [
        { id: "about", label: "ABOUT", path: "/about" },
        { id: "skills", label: "SKILLS", path: "/skills" },
        { id: "projects", label: "PROJECTS", path: "/projects" },
        { id: "news", label: "NEWS", path: "/news" },
        { id: "contact", label: "CONTACT", path: "/contact" }
      ]
    };
  },
  methods: {
    navigate(sectionId) {
      this.$emit("navigate", sectionId);
    }
  }
};
</script>

<style scoped>
.navbar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

@supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {
  .navbar {
    background: rgba(17, 24, 39, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 64px;
}

.navbar-menu {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-item {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
  letter-spacing: 0.05em;
}

.nav-item:hover {
  color: var(--accent);
}

.nav-item.active {
  color: var(--accent);
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 16px;
    justify-content: center;
  }

  .navbar-menu {
    gap: 16px;
  }

  .nav-item {
    font-size: 0.8rem;
  }
}
</style>
