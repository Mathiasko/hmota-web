<template>
  <div>
    <div class="flex w-full">
      <div class="flex justify-center w-1/6 bor md:flex-1">
        <div class=" md:hidden">
          <label for="menu-toggle" class="pointer-cursor"
            ><svg
              class="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 60"
              width="30"
              height="30"
            >
              <title>burger menu</title>
              <rect width="100" height="5"></rect>
              <rect y="30" width="100" height="5"></rect>
              <rect y="60" width="100" height="5"></rect></svg
          ></label>
          <input
            class="hidden"
            type="checkbox"
            id="menu-toggle"
            @click="toggleMob = !toggleMob"
          />
        </div>
        <div class="hidden md:flex items-center">
          <p>Search</p>
        </div>
      </div>
      <a href="#" class="flex-2 flex justify-center borCenter"
        ><img class="h-6 md:h-10 my-2" :src="`./assets/img/logo.png`"
      /></a>
      <div
        class="flex-none flex items-center justify-center bor md:flex-1 w-1/6"
      >
        <p>Cart</p>
      </div>
    </div>

    <div class="w-full borTopNone">
      <div class="md:hidden">
        Search
      </div>

      <div class="md:flex w-full" id="menu" :class="{ hidden: toggleMob }">
        <div class="md:flex w-full">
          <div
            class="p-5 border-t-2 border-solid border-gray-800 md:border-none text-center width2 borRight"
          >
            Shop
          </div>
          <div
            class="p-5 border-t-2 border-solid border-gray-800 md:border-none text-center width borRight relative"
            @click="toggleJur = !toggleJur"
          >
            Jurnal
            <div
              class="absolute flex flex-col w-full top-16 left-0"
              :class="{ hidden: toggleJur }"
            >
              <div class="p-5 text-center jurBor">Volaco</div>
              <div class="p-5 text-center jurBor">Volaco</div>
              <div class="p-5 text-center jurBor">Volaco</div>
              <div class="p-5 text-center jurBor">Volaco</div>
              <div class="p-5 text-center jurBor">Volaco</div>
              <div class="p-5 text-center jurBor">Volaco</div>
            </div>
          </div>
          <div class="p-5 border-t-2 border-solid border-gray-800 md:border-none text-center width1 borRight">

          <router-link :to="{ name: 'About' }"
            
          >
            About us
          </router-link>
          </div>
          <div
            class="p-5 border-t-2 border-solid border-gray-800 md:border-none text-center width "
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      toggleMob: true,
      toggleJur: true,
    };
  },
  props: {},
};
</script>

<style scoped>
@media (min-width: 768px) {
  .borRight {
    border-right: 2px solid rgb(17, 24, 39);
  }
  .jurBor {
    border: 2px solid rgb(17, 24, 39);
    border-top: none;
    margin-left: -1.5px;
    margin-right: -2px;
  }
  .width {
    width: 25%;
  }
  .width1 {
    width: calc(25% + 1px);
  }
  .width2 {
    width: calc(25% + 1.8px);
  }
}
.bor {
  border: 2px solid rgb(17, 24, 39);
}

.borTopNone {
  border: 2px solid rgb(17, 24, 39);
  border-top: none;
}
.borCenter {
  border-top: 2px solid rgb(17, 24, 39);
  border-bottom: 2px solid rgb(17, 24, 39);
}
.flex-2 {
  flex: 2;
}
</style>
