import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: () => import('../views/Invoices.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 