<template>
    <div>
        <group>
            <!-- <cell title="我的消息" value="评论我的跟帖和通知" is-link></cell> -->
            <cell title="我的消息" is-link>评论我的跟帖和通知我的关注&nbsp;
                <badge text="8"></badge>
            </cell>
            <cell-box is-link>我的关注&nbsp;
                <badge></badge>
            </cell-box>
            <cell-box is-link>我的电台</cell-box>
            <cell title="金币商城" value="阿森纳VS曼城" is-link></cell>
            <cell title="京东特供" value="新人领188元红包" is-link></cell>
            <cell title="活动广场" value="1元参与，瓜分2亿" is-link></cell>
            <cell-box is-link>我的钱包</cell-box>
            <cell-box is-link>免流量看新闻</cell-box>
            <cell-box is-link>扫一扫</cell-box>
            <cell-box is-link link="/setting" @click.native="seeting">设置</cell-box>
        </group>
    </div>
</template>

<script>
import { Group, Cell, CellBox, Badge } from "vux";

export default {
  data() {
    return {
      seen: false
    };
  },
  components: {
    Group,
    CellBox,
    Cell,
    Badge
  },
  methods: {
    seeting() {
      this.$emit("low-set-seen", this.seen); //向上传值
    }
  }
};
</script>

<style scoped>

</style>

