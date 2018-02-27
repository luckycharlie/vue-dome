<template>
    <div>
        <flexbox orient="vertical" :gutter="0" class="flexbox">
            <flexbox-item>
                <div class="flex-all"><img src="../../assets/logo.png" alt=""></div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-name flex-all">{{nickname}}</div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-tag flex-all">跟帖局科员</div>
            </flexbox-item>
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
    </div>
</template>

<script>
    import {FlexboxItem, Flexbox} from "vux";
    import Store from '../../store'

    export default {
        data() {
            return {
                nickname: ''
            };
        },
        components: {
            FlexboxItem,
            Flexbox
        },
        created() {
            if (Store.fetch().length == "0") {
                this.nickname = '未设置昵称'
            } else {
                this.nickname = Store.fetch()
            }
        }
    };
</script>

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

    .flex-name {
        font-size: 2.2rem;
        font-weight: 400;
    }

    .flexbox {
        background-color: #ffffff;
    }
</style>
