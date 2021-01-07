<template>
  <div class="">
    <div class="relative">
      <img :src="'assets/img/Team.jpg'" />
      <p class="position">Meet our team</p>
    </div>
    <div
      :class="{ hidden: popup }"
      class="fixed top-0 left-0 w-full h-full bgcolor"
    >
      <TeamMemberCard
        @emitEvent="togglePopup"
        :id="memberToDisplay"
        :role="memberRole"
      />
    </div>
    <div>
      <h2 class="pt-12 text-3xl">Jurnalists</h2>
      <div>
        <ul class="grid grid-cols-2 md:grid-cols-4">
          <li v-for="(member, index) in TeamMembers.jurnalists" :key="index">
            <TeamMember
              :id="index"
              @click="
                togglePopup();
                selectedMember(index, 'jurnalists');
              "
            />
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h2 class="pt-12 text-3xl">Photographers</h2>
      <div>
        <ul class="grid grid-cols-2 md:grid-cols-4">
          <li v-for="(member, index) in TeamMembers.photographers" :key="index">
            <TeamMember
              :id="index"
              @click="
                togglePopup();
                selectedMember(index, 'photographers');
              "
            />
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h2 class="pt-12 text-3xl">Illustrators</h2>
      <div>
        <ul class="grid grid-cols-2 md:grid-cols-4">
          <li v-for="(member, index) in TeamMembers.illustrators" :key="index">
            <TeamMember
              :id="index"
              @click="
                togglePopup();
                selectedMember(index, 'illustrators');
              "
            />
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h2 class="pt-12 text-3xl">Graphic designers</h2>
      <div>
        <ul class="grid grid-cols-2 md:grid-cols-4">
          <li v-for="(member, index) in TeamMembers.designers" :key="index">
            <TeamMember
              :id="index"
              @click="
                togglePopup();
                selectedMember(index, 'designers');
              "
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TeamMembers from '../assets/TeamMembers.js';
import TeamMember from './forTeam/TeamMember.vue';
import TeamMemberCard from './forTeam/TeamMemberCard.vue';

export default {
  name: 'Team',
  components: {
    TeamMember,
    TeamMemberCard,
  },
  data() {
    return {
      TeamMembers,
      popup: true,
      memberToDisplay: 0,
      memberRole: 'designers',
    };
  },
  methods: {
    togglePopup() {
      this.popup = !this.popup;
    },
    selectedMember(id, role) {
      this.memberToDisplay = id;
      this.memberRole = role;
    },
  },
  computed: {},
};
</script>

<style scoped>
.position {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.bgcolor {
  background-color: #353d67be;
}
</style>
