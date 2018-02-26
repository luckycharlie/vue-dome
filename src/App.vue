<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <content></content>
    <router-view/>
  </div>
</template>

<script>
import Hello from "@/components/Hello";
import Content from "@/components/Content";
export default {
  name: "App",
  components: { Hello, Content }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
