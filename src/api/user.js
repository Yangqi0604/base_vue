/*
 * @Author: Lijiahui
 * @Date: 2020-10-16 10:47:25
 * @LastEditors: Lijiahui
 * @LastEditTime: 2020-10-18 22:40:02
 */
import Storage from '@utils/storage'
import isEmpty from 'lodash/isEmpty'
import Ajax from './Ajax'

//Ajax请求示例
export const userLogin = params => Ajax.post(`/api/v1/login`, params).then(res => { return res })

export const isLogin = () => !isEmpty(Storage.get(Storage.KEYS.TOKEN))