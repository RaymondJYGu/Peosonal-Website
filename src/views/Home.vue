<template>
  <div class="home">
    <h1>Welcome to my personal website</h1>
    <Intro />
    <RecentProject />
  </div>
</template>

<script lang="ts">
import RecentProject from "@/components/RecentProject.vue";
import Intro from "@/components/Introduction.vue";

export default {
  name: "Home",
  components: {
    Intro,
    RecentProject,
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
  background-color: #f8f7df;
  overflow-x: auto;
  overflow-y: auto;
}
</style>
