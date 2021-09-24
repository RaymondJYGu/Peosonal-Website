<template>
  <div class="home">
    <Introduction />
    <RecentProject />
  </div>
</template>

<script lang="ts">
import RecentProject from "@/components/RecentProject.vue";
import Introduction from "@/components/Introduction.vue";

export default {
  name: "Home",
  components: {
    Introduction,
    RecentProject,
  },
};
</script>

<style scoped lang="scss">
.home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f8f7df;
  overflow-y: auto;
}
@media (max-width: 800px) {
  .home {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
  }
}
</style>
