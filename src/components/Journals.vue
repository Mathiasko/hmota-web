<template>
  <div>
    <h2 class="border-l border-r border-black p-5 pl-2 text-2xl">HMOTA Journal</h2>
    <div>
      <JournalPreview />
      <JournalPreview />
      <JournalPreview />
    </div>
  </div>
</template>

<script>
import JournalPreview from "./forJournal/JournalPreview.vue"
export default {
  name: 'Journals',
  components:{
    JournalPreview,
  }
};
</script>

<style scoped></style>