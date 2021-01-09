<template>
  <div class="p-3 md:px-32 bg-gray-200 ">
    <header>
      <Navigation />
    </header>
    <body>
      <router-view />
      <Footer />
    </body>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style></style>
