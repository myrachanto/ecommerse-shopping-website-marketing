<template>
   <div class="app">
      <div class="main">
        <!--Left Col-->
        <!--Right Col-->
        <div class="drimg">
        <img src="~/assets/imgs/macbookair.png" alt="web development" class="img"/>
        </div>
        <div class="message1">
          <p class="mess">Mac book Air</p>
          <!-- <h1 class="message2">
            Well..., Welcome home!
          </h1> -->
          <p class="comment">
            MacBook Air (M1, 2020) - Technical Specifications
          </p>
          <p class="adprice">$3000 /=</p>
          <nuxt-link to="/about"><button class="btn3">
            For more info
          </button></nuxt-link>
        </div>
      </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
/* Sample `apply` at-rules with Tailwind CSS */
.container {
@apply h-4/6 flex justify-between items-center text-center mx-auto;
}
.app{
  @apply pt-24;
}
.shaper{
 fill: white;
}

.main{
  @apply container text-white mx-auto flex flex-wrap px-4 md:px-0 justify-between;
}
.message1{
  @apply flex flex-col font-bold text-black w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left;
}
.mess{
  @apply my-4 text-2xl md:text-7xl text-black font-bold leading-tight;
}
.comment{
  @apply leading-normal text-black text-xl md:text-2xl mb-8 mr-4;
}
.btn3{
  @apply bg-white text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
.img{
  @apply w-full md:w-4/5 z-50 rounded-3xl;
}
.drimg{
  @apply w-full md:w-3/5 py-6 text-center bg-transparent;
}
.adprice{
  @apply text-2xl md:text-3xl;
}
</style>
