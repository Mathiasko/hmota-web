<template>
  <div>
    <h2 class="my-16 text-3xl">Editor's Pick</h2>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <Pick
        :title="'Hygge'"
        :text="
          'The idea of my own magazine at that time was only a negligible and vague idea, and yet I was thrilled with it. I wrote to my mentor, Alžběta Dlhá and presented the idea to her'
        "
        :picture="'foto_clanok1.png'"
        :category="'Reports'"
        :by="'Eliska'"
        :when="'22.01.2020'"
      />
      <Pick
        :title="'Hygge'"
        :text="
          'The idea of my own magazine at that time was only a negligible and vague idea, and yet I was thrilled with it. I wrote to my mentor, Alžběta Dlhá and presented the idea to her'
        "
        :picture="'foto_clanok1.png'"
        :category="'Reports'"
        :by="'Eliska'"
        :when="'22.01.2020'"
      />
      <Pick
        :title="'Hygge'"
        :text="
          'The idea of my own magazine at that time was only a negligible and vague idea, and yet I was thrilled with it. I wrote to my mentor, Alžběta Dlhá and presented the idea to her'
        "
        :picture="'foto_clanok1.png'"
        :category="'Reports'"
        :by="'Eliska'"
        :when="'22.01.2020'"
      />
    </div>
  </div>
</template>

<script>
import Pick from './Pick.vue';

export default {
  name: 'EditorsPick',
  components: {
    Pick,
  },
};
</script>

<style scoped></style>
