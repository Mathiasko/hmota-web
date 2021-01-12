<template>
  <div class="relative">
    <div class="middleBor">
      <img src="assets/img/foto_clanok1.png" />
      <div class="px-2">
        <h2 class="py-5 text-2xl">Hygge</h2>
        <p class="pb-5">
          “The idea of my own magazine at that time was only a negligible and
          vague idea, and yet I was thrilled with it. I wrote to my mentor,
          Alžběta Dlhá and presented the
        </p>
        <p class="pb-5 text-sm">
          Report | by Alzbeta Ferkova | 21 Sep 2020
        </p>
      </div>
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

.middleBor {
  border-top: black solid 1px;
  border-bottom: black solid 1px;
  margin-bottom: -1px;
}
.middleBor::before {
  width: 1px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0;
  z-index: 1;
  content: '';
  background: #000;
}
</style>
