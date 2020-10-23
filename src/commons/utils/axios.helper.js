/*
 * @Author: Lijiahui
 * @Date: 2020-10-16 11:14:23
 * @LastEditors: Lijiahui
 * @LastEditTime: 2020-10-16 11:15:32
 */
import isEmpty from 'lodash/isEmpty'
import Storage from './storage'

/**
 * 参数处理
 * @param params
 * @returns {*}
 */
export const processParams = params => {
    let copyParams = Object.assign({}, params)
    let token = Storage.get(Storage.KEYS.TOKEN)

    // 删除无用字段
    Object.keys(copyParams).forEach(function (key) {
        let val = copyParams[key]

        if (val === null || val === '' || val === undefined || Number(val) === -1) {
            delete copyParams[key]
        }

        // 数组 null
        if (typeof copyParams[key] === 'object' && isEmpty(copyParams[key])) {
            delete copyParams[key]
        }
    })

    token && (copyParams['token'] = token)

    return copyParams
}
