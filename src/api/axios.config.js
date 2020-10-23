/*
 * @Author: Lijiahui
 * @Date: 2020-10-16 11:11:52
 * @LastEditors: Lijiahui
 * @LastEditTime: 2020-10-16 11:13:43
 */

import axios from 'axios'
import { Message } from 'element-ui';
import { API } from '@commons/utils/constants'
import { processParams } from '@utils/axios.helper'
import Storage from '@utils/storage'
import { LoginRouter } from '../router/base.router'

var count

export const requestInterceptors = config => {
  //重写请求头
  // setHeader(config.headers)

  if (config.method.toLowerCase() === 'post') {
    config.data = processParams(config.data)
  } else {
    config.params = processParams(config.params)
  }

  return config
}
export default router => {
  axios.defaults.baseURL = API

  axios.interceptors.request.use(requestInterceptors)

  axios.interceptors.response.use(
    res => {
      switch (res.data.code) {
        case 11001:
        case 11002:
        case 11003:
        case 11004:
          Storage.removeAll()
          router.push({ name: LoginRouter.name })
      }
      return res.data
    },
    error => {
      let countClear = message => {
        count && clearTimeout(count)
        count = setTimeout(() => {
          Message.error(message)
        }, 500)
      }
      switch (error.response.code) {
        case '500':
          countClear('出错了,请稍后重试')
          break
        case '404':
          countClear('未找到数据')
          break
        case '422':
          break
        default:
          countClear(error.response.data.message)
          break
      }

      return Promise.reject(error)
    }
  )
}
