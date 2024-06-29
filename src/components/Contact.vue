<template>
  <div class="py-4 p-st">
    <div class="container">
      <div class="text-center" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
        <span class="title text-center">Contact me</span>
      </div>
      <hr width="50%" />
      <br />
      <div class="text-center">
        <div class="mb-3" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          <input type="text" name="user_name" v-model="name" placeholder="Name" class="pinput"
            style="transition-delay: 0.2s" />
        </div>

        <div class="my-3" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          <input type="email" name="user_email" v-model="email" placeholder="Email" class="pinput"
            style="transition-delay: 0.4s" />
        </div>

        <div class="my-3" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          <textarea name="message" v-model="text" placeholder="Message" class="pinput" rows="4"
            style="transition-delay: 0.6s"></textarea>
        </div>

        <button @click.prevent="sendEmail" class="mt-1 btn mb-3" data-aos="fade" data-aos-once="true"
          data-aos-duration="1000" data-aos-offset="50">
          Send
        </button>
      </div>

      <Snackbar :showSnackbar="showSnackbar" @close="closeSnackbar" :snackbarMessage="snackbarMessage"
        :snackbarColor="snackbarColor" />
    </div>
  </div>
</template>

<script>
import Snackbar from "./helpers/Snackbar";

export default {
  name: "Contact",
  components: {
    Snackbar,
  },
  data() {
    return {
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
      if (!val) {
        setTimeout(() => {
          this.showSnackbar = val;
        }, 1000);
      }
    },
    sendEmail() {
      if (this.isSending) return;

      const trimmedName = this.name.trim();
      const trimmedEmail = this.email.trim();
      const trimmedText = this.text.trim();

      if (!trimmedName || !trimmedEmail || !trimmedText) {
        this.showSnackbar = true;
        this.snackbarMessage = "Please fill in all fields";
        this.snackbarColor = "#64808E";
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        this.showSnackbar = true;
        this.snackbarMessage = "Please enter a valid email address";
        this.snackbarColor = "#64808E";
        return;
      }

      this.isSending = true;

      const emailData = {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedText,
      };

      fetch('https://7ejozit5zh.execute-api.ap-southeast-1.amazonaws.com/prod/myMailSender', {
        method: 'POST',
        mode: "no-cors",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })
        .then(response => response.json())
        .then(data => {
          if (data === 'Email sent successfully') {
            this.showSnackbar = true;
            this.snackbarMessage = "Thanks! Message received.";
            this.snackbarColor = "#1aa260";

            this.email = "";
            this.text = "";
            this.name = "";
          } else {
            this.showSnackbar = true;
            this.snackbarMessage = "Oops! Something went wrong.";
            this.snackbarColor = "#64808E";
          }
        })
        .catch(error => {
          this.showSnackbar = true;
          this.snackbarMessage = "Oops! Something went wrong.";
          this.snackbarColor = "#64808E";
        })
        .finally(() => {
          this.isSending = false;
        });
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: 500;
}

.pinput {
  font-size: 14px;
  outline: none;
  border: none;
  border-radius: 7px;
  padding: 10px;
  width: 50%;
  transition: all 1s;
  background-color: #ededfb;
}

.btn {
  border-color: #759CC9;
  color: #759CC9;
  width: 50%;
}

.btn:hover,
.btn:focus {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

@media screen and (max-width: 1000px) {

  .pinput,
  .btn {
    width: 90%;
  }
}
</style>
