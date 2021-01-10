<template>
  <div class="border border-black smallRedBor">
    <img src="assets/img/foto_clanok1.png" />
    <div>
      <h2 class="p-5 pl-2 text-2xl">Hygge</h2>
      <p class="px-2 pb-5">
        “The idea of my own magazine at that time was only a negligible and
        vague idea, and yet I was thrilled with it. I wrote to my mentor,
        Alžběta Dlhá and presented the
      </p>
      <p class="pb-5 pl-2 text-sm">Report | by Alzbeta Ferkova | 21 Sep 2020</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JournalPreview',
};
</script>

<style scoped>
@media (max-width: 768px) {
  .smallRedBor {
    margin-bottom: -1px;
  }
}
</style>
