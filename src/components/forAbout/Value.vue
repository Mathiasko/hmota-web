<template>
  <div class="bgColor">
    <img :src="`assets/img/${img}.jpg`" />
    <h2>{{ value }}</h2>
    <p>{{ text }}</p>
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
