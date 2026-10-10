<template>
  <div id="app" class="theme-dark" @mousemove="updateSpotlight">
    <!-- Cursor spotlight glow overlay -->
    <div class="spotlight" :style="spotlightStyle"></div>

    <!-- Canvas Particles -->
    <ParticlesBg />

    <!-- Left Sidebar -->
    <Sidebar :active-section="activeSection" @navigate="navigate" />

    <!-- Main Content -->
    <div class="main-wrapper">
      <main v-if="isNewsRoute" class="main-content">
        <News />
      </main>
      <main v-else-if="isProjectsRoute" class="main-content">
        <Projects />
      </main>
      <main v-else class="main-content">
        <About id="about" class="content-section" @scroll="scrollTo" />
        <Skills id="skills" class="content-section" />
        <Contact id="contact" class="content-section" />
        <Footer />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import News from "./components/News";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import ParticlesBg from "./components/helpers/ParticlesBg";

import info from "./data";

export default {
  name: "App",
  components: {
    Sidebar,
    News,
    Projects,
    Skills,
    Contact,
    About,
    Footer,
    ParticlesBg
  },
  provide() {
    return { info };
  },
  data() {
    return {
      config: info.config,
      activeSection: "news",
      mouseX: 0,
      mouseY: 0,
      observer: null,
      observerTimeout: null,
      scrollTimeout: null,
      isScrolling: false
    };
  },
  computed: {
    isNewsRoute() {
      return this.$route.path === "/news";
    },
    isProjectsRoute() {
      return this.$route.path === "/projects";
    },
    spotlightStyle() {
      return {
        background: `radial-gradient(600px circle at ${this.mouseX}px ${this.mouseY}px, rgba(34, 211, 238, 0.08), transparent 80%)`
      };
    }
  },
  mounted() {
    // Force scroll to top on mount with delay
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    // Navigate to news by default
    if (this.$route.path !== "/news") {
      this.$router.push("/news").catch(() => {});
    }
    this.syncRouteState();
    window.addEventListener("scroll", this.handleScroll);
  },
  watch: {
    "$route.path"() {
      this.syncRouteState();
    },
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.observerTimeout) {
      clearTimeout(this.observerTimeout);
    }
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    updateSpotlight(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
    syncRouteState() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      if (this.observerTimeout) {
        clearTimeout(this.observerTimeout);
        this.observerTimeout = null;
      }
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = null;
      }

      if (this.isNewsRoute || this.isProjectsRoute) {
        this.activeSection = this.isNewsRoute ? "news" : "projects";
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      this.$nextTick(() => {
        // Scroll to top on first load
        window.scrollTo({ top: 0, behavior: "auto" });
        this.activeSection = "about";

        const routeSection = this.sectionFromRoute();
        if (routeSection && routeSection !== "about") {
          this.scrollToSection(routeSection, "auto");
        }
        this.setupSectionObserver();
      });
    },
    sectionFromRoute() {
      const section = this.$route.path.replace("/", "");
      if (!section) return "about";
      return ["about", "skills", "projects", "news", "contact"].includes(section) ? section : null;
    },
    setupSectionObserver() {
      const options = {
        root: null,
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (this.observerTimeout) {
            clearTimeout(this.observerTimeout);
          }

          this.observerTimeout = setTimeout(() => {
            const newSection = entry.target.id;
            if (this.activeSection !== newSection) {
              this.activeSection = newSection;

              if (this.$router.history.current.path !== `/${newSection}`) {
                this.$router.push(`/${newSection}`).catch(() => {});
              }
            }
          }, 100);
        });
      }, options);

      const targets = document.querySelectorAll(".content-section");
      targets.forEach((target) => observer.observe(target));
      this.observer = observer;
    },
    scrollToSection(section, behavior = "smooth") {
      const el = document.getElementById(section);
      if (!el) return;

      const elementPosition = el.offsetTop;
      window.scrollTo({ top: Math.max(0, elementPosition - 20), behavior });
      this.activeSection = section;
    },
    scrollTo(ele) {
      this.navigate(ele);
    },
    navigate(sectionId) {
      if (sectionId === "news" || sectionId === "projects") {
        this.$router.push(`/${sectionId}`).catch(() => {});
        this.activeSection = sectionId;
      } else {
        this.scrollToSection(sectionId);
        if (this.$router.history.current.path !== `/${sectionId}`) {
          this.$router.push(`/${sectionId}`).catch(() => {});
        }
      }
    },
    handleScroll() {
      if (this.isScrolling) return;

      this.isScrolling = true;

      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }

      this.scrollTimeout = setTimeout(() => {
        this.updateActiveSectionFromScroll();
        this.isScrolling = false;
      }, 150);
    },
    updateActiveSectionFromScroll() {
      const scrollPosition = window.scrollY;

      // If at top, set to about
      if (scrollPosition < 150) {
        if (this.activeSection !== "about") {
          this.activeSection = "about";
          if (this.$router.history.current.path !== "/about") {
            this.$router.push("/about").catch(() => {});
          }
        }
        return;
      }

      const sections = document.querySelectorAll(".content-section");
      if (!sections.length) return;

      const viewportMiddle = scrollPosition + window.innerHeight / 3;

      let currentSection = "about";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
          currentSection = section.id;
        }
      });

      if (this.activeSection !== currentSection) {
        this.activeSection = currentSection;
        if (this.$router.history.current.path !== `/${currentSection}`) {
          this.$router.push(`/${currentSection}`).catch(() => {});
        }
      }
    }
  }
};
</script>

<style>
/* Dark theme variables - clean academic palette */
.theme-dark {
  --bg: #0b1020;
  --surface: #111827;
  --surface-elevated: #1f2937;
  --border: rgba(255, 255, 255, 0.1);
  --text: #f1f1f5;
  --text-muted: #94a3b8;
  --accent: #22d3ee;
  --accent-soft: rgba(34, 211, 238, 0.1);
  --accent-hover: #67e8f9;
}

#app {
  font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: clip;
}

html, body {
  background: var(--bg);
  margin: 0;
  padding: 0;
  overflow-x: clip;
}

/* Main layout */
.main-wrapper {
  margin-left: 320px;
  width: calc(100% - 320px);
  min-height: 100vh;
  box-sizing: border-box;
}

.main-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
  position: relative;
}

.content-section {
  padding: 32px 0;
  border-bottom: 1px solid var(--border);
}

.content-section:first-of-type {
  padding-top: 0;
}

.content-section:last-of-type {
  border-bottom: none;
  padding-bottom: 32px;
}

@media (max-width: 991px) {
  .main-wrapper {
    margin-left: 0;
    width: 100%;
  }

  .content-wrapper {
    padding: 24px 16px;
  }

  .content-section {
    padding: 24px 0;
  }
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: var(--bg);
}

::-webkit-scrollbar-thumb {
  background: var(--surface-elevated);
  border-radius: 3px;
}

/* Tooltips */
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: var(--surface-elevated);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 12px;
  padding: 5px 8px;
}

.tooltip .tooltip-arrow {
  display: none;
}
</style>
