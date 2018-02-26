<template>
  <div>
    <flexbox orient="vertical" :gutter="0" class="flexbox">
      <flexbox-item><div class="flex-all"><img src="../assets/logo.png" alt=""></div></flexbox-item>
      <flexbox-item><div class="flex-name flex-all">有态度网友</div></flexbox-item>
      <flexbox-item><div class="flex-tag flex-all">跟帖局科员</div></flexbox-item>
    </flexbox>
    <flexbox class="flexbox">
        <flexbox-item>
            <div class="flex-above flex-all">0</div>
            <div class="flex-below flex-all">收藏</div>
        </flexbox-item>
         <flexbox-item>
            <div class="flex-above flex-all">0</div>
            <div class="flex-below flex-all">历史</div>
        </flexbox-item>
         <flexbox-item>
            <div class="flex-above flex-all">0</div>
            <div class="flex-below flex-all">跟帖</div>
        </flexbox-item>
    </flexbox>
    <group>
      <!-- <cell title="我的消息" value="评论我的跟帖和通知" is-link></cell> -->
      <cell title="我的消息" is-link>评论我的跟帖和通知我的关注&nbsp;<badge text="8"></badge></cell>
      <cell-box is-link>我的关注&nbsp;<badge></badge></cell-box>
      <cell-box is-link>我的电台</cell-box>
      <cell title="金币商城" value="阿森纳VS曼城" is-link></cell>
      <cell title="京东特供" value="新人领188元红包" is-link></cell>
      <cell-box is-link>我的钱包</cell-box>
      <cell-box is-link>设置</cell-box>
    </group>
  </div>
</template>

<script>
import { Group, Cell, CellBox, Badge, FlexboxItem, Flexbox } from "vux";
export default {
  data() {
    return {};
  },
  components: {
    Group,
    CellBox,
    Cell,
    Badge,
    FlexboxItem,
    Flexbox
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-all {
  text-align: center;
}
.flex-above {
  font-size: 2.2rem;
  font-weight: 400;
}
img {
  width: 30%;
}
.flex-name{
    font-size: 2.2rem;
    font-weight: 400;
}
.flexbox{
    background-color: #ffffff
}
</style>
