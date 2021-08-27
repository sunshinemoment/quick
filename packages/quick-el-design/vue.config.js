const { srcIndex, libIndex } = require('./config/path')
const componentsEntry = require('./config/components-entry')

module.exports = {
  productionSourceMap: true,
  outputDir: libIndex,
  configureWebpack: {
    entry: {
      ...componentsEntry,
      index: srcIndex
    },
    output: {
      filename: (pathData) => {
        return pathData.chunk.name === 'index'
          ? 'quick-el-design.umd.js'
          : '[name].js'
      },
      libraryTarget: 'umd',
      libraryExport: 'default',
      library: 'quick-el-design',
      // eslint-disable-next-line quotes
      globalObject: `(typeof self !== 'undefined' ? self : this)`
    },
    externals: {
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        root: 'Vue'
      }
    }
  },
  chainWebpack: (config) => {
    /**
     * 参考文档:
     * 1. [vuecli3创建的组件库工程实现按需引入](https://blog.csdn.net/mate_ge/article/details/100077130)
     * 2. [关于vue-cli 3配置打包优化要点](https://juejin.cn/post/6844903827729022984)
     */
    config.optimization.minimize(false) // 是否压缩代码 可调试时候关闭
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('html')
    config.plugins.delete('pwa')
    config.plugins.delete('workbox')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')

    config.module
      .rule('fonts')
      .use('url-loader')
      .tap((option) => {
        option.fallback.options.name = 'theme-chalk/fonts/[name].[ext]'
        return option
      })
  },
  css: {
    extract: {
      filename: 'theme-chalk/[name].css'
    }
  }
}
