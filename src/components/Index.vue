<template>
  <div class="text-font">
    <div :class="{ active: toggle }" class="flex bg-red-400">
      <router-link :to="{ name: 'Product', params: { id: '5' }, hash:'#top'}" class="m-auto pl-4">GET ANNUAL HMOTA SUBSCRIPTION</router-link>
      <div @click="toggle= !toggle"  class="float-right p-1 pr-3">✖</div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div></div>
      <div class="p-5 md:pl-20 bgCol">
        <p class="my-20 md:text-3xl text-color-1 header-size-mobile">
          We are magazine HMOTA. <br />
          Embodiment of creativity <br />
          and art.
        </p>
        <div class="md:w-80 mb-20 header-size-mobile">
          <button
            class="w-full flex items-center justify-between  bg-white"
          >
            <router-link :to="{ name: 'Product', params: { id: '1' }, hash:'#top'}" class="pl-10 text-color-3">Buy Current Issue</router-link>
            <img class="w-12 arrowBor" :src="`./assets/img/arrow.png`" />
          </button>
        </div>
      </div>
      <div class="p-5 border border-black">
        <h2 class="py-10 md:text-3xl header-size-mobile text-color-2">
          Magazine of young people about art, culture and life
        </h2>
        <p class="md:text-lg text-size-1-mobile text-color-2">
          Hmota is a Slovak <strong>nationwide student magazine</strong> that
          connects and enables young journalists and artists to publish their
          work. Its aim is to give young artists space to write, create and
          support them by being part of a
          <strong> and sincere community</strong> of people with similar
          interests. Hmota embodies view of young individuals on the world, art,
          culture and life itself. At the same time we want to
          <strong
            >educate, inspire and bring new perspective on various
            topics</strong
          >
          to our readers.
        </p>
        <button class="mt-10 text-size-2-mobile text-color-3 underline flex">
          <p class="text-1xl pt-1">Learn more</p>
          <img class="w-10" :src="`./assets/img/arrow.png`" />
        </button>
      </div>
      <div>
        <img class="border-l-0" :src="`./assets/img/index.jpg`" />
      </div>
      <div class="md:col-span-2 ">
        <EditorsPick />
      </div>
      <div class="md:col-span-2 py-10 border-r border-l border-black ">
        <p class="text-size-2-mobile text-color-3 underline text-center">
          <router-link :to="{ name: 'Journals', hash:'#top'}" href="">Continue to Journal -></router-link>
        </p>
      </div>
      <div class="md:col-span-2 border border-black">
        <CurrentIssue />
      </div>
      <div class="md:col-span-2 md:flex w-full border border-t-0 border-black md:p-10">
        <div class="flex-1 ">
          <router-link :to="{ name: 'Product', params: { id: '5' }, hash:'#top'}" class="large-font-size text-color-2 text-5xl pt-10">
            GET ANNUAL HMOTA SUBSCRIPTION
          </router-link>
          <img class="w-20" :src="`./assets/img/arrowB.png`" />
        </div>
        <div class="flex-1">
          <img class="m-auto" :src="'./assets/img/annualSub.jpg'" />
        </div>
      </div>
      <div class="md:col-span-2 border border-t-0 border-black p-5">
        <CarouselReviews />
      </div>
    </div>
  </div>
</template>

<script>
import EditorsPick from './forIndex/EditorsPick.vue';
import CurrentIssue from './forIndex/CurrentIssue.vue';
import CarouselReviews from './forIndex/CarouselReviews.vue';

export default {
  name: 'Index',
  components: {
    EditorsPick,
    CurrentIssue,
    CarouselReviews,
  },
  data(){
    return{
      toggle: false
    }
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .header-size-mobile {
    font-size: 22px;
  }
  .text-size-1-mobile {
    font-size: 15px;
  }
  .text-size-2-mobile {
    font-size: 18px;
  }
}
.active{
  display: none;
}

.arrowBor {
  border-left: 2px solid #7595bb;
}
.bgCol {
  background-color: #7595bb;
}
.text-color-1 {
  color: #f5f5f5;
}
.text-color-2 {
  color: #3b4361;
}
.text-color-3 {
  color: #587ea5;
}
.text-font {
  font-family: 'Poppins', sans-serif;
}
</style>
