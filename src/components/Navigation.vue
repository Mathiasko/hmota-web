<template>
  <div id="top">
    <div class="flex w-full">
      <div class="flex justify-center w-1/6 bor md:flex-1">
        <div class="md:hidden">
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
        <router-link :to="{ name: 'Cart' }">Cart</router-link>
      </div>
    </div>

    <div class="w-full borTopNone">
      <div class="md:hidden pl-3">Search</div>

      <div class="md:flex w-full" id="menu" :class="{ hidden: toggleMob }">
        <div class="md:flex w-full">
          <div
            class="p-5 border-t-2 border-solid border-gray-800 md:border-none text-center width2 borRight"
          >
            <router-link :to="{ name: 'Products' }">
              Shop
            </router-link>
          </div>
          <div class="p-5 border-t border-solid border-gray-800 md:border-none text-center width borRight relative">
            <router-link
             :to="{ name: 'Journals' }"
              @click="toggleJur = !toggleJur"
            >
              Journal
              <!-- <div
              class="absolute flex flex-col w-full top-16 left-0"
              :class="{ hidden: toggleJur }"
            >
              <div class="p-5 text-center jurBor">Volaco</div>
              <div class="p-5 text-center jurBor">Volaco</div>
              <div class="p-5 text-center jurBor">Volaco</div>
              <div class="p-5 text-center jurBor">Volaco</div>
              <div class="p-5 text-center jurBor">Volaco</div>
              <div class="p-5 text-center jurBor">Volaco</div>
            </div> -->
            </router-link>
          </div>

          <div
            class="p-5 border-t border-solid border-gray-800 md:border-none text-center width borRight"
          >
            <router-link :to="{ name: 'About' }">
              About us
            </router-link>
          </div>

          <div
            class="p-5 border-t-2 border-solid border-gray-800 md:border-none text-center width1"
          >
            <router-link :to="{ name: 'Contact' }">
              Contact
            </router-link>
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
    border-right: 1px solid rgb(17, 24, 39);
  }
  .jurBor {
    border: 1px solid rgb(17, 24, 39);
    border-top: none;
    margin-left: -1px;
    margin-right: -1px;
  }
  .width {
    width: 25%;
  }

  .width1 {
    width: calc(25% - 0.8px);
  }
  .width2 {
    width: calc(25% + 0.8px);
  }
}
.bor {
  border: 1px solid rgba(17, 24, 39, 0.685);
}

.borTopNone {
  border: 1px solid rgb(17, 24, 39);
  border-top: none;
}
.borCenter {
  border-top: 1px solid rgb(17, 24, 39);
  border-bottom: 1px solid rgb(17, 24, 39);
}
.flex-2 {
  flex: 2;
}
</style>
