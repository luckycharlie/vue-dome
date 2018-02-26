import Vue from "vue";
import Router from "vue-router";
import PersonalCenter from "@/components/PersonalCenter";
import HomePage from "@/components/HomePage";
import Video from "@/components/Video";
import Live from "@/components/Live";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "PersonalCenter",
      component: PersonalCenter
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/video",
      name: "Video",
      component: Video
    },
    {
      path: "/live",
      name: "Live",
      component: Live
    }
  ]
});
