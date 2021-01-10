<template>
  <div>
    <div>
      <img src="assets/img/foto_clanok1.png" />
    </div>
    <div>
      <p>
        {{ Journals[0].category }} | {{ Journals[0].author }} |
        {{ Journals[0].date }}
      </p>
      <h2 class="text-2xl pt-5">{{ Journals[0].content.heading }}</h2>
      <p class="pt-5">{{ Journals[0].content.citat }}</p>
      <div class="py-8"
        v-for="(section, index) in Journals[0].content.sections"
        :key="index"
      >
        <p class="font-bold">{{ section.podnadpis }}</p>
        <p class="">{{ section.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Journals from '../assets/journal.js';
export default {
  name: 'Journal',
  data() {
    return {
      Journals,
    };
  },
};
</script>

<style scoped></style>
