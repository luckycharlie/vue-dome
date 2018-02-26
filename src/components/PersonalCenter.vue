<template>
  <div>
    <group>
      <cell title="我的消息" value="评论我的跟帖和通知" is-link></cell>
      <cell-box is-link>我的关注</cell-box>
      <cell-box is-link>我的电台</cell-box>
      <cell title="金币商城" value="阿森纳VS曼城" is-link></cell>
      <cell title="京东特供" value="新人领188元红包" is-link></cell>
      <cell-box is-link>我的钱包</cell-box>
      <cell-box is-link>设置</cell-box>
    </group>
  </div>
</template>

<script>
import { Group, Cell, CellBox } from "vux";
export default {
  data() {
    return {};
  },
  components: {
    Group,
    CellBox,
    Cell
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
