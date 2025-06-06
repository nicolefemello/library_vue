import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '@/views/CartView.vue'
import FavoritesView from '@/views/FavoritesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/carrinho',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/favoritos',
      name: 'favorites',
      component: FavoritesView,
    },
  ],
})

export default router
