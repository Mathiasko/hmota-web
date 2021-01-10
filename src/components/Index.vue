<template>
  <div class="text-font">
    <div class="flex bg-red-400 ">
      <p class="m-auto pl-4">GET ANNUAL HMOTA SUBSCRIPTION</p>
      <div class="float-right p-1 pr-3">X</div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img class="" :src="`./assets/img/img.jpg`" />
      </div>
      <div class="p-5 bgCol">
        <p class="my-20 text-color-1 header-size-mobile">
          We are magazine HMOTA. <br />
          Embodiment of creativity <br />
          and art.
        </p>
        <div class="md:w-56 h-16  mb-20 header-size-mobile">
          <button
            class="w-full h-full flex items-center justify-between p-2 bg-white"
            href=""
          >
            <p class="pl-3  text-color-3">Current Issue</p>
            <p class="">-></p>
          </button>
        </div>
      </div>
      <div class="p-5">
        <h2 class="py-16 header-size-mobile text-color-2">
          Magazine of young people about art, culture and life
        </h2>
        <p class="text-size-1-mobile text-color-2">
          Hmota is a Slovak <strong>nationwide student magazine</strong> that connects and
          enables young journalists and artists to publish their work. Its aim
          is to give young artists space to write, create and support them by
          being part of a <strong> and sincere community</strong> of people with similar
          interests. Hmota embodies view of young individuals on the world, art,
          culture and life itself. At the same time we want to <strong>educate, inspire
          and bring new perspective on various topics</strong> to our readers.
        </p>
        <button class="my-16 text-size-2-mobile text-color-3 underline">Learn more -></button>
      </div>
      <div>
        <img class="indexImg" :src="`./assets/img/index.png`" />
      </div>
      <div class="md:col-span-2 ">
        <EditorsPick />
      </div>
      <div class="md:col-span-2 h-20 md:h-32">
        <p class="text-size-2-mobile text-color-3 underline"><a href="">Continue to Journal -></a></p>
      </div>
      <div class="md:col-span-2">
        <CurrentIssue />
      </div>
      <div class="md:col-span-2 md:flex w-full">
        <div class="flex-1">
          <p class="large-font-size text-color-2 ">GET ANNUAL HMOTA SUBSCRIPTION</p>
          <p class="large-font-size text-color-2 ">-></p>
        </div>
        <div class="flex-1">
          <img :src="'./assets/img/annualSub.jpg'" />
        </div>
      </div>
      <div>
        <SlidingReviews />
      </div>
    </div>
  </div>
</template>

<script>
import EditorsPick from './forIndex/EditorsPick.vue';
import CurrentIssue from './forIndex/CurrentIssue.vue';
import SlidingReviews from './forIndex/SlidingReviews.vue';

export default {
  name: 'Index',
  components: {
    EditorsPick,
    CurrentIssue,
    SlidingReviews,
  },
};
</script>

<style scoped>
.indexImg {
  background-position: center center;
  background-repeat: no-repeat;
}
.bgCol{
  background-color: #7595BB;
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

.large-font-size{
  font-size: 45px;
}
.text-font{
  font-family: 'Poppins', sans-serif;
}
</style>
