<template>
  <aside class="right-sidebar">
    <!-- Navigation Menu Section -->
    <div class="sidebar-section nav-section">
      <h3 class="sidebar-title">Menu</h3>
      <nav class="sidebar-nav">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.path"
          class="nav-item"
          :class="{ active: activeSection === item.id }"
          @click.prevent="navigate(item.id)"
        >
          <i :class="item.icon" class="nav-icon"></i>
          <span class="nav-label">{{ item.label }}</span>
          <i class="fa fa-chevron-right nav-arrow" v-if="activeSection === item.id"></i>
        </a>
      </nav>
    </div>

    <!-- Contact Section -->
    <div class="sidebar-section">
      <h3 class="sidebar-title">Contact</h3>
      <div class="contact-links">
        <a :href="`mailto:${email}`" class="contact-link">
          <i class="fa fa-envelope"></i>
          <span>{{ email }}</span>
        </a>
      </div>
    </div>

    <!-- Social Links Section -->
    <div class="sidebar-section">
      <h3 class="sidebar-title">Social Links</h3>
      <div class="social-links">
        <a :href="linkedin" target="_blank" rel="noopener noreferrer" class="social-link">
          <i class="fab fa-linkedin-in"></i>
          <span>LinkedIn</span>
        </a>
        <a :href="github" target="_blank" rel="noopener noreferrer" class="social-link">
          <i class="fab fa-github"></i>
          <span>GitHub</span>
        </a>
        <a :href="resume" target="_blank" rel="noopener noreferrer" class="social-link">
          <i class="fa fa-file-alt"></i>
          <span>Resume</span>
        </a>
      </div>
    </div>

    <!-- Key Skills Section -->
    <div class="sidebar-section">
      <h3 class="sidebar-title">Key Skills</h3>
      <div class="skills-cloud">
        <span
          v-for="(skill, index) in topSkills"
          :key="index"
          class="skill-tag"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "RightSidebar",
  inject: ["info"],
  props: {
    activeSection: {
      type: String,
      default: "about"
    }
  },
  data() {
    const info = this.info;
    return {
      email: info.email,
      linkedin: info.links.linkedin,
      github: info.links.github,
      resume: info.links.resume,
      skills: info.skills || [],
      topSkills: ["Python", "JavaScript", "Django", "FastAPI", "ReactJS", "PostgreSQL", "Playwright", "AWS", "Kafka", "n8n", "LLM"],
      navItems: [
        { id: "about", label: "ABOUT", path: "/about", icon: "fa fa-user" },
        { id: "skills", label: "SKILLS", path: "/skills", icon: "fa fa-code" },
        { id: "projects", label: "PROJECTS", path: "/projects", icon: "fa fa-briefcase" },
        { id: "news", label: "NEWS", path: "/news", icon: "fa fa-newspaper" },
        { id: "contact", label: "CONTACT", path: "/contact", icon: "fa fa-envelope" }
      ]
    };
  },
  created() {
    console.log('topSkills in created:', this.topSkills);
  },
  methods: {
    navigate(sectionId) {
      this.$emit("navigate", sectionId);
    }
  }
};
</script>

<style scoped>
.right-sidebar {
  width: 280px;
  padding-left: 32px;
  position: -webkit-sticky;
  position: sticky;
  top: 32px;
  height: fit-content;
  max-height: calc(100vh - 64px);
  overflow-y: auto;
}

.right-sidebar::-webkit-scrollbar {
  width: 4px;
}

.right-sidebar::-webkit-scrollbar-thumb {
  background: var(--surface-elevated);
  border-radius: 2px;
}

.sidebar-section {
  margin-bottom: 32px;
}

.sidebar-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-bottom: 2px solid var(--border);
  padding-bottom: 8px;
}

/* Navigation items */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 8px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  transition: all 0.2s ease;
  background: var(--surface-elevated);
  border: 1px solid transparent;
}

.nav-item:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--border);
  transform: translateX(3px);
}

.nav-item.active {
  color: var(--accent);
  background: var(--accent-soft);
  border-color: rgba(34, 211, 238, 0.3);
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(34, 211, 238, 0.1);
}

.nav-icon {
  width: 16px;
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.nav-item:hover .nav-icon,
.nav-item.active .nav-icon {
  color: var(--accent);
}

.nav-label {
  flex: 1;
}

.nav-arrow {
  font-size: 0.75rem;
  opacity: 0.8;
  color: var(--accent);
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.contact-link:hover {
  color: var(--accent);
}

.contact-link i {
  color: var(--accent);
  width: 16px;
  text-align: center;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s;
  background: var(--surface-elevated);
}

.social-link:hover {
  color: var(--accent);
  background: var(--accent-soft);
}

.social-link i {
  width: 16px;
  text-align: center;
}

.skills-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--surface-elevated);
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid var(--border);
  transition: all 0.2s;
}

.skill-tag:hover {
  background: var(--accent-soft);
  color: var(--accent);
  border-color: var(--accent);
}

@media (max-width: 991px) {
  .right-sidebar {
    width: 100%;
    padding-left: 0;
    position: static;
    max-height: none;
    display: contents;
  }

  .sidebar-section.nav-section {
    order: -1;
    margin-bottom: 24px;
    width: 100%;
  }

  .sidebar-nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }

  .nav-item {
    flex: 1 1 auto;
    justify-content: center;
    padding: 8px 12px;
    font-size: 0.82rem;
  }

  .nav-arrow {
    display: none;
  }

  .sidebar-section {
    order: 2;
    margin-bottom: 24px;
    width: 100%;
  }
}
</style>
