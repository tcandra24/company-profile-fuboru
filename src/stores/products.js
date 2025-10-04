import { defineStore, acceptHMRUpdate } from 'pinia';
import { supabase } from '@/utils/supabase';

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    product: {},
    relatedProducts: [],
  }),
  actions: {
    async fetchProducts() {
      const { data } = await supabase.from('products').select('*, category:category_id( name, slug )').order('name', {
        ascending: true,
      });

      this.products = data;
    },
    async fetchProduct(slug) {
      const { data } = await supabase
        .from('products')
        .select('*, category:category_id( name, slug ), socials(name, link, embeded_code)')
        .eq('slug', slug)
        .limit(1)
        .single();

      this.product = data;
    },
    async fetchRelatedProducts(slug) {
      const { data } = await supabase.from('products').select('*, category:category_id( name, slug )').neq('slug', slug).limit(7);

      this.relatedProducts = data;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}
