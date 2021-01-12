<template>
  <div>
    <div class="flex place-content-around border-l border-r border-black ">
      <p class="py-3 md:p-5 font-bold">SHOWING</p>
      <button
        class="b hover:underline md:p-5 md:px-10"
        v-bind:class="{ active: isActive1 }"
        @click="
          setFilter('');
          active(1);
        "
      >
        All
      </button>
      <button
        class="b hover:underline md:p-5 md:px-10"
        v-bind:class="{ active: isActive2 }"
        @click="
          setFilter('magazines');
          active(2);
        "
      >
        Magazines
      </button>
      <button
        class="b hover:underline md:p-5 md:px-10"
        v-bind:class="{ active: isActive3 }"
        @click="
          setFilter('merch');
          active(3);
        "
      >
        Merch
      </button>
      <button
        class="b hover:underline md:p-5 md:px-10"
        v-bind:class="{ active: isActive4 }"
        @click="
          setFilter('prints');
          active(4);
        "
      >
        Prints
      </button>
    </div>
    <h2 class="border-l border-t border-r border-black p-8 pl-5 text-4xl">
      Products
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 borlb">
      <router-link
        :to="{ name: 'Product', params: { id: product.id } }"
        v-for="product in visibleProducts"
        :key="product.id"
      >
        <ProductPreview :product="product" />
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
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
    };
  },
  methods: {
    setFilter(filter) {
      this.filter = filter;
    },
    addToCart(key) {
      this.$store.commit('pushNewItem', key);
    },
    active(x) {
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      switch (x) {
        case 1:
          this.isActive1 = true;
          break;
        case 2:
          this.isActive2 = true;
          break;
        case 3:
          this.isActive3 = true;
          break;
        case 4:
          this.isActive4 = true;
          break;
      }
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
.borlb {
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

.b {
  outline: none;
}

.active {
  text-decoration: underline;
}
</style>
