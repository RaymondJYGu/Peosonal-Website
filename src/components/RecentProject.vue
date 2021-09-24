<template>
  <div class="recentproject">
    <h3>Recent Projects</h3>
    <ul>
      <div class="box">
        <ul>
          <a
            href="https://github.com/RaymondJYGu/MusicOrchard"
            target="_blank"
            rel="noopener"
            >Game: Music Orchard(Swift)</a
          >
        </ul>
        <ul>
          <body>
            Music Orchaed is an IOS app that aims to teach young children about
            music. I created original graphics and sounds for this game, as well
            as user interfaces.
          </body>
        </ul>
      </div>
      <div class="box">
        <ul>
          <a
            href="https://github.com/RaymondJYGu/PredatorPreySystem"
            target="_blank"
            rel="noopener"
            >Parallel Computing: Predator-Prey System(C)</a
          >
        </ul>
        <ul>
          <body>
            This is a model we build to describe predator-prey systems in c++.
            The model is then implemented using multi-core processors as well as
            OpenACC models, increasing computing speed by as much as 1000%.
          </body>
        </ul>
      </div>
      <div class="box">
        <ul>
          <a
            href="https://github.com/RaymondJYGu/Billboard"
            target="_blank"
            rel="noopener"
            >Survial Analysis: Billboard Music(R)</a
          >
        </ul>
        <ul>
          <body>
            This project aims to analyze how long a piece of music will last on
            the Billboard Weekly Top 100 chart based its attributes. We include
            models like Kaplan-Meier, Cox-PH model and AFT model to help better
            understand how the rankings change over time.
          </body>
        </ul>
      </div>
      <div class="box">
        <ul>
          <a
            href="https://github.com/RaymondJYGu/BeijingAirQuality.git"
            target="_blank"
            rel="noopener"
            >Machine Learning: Beijing air quality(R)</a
          >
        </ul>
        <ul>
          <body>
            We use two supervised learning methods, namely regression and
            classification, to analyze what's affecting Beijing's air quality
            and to predict what's tha air quality will be based on given data.
          </body>
        </ul>
      </div>
      <div class="box">
        <ul>
          <a
            href="https://github.com/RaymondJYGu/SpeechRecognition"
            target="_blank"
            rel="noopener"
            >Speech to Text Recognition software:Deep Learning(Python)</a
          >
        </ul>
        <ul>
          <body>
            We are trying to built a software that converts audio files into
            text files using Python and Python libraries, while also developing
            a deep learning architecture for automatic speech recognition.
          </body>
        </ul>
      </div>
      <div class="box">
        <ul>
          <a
            href="https://github.com/RaymondJYGu/Peosonal-Website.git"
            target="_blank"
            rel="noopener"
            >Personal Website(Vuejs)</a
          >
        </ul>
        <ul>
          <body>
            The website you are currently viewing using Vue.js framework.
          </body>
        </ul>
      </div>
      <div class="box">
        <ul>
          <a
            href="https://github.com/RaymondJYGu/CovidViz"
            target="_blank"
            rel="noopener"
            >Covid Visualization(D3.js)</a
          >
        </ul>
        <ul>
          <body>
            Trying to built a dynamic and interactive visualization on global
            Covid cases using d3.js. Also predicting and visualizing future
            global covid map given new policies and vaccines.
          </body>
        </ul>
      </div>
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
  width: 40%;
  height: auto;
  padding-top: 100px;
  padding-right: 50px;
  padding-left: 10px;
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
  padding: 10px;
  display: outside;
}
a {
  color: #42b983;
  font-size: 30px;
}
body {
  font-size: 18px;
}
.box {
  font-size: 24px;
  border: 10px solid black;
  padding: 2rem 1rem;
  min-height: 3em;
  resize: both;
  background: linear-gradient(
    to top,
    rgba(#cffffe, 0.3),
    rgba(#f9f7d9, 0.3),
    rgba(#fce2ce, 0.3),
    rgba(#ffc1f3, 0.3)
  );
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23cffffe' /%3E%3Cstop offset='25%25' stop-color='%23f9f7d9' /%3E%3Cstop offset='50%25' stop-color='%23fce2ce' /%3E%3Cstop offset='100%25' stop-color='%23ffc1f3' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3'/%3E %3C/svg%3E")
    1;
}
</style>
