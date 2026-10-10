<template>
  <div class="home-container" data-aos="fade-up" data-aos-once="true" data-aos-duration="800">
    <h1 class="welcome-title">Welcome to my portfolio</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    open(link) {
      // Keep for potential future use
    }
  }
};
</script>

<style scoped>
.home-container {
  padding: 48px 0;
  text-align: left;
}

.welcome-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--text);
  line-height: 1.2;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

@media (max-width: 991px) {
  .home-container {
    padding: 32px 0;
  }

  .welcome-title {
    font-size: 1.75rem;
  }
}
</style>
