<template>
  <div>
    <div class="flex border-l border-r border-black md:grid md:grid-cols-8 md:h-20">
      <p class="mr-5 md:m-auto">SHOWING</p>
      <button @click="setFilter('')">All</button>
      <button @click="setFilter('reports')">Reports</button>
      <button @click="setFilter('interviews')">Interviews</button>
      <button @click="setFilter('art & culture')">Art & Culture</button>
      <button @click="setFilter('essays')">Essays</button>
      <button @click="setFilter('short stories')">Short Stories</button>
      <button @click="setFilter('poetry')">Poetry</button>
    </div>
    <h2 class="border-l border-t border-r border-black p-5 pl-2 text-2xl">
      HMOTA Journal
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 borlb">
      <router-link
        :to="{ name: 'Journal', params: { id: journal.id } }"
        v-for="journal in visibleJournals"
        :key="journal.id"
      >
        <JournalPreview :journal="journal" />
      </router-link>
    </div>
  </div>
</template>

<script>
import JournalPreview from './forJournal/JournalPreview.vue';
export default {
  name: 'Journals',
  components: {
    JournalPreview,
  },
  computed: {
    visibleJournals() {
      return this.$store.getters.getFilteredJournals(this.filter);
    },
  },
};
</script>

<style scoped>
.borlb {
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}
</style>
