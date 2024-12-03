import './assets/main.css';

import { createApp } from 'vue';
import { createHead } from '@unhead/vue';
import { createPinia } from 'pinia';
import VueLazyLoad from 'vue3-lazyload';

import AOS from 'aos';
import 'aos/dist/aos.css';

import appSetting from './app-setting';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const head = createHead();
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(VueLazyLoad);
app.use(head);

appSetting.init();

AOS.init({
  once: true,
});

app.mount('#app');
