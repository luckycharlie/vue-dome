<template>
  <div id="app" style="height:100%;">
    <view-box ref="viewBox">
        <router-view v-on:low-set-seen="getSeen"></router-view>
        <tabbar slot="bottom" class="tabbar" v-if="seen">
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
    </view-box>
  </div>
</template>

<script>
import { ViewBox, Tabbar, TabbarItem, Group, Cell } from "vux";
export default {
  name: "app",
  data() {
    return {
      seen: true
    };
  },
  components: {
    ViewBox,
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  methods: {
    getSeen(value) {
      this.seen = value;
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
.tabbar {
  position: fixed !important;
}
</style>
