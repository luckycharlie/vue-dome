<template>
    <div>
        <uppart></uppart>
        <lowerpart v-on:low-set-seen="getSeen" @click.native="seeting"></lowerpart>
    </div>
</template>

<script>
import uppart from "./peoplecener/uppart";
import lowerpart from "./peoplecener/lowerpart";

export default {
  data() {
    return {
      seen: ""
    };
  },
  components: { uppart, lowerpart },
  methods: {
    getSeen(value) {
      this.seen = value;
    },
    seeting() {
      this.$emit("low-set-seen", this.seen); //向上传值
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
