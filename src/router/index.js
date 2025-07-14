import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'
import Wishlist from '@/pages/Wishlist.vue'
import cart from '@/pages/cart.vue'
import BillingDetails from '@/pages/BillingDetails.vue'
import Profile from '@/pages/Profile.vue'
import NotFound from '@/pages/404.vue'
import Registration from '@/pages/Registration.vue'
import Login from '@/pages/Login.vue'
import ProductDetails from '@/pages/ProductDetails.vue'


const routes = [
  { path: '/', name :'Home', component: Home },
  { path: '/Wishlist', name :'Wishlist', component: Wishlist },
  { path: '/cart', name :'cart', component: cart },
  { path: '/BillingDetails', name :'BillingDetails', component: BillingDetails},
  { path: '/Profile', name :'Profile', component: Profile},
  { path: '/404', name :'404', component: NotFound},
  { path: '/Registration', name :'Registration', component: Registration},
  { path: '/Login', name :'Login', component: Login},
  { path: '/ProductDetails', name :'ProductDetails', component: ProductDetails},
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // always scroll to top on route change
  },
});

export default router;
