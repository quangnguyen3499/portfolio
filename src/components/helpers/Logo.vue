<template>
  <div class="logo">
    <span class="logo-name">{{ name }}</span>
    <span class="logo-dot">{{ dot }}</span>
  </div>
</template>

<script>
export default {
  name: "Logo",
  inject: ["info"],
  data() {
    return {
      name: this.info.logo_name,
      dot: ".",
    };
  },
};
</script>

<style scoped>
.logo {
  display: inline-flex;
  align-items: baseline;
}

.logo:hover .logo-name {
  color: var(--text);
}

.logo-name {
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--text);
  transition: color 0.2s;
}

.logo-dot {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent);
  margin-left: 1px;
}
</style>
