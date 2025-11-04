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
      beforeEnter() {
        window.location.href = 'https://techosphere.ng/'
      }
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
    {
      path: '/business-internet',
      name: 'business-internet',
      component: () => import('../pages/BusinessInternetPage.vue')
    },
    {
      path: '/business-wifi',
      name: 'business-wifi',
      component: () => import('../pages/BusinessWifiPage.vue')
    },
    {
      path: '/business-voice',
      name: 'business-voice',
      component: () => import('../pages/BusinessVoicePage.vue')
    },
    {
      path: '/infrastructure',
      name: 'infrastructure',
      component: () => import('../pages/InfrastructurePage.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('../pages/SuccessPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue')
    },
    {
      path: '/cloud-services-step-2',
      name: 'cloud-services-step-2',
      component: () => import('../components/forms/RequestFormCloudStep2.vue')
    },
    {
      path: '/cloud-services-step-3',
      name: 'cloud-services-step-3',
      component: () => import('../components/forms/RequestFormCloudStep3.vue')
    },
    {
      path: '/business-wifi-step-2',
      name: 'business-wifi-step-2',
      component: () => import('../components/forms/RequestFormBusinessWifiStep2.vue')
    },
    {
      path: '/business-wifi-step-3',
      name: 'business-wifi-step-3',
      component: () => import('../components/forms/RequestFormBusinessWifiStep3.vue')
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
