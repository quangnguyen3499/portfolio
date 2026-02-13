<template>
  <section class="contact" id="contact">
    <div class="section-inner">
      <header class="section-header" data-aos="fade" data-aos-once="true" data-aos-duration="600">
        <h2 class="section-title">Get in Touch</h2>
        <p class="section-subtitle">Open to opportunities and collaboration. Send a message or reach out directly.</p>
      </header>
      <div class="contact-layout">
        <div class="contact-direct" data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
          <a :href="`mailto:${contactEmail}`" class="contact-link">
            <i class="fa fa-envelope"></i>
            <span>{{ contactEmail }}</span>
          </a>
          <a :href="`tel:${phoneLink}`" class="contact-link">
            <i class="fa fa-phone"></i>
            <span>{{ contactPhone }}</span>
          </a>
        </div>
        <form class="contact-form" @submit.prevent="sendEmail" data-aos="fade-up" data-aos-once="true" data-aos-duration="500" data-aos-delay="80">
          <div class="form-group">
            <input type="text" v-model="name" placeholder="Your name" class="form-input" />
          </div>
          <div class="form-group">
            <input type="email" v-model="email" placeholder="Your email" class="form-input" />
          </div>
          <div class="form-group">
            <textarea v-model="text" placeholder="Your message" class="form-input form-textarea" rows="4"></textarea>
          </div>
          <button type="submit" class="btn-submit" :disabled="isSending">
            {{ isSending ? "Sending…" : "Send message" }}
          </button>
        </form>
      </div>
      <Snackbar
        :showSnackbar="showSnackbar"
        @close="closeSnackbar"
        :snackbarMessage="snackbarMessage"
        :snackbarColor="snackbarColor"
      />
    </div>
  </section>
</template>

<script>
import Snackbar from "./helpers/Snackbar";

export default {
  name: "Contact",
  components: { Snackbar },
  inject: ["info"],
  data() {
    return {
      contactEmail: this.info.email,
      contactPhone: this.info.phone,
      phoneLink: this.info.phone.replace(/\s|\(|\)/g, ""),
      email: "",
      name: "",
      text: "",
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
      isSending: false,
    };
  },
  methods: {
    closeSnackbar(val) {
      if (!val) setTimeout(() => { this.showSnackbar = val; }, 1000);
    },
    sendEmail() {
      if (this.isSending) return;
      const trimmedName = this.name.trim();
      const trimmedEmail = this.email.trim();
      const trimmedText = this.text.trim();
      if (!trimmedName || !trimmedEmail || !trimmedText) {
        this.showSnackbar = true;
        this.snackbarMessage = "Please fill in all fields";
        this.snackbarColor = "#475569";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
        this.showSnackbar = true;
        this.snackbarMessage = "Please enter a valid email address";
        this.snackbarColor = "#475569";
        return;
      }
      this.isSending = true;
      fetch("https://kyv343xnvd.execute-api.ap-southeast-1.amazonaws.com/default", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, message: trimmedText }),
      })
        .then(() => {
          this.showSnackbar = true;
          this.snackbarMessage = "Thanks! Message received.";
          this.snackbarColor = "#22d3ee";
          this.email = "";
          this.text = "";
          this.name = "";
        })
        .catch(() => {
          this.showSnackbar = true;
          this.snackbarMessage = "Thanks! Message received.";
          this.snackbarColor = "#22d3ee";
        })
        .finally(() => { this.isSending = false; });
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 80px 0;
  background: var(--surface);
}

.section-inner {
  max-width: 640px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--text-muted);
}

.contact-layout {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.contact-direct {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  text-decoration: none;
  font-size: 0.95rem;
  padding: 10px 16px;
  background: var(--surface-elevated);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: border-color 0.2s, color 0.2s;
}

.contact-link:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.contact-link i {
  color: var(--accent);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  margin: 0;
}

.form-input {
  width: 100%;
  padding: 14px 18px;
  font-size: 1rem;
  font-family: inherit;
  color: var(--text);
  background: var(--surface-elevated);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input::placeholder {
  color: var(--text-muted);
  opacity: 0.8;
}

.form-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-submit {
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  color: var(--bg);
  background: var(--accent);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.btn-submit:hover:not(:disabled) {
  background: var(--accent-hover);
  transform: translateY(-1px);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-submit:focus {
  outline: none;
}
</style>
