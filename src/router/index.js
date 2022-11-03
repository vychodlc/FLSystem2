import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: '/',
        redirect: '/home/index'
      },
      {
        path: '/home/index',
        component: () => import('../views/index/index.vue'),
      },
      {
        path: '/home/activate',
        component: () => import('../views/activate/index.vue'),
        children: [
          { path: '/', redirect: 'settings' },
          { path: 'settings', name: 'Settings', component: () => import('../views/activate/settings.vue') },
          { path: 'showpage', name: 'Showpage', component: () => import('../views/activate/showpage.vue') },
        ]
      },
      {
        path: '/home/simulate',
        component: () => import('../views/simulate/index.vue'),
        children: [
          { path: '/', redirect: 'settings' },
          { path: 'settings', name: 'Settings', component: () => import('../views/simulate/settings.vue') },
          { path: 'showpage', name: 'Showpage', component: () => import('../views/simulate/showpage.vue') },
        ]
      },
      {
        path: '/home/perspective',
        component: () => import('../views/perspective/index.vue'),
        children: [
          { path: '/', redirect: 'settings' },
          { path: 'settings', name: 'Settings', component: () => import('../views/perspective/settings.vue') },
          { path: 'showpage', name: 'Showpage', component: () => import('../views/perspective/showpage.vue') },
        ]
      },
      {
        path: '/home/optimize',
        component: () => import('../views/optimize/index.vue'),
        children: [
          { path: '/', redirect: 'settings1' },
          { path: 'settings1', name: 'Settings1', component: () => import('../views/optimize/settings1.vue') },
          { path: 'showpage1', name: 'Showpage1', component: () => import('../views/optimize/showpage1.vue') },
          { path: 'settings2', name: 'Settings2', component: () => import('../views/optimize/settings2.vue') },
          { path: 'showpage2', name: 'Showpage2', component: () => import('../views/optimize/showpage2.vue') },
        ]
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
