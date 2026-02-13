<template>
  <section class="hero">
    <div class="hero-bg" aria-hidden="true"></div>
    <div class="hero-inner">
      <div class="hero-grid">
        <div class="hero-content" data-aos="fade-right" data-aos-once="true" data-aos-duration="700">
          <p class="hero-badge">Software Engineer</p>
          <h1 class="hero-title">{{ name }}</h1>
          <p class="hero-subtitle">{{ title }}</p>
          <p class="hero-desc">{{ description }}</p>
          <div class="hero-contact">
            <a :href="`mailto:${email}`" class="hero-link" title="Email">
              <i class="fa fa-envelope"></i>
              <span>{{ email }}</span>
            </a>
            <a :href="`tel:${phoneLink}`" class="hero-link" title="Phone">
              <i class="fa fa-phone"></i>
              <span>{{ phone }}</span>
            </a>
          </div>
          <div class="hero-cta">
            <a href="#contact" class="btn-primary" @click.prevent="$emit('scroll', 'contact')">
              Get in touch
            </a>
            <div class="hero-icons">
              <button type="button" class="btn-icon" @click="open('linkedin')" v-tooltip.bottom="'LinkedIn'" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </button>
              <button type="button" class="btn-icon" @click="open('github')" v-tooltip.bottom="'GitHub'" aria-label="GitHub">
                <i class="fab fa-github"></i>
              </button>
              <button type="button" class="btn-icon" @click="open('resume')" v-tooltip.bottom="'Resume'" aria-label="Resume">
                <i class="fa fa-file-alt"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="hero-media" data-aos="fade-left" data-aos-once="true" data-aos-duration="700" data-aos-delay="150">
          <div class="hero-img-wrap">
            <img :src="picture" alt="Quang Nguyen" class="hero-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  inject: ["info"],
  data() {
    const info = this.info;
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      title: info.title,
      email: info.email,
      phone: info.phone,
      phoneLink: info.phone.replace(/\s|\(|\)/g, ""),
      linkedin: info.links.linkedin,
      github: info.links.github,
      resume: info.links.resume,
    };
  },
  methods: {
    open(link) {
      const urls = { linkedin: this.linkedin, github: this.github, resume: this.resume };
      if (urls[link]) window.open(urls[link], "_blank");
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  padding: 48px 0 64px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 50% at 70% 40%, var(--accent-soft) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 20% 80%, rgba(34, 211, 238, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.hero-badge {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 6px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
  letter-spacing: 0.03em;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text);
  line-height: 1.15;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.hero-desc {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 520px;
  margin-bottom: 24px;
}

.hero-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 28px;
}

.hero-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.hero-link:hover {
  color: var(--accent);
}

.hero-link i {
  color: var(--accent);
  width: 18px;
  text-align: center;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}

.btn-primary {
  display: inline-block;
  padding: 12px 24px;
  background: var(--accent);
  color: var(--bg);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
}

.hero-icons {
  display: flex;
  gap: 10px;
}

.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-muted);
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.btn-icon:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
}

.btn-icon:focus {
  outline: none;
}

.hero-media {
  display: flex;
  justify-content: center;
}

.hero-img-wrap {
  position: relative;
  width: 320px;
  height: 320px;
}

.hero-img-wrap::before {
  content: "";
  position: absolute;
  inset: -8px;
  background: linear-gradient(135deg, var(--accent) 0%, transparent 50%);
  border-radius: 50%;
  opacity: 0.2;
  z-index: 0;
}

.hero-img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--surface-elevated);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
}

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content {
    order: 2;
  }

  .hero-media {
    order: 1;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-contact {
    justify-content: center;
  }

  .hero-cta {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .hero {
    padding: 32px 0 48px;
    min-height: auto;
  }

  .hero-img-wrap {
    width: 220px;
    height: 220px;
  }

  .hero-link span {
    word-break: break-all;
  }
}
</style>
