<template>
  <header class="site-header">
    <div class="header-container">
      <div class="header-content">
        <div class="avatar-section">
          <img :src="picture" alt="Quang Nguyen" class="avatar" />
        </div>
        <div class="text-section">
          <h1 class="header-name">{{ name }}</h1>
          <p class="header-intro">
            Hi! I'm a Software Engineer & Data & Automation Engineer passionate about building scalable systems and intelligent automation solutions. Feel free to explore my work.
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  inject: ["info"],
  data() {
    const info = this.info;
    return {
      picture: info.flat_picture,
      name: info.name
    };
  }
};
</script>

<style scoped>
.site-header {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 48px 0;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 32px;
}

.avatar-section {
  flex-shrink: 0;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--accent);
  box-shadow: 0 4px 16px rgba(34, 211, 238, 0.2);
}

.text-section {
  flex: 1;
}

.header-name {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.header-intro {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 700px;
}

@media (max-width: 768px) {
  .site-header {
    padding: 32px 0;
  }

  .header-container {
    padding: 0 16px;
  }

  .header-content {
    flex-direction: column;
    text-align: center;
    gap: 24px;
  }

  .avatar {
    width: 100px;
    height: 100px;
  }

  .header-name {
    font-size: 1.5rem;
  }

  .header-intro {
    font-size: 1rem;
  }
}
</style>
