import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './index.css';
import store from './store';

import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

createApp(App)
  .use(router)
  .use(store)
  .use(PerfectScrollbar)
  .mount('#app');
