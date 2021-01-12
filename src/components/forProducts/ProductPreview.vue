<template>
  <div class="relative">
    <div class="middleBor h-prodPrew">
      <div class="h m-5">
        <img
          class="h w-full object-cover"
          :src="require(`../../assets/productImg/${product.image[0]}`)"
        />
      </div>
      <div class="px-2 border-t border-black">
        <p class="pt-5 text-base md:text-2xl">{{ product.name }}</p>
        <p class="py-3 ">{{ priceInEuro(product.price) }}</p>
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
  /* .big-h {
    height: 22rem;
  } */
  .h-prodPrew {
    height: 38rem;
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
</style>
