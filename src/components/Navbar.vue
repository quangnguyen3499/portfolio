<template>
  <header class="navbar-wrapper">
    <div ref="navContainer" class="nav-container-pill">
      <!-- Logo -->
      <a class="nav-logo" href="/" @click.prevent="$emit('scroll', 'home')">
        <Logo />
      </a>

      <!-- Sliding Highlight Pill -->
      <div class="nav-active-pill" :style="pillStyle"></div>

      <!-- Navigation Links -->
      <nav class="nav-links-wrap">
        <a 
          v-for="item in navItems" 
          :key="item.id"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          :ref="`navLink_${item.id}`"
          :href="item.path"
          @click.prevent="navigate(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "./helpers/Logo";

export default {
  name: "Navbar",
  components: { Logo },
  props: {
    activeSection: {
      type: String,
      default: "about"
    }
  },
  data() {
    return {
      navItems: [
        { id: "about", label: "About", path: "/about" },
        { id: "portfolio", label: "Projects", path: "/portfolio" },
        { id: "skills", label: "Skills", path: "/skills" },
        { id: "blogs", label: "Blogs", path: "/blogs" },
        { id: "contact", label: "Contact", path: "/contact" }
      ],
      pillWidth: 0,
      pillLeft: 0,
      hasMounted: false
    };
  },
  computed: {
    pillStyle() {
      return {
        width: `${this.pillWidth}px`,
        transform: `translateX(${this.pillLeft}px)`,
        opacity: this.hasMounted && this.pillWidth > 0 ? 1 : 0
      };
    }
  },
  watch: {
    activeSection: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          this.updatePillPosition();
        });
      }
    }
  },
  mounted() {
    this.hasMounted = true;
    window.addEventListener("resize", this.updatePillPosition);
    this.$nextTick(() => {
      setTimeout(this.updatePillPosition, 300); // Allow fonts to load and render
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updatePillPosition);
  },
  methods: {
    navigate(sectionId) {
      this.$emit("scroll", sectionId);
    },
    updatePillPosition() {
      const refName = `navLink_${this.activeSection}`;
      const activeEl = this.$refs[refName] ? this.$refs[refName][0] : null;
      const container = this.$refs.navContainer;
      if (activeEl && container) {
        const activeRect = activeEl.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        this.pillWidth = activeRect.width;
        this.pillLeft = activeRect.left - containerRect.left;
      } else {
        this.pillWidth = 0;
        this.pillLeft = 0;
      }
    }
  }
};
</script>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 90%;
  max-width: 680px;
  pointer-events: none; /* Allow clicks behind outer wrapper */
}

.nav-container-pill {
  pointer-events: auto; /* Re-enable pointer events for the menu itself */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(10, 10, 12, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  padding: 6px 12px 6px 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  position: relative;
  width: 100%;
}

.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  z-index: 2;
  transition: opacity 0.2s;
}

.nav-logo:hover {
  opacity: 0.8;
}

.nav-links-wrap {
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
}

.nav-link {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 8px 16px;
  border-radius: 999px;
  transition: color 0.25s ease;
  z-index: 2;
  position: relative;
}

.nav-link:hover {
  color: var(--text);
}

.nav-link.active {
  color: var(--accent) !important;
}

/* Sliding active pill */
.nav-active-pill {
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 0;
  background: rgba(34, 211, 238, 0.08);
  border: 1px solid rgba(34, 211, 238, 0.15);
  border-radius: 999px;
  transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 1;
  pointer-events: none;
}

@media (max-width: 576px) {
  .navbar-wrapper {
    top: 16px;
    width: 95%;
  }

  .nav-container-pill {
    padding: 6px 8px;
  }

  .nav-logo {
    display: none; /* Hide logo on very small screens to save space */
  }

  .nav-links-wrap {
    width: 100%;
    justify-content: space-around;
  }

  .nav-link {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}
</style>
