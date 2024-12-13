import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index.ts';
import ScrollLock from '@/directives/scroll-lock.ts';

import './assets/styles/style.scss';

const app = createApp(App);

app.directive('scroll-lock', ScrollLock);
app.use(router);
app.mount('#app');
