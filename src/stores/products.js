import { defineStore, acceptHMRUpdate } from 'pinia';
import { supabase } from '@/utils/supabase';

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    isLoading: false,
    product: {},
    relatedProducts: [],
  }),
  actions: {
    async fetchProducts() {
      this.isLoading = true;
      const { data } = await supabase.from('products').select('*, category:category_id( name, slug )').order('name', {
        ascending: true,
      });

      this.products = data;
      this.isLoading = false;
    },
    async fetchProduct(slug) {
      this.isLoading = true;
      const { data } = await supabase
        .from('products')
        .select('*, category:category_id( name, slug ), socials(name, link, embeded_code), product_brands( brands ( name ), brand_types( type ) )')
        .eq('slug', slug)
        .limit(1)
        .single();

      this.product = data;
      this.isLoading = false;
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
