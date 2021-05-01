import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/index.js'
import FastClick from 'fastclick'
import {Button, Icon, Stepper,Cell, CellGroup, Lazyload} from 'vant'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Stepper)
Vue.use(Cell);
Vue.use(CellGroup)
Vue.use(Lazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
