<!--
 * @Author: YangQi
 * @Date: 2020-10-23 10:12:51
 * @LastEditors: YangQi
 * @LastEditTime: 2020-10-23 11:22:19
-->
<template>
    <div class="navMenu">
        <label v-for="(navMenu,index) in navMenus" :key="index">
            <router-link :to="{ name: 'elc', params: {id:navMenu.entity.name} }">
                <el-menu-item v-if="navMenu.childs==null&&navMenu.entity&&navMenu.entity.state==='ENABLE'" :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name" :route="navMenu.entity.value">
                    <i :class="navMenu.entity.icon"></i>
                    <span slot="title">{{navMenu.entity.alias}}</span>
                </el-menu-item>
            </router-link>

            <el-submenu v-if="navMenu.childs&&navMenu.entity&&navMenu.entity.state==='ENABLE'" :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name">
                <template slot="title">
                    <i :class="navMenu.entity.icon"></i>
                    <span> {{navMenu.entity.alias}}</span>
                </template>
                <NavMenu :navMenus="navMenu.childs"></NavMenu>
            </el-submenu>
        </label>

    </div>
</template>

<script>
export default {
    name: 'NavMenu',
    props: ['navMenus'],
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.home_container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .el-container {
    flex: 1;
  }
}
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header_l {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #ffffff;
    font-weight: 700;
    img {
      margin-right: 8px;
    }
    div {
      width: 100px;
    }
  }
  .header_r {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      li {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #ededed;
        margin-right: 18px;
        .header_r_icon {
          margin-right: 9px;
        }
      }
      li:last-child {
        margin-right: 32px;
      }
    }
    > div {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #fff;
      .admin_text {
        margin: 0 8px 0 15px;
      }
      .admin_icon {
        width: 9px;
        height: 5px;
        display: flex;
        align-items: center;
      }
    }
  }
}
.container {
  aside {
    background-color: #1d43a3;
  }
  .el-aside {
    overflow: visible;
    .is-active {
      background: linear-gradient(to right, #2160ff, #224ebf) !important;
    }
    .el-submenu .el-menu-item {
      height: 50px;
      line-height: 50px;
      padding: 0 45px;
      min-width: 150px;
    }
  }
  .el-menu {
    width: 150px;
  }
  .el-container {
    .el-header {
      height: 40px !important;
      background-color: #f2f2f2;
      box-shadow: 0px 5px 13px 0px rgba(194, 211, 255, 0.8);
      position: relative;
      .notice {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        .notice_l {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #ff164d;
          .notice_l_label {
            width: 45px;
            height: 21px;
            line-height: 21px;
            text-align: center;
            background-color: rgba(255, 30, 30, 0.1);
            border-radius: 100px;
            margin-right: 18px;
          }
          .notice_l_main {
            max-width: 600px;
            min-width: 300px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
          }
        }
        .notice_r {
          display: flex;
          align-items: center;
          font-size: 16px;
          font-weight: 600;
          color: #0563ff;
          .notice_r_line {
            width: 54px;
            text-align: center;
          }
        }
      }
    }
    .el-main {
      background-color: #f1f2f6;
    }
    .el-footer {
      height: 28px !important;
      background-color: #d7e2e8;
      text-align: center;
      color: #919191;
      font-size: 12px;
      line-height: 28px;
    }
  }
}
</style>


