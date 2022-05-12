import Vue from 'vue'
import App from './App.vue'

// vue-router
import RouterLink from 'vue-router'
import router from './router/index'
Vue.use(RouterLink)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
