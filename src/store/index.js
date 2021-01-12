import { createStore } from 'vuex';
import filterItems from '../components/shared/filterItems.js';

const store = createStore({
  state() {
    return {
      journals: [
        {
          id: '1',
          date: 'Aug 21, 2020',
          author: 'Simona Fajrfkova',
          category: 'Report',
          content: {
            heading: 'Wounds covered by gold',
            citat:
              '“In Japan, broken items are repaired with gold. This “mistake” is considered a unique history of the object, which adds to the beauty. “',
            sections: [
              {
                podnadpis: 'You are beautiful.',
                text:
                  'What first occurred to you in this simple sentence? Did you think of the exterior? What do you look like, what are you wearing? You are beautiful because it radiates happiness from you. Take a breath and look around. Look up at the sky. We will never be as beautiful as we are today. We are so tiny in this vast universe, but still infinite. Your soul, thoughts, ideas. None of this has borders. You are no one in the world like you can do what you can. Let the rays of the sun caress you, because the world has chosen you to walk here today and to endow you with the beauty of our unique being.',
              },
              {
                podnadpis: 'Close your eyes.',
                text:
                  'Another day similar to the one before him. Everything is so extremely ordinary.The days are tiring and the nights too short for enough rest. You lose yourself and you don’t even know how it happens. Looking in the mirror scares you, because you see in your eyes everything that you try so hard to suffocate inside. All the mistakes, the failed attempts, the people who left you when you needed them. Be the one you need by your side. Be yourself the person you need. You are “just” a person. Let all your sadness and stress drown in the lake not far from the house on a sunny summer day. Find time for your soul. What looks like a disaster today, maybe in a few months, will be a grain of sand compared to the happiness that awaits you. Today is an ordinary day. Ordinary date. In a few years, however, you can fly on this day to your dream vacation, celebrate your child’s birthday or celebrate the 5th wedding anniversary and be happier than ever before.',
              },
              {
                podnadpis: "You're over gold. Believe it.",
                text:
                  'Because today you are yourself. Because your thoughts fascinate me. Because your ideas would never come to my mind. Because your smile when looking at the sunset, your puppy or your favorite food is different and brighter than the others. Were you broken? Did the world hurt you? So let your wounds be flooded with gold and look beautiful and unique. Because with your gold you are yourself, your experiences, joys and worries. Are you weak Are you emotional? Are you looking forward to it? Are you shy … Whatever you are, you are yourself today and you will never be the same. Love it while you are, where you are, with whom you are, and know that every day we are more beautiful than ever.',
              },
            ],
          },
        },
        {
          id: '2',
          date: 'Aug 21, 2020',
          author: 'Simona Fajrfkova',
          category: 'Report',
          content: {
            heading: 'Jako preco na co',
            citat:
              '“In Japan, broken items are repaired with gold. This “mistake” is considered a unique history of the object, which adds to the beauty. “',
            sections: [
              {
                podnadpis: 'You are beautiful.',
                text:
                  'What first occurred to you in this simple sentence? Did you think of the exterior? What do you look like, what are you wearing? You are beautiful because it radiates happiness from you. Take a breath and look around. Look up at the sky. We will never be as beautiful as we are today. We are so tiny in this vast universe, but still infinite. Your soul, thoughts, ideas. None of this has borders. You are no one in the world like you can do what you can. Let the rays of the sun caress you, because the world has chosen you to walk here today and to endow you with the beauty of our unique being.',
              },
              {
                podnadpis: 'Close your eyes.',
                text:
                  'Another day similar to the one before him. Everything is so extremely ordinary.The days are tiring and the nights too short for enough rest. You lose yourself and you don’t even know how it happens. Looking in the mirror scares you, because you see in your eyes everything that you try so hard to suffocate inside. All the mistakes, the failed attempts, the people who left you when you needed them. Be the one you need by your side. Be yourself the person you need. You are “just” a person. Let all your sadness and stress drown in the lake not far from the house on a sunny summer day. Find time for your soul. What looks like a disaster today, maybe in a few months, will be a grain of sand compared to the happiness that awaits you. Today is an ordinary day. Ordinary date. In a few years, however, you can fly on this day to your dream vacation, celebrate your child’s birthday or celebrate the 5th wedding anniversary and be happier than ever before.',
              },
              {
                podnadpis: "You're over gold. Believe it.",
                text:
                  'Because today you are yourself. Because your thoughts fascinate me. Because your ideas would never come to my mind. Because your smile when looking at the sunset, your puppy or your favorite food is different and brighter than the others. Were you broken? Did the world hurt you? So let your wounds be flooded with gold and look beautiful and unique. Because with your gold you are yourself, your experiences, joys and worries. Are you weak Are you emotional? Are you looking forward to it? Are you shy … Whatever you are, you are yourself today and you will never be the same. Love it while you are, where you are, with whom you are, and know that every day we are more beautiful than ever.',
              },
            ],
          },
        },
        {
          id: '3',
          date: 'Aug 21, 2020',
          author: 'Simona Fajrfkova',
          category: 'Report',
          content: {
            heading: 'Aj v zime byva teplo',
            citat:
              '“In Japan, broken items are repaired with gold. This “mistake” is considered a unique history of the object, which adds to the beauty. “',
            section: [
              {
                podnadpis: 'You are beautiful.',
                text:
                  'What first occurred to you in this simple sentence? Did you think of the exterior? What do you look like, what are you wearing? You are beautiful because it radiates happiness from you. Take a breath and look around. Look up at the sky. We will never be as beautiful as we are today. We are so tiny in this vast universe, but still infinite. Your soul, thoughts, ideas. None of this has borders. You are no one in the world like you can do what you can. Let the rays of the sun caress you, because the world has chosen you to walk here today and to endow you with the beauty of our unique being.',
              },
              {
                podnadpis: 'Close your eyes.',
                text:
                  'Another day similar to the one before him. Everything is so extremely ordinary.The days are tiring and the nights too short for enough rest. You lose yourself and you don’t even know how it happens. Looking in the mirror scares you, because you see in your eyes everything that you try so hard to suffocate inside. All the mistakes, the failed attempts, the people who left you when you needed them. Be the one you need by your side. Be yourself the person you need. You are “just” a person. Let all your sadness and stress drown in the lake not far from the house on a sunny summer day. Find time for your soul. What looks like a disaster today, maybe in a few months, will be a grain of sand compared to the happiness that awaits you. Today is an ordinary day. Ordinary date. In a few years, however, you can fly on this day to your dream vacation, celebrate your child’s birthday or celebrate the 5th wedding anniversary and be happier than ever before.',
              },
              {
                podnadpis: "You're over gold. Believe it.",
                text:
                  'Because today you are yourself. Because your thoughts fascinate me. Because your ideas would never come to my mind. Because your smile when looking at the sunset, your puppy or your favorite food is different and brighter than the others. Were you broken? Did the world hurt you? So let your wounds be flooded with gold and look beautiful and unique. Because with your gold you are yourself, your experiences, joys and worries. Are you weak Are you emotional? Are you looking forward to it? Are you shy … Whatever you are, you are yourself today and you will never be the same. Love it while you are, where you are, with whom you are, and know that every day we are more beautiful than ever.',
              },
            ],
          },
        },
      ],
      products: [
        {
          id: '1',
          category: 'magazines',
          name: 'Letná HMOTA – momenty',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 3,
          sale: false,
          image: ['Letná HMOTA – momenty.jpg'],
        },
        {
          id: '2',
          category: 'magazines',
          name: 'Jarná HMOTA – detstvo',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 3,
          sale: false,
          image: ['Jarná HMOTA – detstvo.jpg'],
        },
        {
          id: '3',
          category: 'magazines',
          name: 'Zimná HMOTA – nahota',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 3,
          sale: false,
          image: ['Zimná HMOTA – nahota.png'],
        },
        {
          id: '4',
          category: 'magazines',
          name: 'Jesenná HMOTA – metamorfóza',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 3,
          sale: true,
          image: ['Jesenná HMOTA – metamorfóza.png'],
        },
        {
          id: '5',
          category: 'magazines',
          name: 'Predplatné HMOTA 2021',
          description: 'Get hmota as soon as it comes out',
          price: 20,
          sale: true,
          image: ['Predplatné časopisu HMOTA na rok 2021.jpg'],
        },
        {
          id: '6',
          category: 'merch',
          name: 'Zápisník',
          description:
            'Originálny zápisník s ilustráciou od Lívie Suchej z dielne Remini',
          price: 19,
          sale: false,
          image: [
            'Zápisník1.jpg',
            'Zápisník2.jpg',
            'Zápisník3.jpg',
            'Zápisník4.jpg',
          ],
        },
        {
          id: '7',
          category: 'merch',
          name: 'Záložka vytlačená na recyklovanom papieri',
          description:
            'Záložka vytlačená na recyklovanom papieri s dizajnom od Laury Dimovej',
          price: 0.7,
          sale: false,
          image: ['zalozka.png'],
        },
        {
          id: '8',
          category: 'merch',
          name: 'Odznak HMOTÍM',
          description:
            'Odznak HMOTÍM s dizajnom od Laury Dimovej',
          price: 0.5,
          sale: false,
          image: ['odznak.jpg'],
        },
        {
          id: '9',
          category: 'merch',
          name: 'Nálepka HMOTA x Kristína Veselá',
          description:
            'Nálepka s dizajnom od Kristíny Veselej a fotografiou od Martiny Pecháčkovej',
          price: 0.5,
          sale: false,
          image: ['nalepka sedost.jpg'],
        },
        {
          id: '10',
          category: 'merch',
          name: 'A set nálepiek DETSTVO',
          description:
            'A set hravé nálepky k jarnému číslu s autorskými ilustráciami od Sáry Kráľovej',
          price: 1.5,
          sale: false,
          image: ['nalepky-aa.png'],
        },
        {
          id: '11',
          category: 'merch',
          name: 'B set nálepiek DETSTVO',
          description:
            'B set hravé nálepky k jarnému číslu s autorskými ilustráciami od Sáry Kráľovej',
          price: 1.5,
          sale: false,
          image: ['nalepky-bb.png'],
        },
        {
          id: '12',
          category: 'merch',
          name: 'Veselá omaľovanka',
          description:
            'Veselá omaľovánka navrhnutá ilustrátorkou Emmou Kraus',
          price: 1,
          sale: false,
          image: ['omalo-1.jpg'],
        },
        {
          id: '13',
          category: 'prints',
          name: 'Autorský print Viktórie Bálintovej',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 5,
          sale: false,
          image: ['print1.jpg'],
        },
        {
          id: '14',
          category: 'prints',
          name: 'Autorský print Emmy Kraus',
          description:
            'The long-awaited spring issue is finally here and brings some surprises. It is more colorful, more comprehensive and we hope also better. In addition, we have prepared various accessories , whether it is a joyful children’s playlist, instagram filter or various small gifts that are ready for you.',
          price: 5,
          sale: false,
          image: ['print2.jpg'],
        },
      ],
      cart: [
        {
          amount: 1,
          product: {
            id: '10',
            name: 'Hmota print Knizka',
            price: 0.5,
          },
        },
        {
          amount: 1,
          product: {
            id: '9',
            name: 'Hmota Print',
            price: 0.5,
          },
        },
      ],
    };
  },
  getters: {
    getFilteredProducts(state) {
      return (filter) => filterItems(filter, state.products);
    },
    getFilteredJournals(state) {
      return (filter) => filterItems(filter, state.journals);
    },
    getProduct: (state) => (id) => {
      return state.products.find((x) => x.id == id);
    },
    getRelatedProducts: (state) => (category) => {
      return state.products.filter((x) => x.category == category);
    },
    getCart(state) {
      return state.cart;
    },
  },
  mutations: {
    addToCart(state, idCount) {
      const { cart, products } = state;
      const productIndex = cart.findIndex(
        (cartProduct) => cartProduct.product.id === idCount.id,
      ); // NOTE: vráti -1 ak neexistuje, alebo vrati index productu v košiku https://mdn.io/array/findIndex
      const product = products.find((product) => product.id === idCount.id);

      if (productIndex > -1) {
        const cartProduct = cart[productIndex];
        cartProduct.amount += idCount.amount;
      } else {
        cart.push({
          amount: idCount.amount,
          product,
        });
      }
    },
  },
});
export default store;
