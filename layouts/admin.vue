<template>
  <div class="wrapper">
    <navbaradmin />
    <Nuxt />
    <footing />
  </div>
</template>
<script>
export default {
  middleware: ['checkAuth', 'auth']
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.gradient {
        background: linear-gradient(90deg, #ec5a20 0%, #d4b29b 100%);
}
.wrapper{
  @apply gradient w-full;
}
/* .container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
} */
</style>
