<template>
  <div id="app" class="theme-dark">
    <Navbar @scroll="scrollTo" />
    <main class="main">
      <Home @scroll="scrollTo" />
      <About id="about" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import info from "./data";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Portfolio,
    Contact,
    Footer,
  },
  provide() {
    return { info };
  },
  data() {
    return {
      config: info.config,
    };
  },
  mounted() {
    this.$nextTick(() => {
      ["about", "contact", "skills", "portfolio"].forEach((l) => {
        if (window.location.href.includes(l)) {
          const el = document.getElementById(l);
          if (el) {
            const elementPosition = el.offsetTop;
            window.scrollTo({ top: elementPosition - 70, behavior: "smooth" });
          }
        }
      });
    });
  },
  methods: {
    scrollTo(ele) {
      if (ele === "home") {
        this.$router.push(`/`).catch(() => {});
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(ele);
        if (el) {
          const elementPosition = el.offsetTop;
          window.scrollTo({ top: elementPosition - 70, behavior: "smooth" });
          if (this.$router.history.current.path !== `/${ele}`) {
            this.$router.push(`/${ele}`);
          }
        }
      }
    },
  },
};
</script>

<style>
/* Dark theme variables */
.theme-dark {
  --bg: #0a0a0c;
  --surface: #12121a;
  --surface-elevated: #1a1a24;
  --border: rgba(255, 255, 255, 0.08);
  --text: #e4e4e7;
  --text-muted: #a1a1aa;
  --accent: #22d3ee;
  --accent-soft: rgba(34, 211, 238, 0.15);
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
}

.main {
  padding-top: 72px;
  position: relative;
}

.p-st {
  transition: all 0.3s ease;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--surface);
}

::-webkit-scrollbar-thumb {
  background: var(--surface-elevated);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
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

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
}

.tooltip.popover .popover-inner {
  background: var(--surface-elevated);
  color: var(--text);
  border: 1px solid var(--border);
  padding: 24px;
  border-radius: 12px;
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
