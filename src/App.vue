<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
          <tabbar-item link="/home">
              <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item link="/video">
              <span slot="label">视频</span>
          </tabbar-item>
          <tabbar-item link="/live">
              <span slot="label">直播</span>
          </tabbar-item>
          <tabbar-item link="/">
              <span slot="label">我的</span>
          </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from "vux";
export default {
  name: "app",
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
</style>
