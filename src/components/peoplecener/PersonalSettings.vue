<template>
    <div>

        <x-header :left-options="{backText:''}">个人设置</x-header>

        <group>
            <cell title="通行证" value="123456789@163.com"></cell>
        </group>

        <group>
            <cell title="头像" @click.native="showModule" is-link></cell>
        </group>

        <actionsheet v-model="show" :menus="menus" @on-click-menu="click" show-cancel></actionsheet>

        <group>
            <cell title="昵称" :value="nickname" @click.native="showNc" is-link></cell>
            <!--<x-switch title="昵称" v-model="show2"></x-switch>-->
        </group>

        <div v-transfer-dom>
            <confirm v-model="show2"
                     show-input
                     ref="confirm2"
                     title="修改昵称"
                     @on-cancel="onCancel"
                     @on-confirm="onConfirm2"
                     @on-show="onShow2"
                     @on-hide="onHide">
            </confirm>
        </div>

    </div>
</template>

<script>
    import {
        XHeader,
        Group,
        Cell,
        XSwitch,
        TransferDom,
        Actionsheet,
        Confirm
    } from "vux";
    import Store from '../../store'

    export default {
        data() {
            return {
                show: false,
                menus: {
                    menu1: "拍照",
                    menu2: "从相册选择"
                },
                show2: false,
                nickname: ""
            };
        },
        directives: {
            TransferDom
        },
        components: {
            XHeader,
            Group,
            Cell,
            XSwitch,
            TransferDom,
            Actionsheet,
            Confirm
        },
        methods: {
            showModule() {
                this.show = true
            },
            click(key, item) {
                console.log(key, item)
            },

            onCancel() {
                console.log('on cancel')
            },
            onHide() {
                console.log('on hide')
            },
            onShow2() {
                let nick_name = '';
                if (this.nickname == "请设置昵称") {
                    this.$refs.confirm2.setInputValue(nick_name)
                } else {
                    this.$refs.confirm2.setInputValue(this.nickname)
                }

            },
            onConfirm2(value) {
                this.$refs.confirm2.setInputValue('')
                this.nickname = value
                Store.save(value)
            },
            showNc() {
                this.show2 = true
            }
        },
        created() {
            if (Store.fetch().length == "0") {
                this.nickname = '请设置昵称'
            } else {
                this.nickname = Store.fetch()
            }
        }
    };
</script>

<style scoped>

</style>
