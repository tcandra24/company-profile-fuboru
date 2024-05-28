<script setup>
  import { useLanguageStore } from '@/stores/language';

  const storeLanguage = useLanguageStore();
</script>

<template>
  <footer class="mt-auto bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent">
    <div class="container">
      <div class="grid gap-y-10 gap-x-4 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:py-[100px]">
        <div class="relative">
          <img src="/assets/images/logo.png" alt="plurk" class="h-7" />
          <ul class="mt-12 flex items-center gap-8">
            <li>
              <a href="http://facebook.com/fuboru.co.id" target="_blank" rel="noopener noreferrer">
                <svg
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="transition hover:scale-110 hover:text-secondary"
                >
                  <path
                    d="M8.0733 3.29509H9.88498V0.139742C9.57242 0.0967442 8.49748 0 7.2456 0C4.6335 0 2.84415 1.643 2.84415 4.66274V7.44186H-0.0383301V10.9693H2.84415V19.845H6.37821V10.9701H9.1441L9.58317 7.44269H6.37738V5.01251C6.37821 3.99297 6.65273 3.29509 8.0733 3.29509Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="http://instagram.com/fuboruindonesia" target="_blank" rel="noopener noreferrer">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  class="transition hover:scale-110 hover:text-secondary"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.75995 0H16.0099C19.8063 0 22.8849 3.07862 22.8849 6.875V15.125C22.8849 18.9214 19.8063 22 16.0099 22H7.75995C3.96357 22 0.884949 18.9214 0.884949 15.125V6.875C0.884949 3.07862 3.96357 0 7.75995 0ZM16.0099 19.9375C18.6637 19.9375 20.8224 17.7787 20.8224 15.125V6.875C20.8224 4.22125 18.6637 2.0625 16.0099 2.0625H7.75995C5.1062 2.0625 2.94745 4.22125 2.94745 6.875V15.125C2.94745 17.7787 5.1062 19.9375 7.75995 19.9375H16.0099Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.38495 11C6.38495 7.96263 8.84757 5.5 11.8849 5.5C14.9223 5.5 17.3849 7.96263 17.3849 11C17.3849 14.0374 14.9223 16.5 11.8849 16.5C8.84757 16.5 6.38495 14.0374 6.38495 11ZM8.44745 11C8.44745 12.8948 9.9902 14.4375 11.8849 14.4375C13.7797 14.4375 15.3224 12.8948 15.3224 11C15.3224 9.10388 13.7797 7.5625 11.8849 7.5625C9.9902 7.5625 8.44745 9.10388 8.44745 11Z"
                    fill="currentColor"
                  />
                  <circle cx="17.7975" cy="5.08737" r="0.732875" fill="currentColor" />
                </svg>
              </a>
            </li>
          </ul>
          <img src="/assets/images/footer-shape.png" alt="footer-shape" class="absolute bottom-0 right-0 sm:left-0" />
          <img src="/assets/images/footer-shape-dark.png" alt="footer-shape-dark" class="absolute bottom-0 right-0 hidden dark:block sm:left-0" />
        </div>
        <div>
          <ul class="flex flex-col gap-3 font-bold">
            <li class="mb-3 text-lg font-extrabold text-black dark:text-white">Menu</li>
            <li v-for="(menu, index) in storeLanguage.menus" :key="index">
              <router-link :to="menu.to" class="inline-block transition hover:scale-110 hover:text-secondary">
                {{ menu.name[storeLanguage.selected] }}
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <ul class="flex flex-col gap-3 font-bold">
            <li class="mb-3 text-lg font-extrabold text-black dark:text-white">Informasi</li>
            <li class="text-justify">Jl Raya Trosobo Komplek Industri Kav. III-V, Taman, Sidoarjo Jawa Timur, Indonesia</li>
            <li>
              <a href="tel:+6231-8971669" class="inline-block transition hover:scale-110 hover:text-secondary">+6231-8971669 / 8970602</a>
              <a href="tel:+62811-1111-1983" class="inline-block transition hover:scale-110 hover:text-secondary">+62811-1111-1983 (Whatsapp)</a>
            </li>
            <li>info@fuboru.co.id</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-gradient-to-r from-[#FCF1F4] to-[#EDFBF9] py-5 dark:border-t-2 dark:border-white/5 dark:bg-none">
      <div class="container">
        <div class="text-center font-bold dark:text-white">
          <div>
            Copyright© {{ new Date().getFullYear() }}
            <a href="javascript:" class="text-primary transition hover:text-secondary">PT Fuboru Indonesia</a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </footer>
</template>
