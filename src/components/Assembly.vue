<template>
  <div>
    <p>123</p>
    <p v-if="seen">{{tellChildren}}</p>
    <button v-on:click="clickMe">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: false
    };
  },
  props: ["tellChildren"],
  mothods: {
    clickMe: function() {
      console.log(1);
      this.seen = true;
    }
  }
};
</script>

<style scoped>
p {
  color: brown;
}
</style>

