import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/user/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/user/AboutView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/views/user/ShopView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/user/ContactView.vue')
    },
    {
      path: '/product-detail/:id',
      name: 'product-detail',
      component: () => import('@/views/user/ProductDetailView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/user/CartView.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
  linkActiveClass: 'text-amber-400'
})

export default router
