<template>
  <div>
    <div class="flex flex-col md:flex-row">
      <div class="m-auto width md:flex-1">
        <p class="md:hidden text-3xl py-6">{{ productById.name }}</p>
        <div class="md:flex">
          <img
            class="width m-auto"
            :src="require(`../assets/productImg/${productById.image[0]}`)"
          />
        </div>
      </div>
      <div class="bgcol py-10 md:flex-1">
        <div class="mx-5">
          <p class="hidden md:block text-3xl py-6">{{ productById.name }}</p>
          <p class="text-3xl">{{ priceInEuro(productById.price) }}</p>
          <div class="flex py-10 md:max-w-sm">
            <button
              @click="addToCart(productId, amount)"
              class="buttonBor  p-2 flex-1 "
            >
              Add to cart
            </button>
            <button
              @click="decreaseAmount()"
              class="buttonBor mdReduceBor ml-4 w-6 "
            >
              -
            </button>
            <div>
              <p class="buttonBor mdReduceBor p-2 px-3  ">{{ amount }}</p>
            </div>
            <button @click="increaseAmount()" class="buttonBor w-6">+</button>
          </div>
          <div>
            <p>
              {{ productById.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>Related products</p>
      <div class="grid grid-cols-2 md:grid-cols-4 border-l border-black">
        <ProductPreview
          class="mdReduceBor"
          :product="relatedProductsToShow[0]"
        />
        <ProductPreview
          class="mdReduceBor"
          :product="relatedProductsToShow[1]"
        />
        <ProductPreview
          class="mdReduceBor"
          :product="relatedProductsToShow[2]"
        />
        <ProductPreview class="" :product="relatedProductsToShow[3]" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductPreview from './forProducts/ProductPreview';
import { priceInEuro } from './shared/currency';

export default {
  name: 'Product',
  components: {
    ProductPreview,
  },
  data() {
    return {
      productId: this.id,
      amount: 2,
    };
  },
  props: {
    //props from route querry parameter
    id: {
      type: [Number, String],
    },
  },
  methods: {
    priceInEuro,
    addToCart(id, amount) {
      this.$store.commit('addToCart', {
        id: id,
        amount: amount,
      });
        console.log(amount)

    },
    decreaseAmount() {
      if (this.amount === 1) {
        return null;
      } else {
        return this.amount-- ;
      }
    },
    increaseAmount() {
      if (this.amount === 9) {
        return null;
      } else {
        this.amount++;
      }
    },
  },
  computed: {
    productById() {
      return this.$store.getters.getProduct(this.productId);
    },
    relatedProducts() {
      return this.$store.getters.getRelatedProducts(this.productById.category);
    },
    relatedProductsToShow() {
      return this.relatedProducts.filter(
        (product) => this.productId != product.id,
      );
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .width {
    width: 80vw;
  }
  .reduceBor {
    margin-right: -1px;
  }
}
.bgcol {
  background-color: #7393bf;
}
.buttonBor {
  border: 1px solid #7393bf;
  background-color: white;
}
.mdReduceBor {
  margin-right: -1px;
}
</style>
