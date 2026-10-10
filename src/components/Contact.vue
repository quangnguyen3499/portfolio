<template>
  <section class="contact-section" id="contact">
    <header class="section-header">
      <h2 class="section-title">Get in Touch</h2>
      <p class="section-subtitle">Send a direct message or reach out via email.</p>
    </header>
    <div class="contact-layout">
      <div class="contact-direct">
        <a :href="`mailto:${contactEmail}`" class="contact-link">
          <i class="fa fa-envelope"></i>
          <span>{{ contactEmail }}</span>
        </a>
      </div>
      <form class="contact-form" @submit.prevent="sendEmail">
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
  </section>
</template>

<script>
import Snackbar from "./helpers/Snackbar";
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  components: { Snackbar },
  inject: ["info"],
  data() {
    return {
      contactEmail: this.info.email,
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

      emailjs
        .send(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          {
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedText,
          },
          process.env.VUE_APP_EMAILJS_USER_ID
        )
        .then(() => {
          this.showSnackbar = true;
          this.snackbarMessage = "Thanks! Message sent successfully.";
          this.snackbarColor = "#1aa260";

          this.email = "";
          this.text = "";
          this.name = "";
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          this.showSnackbar = true;
          this.snackbarMessage = "Failed to send message. Please try again later.";
          this.snackbarColor = "#e74c3c";
        })
        .finally(() => {
          this.isSending = false;
        });
    },
  },
};
</script>

<style scoped>
.contact-section {
  padding: 0 0 32px;
}

.section-header {
  margin-bottom: 28px;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.25;
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}

.section-subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

.contact-layout {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
}

.contact-direct {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 8px 14px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  transition: border-color 0.2s, color 0.2s;
}

.contact-link:hover {
  color: var(--accent);
  border-color: rgba(255, 255, 255, 0.25);
}

.contact-link i {
  color: var(--accent);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-group {
  margin: 0;
}

.form-input {
  width: 100%;
  padding: 12px 14px;
  font-size: 0.92rem;
  font-family: inherit;
  color: var(--text);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.form-input::placeholder {
  color: var(--text-muted);
  opacity: 0.8;
}

.form-input:focus {
  outline: none;
  border-color: var(--accent);
}

.form-textarea {
  resize: vertical;
  min-height: 110px;
}

.btn-submit {
  align-self: flex-start;
  padding: 11px 22px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  color: var(--bg);
  background: var(--accent);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-submit:hover:not(:disabled) {
  opacity: 0.9;
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
