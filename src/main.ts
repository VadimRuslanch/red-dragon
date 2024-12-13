import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index.ts';
import ClickOutside from '@/directives/click-outside.ts';
import ScrollLock from '@/directives/scroll-lock.ts';

import './assets/styles/style.scss';

const app = createApp(App);

app.directive('scroll-lock', ScrollLock);
app.directive('click-outside', ClickOutside);
app.use(router);
app.mount('#app');
