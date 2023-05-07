import Default from '@/layouts/default/Default.vue'
import Home from '@/views/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.component('LayoutDefault', Default)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    component: () => import('@/views/About.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/artists',
    name: 'Artists',
    // route level code-splitting
    component: () => import('@/views/Artists.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/media',
    name: 'Media',
    // route level code-splitting
    component: () => import('@/views/Media.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/Location',
    name: 'Location',
    // route level code-splitting
    component: () => import('@/views/Location.vue'),
    meta: {
      layout: 'default'
    }
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
