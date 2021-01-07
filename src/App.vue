<template>
  <div class="p-6 md:px-20 bg-gray-200 ">
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
