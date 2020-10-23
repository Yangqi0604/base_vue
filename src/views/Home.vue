<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App-维拓" />
  </div> -->
  <el-container class="home_container">
    <!-- 头部区域 -->
    <!-- <el-header class="header">
      <div class="header_l">
        <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" width="17px" height="21px" alt="">
        <div>智慧物业</div>
        <i class="el-icon-s-unfold"></i>
      </div>
      <div class="header_r">
        <ul>
          <li>
            <div class="header_r_icon"><i class="el-icon-search"></i></div>
            <div>搜索</div>
          </li>
          <li>
            <div class="header_r_icon">
              <el-badge is-dot><i class="el-icon-bell"></i></el-badge>
            </div>
            <div>消息</div>
          </li>
          <li>
            <div class="header_r_icon"><i class="el-icon-question"></i></div>
            <div>帮助</div>
          </li>
        </ul>
        <div>
          <div>
            <el-image style="width: 40px; height: 40px; border-radius: 40px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
          </div>
          <div class="admin_text">管理员</div>
          <div class="admin_icon"><img src="../assets/images/home_ic_xiala.png" width="9px" height="5px" alt=""></div>
        </div>
      </div>
    </el-header> -->
    <!-- 页面主体区域 -->
    <el-container class="container">
      <!-- 侧边栏菜单区域 -->
      <el-aside width="150px">
        <el-menu :default-active="isId" @select="handleSelect" class="el-menu-vertical-demo" background-color="#1d43a3" text-color="#3C3F41" active-text-color="#f60">
          <NavMenu :navMenus="totalList"></NavMenu>
        </el-menu>
        <!-- 侧边栏菜单区域 -->
        <!-- <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#1d43a3" text-color="#fff" active-text-color="#fff" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-monitor"></i>
              <span>工作台</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/bench1">选项1</el-menu-item>
              <el-menu-item index="/bench2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-takeaway-box"></i>
            <span slot="title">基础管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-user"></i>
            <span slot="title">客户关系</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-dish-1"></i>
            <span slot="title">工程管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-tickets"></i>
            <span slot="title">收费管理</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-receiving"></i>
            <span slot="title">仓库管理</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-setting"></i>
            <span slot="title">系统管理</span>
          </el-menu-item>
        </el-menu> -->
      </el-aside>
      <el-container>
        <!-- <el-header>
          <div class="notice">
            <div class="notice_l">
              <div class="notice_l_label">公告</div>
              <div class="notice_l_main">请所有员工注意，本次消防演习在本周五进行，请大家注意！</div>
            </div>
            <div class="notice_r">
              <div class="notice_r_l">2020-09-06 12:00:23 星期三</div>
              <div class="notice_r_line">|</div>
              <div class="notice_r_r">兰州市 多云 18℃~25℃</div>
            </div>
          </div>
        </el-header> -->
        <!-- 右侧内容主体 -->
        <el-main>
          <!-- 路由占位符 -->
          <router-view />
        </el-main>
        <!-- 右侧底部区域 -->
        <el-footer>智慧物业 科技改变生活</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavMenu from './components/eleMenuTemplate'
import menu from './menu/menu.js'
export default {
  data() {
    return {
      totalList: [],
      isId: "权限管理",
      // 被激活的链接地址
      activePath: ''
    }
  },
  components: {
    NavMenu
  },
  created () {
    this.totalList = menu.childs
  },
  watch: {
     $route(to,from){
        this.isId = to.params.id
     }
  },
  beforeRouteEnter(to, from, next) {
    console.log("我从哪里来", to.params.id, from)
    var self = this
    next(vm => {
      vm.isId = to.params.id
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    goBench2() {
      this.activePath = '/bench2'
    }
  }
}
</script>

<style lang="less" scoped>
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
  background: url(../assets/images/home_ic_tou_bg.png);
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
