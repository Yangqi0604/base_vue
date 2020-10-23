/*
 * @Author: Lijiahui
 * @Date: 2020-10-16 11:04:12
 * @LastEditors: Lijiahui
 * @LastEditTime: 2020-10-16 11:05:04
 */
/**
 * @name: Storage
 * @Date: 2020-05-11
 * @return: 本地存储工具
 */
const KEY_PREFIX = 'vito.'

export default {
  KEYS: {
    TOKEN: `${KEY_PREFIX}token`,
  },

  get: function (key, isSession) {
    if (!this.isLocalStorage()) {
      return undefined
    }
    let value = this.getStorage(isSession).getItem(key)
    if (value) return JSON.parse(value)
    return undefined
  },

  set: function (key, value, isSession) {
    if (!this.isLocalStorage()) {
      return undefined
    }
    value = JSON.stringify(value)
    this.getStorage(isSession).setItem(key, value)
  },

  remove: function (key, isSession) {
    if (!this.isLocalStorage()) return undefined
    this.getStorage(isSession).removeItem(key)
  },

  removeAll: function (keys = []) {
    Array.from(keys.concat(['TOKEN'])).forEach(item =>
      this.remove(this.KEYS[item])
    )
  },

  getStorage: function (isSession) {
    return isSession ? sessionStorage : localStorage
  },

  isLocalStorage: function () {
    try {
      if (!window.localStorage) {
        console.warn('不支持本地存储')
        return false
      }
      return true
    } catch (e) {
      console.warn('本地存储已关闭')
      return false
    }
  }
}
