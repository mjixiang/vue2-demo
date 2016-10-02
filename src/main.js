import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/base/app.vue'
import { routes,title } from './app.config.js'

require('./common/common.css')

Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	linkActiveClass:'active'
})
router.beforeEach((to, from, next) => {
	document.title = to.meta.title || title;
	next()
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
