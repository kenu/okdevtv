# Vue Swiper
* vue-awesome-swiper
  * https://github.com/surmon-china/vue-awesome-swiper
* Swiperjs 의존성

## npm install
```
npm i -S swiper vue-awesome-swiper
```

```
<template>
  <div>
    <swiper ref="mySwiper">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css"; // >= Swiper 6.*

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>
```
