import { createWebHashHistory, createRouter } from 'vue-router';
import Index from '../components/Index.vue';
// import About from '../components/About.vue'; --static Import

const About = import('../components/About.vue'); //loads when needed

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Index },
    { path: '/about', component: About },
  ],
});

export default router;
