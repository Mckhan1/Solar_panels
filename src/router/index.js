import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AllproductView from '../views/AllproductView.vue'
import PaymentView from '../views/PaymentView.vue'
import EducationView from '../views/EducationView.vue'
import AboutUs from '../views/AboutUs.vue'
import SeminarsView from '../views/SeminarsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/seminars',
      name: 'SeminarsView',
      component: SeminarsView
    },
    {
      path: '/allproduct',
      name: 'allproducts',
      component: AllproductView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    },
    {
      path: '/product/:id',
      name: 'product',
      component: PaymentView
    },
    {
      path: '/education',
      name: 'education',
      component: EducationView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    },

    
  ]
})

export default router
