<template>
  <div class="recentproject">
    <h3>Recent Projects</h3>
    <ul>
      <ul>
        <a
          href="https://github.com/RaymondJYGu/MusicOrchard"
          target="_blank"
          rel="noopener"
          >Game: Music Orchard(Swift)</a
        >
      </ul>
      <ul>
        <a
          href="https://github.com/RaymondJYGu/PredatorPreySystem"
          target="_blank"
          rel="noopener"
          >Parallel Computing: Predator-Prey System(C)</a
        >
      </ul>
      <ul>
        <a
          href="https://github.com/RaymondJYGu/Billboard"
          target="_blank"
          rel="noopener"
          >Survial Analysis: Billboard Music(R)</a
        >
      </ul>
      <ul>
        <a
          href="https://github.com/RaymondJYGu/BeijingAirQuality.git"
          target="_blank"
          rel="noopener"
          >Machine Learning: Beijing air quality(R)</a
        >
      </ul>
      <ul>
        <a
          href="https://github.com/RaymondJYGu/Snake"
          target="_blank"
          rel="noopener"
          >Game: Snake(Java)</a
        >
      </ul>
      <ul>
        <a
          href="https://github.com/RaymondJYGu/Peosonal-Website.git"
          target="_blank"
          rel="noopener"
          >Personal Website(Vuejs)</a
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
.recentproject {
  position: absolute;
  top: 0%;
  right: 0%;
  width: auto;
  height: auto;
  padding: 100px;
  overflow: none;
  display: flex;
  flex-direction: column;
}
h3 {
  font-size: 50px;
  margin: 20px 0 0;
}
ul {
  font-size: 20px;
  list-style-type: none;
  padding: 15px;
  display: outside;
}
a {
  color: #42b983;
}
</style>
