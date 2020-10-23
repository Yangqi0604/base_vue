/*
 * @Author: Lijiahui
 * @Date: 2020-10-16 10:32:23
 * @LastEditors: Lijiahui
 * @LastEditTime: 2020-10-16 10:54:27
 */
import Login from '../views/Login.vue'

export const LoginRouter = {
  path: '/Login',
  name: 'login',
  meta: {
    title: '登录',
    ignore: true
  },
  component: Login
}
export default [LoginRouter]