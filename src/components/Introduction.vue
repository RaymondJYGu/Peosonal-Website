<template>
  <div class="intro">
    <a class="title"> Hi. I'm Jingyao. </a>
    <a class="title"> A software developer. </a>
    <a class="subtitle">
      I am passionate about web dev, game dev, and app dev.
    </a>
    <a class="subtitle"> And I am also a data analyst. </a>
    <div class="links">
      <div class="link" @click="githublink">
        <img src="@/assets/Git.png" />
      </div>

      <div class="link" @click="linkedinlink">
        <img src="@/assets/LinkedIn.png" />
      </div>

      <div class="link" @click="emaillink">
        <img src="@/assets/Gmail.png" />
      </div>

      <div class="link">
        <router-link to="/Wechat"
          ><img src="@/assets/Wechat.png"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  methods: {
    githublink: function () {
      window.open("https://github.com/RaymondJYGu");
    },
    linkedinlink: function () {
      window.open("https://www.linkedin.com/in/jingyao-gu-1496b1168/");
    },
    emaillink: function () {
      window.open("mailto:gjyraymond@gmail.com");
    },
    wechatlink: function () {
      window.open("https://github.com/RaymondJYGu");
    },
  },
};
</script>

<style scoped lang="scss">
.intro {
  position: -webkit-sticky;
  position: sticky;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 45%;
  padding-top: 50px;
  padding-left: 100px;
  padding-right: 50px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.title {
  text-align: left;
  font-family: Monaco;
  position: relative;
  width: 100%;
  color: #080808;
  font-size: 50px;
  font-weight: 100;
  letter-spacing: -5px;
  margin-bottom: 20px;
}
.subtitle {
  position: relative;
  text-align: left;
  font-family: Monaco;
  width: 100%;
  max-width: 800px;
  color: #10181a;
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 40px;
}
.links {
  position: relative;
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
}
.link {
  position: relative;
  width: 80px;
  height: 80px;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: #5bc6ce;
    box-shadow: 0 0 10px 10px #5bc6ce;
  }
}
</style>
