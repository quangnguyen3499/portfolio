<template>
  <div id="app" class="theme-dark" @mousemove="updateSpotlight">
    <!-- Cursor spotlight glow overlay -->
    <div class="spotlight" :style="spotlightStyle"></div>

    <!-- Canvas Particles -->
    <ParticlesBg />

    <!-- Top floating glassmorphic navbar -->
    <Navbar :active-section="activeSection" @scroll="scrollTo" />

    <!-- Layout Wrapper -->
    <div class="container-fluid px-0">
      <main v-if="isBlogRoute" class="app-layout">
        <Blogs />
      </main>
      <main v-else class="app-layout">
        <Home class="home-section" @scroll="scrollTo" />
        <About id="about" class="scroll-section" />
        <!-- <Portfolio id="portfolio" class="scroll-section" /> -->
        <Skills id="skills" class="scroll-section" />
        <Contact id="contact" class="scroll-section" />
        <Footer />
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBg from "./components/helpers/ParticlesBg";

import info from "./data";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Portfolio,
    Blogs,
    Contact,
    Footer,
    ParticlesBg
  },
  provide() {
    return { info };
  },
  data() {
    return {
      config: info.config,
      activeSection: "about",
      mouseX: 0,
      mouseY: 0,
      observer: null
    };
  },
  computed: {
    isBlogRoute() {
      return this.$route.path.startsWith("/blogs");
    },
    spotlightStyle() {
      return {
        background: `radial-gradient(600px circle at ${this.mouseX}px ${this.mouseY}px, rgba(34, 211, 238, 0.08), transparent 80%)`
      };
    }
  },
  mounted() {
    this.syncRouteState();
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

      if (this.isBlogRoute) {
        this.activeSection = "blogs";
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      this.$nextTick(() => {
        const routeSection = this.sectionFromRoute();
        if (routeSection) {
          this.scrollToSection(routeSection, "auto");
        }
        this.setupSectionObserver();
      });
    },
    sectionFromRoute() {
      const section = this.$route.path.replace("/", "");
      return ["about", "portfolio", "skills", "contact"].includes(section) ? section : null;
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
          this.activeSection = entry.target.id;

          if (this.$router.history.current.path !== `/${entry.target.id}`) {
            this.$router.push(`/${entry.target.id}`).catch(() => {});
          }
        });
      }, options);

      const targets = document.querySelectorAll(".scroll-section");
      targets.forEach((target) => observer.observe(target));
      this.observer = observer;
    },
    scrollToSection(section, behavior = "smooth") {
      const el = document.getElementById(section);
      if (!el) return;

      const elementPosition = el.offsetTop;
      window.scrollTo({ top: elementPosition - 100, behavior });
      this.activeSection = section;
    },
    scrollTo(ele) {
      if (ele === "home") {
        this.$router.push(`/`).catch(() => {});
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.activeSection = "about";
      } else if (ele === "blogs") {
        this.$router.push("/blogs").catch(() => {});
        this.activeSection = "blogs";
      } else {
        if (this.isBlogRoute) {
          this.$router.push(`/${ele}`).catch(() => {});
          return;
        }

        this.scrollToSection(ele);
        if (this.$router.history.current.path !== `/${ele}`) {
          this.$router.push(`/${ele}`).catch(() => {});
        }
      }
    }
  }
};
</script>

<style>
/* Dark theme variables */
.theme-dark {
  --bg: #0b1020;
  --surface: #111827;
  --surface-elevated: #1f2937;
  --border: rgba(255, 255, 255, 0.1);
  --text: #f1f1f5;
  --text-muted: #cbd5e1;
  --accent: #22d3ee;
  --accent-soft: rgba(34, 211, 238, 0.12);
  --accent-hover: #67e8f9;
}

#app {
  font-family: "Plus Jakarta Sans", "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
}

/* Main layout */
.app-layout {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
}

.home-section {
  padding-top: 110px;
  padding-bottom: 64px;
  border-bottom: 1px solid var(--border);
}

/* Spotlight element */
.spotlight {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

/* Global scroll section spacing */
.scroll-section {
  padding: 64px 0;
  border-bottom: 1px solid var(--border);
}

.scroll-section:last-of-type {
  border-bottom: none;
}

@media (max-width: 991px) {
  .app-layout {
    padding: 0 20px;
  }
  
  .home-section {
    padding-top: 100px;
    padding-bottom: 48px;
  }
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg);
}

::-webkit-scrollbar-thumb {
  background: var(--surface-elevated);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.15);
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
  border-radius: 8px;
  font-size: 12px;
  padding: 6px 10px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: var(--surface-elevated);
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 8px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 8px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.25s, visibility 0.25s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.25s;
}
</style>
