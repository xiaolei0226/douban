import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	}, 
	{
		path: '/home',
		name: 'Home2',
		component: Home
	}, 
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>	import( /* webpackChunkName: "about" */ '../views/About.vue')
	}, 
	{
		path: '/broadcast',
		name: 'Broadcast',
		component: () =>	import('../views/Broadcast/broadcast.vue')
	}, 
	{
		path: '/group',
		name: 'Group',
		component: () =>	import('../views/Group/group.vue')
	}, 
	{
		path: '/mine',
		name: 'Mine',
		component: () =>	import('../views/Mine/mine.vue')
	}, 
	{
		path: '/audio',
		name: 'Audio',
		component: () => import('../views/Audio/audio.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router