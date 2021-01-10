<template>
  <div class="">
    <img :src="`./assets/img/${picture}`" />
    <div class="p-4">
      <p class="mb-8 header-size-mobile">{{ title }}</p>
      <p class="mb-8 text-size-1-mobile">{{ text }}</p>
      <p class="mb-2 py-1 px-6 border-solid border-gray-600 border-2 inline-block">{{ category }}</p>
      <p class="mb-8">By {{ by }} | {{ when }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pick',
  props: ['title', 'text', 'picture', 'category', 'by', 'when'],
};
</script>

<style scoped>
.text-color-1{
    color: #F5F5F5;
}
.text-color-2{
    color: #3B4361;
}
.text-color-3{
  color: #587EA5;
}

.header-size-mobile{
    font-size: 22px;
}
.text-size-1-mobile{
    font-size: 15px;
}
.text-size-2-mobile{
    font-size: 18px;
}</style>
