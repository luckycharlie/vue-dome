<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <content tellChildren="i am from father"></content>
    <router-view/>
  </div>
</template>

<script>
import Hello from "./components/Hello";
import Content from "./components/Content";
export default {
  name: "App",
  data() {
    return {
      msg:"向子组件传递信息"
    };
  },
  components: { Hello, Content }
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
