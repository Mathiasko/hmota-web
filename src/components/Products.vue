<template>
  <div>
    <div class="flex md:grid md:grid-cols-5 md:h-20">
      <p class="mr-5 md:m-auto">SHOWING</p>
      <button @click="setFilter('')">All</button>
      <button @click="setFilter('magazines')">Magazines</button>
      <button @click="setFilter('merch')">Merch</button>
      <button @click="setFilter('prints')">Prints</button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 borl">
      <router-link
        :to="{ name: 'Product', params: { id: product.id } }"
        v-for="product in visibleProducts"
        :key="product.id"
      >
        <ProductPreview :product="product"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductPreview from './forProducts/ProductPreview';
export default {
  name: 'Products',
  components: {
    ProductPreview,
  },
  data() {
    return {
      filter: null,
    };
  },
  methods: {
    setFilter(filter) {
      this.filter = filter;
    },
    addToCart(key) {
      this.$store.commit('pushNewItem', key);
    },
  },
  computed: {
    visibleProducts() {
      return this.$store.getters.getFilteredProducts(this.filter);
    },
  },
};
</script>

<style scoped>
.borl{
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}
</style>
