import { createWebHashHistory, createRouter } from 'vue-router';
import Index from '../components/Index.vue';
import About from '../components/About.vue'; 
import Team from '../components/Team.vue'; 
import Contact from '../components/Contact.vue'; 
import Products from '../components/Products.vue'; 
import Product from '../components/Product.vue'; 

// const About = import('../components/About.vue'); //loads when needed
// const Team = import('../components/Team.vue');


const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/team', component: Team },
    { path: '/contact', component: Contact },
    { path: '/products', component: Products },
    { path: '/product', component: Product },
  ],
});

export default router;
