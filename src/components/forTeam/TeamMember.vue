<template>
  <div>
    <img :src="TeamMembers.jurnalists[id].img" />
    <p>{{ TeamMembers.jurnalists[id].name }}</p>
    <p>Learn more</p>
  </div>
</template>

<script>
import TeamMembers from '../../assets/TeamMembers.js';

export default {
  name: 'TeamMember',
  data() {
    return {
      TeamMembers,
    };
  },
  props: {
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
};
</script>

<style scoped></style>