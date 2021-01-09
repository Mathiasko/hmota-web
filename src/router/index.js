import { createWebHashHistory, createRouter } from 'vue-router';
import Index from '../components/Index.vue';
import About from '../components/About.vue';
import Team from '../components/Team.vue';
import Contact from '../components/Contact.vue';
import Products from '../components/Products.vue';
import Product from '../components/Product.vue';
import Cart from '../components/Cart.vue';

// const About = import('../components/About.vue'); //loads when needed
// const Team = import('../components/Team.vue');

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/about', name: 'About', component: About },
    { path: '/team', name: 'Team', component: Team },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/products', name: 'Products', component: Products },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/product/:id', props: true, name: 'Product', component: Product },
  ],
});

export default router;
