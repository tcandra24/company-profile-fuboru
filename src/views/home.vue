<script setup>
  import { onMounted, ref } from 'vue';
  import { storeToRefs } from 'pinia';

  import ClientSlider from '@/components/ClientSlider.vue';
  import Faq from '@/components/Faq.vue';
  import Modal from '@/components/Modal.vue';
  import { useAppStore } from '@/stores/app';
  import { useLanguageStore } from '@/stores/language';
  import { useCategoryStore } from '@/stores/categories';
  import { useProductStore } from '@/stores/products';
  import { useCertificateStore } from '@/stores/certificates';

  import { ucwords } from '@/utils/helpers';

  import AboutImg from '@/assets/images/about_img.webp';
  import LoadingImg from '@/assets/images/loading_img.webp';

  const store = useAppStore();
  const storeLanguage = useLanguageStore();
  const storeCategory = useCategoryStore();
  const storeProduct = useProductStore();
  const storeCertificate = useCertificateStore();

  const { categories } = storeToRefs(storeCategory);
  const { products } = storeToRefs(storeProduct);
  const { certificates, fields } = storeToRefs(storeCertificate);

  const activeTab = ref('');
  const dialog = ref(null);

  onMounted(async () => {
    await storeCategory.fetchCategories();
    await storeProduct.fetchProducts();
    await storeCertificate.fetchCertificates();

    activeTab.value = categories.value[0].slug;
  });
</script>

