import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes,title } from './app.config.js'

import {App,ripple,toastText} from './components'


import './common/common.css'
import './common/app.scss'

Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	linkActiveClass:'active'
})
router.beforeEach((to, from, next) => {
	document.title = to.meta.title || title;
	next()
})

Vue.component('ripple',ripple)
Vue.component('toastText',toastText)

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})

// console.log(Vue.prototype)
