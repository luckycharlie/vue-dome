<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <assembly tellChildren="i am from father"></assembly>
    <router-view/>
  </div>
</template>

<script>
import Hello from "./components/Hello";
import Assembly from "./components/Assembly";
export default {
  name: "App",
  data() {
    return {
      msg:"向子组件传递信息"
    };
  },
  components: { Hello, Assembly }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
