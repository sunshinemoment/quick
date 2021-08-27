import YButton from './button'
import YInput from './input'

const files = require.context('./', true, /^\.\/.+\/index.js$/)

export const components = files.keys().reduce((pre, next) => {
  const file = files(next).default
  if (file?.name?.startsWith('y-')) {
    return [...pre, [file.name, file.$originals, file]]
  }
  return [...pre]
}, [])

export const install = function (Vue) {
  components.forEach(([name, originals, component]) => {
    // 兼容原始组件
    if (originals) {
      originals.forEach((original) => {
        Vue.component(original.name, original)
      })
    }
    Vue.component(name, component)
  })
}

export default {
  install
}

export { YButton, YInput }
