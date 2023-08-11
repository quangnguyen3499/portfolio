<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light fixed-top py-0"
    >
      <div class="container">
        <a
          class="navbar-brand"
          href="/"
          @click.prevent="$emit('scroll', 'home')"
        >
          <Logo/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style="color: gray; font-size: 23px;"
            ><i class="fas fa-bars"></i>
            </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/about"
                @click.prevent="$emit('scroll', 'about')"
                >About</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/skills"
                @click.prevent="$emit('scroll', 'skills')"
                >Skills</a
              >
            </li>
            <!-- <li class="nav-item mx-2 ">
              <a
                class="nav-link"
                href="/portfolio"
                @click.prevent="$emit('scroll', 'portfolio')"
                >Portfolio</a
              >
            </li> -->
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="/contact"
                @click.prevent="$emit('scroll', 'contact')"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "./helpers/Logo";
import info from "../../info";

export default {
  name: "Navbar",
  data() {
    return {
      navbarConfig: info.config.navbar,
    };
  },
  components: {
    Logo,
  },
};
</script>

<style scoped>
.nav-link {
  font-weight: 500;
  font-size: 16px;
}
.nav-link:hover{
  background-color: rgba(160, 159, 159, 0.336);
}

button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

nav {
  position: fixed !important;
}

.navbar-blur {
  background-color: #ffffff7e;
  backdrop-filter: blur(12px);
}

.bg-light {
  background: linear-gradient(181.2deg, rgb(181, 239, 249) 10.5%, rgb(254, 254, 254) 86.8%);
}
</style>
