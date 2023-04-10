// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'Contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "Contact" */ '@/views/Contact.vue'),
      },
      {
        path: 'Projects',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "Projects" */ '@/views/Projects.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
