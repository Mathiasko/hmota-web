<template>
  <div class="p-6 md:px-20 bgCol ">
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

<style>
bgCol{
  background-color: #F5F5F5;
}
</style>
