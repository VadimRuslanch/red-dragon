import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index.ts';

import './assets/styles/style.scss';

const app = createApp(App);

app.use(router);
app.mount('#app');
