import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/wechat",
    name: "Wechat",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Wechat.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
