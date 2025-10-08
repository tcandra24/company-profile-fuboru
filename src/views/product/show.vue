<script setup>
  import { onMounted, ref, watch } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useRoute } from 'vue-router';

  import { ucwords } from '@/utils/helpers';

  import ProjectSlider from '@/components/ProjectSlider.vue';
  import LoadingImg from '@/assets/images/loading_img.webp';

  import { useProductStore } from '@/stores/products';
  import { useLanguageStore } from '@/stores/language';

  const route = useRoute();
  const slug = route.params.slug;

  const storeProduct = useProductStore();
  const storeLanguage = useLanguageStore();

  const { relatedProducts, product } = storeToRefs(storeProduct);

  onMounted(() => {
    storeProduct.fetchProduct(slug);
    storeProduct.fetchRelatedProducts(slug);
  });

  watch(
    () => route.params.slug,
    (slug) => {
      storeProduct.fetchProduct(slug);
      storeProduct.fetchRelatedProducts(slug);
    },
  );
</script>

<template>
  <div>
    <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
      <div class="relative">
        <div class="container">
          <div class="items-center py-10 md:flex md:h-[400px] md:py-0">
            <div class="heading relative mb-0 md:w-[725px]">
              <h4 class="!text-white">{{ ucwords(product?.name) }}</h4>
              <p
                class="relative mt-7 font-medium text-[#BBC0D0] before:absolute before:top-0 before:h-full before:w-1 before:bg-primary ltr:pl-8 ltr:before:left-0 rtl:pr-8 rtl:before:right-0"
              >
                {{ ucwords(product?.category?.name) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="py-8 md:py-[100px]">
      <div class="container">
        <div>
          <img
            v-lazy="{
              src: `https://wzsfgaratnngbewlvmqf.supabase.co/storage/v1/object/public/product-bucket/${product.image}`,
              loading: LoadingImg,
              error: LoadingImg,
            }"
            :alt="product?.slug"
            class="rounded-[32px] w-4/5 mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
        <div class="py-7 md:py-10">
          <h3 class="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">
            {{ storeLanguage.section.products.detail.description[storeLanguage.selected] }}
          </h3>
          <p
            class="detail-description relative font-semibold leading-[30px] before:absolute before:top-0 before:h-full before:w-1 before:rounded before:bg-primary ltr:pl-6 ltr:before:left-0 rtl:pr-6 rtl:before:right-0 md:text-lg"
            v-html="product?.description"
          ></p>
        </div>
        <div class="py-7 md:py-10">
          <h3 class="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">
            {{ storeLanguage.section.products.detail.advantage[storeLanguage.selected] }}
          </h3>
          <div
            class="detail-advantage space-y-2 font-semibold leading-6 ltr:ml-[18px] rtl:mr-[18px] md:text-lg ltr:md:pl-4 rtl:md:pr-4"
            v-html="product?.advantage"
          ></div>
        </div>
        <div v-if="product.socials && product.socials.length > 0" class="py-7 md:py-10">
          <h3 class="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Sosial Media</h3>
          <div class="flex gap-3 w-full flex-col">
            <div v-for="social of product.socials" class="p-2 dark:bg-gray-dark flex gap-5">
              <img
                v-lazy="{
                  src: `https://wzsfgaratnngbewlvmqf.supabase.co/storage/v1/object/public/social-bucket/${social.name}.svg`,
                  loading: LoadingImg,
                  error: LoadingImg,
                }"
                :alt="social.name"
                class="w-[20px] fill-gray"
              />
              <a :href="social.link" target="_blank">{{ social.link }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="product.product_brands && product.product_brands.length > 0" class="sm:px-5">
      <div class="mx-auto max-w-[1440px] bg-black py-12 dark:bg-gray-dark sm:rounded-[32px] lg:py-24">
        <div class="container">
          <div class="flex flex-col items-center gap-4 lg:flex-row">
            <div class="flex-1 text-center ltr:md:text-left rtl:md:text-right">
              <div class="heading mb-8 text-center">
                <h4 class="!text-primary">{{ storeLanguage.section.products.detail.compatible[storeLanguage.selected] }}</h4>
              </div>
              <div class="flex justify-center flex-col sm:gap-16 md:justify-start md:gap-10">
                <div v-for="(brand, index) of product?.product_brands" :key="index" class="space-y-2">
                  <h3 class="mt-[18px] font-bold text-xl !text-gray">
                    {{ brand.brands.name.toUpperCase() }}
                  </h3>
                  <ul class="flex flex-wrap gap-5">
                    <li v-for="(type, index) of brand.brand_types" :key="index" class="flex items-center gap-3">
                      <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4.56499 12.4067C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4067ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1563 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1563 7.70784 16.9932L7.14286 16.5ZM15.565 7.9932C15.8374 7.68116 15.8053 7.20738 15.4932 6.93497C15.1812 6.66256 14.7074 6.69468 14.435 7.00671L15.565 7.9932ZM10.5064 11.5067C10.234 11.8187 10.2662 12.2925 10.5782 12.5649C10.8902 12.8374 11.364 12.8052 11.6364 12.4932L10.5064 11.5067ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7567L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0067L4.56499 12.4067L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7567L6.57787 16.0067L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25671L10.5064 11.5067L11.6364 12.4932ZM13.6007 10.2432L15.565 7.9932L14.435 7.00671L12.4707 9.25671L13.6007 10.2432Z"
                            fill="#B476E5"
                          />
                          <path
                            d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125"
                            stroke="#B476E5"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <a href="javascript:" class="text-lg font-semibold text-white duration-200 hover:text-primary">{{ type.type }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 md:py-[100px] lg:py-[100px]">
      <project-slider :products="relatedProducts">
        <template #title>
          <div class="heading mb-0 text-center ltr:lg:text-left rtl:lg:text-right">
            <h4>Related Projects</h4>
          </div>
        </template>
      </project-slider>
    </section>
  </div>
</template>

<style scoped>
  :deep(.detail-description ul) {
    list-style-type: disc;
    padding-left: 1.5rem;
  }

  :deep(.detail-advantage ul) {
    list-style-type: disc;
    padding-left: 1.5rem;
  }

  :deep(.detail-description ol) {
    list-style-type: decimal;
    padding-left: 1.5rem;
  }

  :deep(.detail-advantage ol) {
    list-style-type: decimal;
    padding-left: 1.5rem;
  }
</style>
