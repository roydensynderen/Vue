import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-55f65.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  if (request.method == 'POST') {
    request.method = 'PUT'
  }
  next(response => {
    response.json = () => {
      return {
        messages: response.body
      }
    }
  });

});

new Vue({
  render: h => h(App)
}).$mount('#app')
