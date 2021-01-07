<template>
  <div class="">
    <img :src="`./assets/img/${picture}`" />
    <div class="p-4">
      <p class="mb-8">{{ title }}</p>
      <p class="mb-8">{{ text }}</p>
      <p class="mb-2 border-solid border-gray-600 border-2 inline-block">{{ category }}</p>
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

<style scoped></style>
