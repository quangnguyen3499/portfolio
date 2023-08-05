<template>
  <div
    class="py-4 p-st"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          >About Me.</span
        >
      </div>
      <hr
        width="50%"
      />
      <div class="row">        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="education"/>
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="experience"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "./helpers/Timeline";
import info from "../../info";

export default {
  name: "About",
  components: {
    Timeline,
  },
  data() {
    return {
      education: {
        title: "Education",
        data: info.education,
      },
      experience: {
        title: "Experiences",
        data: info.experience,
      },
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: 500;
}
</style>
