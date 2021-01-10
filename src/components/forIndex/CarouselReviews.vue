<template>
  <div>
    <agile>
        <div class="slide">
            <h3>slide 1</h3>
        </div>
        <div class="slide">
            <h3>slide n</h3>
        </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
  name: 'CarouselReviews',
  components: {
    agile: VueAgile
  }
};
</script>

<style scoped></style>
