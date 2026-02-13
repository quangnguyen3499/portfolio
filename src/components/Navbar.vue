<template>
  <header class="navbar">
    <div class="navbar-inner">
      <a class="navbar-brand" href="/" @click.prevent="$emit('scroll', 'home')">
        <Logo />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarMenu"
        aria-controls="navbarMenu"
        aria-expanded="false"
        aria-label="Toggle menu"
      >
        <i class="fas fa-bars"></i>
      </button>
      <nav class="navbar-menu collapse" id="navbarMenu">
        <a class="nav-link" href="/about" @click.prevent="$emit('scroll', 'about')">About</a>
        <a class="nav-link" href="/skills" @click.prevent="$emit('scroll', 'skills')">Skills</a>
        <a class="nav-link" href="/contact" @click.prevent="$emit('scroll', 'contact')">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "./helpers/Logo";

export default {
  name: "Navbar",
  components: { Logo },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 12, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.navbar-inner {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  text-decoration: none;
  color: inherit;
}

.navbar-toggler {
  display: none;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.25rem;
  cursor: pointer;
  padding: 8px;
}

.navbar-toggler:hover {
  color: var(--text);
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 8px 14px;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
}

.nav-link:hover {
  color: var(--text);
  background: var(--accent-soft);
}

@media (max-width: 768px) {
  .navbar-toggler {
    display: block;
  }

  .navbar-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 16px;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
  }

  .navbar-menu.collapse {
    display: none;
  }

  .navbar-menu.collapse.show {
    display: flex !important;
  }

  .nav-link {
    width: 100%;
    text-align: center;
    padding: 12px;
  }
}
</style>
