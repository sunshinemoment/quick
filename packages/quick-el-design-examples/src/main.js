import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import QuickElDesign from '@sunshinemoment/el-design'
import('@sunshinemoment/el-design/lib/theme-chalk/index.css')

Vue.use(QuickElDesign)
console.log(QuickElDesign)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
