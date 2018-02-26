<template>
  <div>
    <p>123</p>
    <p v-if="seen">{{tellchildren}}</p>
    <button v-on:click="clickMe">显示父传子</button>
    <button v-on:click="clickCh">显示子传父</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: false,
      informations: "i am from children" //子组件信息传父组件
    };
  },
  props: ["tellchildren"],
  mothods: {
    clickMe: function() {
      console.log(1);
      this.seen = true;
    },
    clickCh: function() {//子组件信息传父组件
      this.$emit("children-tell-me", this.informations);
    }
  }
};
</script>

<style scoped>
p {
  color: brown;
}
</style>

