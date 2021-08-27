import YButton from './base/button'
import YInput from './base/input'

import { install as installBase } from './base'

const install = function (Vue, opts) {
  installBase(Vue, opts)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install
}

export { YButton, YInput }
