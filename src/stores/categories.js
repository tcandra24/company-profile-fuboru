import { defineStore, acceptHMRUpdate } from 'pinia';
import { supabase } from '@/utils/supabase';

export const useCategoryStore = defineStore('categories', {
  state: () => ({
    categories: [],
    isLoading: false,
  }),
  actions: {
    async fetchCategories() {
      this.isLoading = true;
      const { data } = await supabase.from('categories').select('*').order('order', { ascending: true });

      this.categories = data;

      this.isLoading = false;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoryStore, import.meta.hot));
}
