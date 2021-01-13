<template>
  <div class="relative hover">
    <div class="middleBor h-prodPrew">
      <img class="h w-full object-cover" :src="`assets/img/journalImg/${journal.img}`" />
      <div class="px-2  ">
        <h2 class="py-5 text-2xl">{{journal.content.heading.substring(0,50)}}</h2>
        <p class="pb-5 absolute md:top-96">
          {{journal.content.section[0].text.substring(0,150)}}
        </p>
        <p class="pb-5 text-sm absolute bottom-0">
          {{journal.category}} | <br> {{journal.author}} | {{journal.date}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JournalPreview',
    props: ['journal'],
};
</script>

<style scoped>
@media (max-width: 768px) {
  .smallRedBor {
    margin-bottom: -1px;
  }
    .h{
    height: 15rem;
  }
    .h-prodPrew {
    height: 33rem;
  }
}
@media (min-width: 768px) {

  .h-prodPrew {
    height: 38rem;
  }
  .h{
    height: 15rem;
  }
}

.middleBor {
  border-top: black solid 1px;
  border-bottom: black solid 1px;
  margin-bottom: -1px;
}
.middleBor::before {
  width: 1px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0;
  z-index: 1;
  content: '';
  background: #000;
}

.hover:hover{
  background-color: #CDB6BD;
}
.hover{
  transition: 0.2s;
}
</style>
