import { createStore } from 'vuex';
import filterProducts from '../components/forProducts/filterProducts.js';

const store = createStore({
  state() {
    return {
      products: [
        {
          id: '1',
          category: 'magazines',
          name: 'Hmota Spring 2020',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 3,
          sale: false,
          image: ['hmota1.jpg', 'hmota2.jpg', 'hmota3.jpg'],
        },
        {
          id: '2',
          category: 'magazines',
          name: 'Hmota Summer 2020',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 3,
          sale: false,
          image: ['hmota2.jpg', 'hmota3.jpg', 'hmota4.jpg'],
        },
        {
          id: '3',
          category: 'magazines',
          name: 'Hmota Autumn 2020',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 3,
          sale: false,
          image: ['hmota3.jpg', 'hmota4.jpg', 'hmota1.jpg'],
        },
        {
          id: '4',
          category: 'magazines',
          name: 'Hmota Winter 2020',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 3,
          sale: false,
          image: ['hmota4.jpg', 'hmota1.jpg', 'hmota2.jpg'],
        },
        {
          id: '5',
          category: 'magazines',
          name: 'Hmota 1 year subscription',
          description: 'Get hmota as soon as it comes out',
          price: 20,
          sale: true,
          image: ['hmotaSub.jpg'],
        },
        {
          id: '6',
          category: 'merch',
          name: 'Hmotim odznak',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 0.5,
          sale: false,
          image: ['merch1.jpg'],
        },
        {
          id: '7',
          category: 'merch',
          name: 'Hmota Nalepka',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 0.5,
          sale: false,
          image: ['merch2.jpg'],
        },
        {
          id: '8',
          category: 'merch',
          name: 'Hmota odznak',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 0.5,
          sale: false,
          image: ['merch3.jpg'],
        },
        {
          id: '9',
          category: 'prints',
          name: 'Hmota Print',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 0.5,
          sale: false,
          image: ['print2.jpg'],
        },
        {
          id: '10',
          category: 'prints',
          name: 'Hmota print Knizka',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 0.5,
          sale: false,
          image: ['print1.jpg'],
        },
      ],
      cart: [
        {
          amount: 1,
          product: {
            id: '10',
            name: 'Hmota print Knizka',
            price: 0.5,
          }
        },
        {
          amount: 1,
          product: {
            id: '9',
            name: 'Hmota Print',
            price: 0.5,
          },
        }
      ],
    };
  },
  getters: {
    getFilteredProducts(state) {
      return (filter) => filterProducts(filter, state.products);
    },
    getProduct: (state) => (id) =>{
      return state.products.find(x => x.id == id)
    },
    getRelatedProducts: (state)=> (category)=> {
      return state.products.filter(x => x.category == category)
    },
    getCart(state) {
      return state.cart;
    },
  },
  mutations: {
    addToCart(state, id) {
      const { cart, products } = state
      const productIndex = cart.findIndex(cartProduct => cartProduct.product.id === id) // NOTE: vráti -1 ak neexistuje, alebo vrati index productu v košiku https://mdn.io/array/findIndex
      const product = products.find(product => product.id === id)

      if (productIndex > -1) {
        const cartProduct = cart[productIndex]
        cartProduct.amount += 1
      } else {
        cart.push({
          amonut: 1,
          product,
        });
      }
    },
  },
});
export default store;
