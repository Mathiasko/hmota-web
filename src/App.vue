<template>
  <div class="p-3 xl:max-w-7xl m-auto  ">
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
