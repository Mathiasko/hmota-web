<template>
  <div class="relative hover">
    <div class="middleBor h-prodPrew">
      <div class="h m-5">
        <img
          class="h w-full object-cover"
          :src="require(`../../assets/productImg/${product.image[0]}`)"
        />
      </div>
      <div class="px-2 border-t border-black relative">
        <p class="pt-5 text-lg md:text-2xl">{{ product.name }}</p>
        <p class="md:py-3 text-2xl absolute top-20 right-5">{{ priceInEuro(product.price) }}</p>
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
@media (max-width: 768px) {
  .h{
    height: 15rem;
  }
    .h-prodPrew {
    height: 25rem;
  }
}
@media (min-width: 768px) {

  .h-prodPrew {
    height: 41rem;
  }
  .h{
    height: 30rem;
  }
}

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
.hover{
  transition: 0.3s ease-in-out;
}
.hover:hover{
  background-color: #CDB6BD;
}
</style>
