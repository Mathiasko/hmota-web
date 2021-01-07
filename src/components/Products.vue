<template>
  <div>
    <div class="flex md:grid md:grid-cols-5 md:h-20">
      <p class="mr-5 md:m-auto">SHOWING</p>
      <button @click="setFilter('')">All</button>
      <button @click="setFilter('Magazines')">Magazines</button>
      <button @click="setFilter('Merch')">Merch</button>
      <button @click="setFilter('Prints')">Prints</button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3">
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
};
</script>

<style scoped></style>
