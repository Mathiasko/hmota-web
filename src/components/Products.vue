<template>
  <div>
    <div class="flex md:grid md:grid-cols-5 md:h-20">
      <p class="mr-5 md:m-auto">SHOWING</p>
      <button @click="setFilter('')">All</button>
      <button @click="setFilter('magazines')">Magazines</button>
      <button @click="setFilter('merch')">Merch</button>
      <button @click="setFilter('prints')">Prints</button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4">
      <router-link :to="{name: 'Product'}" class="" v-for="product in visibleProducts" :key="product.id">
        <img :src="require(`../assets/productImg/${product.image[0]}`)" />
        <div>
            <p>{{product.name}}</p>
            <p>{{product.price}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Products',
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

<style scoped></style>
