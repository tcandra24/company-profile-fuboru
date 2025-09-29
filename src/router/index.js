import { createRouter, createWebHistory } from 'vue-router';
import { useAppStore } from '@/stores/app';
import { nextTick } from 'vue';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    meta: { title: 'PT Fuboru Indonesia - Official Website' },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home.vue'),
      },
      {
        path: 'products/:slug',
        name: 'product.show',
        component: () => import('@/views/product/show.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }

    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to, from, next) => {
  const store = useAppStore();
  nextTick(() => {
    document.title = to.meta.title || 'Fuboru Official Website';
  });
  store.toggleMainLoader(false);
});

export default router;
