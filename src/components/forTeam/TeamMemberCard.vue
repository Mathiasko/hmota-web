<template>

  <div
    class="lg:w-5/6 xl:w-2/3 md:flex m-auto mt-20"
    @click="exitPopup"
  >
  
    <div class="md:w-1/2">
      <img :src="'assets/img/Ema.jpg'" />
    </div>

    <div class="md:w-1/2 color text-white p-7">
      <h2 class="text-2xl pb-5">{{ TeamMembers[role].[id].name }}</h2>
      <p>{{ TeamMembers[role].[id].text }}</p>
    </div>

  </div>
</template>

<script>
import TeamMembers from '../../assets/TeamMembers.js';

export default {
  name: 'TeamMemberCard',
  data() {
    return {
      TeamMembers,
    };
  },
  props: ['id', 'role'],
  emits: ['emitEvent'],
  methods: {
    exitPopup() {
      this.$emit('emitEvent');
    },
  },
};
</script>

<style scoped>
.color {
  background-color: #829ec7;
}
</style>
