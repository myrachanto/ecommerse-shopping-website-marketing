<template>
  <div>
    <div class="section">
      <h2 class="header1">Why us</h2>
      <div class="flexing">
      <div class="griding">
        <div class="imaging">
        <img src="~/assets/imgs/web_development.jpg" alt="responsive web development" class="cardimg1"/>
      </div>
      <div class="comment">
      <h2 class="h2c">Our web development experience</h2>
       We have been in the industry for more that four years developing web applications and websites.<br />
        We specialize in websites, web application and e-commerce applications. We use latest technology that embraces proficiency in service delivery.<br/>
       Our experience in the industry enables us to build you efficient and effective web applications.
        <br />
       </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section{
  @apply bg-gray-50 ;
}
.header1{
  @apply flex justify-center items-center text-3xl mx-2 md:text-5xl md:mx-10 md:px-10 font-semibold text-gray-900 ;
}

.h2c{
  @apply my-2;
}
.flexing{
  @apply flex justify-center items-center;
}
.griding{
  @apply grid lg:grid-cols-2 container gap-8 mt-3 md:mt-10 py-8;
}
.comment{
  @apply text-xl text-gray-700 font-normal m-2 mx-5;
}
.imaging{
  @apply rounded overflow-hidden shadow-lg;
}
.cardimg1{
  @apply w-full h-32 sm:h-full object-cover transform transition duration-500 hover:scale-125;
}
.br{
  @apply my-2;
}
</style>
