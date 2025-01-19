import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('@/views/BookingView.vue'),
    },
    {
      path: '/merch',
      name: 'merch',
      component: () => import('@/views/MerchView.vue'),
    },
    {
      path: '/bio',
      name: 'bio',
      component: () => import('@/views/BioView.vue'),
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('@/views/PhotosView.vue'),
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('@/views/VideosView.vue'),
    },
    {
      path: '/tech-and-rider',
      name: 'tech-and-rider',
      component: () => import('@/views/TechView.vue'),
    },
  ],
})

export default router
