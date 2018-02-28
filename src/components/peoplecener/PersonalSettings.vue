<template>
    <div>

        <x-header :left-options="{backText:''}">个人设置</x-header>

        <group>
            <cell title="通行证" value="123456789@163.com"></cell>
        </group>

        <group>
            <cell title="头像" @click.native="showHead" is-link></cell>
            <cell title="昵称" :value="nickname" @click.native="showNc" is-link></cell>
            <!--<x-switch title="昵称" v-model="show2"></x-switch>-->
            <datetime v-model="timevalue"
                      @on-change="change"
                      title="生日"
                      @on-cancel="log('cancel')"
                      @on-confirm="log('confirm')"
                      @on-hide="log('hide', $event)">

            </datetime>
            <cell title="性别" @click.native="showSex" :value="nicksex" is-link></cell>
            
        </group>

        <group>
            <cell title="跟帖设备名称" @click.native="showIphone" :value="nickiphone" is-link></cell>
            <x-switch title="匿名跟帖" inline-desc="其他网友将不会看到你的用户名、头像和个人主页"></x-switch>
        </group>

        <div style="padding:15px;">
            <x-button @click.native="showBtn" type="warn">退出</x-button>
        </div>

        <actionsheet v-model="showhead" :menus="menuHead" @on-click-menu="clickHead" show-cancel></actionsheet><!--选择头像方式-->
        <actionsheet v-model="showsex" :menus="menuSex" @on-click-menu="clickSex"></actionsheet><!--选择性别-->
        <actionsheet v-model="showiphone" :menus="menuIphone" @on-click-menu="clickIphone"></actionsheet><!--选择设备型号-->

        <div v-transfer-dom><!--修改昵称-->
            <confirm v-model="showname"
                     show-input
                     ref="confirmNc"
                     title="修改昵称"
                     @on-cancel="onCancelNc"
                     @on-confirm="onConfirmNc"
                     @on-show="onShowNc"
                     @on-hide="onHideNc">
            </confirm>
        </div>

        <div v-transfer-dom><!--退出按钮弹框-->
            <confirm v-model="showbutton"
                ref="confirm"
                @on-cancel="onCancelBtn"
                @on-confirm="onConfirmBtn"
                @on-show="onShowBtn"
                @on-hide="onHideBtn">
                    <p style="text-align:center;font-size:1.3rem;font-weight:400">退出当前账号，将不能发表跟帖、参与话题讨论、同步订阅内容了</p>
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
  Confirm,
  Datetime,
  XButton
} from "vux";
import Store from "../../store";

export default {
  data() {
    return {
      nickname: "",
      nicksex: "男",
      nickiphone: "不显示",
      showhead: false,
      menuHead: {
        menuHead1: "拍照",
        menuHead2: "从相册选择"
      },
      showname: false,
      timevalue: "2015-11-12",
      showsex: false,
      menuSex: {
        menuSex1: "男",
        menuSex2: "女"
      },
      showiphone: false,
      menuIphone: {
        menuIphone1: "iphone 6s Plus",
        menuIphone2: "iphone",
        menuIphone3: "不显示"
      },
      showbutton: false
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
    Confirm,
    Datetime,
    XButton
  },
  methods: {
    //头像
    showHead() {
      this.showhead = true;
    },
    clickHead(key, item) {
      console.log(key, item);
    },

    //昵称
    onCancelNc() {
      console.log("on cancel");
    },
    onHideNc() {
      console.log("on hide");
    },
    onShowNc() {
      let nick_name = "";
      if (this.nickname == "请设置昵称") {
        this.$refs.confirmNc.setInputValue(nick_name);
      } else {
        this.$refs.confirmNc.setInputValue(this.nickname);
      }
    },
    onConfirmNc(value) {
      this.$refs.confirmNc.setInputValue("");
      Store.save(value);
      if (Store.fetch().length == "0") {
        this.nickname = "请设置昵称";
      } else {
        this.nickname = value;
      }
    },
    showNc() {
      this.showname = true;
    },

    //生日
    change(value) {
      console.log("change", value);
    },
    log(str1, str2 = "") {
      console.log(str1, str2);
    },

    //性别
    showSex() {
      this.showsex = true;
    },
    clickSex(key, item) {
      console.log(key, item);
      this.nicksex = item;
    },

    //手机型号
    showIphone() {
      this.showiphone = true;
    },
    clickIphone(key, item) {
      console.log(key, item);
      this.nickiphone = item;
    },

    //退出按钮
    onCancelBtn() {
      console.log("on cancel");
    },
    onConfirmBtn(msg) {
      console.log("on confirm");
      if (msg) {
        alert(msg);
      }
    },
    onHideBtn() {
      console.log("on hide");
    },
    onShowBtn() {
      console.log("on show");
    },
    showBtn() {
      this.showbutton = true;
    }
  },

  created() {
    if (Store.fetch().length == "0") {
      this.nickname = "请设置昵称";
    } else {
      this.nickname = Store.fetch();
    }
  }
};
</script>

<style scoped>

</style>
