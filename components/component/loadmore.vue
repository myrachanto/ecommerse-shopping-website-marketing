<template>
  <div class="cardload"><nuxt-link to="/allproducts"><svg class="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
</svg>
<div>Load more ...</div></nuxt-link>
</div>
</template>

<script>
export default {

}
</script>

<style>
.cardload{
  @apply bg-gray-200 flex flex-col justify-center items-center rounded overflow-hidden w-60 md:w-80 shadow-lg;
}
.svg{
  @apply h-16 w-16 hover:text-red-500;
}
</style>
