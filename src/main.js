import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/index.js'
import FastClick from 'fastclick'
import {Button, Icon} from 'vant'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(Icon)
Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
