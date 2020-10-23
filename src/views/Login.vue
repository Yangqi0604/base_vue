<!--
 * @Author: Lijiahui
 * @Date: 2020-10-16 10:43:57
 * @LastEditors: Lijiahui
 * @LastEditTime: 2020-10-20 00:07:02
-->
<template>
  <div class="login_bck">
    <div class="login_content">
      <div class="title_1">欢迎登录</div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="账户密码" name="first">
          <tabsPsd ref="tabsPsd" />
        </el-tab-pane>
        <el-tab-pane label="手机" name="second">
          <tabsPhone ref="tabsPhone" />
        </el-tab-pane>
      </el-tabs>
      <div class="regest">
        <span>还没有账号？<a class="target">立即注册</a></span>
      </div>
    </div>
    <div class="footer">
      <div>智慧物业管理</div>
      <div>
        备案号:京ICP备16017530号-1 版权商标所有“国天云®”,请勿侵权 Copyright ©
        2012-2017. All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script>
import tabsPsd from "./Login/components/el_tabs_password";
import tabsPhone from "./Login/components/el_tabs_phone";
export default {
  components: {
    tabsPsd,
    tabsPhone,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
};
</script>
<style lang='less' scoped>
.login_bck {
  width: 100%;
  height: 100%;
  background: url("../assets/images/denglu_img_bg.png") no-repeat center 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .title_1 {
    width: 96px;
    font-size: 24px;
    font-weight: bold;
    color: #3164fe;
    line-height: 67px;
    margin-left: 41%;
  }
  .login_content {
    width: 30%;
    height:60%;
    background: #ffffff;
    border-radius: 20px;
    padding: 10px;
    border: 6px solid #87beff99;
    .regest {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #606266;
      margin-top: 30px;
      margin-bottom:20px;
       .target {
        text-decoration: none;
        color: #3264fe;
      }
    }
  }

  /deep/.el-tabs__nav {
    margin-top: 0px;
  }
}
/deep/.el-tabs__content {
  // margin-top: 30px;
  // /deep/.el-input {
  //   margin-bottom: 20px;
  // }
  // /deep/.el-input__inner {
  //   width: 85%;
  //   height: 40px;
  // }
  // /deep/.el-input--mini .el-input__inner {
  //   width: 60%;
  // }
  /deep/.el-input--prefix .el-input__inner {
    padding-left: 45px;
  }
  /deep/.el-icon-view:before {
    position: absolute;
    right: 75px;
    color: black;
  }
  /deep/.el-input__icon {
    color: #3264feff;
    position: relative;
  }
  /deep/.el-input__icon:after {
    content: " ";
    position: absolute;
    width: 1px;
    height: 21px;
    background: #b2b2b2;
    right: 0;
    bottom: 10px;
    left: 25px;
  }
}
/deep/.el-tabs__nav {
  margin-top: 0px;
}
/deep/.el-tabs__nav {
  height: 67px;
  margin-top: 46px;
  margin-left: 59px;
}
/deep/.el-tabs__item {
  height: 18px;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 67px;
}
/deep/.el-tabs__active-bar {
  background-color: #3264feff;
  margin-top: 15px;
}
/deep/.el-tabs__item.is-active {
  color: #3264feff;
}

/deep/ .el-tabs__nav-wrap::after {
  background-color: #ffffff !important;
}
.footer {
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  line-height: 30px;
  position: absolute;
  bottom: 20px;
  left: 35%;
  justify-content: center;
}
</style>