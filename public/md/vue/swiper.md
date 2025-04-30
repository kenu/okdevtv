# Vue Swiper
- vue-awesome-swiper
  - https://github.com/surmon-china/vue-awesome-swiper
- Swiperjs 의존성

## npm install
```
npm i swiper@5 vue-awesome-swiper
```
- swiper@6 에서 많이 변경됨 #주의필요

```
<template>
  <div>
    <div v-swiper:mySwiper="swiperOptions">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'; // <= Swiper 5.*

export default {
  name: 'SwiperTest',
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
  props: {
    msg: String,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style scoped>
.swiper-container {
  width: 600px;
  height: 300px;
}
</style>
```
