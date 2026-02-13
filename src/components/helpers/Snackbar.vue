<template>
  <div
    id="snackbar"
    :class="{ show: showSnackbar }"
    :style="{ backgroundColor: snackbarColor }"
  >
    {{ snackbarMessage }}
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    showSnackbar: Boolean,
    snackbarMessage: String,
    snackbarColor: String,
  },
  watch: {
    showSnackbar(nv) {
      if (nv) setTimeout(() => this.$emit("close", false), 1900);
    },
  },
};
</script>

<style scoped>
#snackbar {
  visibility: hidden;
  min-width: 280px;
  margin-left: -140px;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  padding: 14px 20px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 100px;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

#snackbar.show {
  visibility: visible;
  animation: snackbar-in 0.3s ease, snackbar-out 0.3s ease 2.2s forwards;
}

@keyframes snackbar-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes snackbar-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
