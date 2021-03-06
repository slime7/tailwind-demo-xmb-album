import { createRouter, createWebHistory } from 'vue-router';
import Base from '@/views/Layout/Base.vue';

const routes = [
  {
    path: '/',
    component: Base,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
    ],
  },
];

const router = createRouter({
  mode: 'history',
  base: import.meta.env.Base,
  history: createWebHistory(),
  routes,
});

export default router;
