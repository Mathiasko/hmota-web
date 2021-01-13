<template>
  <div class="bgColor">
    <img :src="`assets/img/value/${img}.jpg`" />
    <h2 class="py-5 text-2xl">{{ value }}</h2>
    <p class="text-lg">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Value',
  props: ['value', 'text', 'img'],
};
</script>

<style scoped>
.bgColor {
  background-color: #7696B9;
}
</style>
