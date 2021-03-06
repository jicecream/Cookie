import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-chartjs'

Vue.config.productionTip = false


// global eventbus
export const bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



