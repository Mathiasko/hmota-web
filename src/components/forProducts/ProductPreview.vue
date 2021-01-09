<template>
  <div class="bor">
    <img :src="require(`../../assets/productImg/${product.image[0]}`)" />
    <div>
      <p>{{ product.name }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductPreview',
  props: ['product'],
  methods:{

  }
};
</script>

<style scoped>
.bor{
  border-left: black solid 1px;
  border-top: black solid 1px;

}
</style>
