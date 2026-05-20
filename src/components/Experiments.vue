<template>
  <div class="py-4 p-st">
    <div class="section-inner">
      <header class="section-header" data-aos="fade" data-aos-once="true" data-aos-duration="600">
        <h2 class="section-title">AI Research Labs</h2>
        <p class="section-subtitle">Interactive AI demos and research experiments from Saigon Technology</p>
      </header>

      <div class="row" style="display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px;">
        <div
          class="col-xl-4 col-bg-4 col-md-6 col-sm-12"
          style="padding: 15px; box-sizing: border-box;"
          v-for="(item, idx) in experiments_info"
          :key="item.name"
        >
          <Card
            :style="{ 'transition-delay': (idx % 3) / 4.2 + 's' }"
            :portfolio="item"
            @show="showModalFn"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="10"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          />
        </div>
      </div>
      <div class="text-center py-3" v-if="showBtn !== 'show less'">
        <button class="btn" style="margin: 0 auto; display: block;" @click.prevent="showMore">{{ showBtn }}</button>
      </div>
    </div>
    <transition name="modal">
      <Modal
        :showModal="showModal"
        @close="closeModal"
        v-if="showModal"
        :portfolio="modal_info"
      />
    </transition>
  </div>
</template>

<script>
import Card from "./helpers/Card";
import Modal from "./helpers/Modal";

export default {
  name: "Experiments",
  inject: ["info"],
  components: {
    Card,
    Modal
  },
  data() {
    return {
      all_info: this.info.experiments || [],
      experiments_info: [],
      showModal: false,
      modal_info: {},
      number: 6,
      showBtn: "show more",
      shower: 0,
    };
  },
  created() {
    this.experiments_info = this.all_info.slice(0, this.number);
  },
  watch: {
    number() {
      this.experiments_info = this.all_info.slice(0, this.number);
    },
  },
  methods: {
    closeModal() {
      this.showModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showModalFn(item) {
      this.modal_info = item;
      this.showModal = true;
    },
    showMore() {
      if (this.number !== this.all_info.length) {
        this.number += 6;

        if (this.number > this.all_info.length) {
          this.number = this.all_info.length;
        }

        window.scrollBy({
          top: document.getElementsByClassName("smcard")[0]?.clientHeight || 300,
          behavior: "smooth",
        });
      }

      if (this.number === this.all_info.length && this.shower === 0) {
        this.shower = 1;
        this.showBtn = "show less";
      }
    },
  },
};
</script>

<style scoped>
.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
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

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn {
  border-color: var(--accent);
  color: var(--accent);
  background-color: transparent;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn:hover, .btn:focus {
  background-color: var(--accent);
  border-color: var(--accent);
  color: var(--bg);
  cursor: pointer;
  outline: none;
}
</style>
