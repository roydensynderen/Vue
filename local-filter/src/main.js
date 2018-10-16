import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
})

//global mixin:
//loading procedure: global mixin > mixinx > components

// Vue.mixin({
//   created() {

//   }
// });

new Vue({
  render: h => h(App)
}).$mount('#app')
