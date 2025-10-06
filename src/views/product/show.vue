<script setup>
  import { onMounted, ref, watch } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useRoute } from 'vue-router';

  import { ucwords } from '@/utils/helpers';

  import ProjectSlider from '@/components/ProjectSlider.vue';
  import LoadingImg from '@/assets/images/loading_img.webp';

  import { useProductStore } from '@/stores/products';

  const route = useRoute();
  const slug = route.params.slug;
  const storeProduct = useProductStore();

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

    <section class="py-14 md:py-[100px]">
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
          <h3 class="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Penjelasan</h3>
          <p
            class="detail-description relative font-semibold leading-[30px] before:absolute before:top-0 before:h-full before:w-1 before:rounded before:bg-primary ltr:pl-6 ltr:before:left-0 rtl:pr-6 rtl:before:right-0 md:text-lg"
            v-html="product?.description"
          ></p>
        </div>
        <div class="py-7 md:py-10">
          <h3 class="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Keunggulan</h3>
          <p
            class="detail-advantage relative font-semibold leading-[30px] text-justify before:absolute before:top-0 before:h-full before:w-1 before:rounded before:bg-secondary ltr:pl-6 ltr:before:left-0 rtl:pr-6 rtl:before:right-0 md:text-lg"
            v-html="product?.advantage"
          ></p>
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
