<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div><carocard /></div>
      <div><carocard2 /></div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import carocard from './carocard.vue'
import carocard2 from './carocard2.vue'
export default {
  name: 'MyComponent',
  components: {
    carocard,
    VueSlickCarousel,
    carocard2
  },
  data () {
    return {
      settings: {
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000
      }
    }
  }
}
</script>
