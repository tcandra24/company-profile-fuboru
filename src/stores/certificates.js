import { defineStore, acceptHMRUpdate } from 'pinia';
import { supabase } from '@/utils/supabase';

export const useCertificateStore = defineStore('certificates', {
  state: () => ({
    certificates: [],
    isLoading: false,
    fields: {
      id: 'description_id',
      en: 'description_en',
    },
  }),
  actions: {
    async fetchCertificates() {
      this.isLoading = true;
      const { data } = await supabase.from('certificates').select();

      this.certificates = data;
      this.isLoading = false;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCertificateStore, import.meta.hot));
}
