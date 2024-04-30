import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import AOS from 'aos';
import 'aos/dist/aos.css';

import appSetting from './app-setting';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);

appSetting.init();

AOS.init({
  once: true,
});

app.mount('#app');
