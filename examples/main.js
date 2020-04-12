import Vue from 'vue'
import App from './App.vue'
import PumaUi from '../packages/index'
import "../packages/theme-chalk/src/index.scss"
Vue.use(PumaUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
