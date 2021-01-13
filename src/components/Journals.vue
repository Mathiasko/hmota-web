<template>
  <div>
    <div class="flex border-l border-r border-black items-center md:grid md:grid-cols-8 md:h-20 overflow-auto">
      <p class="p-3 font-bold md:m-auto">SHOWING</p>
      <button class="b hover:underline px-5 leading-4" @click="setFilter('')">All</button>
      <button class="b hover:underline px-5 leading-4" @click="setFilter('Reports')">Reports</button>
      <button class="b hover:underline px-5 leading-4" @click="setFilter('Interviews')">Interviews</button>
      <button class="b hover:underline px-5 leading-4" @click="setFilter('Art & Culture')">Art & Culture</button>
      <button class="b hover:underline px-5 leading-4" @click="setFilter('Essays')">Essays</button>
      <button class="b hover:underline px-5 leading-4" @click="setFilter('Short stories')">Short Stories</button>
      <button class="b hover:underline px-5 leading-4" @click="setFilter('Poetry')">Poetry</button>
    </div>
    <h2 class="border-l border-t border-r border-black p-5 pl-2 text-2xl">
      HMOTA Journal
    </h2>
    <div class="md:grid md:grid-cols-4 borlb">
      <router-link
        :to="{ name: 'Journal', params: { id: journal.id }, hash:'#top' }"
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
  data(){
    return{
      filter: null,
    }
  },
  computed: {
    visibleJournals() {
      return this.$store.getters.getFilteredJournals(this.filter);
    },
  },
  methods:{
    setFilter(filter) {
      this.filter = filter;
    },
  }
};
</script>

<style scoped>
.borlb {
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}
.b {
  outline: none;
}

.active {
  text-decoration: underline;
}
</style>
