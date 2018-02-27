// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import FastClick from "fastclick";
import VueRouter from "vue-router";
import App from "./App";
import Mine from "./components/PersonalCenter"; //我的
import HomePage from "./components/HomePage"; //首页
import Video from "./components/Video"; //视频
import Live from "./components/Live"; //直播
import Setting from "./components/peoplecener/setting"; //设置
import PersonalSettings from "./components/peoplecener/PersonalSettings"; //个人设置

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
  },
  {
    path: "/setting",
    component: Setting
  },
  {
    path: "/personalSettings",
    component: PersonalSettings
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
