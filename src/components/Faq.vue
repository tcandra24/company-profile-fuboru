<template>
  <div class="container">
    <div class="heading text-center">
      <h4>{{ storeLanguage.section.faq.title[storeLanguage.selected] }}</h4>
      <h6 :class="{ hidden: !showTitle }">{{ storeLanguage.section.faq.subtitle[storeLanguage.selected] }}</h6>
    </div>
    <div class="mx-auto lg:w-[730px]">
      <div v-for="(faq, i) in storeLanguage.section.faq.data" :key="faq.id" class="mt-6 border-0 border-b-2 border-gray/20 bg-transparent">
        <button
          type="button"
          class="relative !flex w-full items-center justify-between gap-2 py-2.5 text-lg font-bold text-black ltr:text-left rtl:text-right dark:text-white"
          @click="accordians === i ? (accordians = null) : (accordians = i)"
        >
          <div>{{ faq.question[storeLanguage.selected] }}</div>
          <div
            class="grid h-6 w-6 flex-shrink-0 place-content-center rounded-full border-2 border-gray text-gray transition"
            :class="{ '!border-black !text-black dark:!border-white dark:!text-white': accordians === i }"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                v-show="accordians !== i"
                d="M6.09961 0.500977C6.65189 0.500977 7.09961 0.948692 7.09961 1.50098L7.09961 10.501C7.09961 11.0533 6.65189 11.501 6.09961 11.501H5.89961C5.34732 11.501 4.89961 11.0533 4.89961 10.501L4.89961 1.50098C4.89961 0.948692 5.34732 0.500977 5.89961 0.500977H6.09961Z"
                fill="currentColor"
              />
              <path
                d="M0.5 5.90039C0.5 5.34811 0.947715 4.90039 1.5 4.90039H10.5C11.0523 4.90039 11.5 5.34811 11.5 5.90039V6.10039C11.5 6.65268 11.0523 7.10039 10.5 7.10039H1.5C0.947715 7.10039 0.5 6.65268 0.5 6.10039V5.90039Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </button>
        <vue-collapsible :isOpen="accordians === i">
          <div class="lg:w-4/5">
            <p class="px-0 pb-5 pt-0 text-sm font-bold leading-[18px] text-gray">
                <div v-if="!faq.link">
                    {{ faq.answer[storeLanguage.selected] }}
                </div>
                <div v-else>
                    <ol>
                        <li v-for="(answ, index) in faq.answer" :key="index">
                            <a  :href="answ" target="_blank" rel="noopener noreferrer">{{ answ }}</a>
                        </li>
                    </ol>
                </div>
            </p>
          </div>
        </vue-collapsible>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import VueCollapsible from 'vue-height-collapsible/vue3';
  import { useLanguageStore } from '@/stores/language';

  const storeLanguage = useLanguageStore();

  defineProps({
    showTitle: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'faq',
    },
    language: {
      type: String
    },
    // queries: {
    //   type: Object,
    //   // default: () => {
    //   //   return [
    //   //     {
    //   //       id: 1,
    //   //       question: 'Apakah kelebihan produk fuboru dibanding merk lain ?',
    //   //       answer: `Bahan baku Fuboru telah memenuhi standart JIS (Japanese Industrial Standards), Pengujian yang dilakukan telah mengikuti standart ASTM (American Standard for Testing Materials) dan Proses produksi mengikuti standart proses manufaktur dari Q-SEAL`,
    //   //     },
    //   //     {
    //   //       id: 2,
    //   //       question: 'Bagaimana Fuboru menjamin produk nya layak untuk digunakan ?',
    //   //       answer: `Setiap produk tercantum Expired Date untuk memastikan bahwa produk masih baik, Terdapat Nama, Alamat, No Telpon PT Fuboru Indonesia sehingga konsumen dapat langsung menghubungi Call Center jika ingin mendapatkan informasi lebih detail tentang produk`,
    //   //     },
    //   //     {
    //   //       id: 3,
    //   //       question: 'Produk untuk apa saja yang diproduksi oleh Fuboru ?',
    //   //       answer: `Kendaraan Roda-2 / Roda-3 mulai dari motor lama (misal : Honda C-70, Honda CB, Yamaha V-75, Yamaha L2S, Suzuki RGR 150, Vespa Super / PS/ PX, dll) hingga motor terbaru (misal : Yamaha NMAX, Honda Supra X 125 New, Honda PCX, dll), untuk Mesin Statis ( misal : Dongfeng, Kubota, Yanmar, Mitsubishi, Honda, Yamaha)`,
    //   //     },
    //   //     {
    //   //       id: 4,
    //   //       question: 'Apakah kelebihan produk LSG (Lem Special Gasket) Fuboru ?',
    //   //       answer: `Mengandung bahan aktif Aluminium Micronized yang berfungsi untuk menutup goresan-goresan pada permukaan mesin yang dapat menyebabkan kebocoran, Saat motor di service area yang sebelumnya diberi LSG Fuboru mudah dilepas & dibersihkan, sehingga tidak perlu harus di korek / digosok yang beresiko menimbulkan goresan`,
    //   //     },
    //   //     {
    //   //       id: 5,
    //   //       question: 'Bagaimana cara mendapatkan produk Fuboru ?',
    //   //       answer: `Produk Fuboru telah tersebar di sekitar 15.000 jaringan customer di seluruh Indonesia (baik toko maupun bengkel) dan anda dapat menghubungi call center / kantor pusat PT Fuboru Indonesia seperti yang tertera di Contact website / tertera di setiap kemasan produk Fuboru`,
    //   //     },
    //   //     {
    //   //       id: 6,
    //   //       question: 'Apakah produk Fuboru dapat dibeli secara online ?',
    //   //       answer: [
    //   //           'https://tokopedia.com/fundo',
    //   //           'https://shopee.co.id/fundo_shop',
    //   //       ],
    //   //       link: true
    //   //     },
    //   //   ];
    //   // },
    // },
  });
  const accordians = ref(0);
</script>
<style>
  [data-height-collapsible] {
    transition: height 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
