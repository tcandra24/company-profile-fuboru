import { createRouter, createWebHistory } from 'vue-router';
import { useAppStore } from '@/stores/index';
import { nextTick } from 'vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue'),
    meta: { title: 'PT Fuboru Indonesia - Official Website' },
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
