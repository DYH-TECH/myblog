import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/register',
    component: () => import('../views/register.vue'),
  },
  {
    path: '/test',
    component: () => import('../views/test.vue'),
  },
  {
    path: '/setprofile',
    component: () => import('../views/setprofile.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
