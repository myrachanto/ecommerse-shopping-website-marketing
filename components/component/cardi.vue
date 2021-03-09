<template>
     <div class="card">
       <div class="imgpos">
         <nuxt-link :to="`/product/${item.code}`">
        <img :src="`${host}/${item.picture}`" class="cardimg" :alt="item.alt"/>
        </nuxt-link>
        </div>
        <div class="cardbody">
          <h4 class="h4header">{{item.title}}</h4>
          <div class="cardbodyp flex justify-between items-end pt-4">
            <div class=" flex justify-end items-center">
           <div class="old">${{item.oldprice}}</div>
           <div class="new ml-2">${{item.newprice}}</div>
            </div>
           <div class="itemslinks">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="svg"  viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
           <div><nuxt-link :to="`/product/${item.code}`" class="learn"> <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
</svg></nuxt-link></div>
</div>
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
.gradient {
        background: linear-gradient(90deg, #ec5a20 0%, #d4b29b 100%);
}
.card{
  @apply bg-white rounded overflow-hidden w-60 md:w-80 shadow-lg;
}
.cardimg{
  @apply h-32 sm:h-48 object-fill ;
}
.imgpos{
  @apply flex justify-center items-center;
}
.h4header{
  @apply  text-xl md:text-2xl text-gray-900 flex flex-wrap items-center justify-start leading-tight;
}
.cardbody{
  @apply m-4 text-xl text-gray-700 justify-center  ;
}
.svg1{
  @apply h-4 w-4 hover:text-green-900;
}
.svg{
  @apply h-5 w-5 hover:text-green-900 mx-2;
}
.btn{
  @apply bg-gray-300 text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
.ft{
  @apply flex justify-center items-center;
}
.learn{
  @apply no-underline hover:underline;
}
.itemslinks{
  @apply flex justify-between items-center;
}
.old{
  @apply text-red-700 line-through;
}
.new{
  @apply text-green-800;
}
</style>
