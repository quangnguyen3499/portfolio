<template>
  <div class="home-container d-flex flex-column justify-content-between h-100 py-lg-5 py-4">
    <div class="profile-header" data-aos="fade-right" data-aos-once="true" data-aos-duration="800">
      <!-- Profile Picture with modern glow -->
      <div class="profile-img-wrap mb-4 mx-auto mx-lg-0">
        <img :src="picture" alt="Quang Nguyen" class="profile-img" />
        <div class="img-glow-overlay"></div>
      </div>

      <!-- Developer Info -->
      <h1 class="profile-name text-center text-lg-left">{{ name }}</h1>
      
      <!-- Role Subtitle -->
      <div class="typewriter-container text-center text-lg-left mb-3">
        <span class="profile-badge mr-2">Role</span>
        <span class="typewriter-text font-weight-bold">{{ roles.join(" | ") }}</span>
      </div>
      
      <p class="profile-desc text-center text-lg-left mb-4">{{ description }}</p>

      <!-- Contact details -->
      <div class="profile-contact d-flex flex-column align-items-center align-items-lg-start gap-2 mb-4">
        <a :href="`mailto:${email}`" class="contact-link" title="Email">
          <i class="fa fa-envelope"></i>
          <span>{{ email }}</span>
        </a>
      </div>
    </div>

    <!-- CTA & Socials -->
    <div class="profile-footer d-flex flex-column align-items-center align-items-lg-start gap-3" data-aos="fade-right" data-aos-once="true" data-aos-duration="800" data-aos-delay="150">
      <div class="d-flex align-items-center flex-wrap gap-3 w-100 justify-content-center justify-content-lg-start">
        <a href="#contact" class="btn-contact-cta" @click.prevent="$emit('scroll', 'contact')">
          Get in touch <i class="fa fa-arrow-right ml-2"></i>
        </a>
        <div class="social-icons-row d-flex gap-2">
          <button type="button" class="social-btn" @click="open('linkedin')" v-tooltip.bottom="'LinkedIn'" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </button>
          <button type="button" class="social-btn" @click="open('github')" v-tooltip.bottom="'GitHub'" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </button>
          <button type="button" class="social-btn" @click="open('resume')" v-tooltip.bottom="'Resume'" aria-label="Resume">
            <i class="fa fa-file-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
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
      linkedin: info.links.linkedin,
      github: info.links.github,
      resume: info.links.resume,
      
      roles: [
        "Software Engineer",
        "Data & Automation Engineer",
      ]
    };
  },
  methods: {
    open(link) {
      const urls = { linkedin: this.linkedin, github: this.github, resume: this.resume };
      if (urls[link]) window.open(urls[link], "_blank");
    }
  }
};
</script>

<style scoped>
.home-container {
  height: 100%;
  width: 100%;
}

.profile-header,
.profile-footer {
  width: 100%;
}

.profile-img-wrap {
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, var(--accent) 0%, transparent 60%);
  transition: all 0.4s ease;
}

.profile-img-wrap:hover {
  transform: scale(1.03) rotate(3deg);
  box-shadow: 0 0 25px rgba(34, 211, 238, 0.4);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--bg);
  position: relative;
  z-index: 2;
}

.img-glow-overlay {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent-soft) 20%, transparent 70%);
  opacity: 0.4;
  z-index: 1;
}

.profile-name {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 800;
  color: var(--text);
  line-height: 1.15;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.typewriter-container {
  display: flex;
  align-items: center;
  font-size: 1.05rem;
  color: var(--text-muted);
}

@media (max-width: 991px) {
  .typewriter-container {
    justify-content: center;
  }
}

.profile-badge {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 4px 8px;
  border-radius: 4px;
}

.typewriter-text {
  color: var(--text);
}

.profile-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: none;
}

.profile-contact {
  width: 100%;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.25s ease;
}

.contact-link:hover {
  color: var(--accent);
  transform: translateX(4px);
}

.contact-link i {
  color: var(--accent);
  width: 18px;
  text-align: center;
}

.btn-contact-cta {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: var(--accent);
  color: var(--bg);
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.btn-contact-cta:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--accent-soft);
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--border);
  background: var(--surface-elevated);
  color: var(--text-muted);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.social-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
  transform: translateY(-2px);
}

.gap-2 { gap: 8px; }
.gap-3 { gap: 12px; }

@media (max-width: 991px) {
  .profile-img-wrap {
    width: 140px;
    height: 140px;
  }
  .profile-name {
    margin-top: 10px;
  }
}
</style>
