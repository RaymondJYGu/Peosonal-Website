<template>
  <div class="contact">
    <h3>Contact me with the following links</h3>
    <div @click="githublink">
      <img src="@/assets/Git.png" />
    </div>

    <div @click="linkedinlink">
      <img src="@/assets/Git.png" />
    </div>

    <div @click="emaillink">
      <img src="@/assets/Git.png" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Contact",
  methods: {
    githublink: function () {
      window.open("https://github.com/RaymondJYGu");
    },
    linkedinlink: function () {
      window.open("https://github.com/RaymondJYGu");
    },
    emaillink: function () {
      window.open("https://github.com/RaymondJYGu");
    },
  },
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
