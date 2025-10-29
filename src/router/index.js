import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue')
    },
    {
      path: '/techosphere',
      name: 'techosphere',
      component: () => import('../pages/TechospherePage.vue')
    },
    {
      path: '/managed-services',
      name: 'managed-services',
      component: () => import('../pages/ManagedServicesPage.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../pages/PrivacyPolicyPage.vue')
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: () => import('../pages/TermsOfUsePage.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }

    return { top: 0 }
  }
})

export default router
