<template>
  <div>
    <div class="md:flex height">
      <div class="flex-1 ">
        <img
          class="md:pt-10"
          :src="`assets/img/journalImg/${journalById.img}`"
        />
      </div>
      <div class="flex-1  md:overflow-auto md:mt-10">
        <perfect-scrollbar class="md:px-10">
          <p>
            {{ journalById.category }} | {{ journalById.author }} |
            {{ journalById.date }}
          </p>
          <h2 class="text-2xl pt-5">{{ journalById.content.heading }}</h2>
          <p class="pt-5">{{ journalById.content.citat }}</p>
          <div
            class="py-8"
            v-for="(section, index) in journalById.content.section"
            :key="index"
          >
            <p class="font-bold">{{ section.podnadpis }}</p>
            <p class="">{{ section.text }}</p>
          </div>
          <p class="py-5">- {{ journalById.author }}</p>
        </perfect-scrollbar>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 border-l border-black">
      <JournalPreview
        v-for="journal in limitRelated"
        :key="journal.id"
        class="mdReduceBor"
        :journal="journal"
      />
    </div>
  </div>
</template>

<script>
import JournalPreview from './forJournal/JournalPreview.vue';
export default {
  name: 'Journal',
  props: {
    id: {
      type: [Number, String],
    },
    JournalPreview,
  },
  data() {
    return {
      journalId: this.id,
    };
  },
  computed: {
    journalById() {
      return this.$store.getters.getJournal(this.journalId);
    },
    relatedJournals() {
      // console.log(this.$store.getters.getRelatedJournals(this.journalById.category));
      return this.$store.getters.getRelatedJournals(this.journalById.category);
    },
    relatedJournalsToShow() {
      return this.relatedJournals;
      // .filter((journal) => this.journalId != journal.id);
    },
    limitRelated() {
      console.log(this.relatedJournalsToShow.slice(0, 4));
      return this.relatedJournalsToShow.slice(0, 4);
    },
  },
};
</script>

<style scoped>

@media (min-width: 768px) {
  .height {
    height: calc(100vh - 200px);
  }
  .ps {
    height: 94%;
  }
}
</style>
