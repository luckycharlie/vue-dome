<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <assembly tellchildren="i am from father" v-on:children-tell-me="tellFather"></assembly>
    <p>子元素向父元素传递的信息：{{informations}}</p>
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
      msg: "向子组件传递信息",
      informations: ""
    };
  },
  components: { Hello, Assembly },
  methods: {
    tellFather: function(informations) {
      this.informations = informations;
    }
  }
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
