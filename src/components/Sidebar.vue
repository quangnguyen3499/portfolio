<template>
  <aside class="sidebar">
    <div class="sidebar-inner">
      <!-- Profile Header Section -->
      <div class="profile-section">
        <div class="profile-img-wrap">
          <img :src="picture" alt="Quang Nguyen" class="profile-img" />
        </div>

        <h1 class="profile-name">{{ name }}</h1>

        <div class="profile-badge">
          <span>Software &amp; Automation Engineer</span>
        </div>

        <p class="profile-desc">{{ description }}</p>
      </div>

      <!-- Navigation Menu -->
      <nav class="sidebar-nav">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.path"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          @click.prevent="navigate(item.id)"
        >
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </a>
      </nav>

      <!-- Key Skills Cloud -->
      <div class="sidebar-section skills-section" v-if="topSkills.length">
        <h3 class="section-title">Key Skills</h3>
        <div class="skills-cloud">
          <span v-for="(skill, index) in topSkills" :key="index" class="skill-tag">
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Contact & Socials -->
      <div class="sidebar-footer">
        <a :href="`mailto:${email}`" class="email-link" title="Send Email">
          <i class="fa fa-envelope"></i>
          <span>{{ email }}</span>
        </a>

        <div class="social-links">
          <button type="button" class="social-btn" @click="open('linkedin')" v-tooltip.bottom="'LinkedIn'" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </button>
          <button type="button" class="social-btn" @click="open('github')" v-tooltip.bottom="'GitHub'" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </button>
          <button type="button" class="social-btn" @click="open('resume')" v-tooltip.bottom="'Resume'" aria-label="Resume">
            <i class="fa fa-file-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  inject: ["info"],
  props: {
    activeSection: {
      type: String,
      default: "news"
    }
  },
  data() {
    const info = this.info;
    return {
      picture: info.flat_picture,
      name: info.name,
      title: info.title,
      description: info.description,
      email: info.email,
      linkedin: info.links.linkedin,
      github: info.links.github,
      resume: info.links.resume,
      skills: info.skills || [],
      navItems: [
        { id: "news", label: "NEWS", path: "/news", icon: "fa fa-newspaper" },
        { id: "projects", label: "PROJECTS", path: "/projects", icon: "fa fa-briefcase" },
        { id: "skills", label: "SKILLS", path: "/skills", icon: "fa fa-code" },
        { id: "contact", label: "CONTACT", path: "/contact", icon: "fa fa-envelope" },
        { id: "about", label: "ABOUT", path: "/about", icon: "fa fa-user" }
      ]
    };
  },
  computed: {
    topSkills() {
      // Return the specific list requested
      return ["Python", "JavaScript", "Django", "FastAPI", "ReactJS", "PostgreSQL", "Playwright", "AWS", "Kafka", "n8n", "LLM"];
    }
  },
  methods: {
    navigate(sectionId) {
      this.$emit("navigate", sectionId);
    },
    open(link) {
      const urls = {
        linkedin: this.linkedin,
        github: this.github,
        resume: this.resume
      };
      if (urls[link]) window.open(urls[link], "_blank");
    }
  }
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 320px;
  background: var(--surface);
  border-right: 1px solid var(--border);
  overflow-y: auto;
  z-index: 100;
}

.sidebar::-webkit-scrollbar {
  width: 4px;
}

.sidebar::-webkit-scrollbar-thumb {
  background: var(--surface-elevated);
  border-radius: 2px;
}

.sidebar-inner {
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 100%;
  box-sizing: border-box;
}

/* Profile Section */
.profile-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.profile-img-wrap {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-bottom: 16px;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid var(--border);
  display: block;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.25;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.profile-badge {
  display: inline-block;
  font-size: 0.76rem;
  font-weight: 500;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid rgba(34, 211, 238, 0.25);
  padding: 4px 9px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.profile-desc {
  font-size: 0.86rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}

/* Navigation */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 8px;
  transition: all 0.25s ease;
}

.nav-link:hover {
  color: var(--text);
  background: var(--surface-elevated);
}

.nav-link.active {
  color: var(--accent);
  background: var(--accent-soft);
}

.nav-link i {
  width: 20px;
  text-align: center;
}

/* Skills Cloud */
.skills-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.skill-tag {
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--surface-elevated);
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid var(--border);
}

/* Footer / Contact & Social */
.sidebar-footer {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.email-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.8rem;
  word-break: break-all;
  transition: color 0.15s;
}

.email-link:hover {
  color: var(--accent);
}

.email-link i {
  color: var(--accent);
  width: 14px;
}

.social-links {
  display: flex;
  gap: 8px;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--border);
  background: var(--surface-elevated);
  color: var(--text-muted);
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
}

.social-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
}

/* Responsive */
@media (max-width: 991px) {
  .sidebar {
    position: static;
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .sidebar-inner {
    padding: 24px 16px;
    gap: 20px;
    align-items: center;
    text-align: center;
  }

  .profile-section {
    align-items: center;
    text-align: center;
  }

  .sidebar-section {
    width: 100%;
  }

  .sidebar-nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
    justify-content: center;
  }

  .nav-item {
    flex: 1 1 auto;
    justify-content: center;
    padding: 7px 11px;
    font-size: 0.8rem;
  }

  .nav-arrow {
    display: none;
  }

  .skills-cloud {
    justify-content: center;
  }

  .sidebar-footer {
    width: 100%;
    align-items: center;
  }
}
</style>
