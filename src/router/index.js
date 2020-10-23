/*
 * @Author: Lijiahui
 * @Date: 2020-10-16 10:21:25
 * @LastEditors: YangQi
 * @LastEditTime: 2020-10-22 14:26:09
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import baseRouter from './base.router'
import mainRouter from './main.router'
// import filterRouter from './router.filter'

Vue.use(VueRouter)
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes:[
    // ...baseRouter,
    ...mainRouter,
  ]
})
// filterRouter(router)
export default router