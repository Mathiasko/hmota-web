<template>
  <div class="relative">
    <div class="middleBor">
      <img
        class="h-64"
        :src="require(`../../assets/productImg/${product.image[0]}`)"
      />
      <div class="h-20">
        <p>{{ product.name }}</p>
        <p>{{ priceInEuro(product.price) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { priceInEuro } from '../shared/currency';

export default {
  name: 'ProductPreview',
  props: ['product'],

  methods: {
    priceInEuro,
  },
};
</script>

<style scoped>
.middleBor {
  border-top: black solid 1px;
  border-bottom: black solid 1px;
  margin-bottom: -1px;
}
.middleBor::before {
  width: 1px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0;
  z-index: 1;
  content: '';
  background: #000;
}
</style>
