<template>
  <div class="p-6 bg-gray-200">
    <header>
      <Navigation />
    </header>
    <body>
      <Index />
    </body>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Index from './components/Index.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Index,
  },
};
</script>

<style></style>
