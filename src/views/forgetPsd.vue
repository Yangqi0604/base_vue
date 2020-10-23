<!--
 * @Author: Lijiahui
 * @Date: 2020-10-16 10:43:57
 * @LastEditors: Lijiahui
 * @LastEditTime: 2020-10-20 00:07:02
-->
<template>
  <div class="login_bck">
    <div class="login_content">
      <div class="title_bar"></div>
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
import tabsPsd from "./forgetPsd/components/psdOne";
import tabsPhone from "./forgetPsd/components/psdSuccess";

export default {
 components: {
    psdOne,
    psdSuccess,
  },
  data() {
    return {
     
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
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .title_bar {
    width: 100%;
    color: #3164fe;
   height: 67px;
  }
  .login_content {
    width: 30%;
    height:60%;
    border-radius: 20px;
    padding: 10px;
    border: 1px solid #3164fe;
  }
}
/deep/.el-tabs__content {
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

.footer {
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #B7B9C2FF;
  line-height: 30px;
  position: absolute;    
  bottom: 20px;
  left: 35%;
  justify-content: center;
}
</style>