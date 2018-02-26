<template>
  <div>
      <tabbar>
          <tabbar-item>
              <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item>
              <span slot="label">视频</span>
          </tabbar-item>
          <tabbar-item>
              <span slot="label">直播</span>
          </tabbar-item>
          <tabbar-item>
              <span slot="label">我的</span>
          </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from "vux";
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
};
</script>

<style scoped>

</style>


