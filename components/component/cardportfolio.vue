<template>
     <div class="card1">
        <img :src="`${host}/${item.picture}`" class="cardimg" :alt="item.alt"/>
        <div class="cardbody">
          <h4 class="h4header">{{item.title}}</h4>
          <p class="cardbodyp" v-html="item.intro">
          </p>
          <div class="flex justify-center items-center">
          <nuxt-link to="/shopsy"><button class="btn3">
            For more info
          </button></nuxt-link>
          </div>
        </div>
        </div>
</template>

<script>
import { host } from '~/common/index.js'
export default {
  props: ['item'],
  data: () => {
    return {
      host
    }
  }

}
</script>
<style scoped>
.card1{
  @apply bg-gray-200 rounded overflow-hidden shadow-lg;
}
.cardimg{
  @apply  w-full h-32 sm:h-48 object-contain;
}
.h4header{
  @apply font-semibold text-xl md:text-2xl text-gray-700 flex flex-wrap items-center justify-center leading-tight;
}
.cardbody{
  @apply m-4 text-xl text-gray-600 font-semibold;
}
.btn3{
  @apply bg-white text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
</style>
