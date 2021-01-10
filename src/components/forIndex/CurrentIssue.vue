<template>
  <div class="md:flex ">
    <div class="flex-1 bgCol text-color-1 px-1 py-10">
      <h2 class="header-size-mobile">Current Issue</h2>
      <br>
      <p class="text-size-1-mobile">
        A dreamy issue about capturing the fragments of time and individual
        moments that make up eternity. 💫 They are fragile, fleeting, but also
        endless. In our new issue you will find:<br> 
        <br> 
        - Interview about photography
        and reportage with Andrej Bán<br> 
        - An article about important moments in
        the history of art <br>
        - Speed and feelings in dance through the eyes of
        dancers <br>
        - Reportage literature as an authentic form of reference<br> 
        -Review of the book Atlas of Forgetting by Petr Krištúfek <br>
        - Portrait of director Ágnes Varda <br>
        - Instructions from our Karla: how to develop a
        film in the comfort of your home And much more!
      </p>
      <button
            class="w-full h-full flex items-center justify-between p-2 bg-white text-center  mt-3 header-size-mobile"
            href=""
          >
            <p class="pl-14  text-color-3 ">Current Issue</p>
            <p class="text-color-3 ">-></p>
          </button>
    </div>
    <div class="flex-1 ">
      <img class="my-10 mx-8" :src="`./assets/img/currentissue.jpg`">
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
  background-color: #363E66;
}
.text-color-1{
    color: #F5F5F5;
}
.text-color-2{
    color: #3B4361;
}
.text-color-3{
  color: #587EA5;
}

.header-size-mobile{
    font-size: 22px;
}
.text-size-1-mobile{
    font-size: 15px;
}
.text-size-2-mobile{
    font-size: 18px;
}
</style>
