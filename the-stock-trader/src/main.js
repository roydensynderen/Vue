import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

Vue.config.productionTip = false

Vue.filter('currency', value => {
	return '$' + value.toLocaleString()
})

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-stock-trader-7bb74.firebaseio.com/'

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')
