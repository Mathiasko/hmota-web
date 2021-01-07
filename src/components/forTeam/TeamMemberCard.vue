<template>
  <div class="md:flex h-full w-5/6 m-auto overflow-auto" @click="exitPopup">
    <img class="md:flex-1 " :src="'assets/img/Ema.jpg'" />
    <div class="md:flex-1 color text-white p-7">
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