<template>
  <div class="overflow-x-hidden">
    <div class="overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
      <div class="relative">
        <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" class="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
        <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon" class="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]" />
        <div class="container">
          <div class="relative bg-[url('/assets/images/world-map.png')] bg-cover bg-top bg-no-repeat pt-14 pb-0 lg:pt-20 lg:pb-60 xl:pt-36">
            <div class="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-1/2">
              <h2 class="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px]">
                Simply <span class="italic text-primary">The Best </span>
              </h2>
              <p class="my-8 text-lg lg:w-[90%]">
                {{ storeLanguage.heroDescription.title[storeLanguage.selected] }}
                <br />
                {{ storeLanguage.heroDescription.subtitle[storeLanguage.selected] }}
              </p>
              <router-link to="#tentang-kami" class="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto">
                {{ storeLanguage.heroButton[storeLanguage.selected] }}
              </router-link>
            </div>
            <div
              class="top-[100px] mx-auto mt-5 mb-2 w-auto ltr:-right-[170px] rtl:-left-[150px] md:w-[540px] lg:absolute lg:mb-0 lg:mt-0 xl:w-[550px]"
              :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
              data-aos-duration="1000"
              data-aos-offset="0"
              data-aos-delay="300"
            >
              <img src="/assets/images/logo-fuboru.webp" alt="home-banner-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="py-10 lg:py-20" data-aos="fade-up" data-aos-duration="1000" id="tentang-kami">
      <div class="container">
        <div class="flex flex-col gap-7 lg:flex-row">
          <div
            class="mx-auto h-[450px] w-full max-w-[380px] flex-none overflow-hidden rounded-b-[160px] rounded-tl-[200px] rounded-tr-[20px] border-[10px] border-white dark:border-gray-dark"
          >
            <img v-lazy="{ src: AboutImg, loading: LoadingImg, error: LoadingImg }" alt="Fuboru" class="h-full w-full object-cover" />
          </div>
          <div class="flex flex-1 flex-col justify-between text-center ltr:md:text-left rtl:md:text-right">
            <div>
              <h2
                class="mb-4 text-2xl font-extrabold text-black dark:text-white md:text-3xl lg:text-[40px] lg:leading-tight"
                v-html="storeLanguage.section.aboutUs.title[storeLanguage.selected]"
              ></h2>
              <div class="text-justify" v-html="storeLanguage.section.aboutUs.message[storeLanguage.selected]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="overflow-x-hidden py-14 dark:!bg-none lg:py-[100px]">
      <div class="relative bg-center">
        <img src="/assets/images/how-we-do-it_.png" alt="fuboru-team" class="absolute inset-x-0 bottom-[93%] mx-auto hidden md:block xl:bottom-[91%]" />
        <img
          src="/assets/images/service-video-bg.png"
          alt="service-video-bg"
          class="relative z-[1] h-[400px] w-full object-cover object-top sm:h-[500px] lg:h-[738px]"
        />
        <div class="absolute -inset-x-4 bottom-0 h-12 -rotate-[2deg] bg-[#7780A1]/10 xl:bottom-3"></div>
        <div class="absolute top-1/2 z-[1] -translate-y-1/2 ltr:left-5 ltr:pr-5 rtl:right-5 rtl:pl-5 ltr:lg:left-[10%] rtl:lg:right-[10%] xl:w-[620px]">
          <p class="pb-8 text-2xl font-extrabold text-white sm:text-4xl sm:leading-[50px]">
            {{ storeLanguage.section.historyVideo.title[storeLanguage.selected] }}
          </p>
          <p class="pb-8 text-sm font-normal text-white sm:text-lg text-justify">
            {{ storeLanguage.section.historyVideo.message[storeLanguage.selected] }}
          </p>
          <button
            type="button"
            class="group flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white ring-[5px] ring-white/10 transition hover:bg-secondary"
            @click="dialog.open()"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-secondary group-hover:text-black/60">
              <g clip-path="url(#clip0_279_1223)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.12543 0.661061C4.53562 -1.06548 1.06668 0.791048 1.06668 3.90361V12.0964C1.06668 15.209 4.53562 17.0655 7.12543 15.3389L13.27 11.2425C15.5838 9.70001 15.5838 6.3 13.27 4.75746L7.12543 0.661061Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_279_1223">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <modal
      ref="dialog"
      width="960"
      :close_by_overlay="true"
      :close-btn="true"
      close_style="floating"
      content-class="pt-8 px-0 pb-0 !bg-transparent"
      close-btn-class="!top-0 ltr:!right-0 rtl:!right-auto rtl:!left-0 !text-white !text-3xl"
    >
      <div class="bg-black !p-4 dark:bg-gray-dark">
        <div class="relative">
          <div class="aspect-video">
            <iframe
              class="absolute top-0 left-0 h-full w-full"
              src="https://www.youtube.com/embed/wQZRBEJ4A4I"
              frameborder="0"
              allowfullscreen
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </modal>

    <section class="py-14 dark:!bg-none lg:py-[100px]" style="background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 54.69%)">
      <div class="container">
        <div class="heading text-center">
          <h4>{{ storeLanguage.section.corporateValue.title[storeLanguage.selected] }}</h4>
          <h6 class="!text-primary">{{ storeLanguage.section.corporateValue.subtitle[storeLanguage.selected] }}</h6>
        </div>
        <div class="grid grid-cols-1 justify-between gap-7 ltr:text-left rtl:text-right aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
          <div
            v-for="(value, index) in storeLanguage.section.corporateValue.values"
            :key="index"
            class="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white py-10 px-6 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent"
            :data-aos="value.animation"
            data-aos-duration="1000"
          >
            <div class="flex-1">
              <h3 class="text-2xl font-extrabold text-gray">{{ value.title[storeLanguage.selected] }}</h3>
              <p class="mt-4 text-lg font-semibold text-justify" v-html="value.message[storeLanguage.selected]"></p>
            </div>
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(71,189,255,0.06)]"
              :class="value.icon.color"
              v-html="value.icon.svg"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[url(/assets/images/team-bg.png)] bg-cover bg-center bg-no-repeat py-10 dark:bg-black/50 lg:py-[100px]" id="produk">
      <div class="container">
        <div class="heading text-center">
          <h4>{{ storeLanguage.section.products.title[storeLanguage.selected] }}</h4>
          <h6>{{ storeLanguage.section.products.subtitle[storeLanguage.selected] }}</h6>
        </div>
        <div class="mb-7">
          <ul class="filters home-filter mt-10 flex gap-8 overflow-x-auto whitespace-nowrap pb-3 font-bold lg:mt-0 lg:gap-10">
            <li class="filter" v-for="(category, index) in categories" :key="index" :class="{ active: activeTab === category.slug }">
              <button type="button" class="transition hover:text-secondary" @click="activeTab = category.slug">{{ ucwords(category.name) }}</button>
            </li>
          </ul>
        </div>
        <div class="projects grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            class="project"
            v-for="(product, index) in products"
            :key="index"
            :class="activeTab === 'all' || activeTab === product.category.slug ? 'block' : 'hidden'"
          >
            <div
              class="cursor-pointer relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none"
            >
              <router-link class="absolute top-0 h-full w-full ltr:left-0 rtl:right-0" :to="{ name: 'product.show', params: { slug: product.slug } }" />
              <img
                v-lazy="{
                  src: `https://wzsfgaratnngbewlvmqf.supabase.co/storage/v1/object/public/product-bucket/${product.image}`,
                  loading: LoadingImg,
                  error: LoadingImg,
                }"
                :alt="product.name"
                class="h-52 w-full rounded-t-3xl object-cover"
              />
              <div class="p-5 text-sm font-bold">
                <h6 class="mb-1 text-black dark:text-white">{{ ucwords(product.name) }}</h6>
                <p>{{ ucwords(product.category.name) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-b from-white/60 to-transparent py-10 dark:from-white/[0.02] lg:py-[100px]" id="jaminan-kualitas">
      <div class="container">
        <div class="heading text-center">
          <h4>{{ storeLanguage.section.quality.title[storeLanguage.selected] }}</h4>
          <h6>{{ storeLanguage.section.quality.subtitle[storeLanguage.selected] }}</h6>
        </div>
        <div class="grid gap-8 sm:grid-cols-3 lg:grid-cols-4" data-aos="fade-up" data-aos-duration="1000">
          <div class="group cursor-pointer text-center" v-for="(certificate, index) in certificates" :key="index">
            <div class="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
              <img
                v-lazy="{
                  src: `https://wzsfgaratnngbewlvmqf.supabase.co/storage/v1/object/public/certificate-bucket/${certificate.image}`,
                  loading: LoadingImg,
                  error: LoadingImg,
                }"
                :alt="certificate.name"
                class="h-full w-full rounded-3xl object-cover object-top"
              />
            </div>
            <h4 class="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
              {{ certificate.name }}
            </h4>
            <h6 class="text-sm font-bold">{{ certificate[fields[storeLanguage.selected]] }}</h6>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 lg:py-[100px]" id="faq">
      <faq></faq>
    </section>

    <section class="bg-gradient-to-b from-transparent to-white/50 py-12 dark:to-white/[0.02] lg:py-24">
      <div class="container">
        <div class="heading text-center">
          <h4>{{ storeLanguage.section.comment.title[storeLanguage.selected] }}</h4>
          <h6>{{ storeLanguage.section.comment.subtitle[storeLanguage.selected] }}</h6>
        </div>

        <ClientSlider type="creative-agency"></ClientSlider>
      </div>
    </section>

    <section class="py-14 dark:bg-gray-dark lg:py-[100px]" id="kontak">
      <div class="container">
        <div class="relative z-10 lg:flex">
          <div class="heading text-center lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right">
            <h4 class="sm:!leading-[50px]">Kontak</h4>
            <h6>Silahkan menghubungi kami untuk mendapatkan informasi terbaru seputar produk otomotif fuboru</h6>
            <img
              src="/assets/images/form-light-img.svg"
              alt="form-img"
              class="mx-auto"
              :data-aos="store.direction === 'rtl' ? 'fade-left' : 'fade-right'"
              data-aos-duration="1000"
            />
          </div>
          <form action="" class="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-2/3 lg:px-8">
            <div class="grid gap-10 sm:grid-cols-2">
              <div class="relative">
                <input
                  type="text"
                  name="name"
                  class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                />
                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">Full Name</label>
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                >
                  <path
                    d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                  <path
                    d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                    stroke="currentColor"
                    stroke-width="1.8"
                  />
                </svg>
              </div>
              <div class="relative">
                <input
                  type="email"
                  name="email"
                  class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                />
                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">Email Address</label>
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                >
                  <path
                    d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="relative">
                <input
                  type="text"
                  name="mobile"
                  class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                />
                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">Mobile Number</label>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                >
                  <path
                    d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="relative">
                <input
                  type="text"
                  name="city"
                  class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                />
                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">City</label>
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                >
                  <path
                    d="M5.89416 2.31259C7.20149 1.48625 8.75475 1.00732 10.4211 1.00732C15.0719 1.00732 18.8421 4.73828 18.8421 9.34066C18.8421 15.0541 12.1053 21.0073 10.4211 21.0073C8.73684 21.0073 2 15.0541 2 9.34066C2 7.87581 2.38193 6.49924 3.05263 5.30315"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                  <path
                    d="M13.4571 9.77392C13.5365 9.49702 13.579 9.20456 13.579 8.90216C13.579 7.15811 12.1651 5.74427 10.4211 5.74427C8.67702 5.74427 7.26318 7.15811 7.26318 8.90216C7.26318 10.6462 8.67702 12.0601 10.4211 12.0601C10.6633 12.0601 10.8991 12.0328 11.1256 11.9812"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div class="relative mt-10">
              <input
                type="text"
                name="message"
                class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
              />
              <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">Message</label>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
              >
                <path
                  d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
                <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
              </svg>
            </div>
            <div class="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
              <button type="button" class="btn bg-gray px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary">Kirim</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
