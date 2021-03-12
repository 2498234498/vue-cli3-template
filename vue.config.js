const path = require('path')

process.env.VUE_APP_TITLE = '首都机场物联网平台'

const resolve = dir => path.join(__dirname, dir)

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // 部署应用时的基本 URL
  publicPath: isProd ? './' : '/',
  // build时构建文件的目录，构建时传入 --no-clean 可关闭该行为
  outputDir: 'dist',
  // build时放置生成的静态资源（js、css、img、fonts）的（相对于outputDir的）目录
  assetsDir: '',
  // 指定生成的 index.html 的输出路劲（相对于outputDir）。也可以是一个绝对路劲。
  indexPath: 'index.html',
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // 是否启用eslint
  lintOnSave: true,
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://10.10.14.200/api',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: []
  }
}