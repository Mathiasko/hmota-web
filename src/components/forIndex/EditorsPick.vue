<template>
  <div class=".text-font">
    <h2 class="my-16 text-3xl header-size-mobile ">Editor's Pick</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 border-l border-black">
      <router-link
        :to="{ name: 'Journal', params: { id: journal.id }, hash:'#top'}"
        v-for="journal in visibleJournals"
        :key="journal.id"
      >
        <JournalPreview :journal="journal" />
      </router-link>
    </div>
  </div>
</template>

<script>
import JournalPreview from '../forJournal/JournalPreview.vue';

export default {
  name: 'EditorsPick',
  components: {
    JournalPreview,
  },
  computed: {
    visibleJournals() {
      return this.$store.getters.getEditorsPick;
    },
  },
};
</script>

<style scoped>
.text-font {
  font-family: 'Poppins', sans-serif;
}
</style>
