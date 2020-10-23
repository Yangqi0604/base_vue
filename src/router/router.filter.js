/*
 * @Author: Lijiahui
 * @Date: 2020-10-16 10:32:58
 * @LastEditors: Lijiahui
 * @LastEditTime: 2020-10-22 00:21:58
 */
import { isLogin } from '@api/user'
import { LoginRouter } from './base.router'

export default router => {
  router.beforeEach((to, from, next) => {
    if (!isLogin() && to.name !== LoginRouter.name) {
      next({ name: 'login' })
      return
    }
    next()
  })
}
