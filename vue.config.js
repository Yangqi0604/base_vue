/*
 * @Author: Lijiahui
 * @Date: 2020-10-16 10:21:25
 * @LastEditors: Lijiahui
 * @LastEditTime: 2020-10-19 21:30:48
 */
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  devServer: {
    port: 8080, // 启动端口
    open: true, // 启动后是否自动打开网页
    proxy:{
      '/api': {
        target: 'http://127.0.0.1:3000',
        ws: false,
        logger: 'debug',
      },
    }
  },

  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@utils', resolve('src/commons/utils'))
      .set('@commons', resolve('src/commons'))
  },
}
