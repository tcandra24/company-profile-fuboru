import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    theme: 'light',
    isShowMainLoader: true,
    direction: 'ltr',
  }),

  actions: {
    toggleTheme(payload) {
      payload = payload || this.theme; // light|dark
      localStorage.setItem('theme', payload);
      this.theme = payload;
      if (this.theme === 'dark') {
        document.querySelector('body')?.classList.add('dark');
      } else {
        document.querySelector('body')?.classList.remove('dark');
      }
    },

    toggleDirection(payload) {
      payload = payload || this.direction; // rtl, ltr
      localStorage.setItem('direction', payload);
      this.direction = payload;
      document.querySelector('html')?.setAttribute('dir', this.direction || 'ltr');
    },

    toggleMainLoader(payload) {
      this.isShowMainLoader = payload || false;
    },
  },
  getters: {},
});
