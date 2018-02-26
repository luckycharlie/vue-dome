// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import FastClick from "fastclick";
import VueRouter from "vue-router";
import App from "./App";
import Mine from "./components/PersonalCenter";
import HomePage from "./components/HomePage";
import Video from "./components/Video";
import Live from "./components/Live";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Mine
  },
  {
    path: "/home",
    component: HomePage
  },
  {
    path: "/video",
    component: Video
  },
  {
    path: "/live",
    component: Live
  }
];

const router = new VueRouter({
  routes
});

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app-box");
