<template>
  <div class="flex flex-col md:flex-row">
    <div class="m-auto width md:flex-1 ">
      <p class="md:hidden text-3xl py-6">{{ productById.name }}</p>
      <div class="md:flex">
        <img
          class="width m-auto"
          :src="require(`../assets/productImg/${productById.image[0]}`)"
        />
      </div>
    </div>
    <div class="bgcol px-4 py-10 md:flex-1">
      <p class="hidden md:block text-3xl py-6">{{ productById.name }}</p>
      <p class="text-3xl">{{ productById.price }}</p>
      <div class="flex py-10 md:max-w-sm">
        <button class="bor  p-2 flex-1 ">Add to cart</button>
        <button class="bor reduceBor ml-4 w-6 ">-</button>
        <div><p class="bor reduceBor p-2 px-3  ">1</p></div>
        <button class="bor w-6">+</button>
      </div>
      <div>
        <p>
          {{ productById.description }}
        </p>
      </div>
    </div>
    <div>
      <p>Related products</p>
      <div class="grid grid-cols-2 md:grid-cols-4">
        <ProductPreview :product="relatedProductsToShow[0]" />
        <ProductPreview :product="relatedProductsToShow[1]" />
        <ProductPreview :product="relatedProductsToShow[2]" />
        <ProductPreview :product="relatedProductsToShow[3]" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductPreview from './forProducts/ProductPreview';

export default {
  name: 'Product',
  components:{
    ProductPreview
  },
  data() {
    return {
      productId: this.id
    };
  },
  props: {
    //props from route querry parameter
    id: {
      type: [Number, String],
    },
  },
  computed: {
    productById() {
      return this.$store.getters.getProduct(this.productId);
    },
    relatedProducts() {
      return this.$store.getters.getRelatedProducts(this.productById.category);
    },
    relatedProductsToShow(){
      return this.relatedProducts.filter(product => this.productId != product.id)
    }
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .width {
    width: 80vw;
  }
}
.bgcol {
  background-color: #7393bf;
}
.bor {
  border: 1px solid #7393bf;
  background-color: white;
}
.reduceBor {
  margin-right: -1px;
}
.bors {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
</style>
