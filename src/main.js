/*
 * @Author: Lijiahui
 * @Date: 2020-10-16 10:21:25
 * @LastEditors: Lijiahui
 * @LastEditTime: 2020-10-16 11:17:59
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axiosConfig from './api/axios.config'
import store from './store'
import './plugins/element.js'
axiosConfig(router)
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
