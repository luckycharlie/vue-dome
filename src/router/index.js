import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import HelloFromVux from "@/components/HelloFromVux";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/hellovux",
      name: "HelloFromVux",
      component: HelloFromVux
    }
  ]
});
