<template>
    <div>
        <x-header :left-options="{backText:''}">设置</x-header>
        <group>
            <cell title="个人设置" is-link link="/personalSettings"></cell>
            <cell title="阅读偏好" is-link></cell>
            <cell title="被屏蔽的用户" is-link></cell>
        </group>
        <group>
            <cell title="字体设置" value="系统字体" is-link></cell>
            <cell title="正文字号" value="中" is-link></cell>
            <cell title="语言环境" value="简体中文" is-link></cell>
            <cell title="个性换肤" value="恭贺新禧" is-link></cell>
        </group>

        <group>
            <x-switch title="夜间模式"></x-switch>
            <x-switch title="自动设置夜间模式"></x-switch>
            <cell title="离线阅读" is-link></cell>
        </group>

        <group>
            <cell title="推送设置" is-link></cell>
            <cell title="栏目插件设置" is-link></cell>
            <x-switch title="仅Wi-Fi网络下载图片"></x-switch>
            <x-switch title="列表视频Wi-Fi自动播放"></x-switch>
            <cell title="清理缓存" value="0.0 MB"></cell>
        </group>

        <group>
            <cell title="意见反馈" is-link></cell>
            <cell title="为网易新闻评分" is-link></cell>
            <cell title="态度封面" is-link></cell>
            <cell title="关于" is-link></cell>
        </group>
    </div>
</template>

<script>
    import {
        XHeader,
        Actionsheet,
        TransferDom,
        XSwitch,
        Cell,
        CellBox,
        CellFormPreview,
        Group,
        Badge
    } from "vux";

    export default {
        directives: {
            TransferDom
        },
        components: {
            XHeader,
            Actionsheet,
            XSwitch,
            Cell,
            CellBox,
            CellFormPreview,
            Group,
            Badge
        },
        data() {
            return {};
        }
    };
</script>

<style scoped>
    /* .vux-header {
      background-color: #ffffff !important;
    } */
    .vux-header .vux-header-title {
        color: black !important;
    }

    .vux-header .vux-header-left .left-arrow:before {
        border: 1px solid #000 !important;
        border-width: 1px 0 0 1px !important;
    }
</style>
