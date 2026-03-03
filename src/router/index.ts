import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/boutique-holistica',
      name: 'boutique',
      component: () => import('../views/BoutiqueView.vue'),
    },
    {
      path: '/terapias-holisticas',
      name: 'terapias',
      component: () => import('../views/TerapiasView.vue'),
    },
    {
      path: '/psicologia-transpersonal',
      name: 'psicologia',
      component: () => import('../views/PsicologiaView.vue'),
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
