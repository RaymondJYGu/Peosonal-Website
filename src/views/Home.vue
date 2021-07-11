<template>
  <div class="home">
    <h1>Welcome to my personal website</h1>
    <RecentProject />
    <WorkExperience />
    <Contact />
  </div>
</template>

<script lang="ts">
import RecentProject from "@/components/RecentProject.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    RecentProject,
    WorkExperience,
    Contact,
  },
};
</script>

<style scoped lang="scss">
.home {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #b6e4eb;
  overflow-x: auto;
  overflow-y: auto;
}
</style>
