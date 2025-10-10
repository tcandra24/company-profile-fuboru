import { defineStore, acceptHMRUpdate } from 'pinia';
import { supabase } from '@/utils/supabase';

export const useCategoryStore = defineStore('categories', {
  state: () => ({
    categories: [],
  }),
  actions: {
    async fetchCategories() {
      const { data } = await supabase.from('categories').select('*').order('order', { ascending: true });

      this.categories = data;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoryStore, import.meta.hot));
}
