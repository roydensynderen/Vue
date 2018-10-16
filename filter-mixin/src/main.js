import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('calculateLength', value => {
  return value + ' (' + value.length + ')'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
