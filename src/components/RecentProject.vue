<template>
  <div class="recentproject">
    <h3>Recent Projects</h3>
    <ul>
      <ul>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >Game: Music Orchard</a
        >
      </ul>
      <ul>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
          target="_blank"
          rel="noopener"
          >Parallel Computing: Predator-Prey System</a
        >
      </ul>
      <ul>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
          target="_blank"
          rel="noopener"
          >Survial Analysis: Billboard Music</a
        >
      </ul>
      <ul>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
          target="_blank"
          rel="noopener"
          >Game: Snake</a
        >
      </ul>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "RecentProject",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  display: outside;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
