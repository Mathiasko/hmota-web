<template>
  <div class="md:flex ">
    <div class="flex-1 bgCol">
      <h2>Current Issue</h2>
      <p>
        A dreamy issue about capturing the fragments of time and individual
        moments that make up eternity. 💫 They are fragile, fleeting, but also
        endless. In our new issue you will find: - Interview about photography
        and reportage with Andrej Bán - An article about important moments in
        the history of art - Speed and feelings in dance through the eyes of
        dancers - Reportage literature as an authentic form of reference -
        Review of the book Atlas of Forgetting by Petr Krištúfek - Portrait of
        director Ágnes Varda - Instructions from our Karla: how to develop a
        film in the comfort of your home And much more!
      </p>
    </div>
    <div class="flex-1 ">
      <img class="m-auto" :src="`./assets/img/currentissue.jpg`">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentIssue',
};
</script>

<style scoped>
.bgCol{
  background-color: #343C68;
}
</style>
