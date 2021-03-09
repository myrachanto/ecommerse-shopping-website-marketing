<template>
  <div class="cont">
   <!--Hero-->
    <div class="app">
      <div class="main">
        <!--Left Col-->
        <div class="message">
          <p class="message2">Electronics wholesalers</p>
          <!-- <h1 class="message2">
            Well..., Welcome home!
          </h1> -->
          <p class="comment">
        We design and develop websites or application to accomodate both personal or business related. Our goal is to ensure that you as a client get to reap all the benefits associated with the product in this case website or web application that you hired us to develop.<br />
        Online Accounting applications, e-commerce websites, simple websites, are just but a few of what we do here at Chantosweb developers<br />
          </p>
          <ratings/>
          <div class="flex flex-col justify-start items-start my-5">
            <p>Phone: +254000000000</p>
            <p>Email: Example@domain.com</p>
            <p>Website: www.domain.com</p>
          </div>
          <div class="social my-7 mb-10">
            <div>Follows us on</div>
        <a href=""><img src="~/assets/imgs/social/fb.svg" alt="facebook" class="imgsoc"/></a>
         <a href=""><img src="~/assets/imgs/social/l.svg" alt="Linkein" class="imgsoc"/></a>
         <a href=""><img src="~/assets/imgs/social/i.svg" alt="instagram" class="imgsoc"/></a>
         <a href=""><img src="~/assets/imgs/social/t.svg" alt="twitter" class="imgsoc"/></a>
          </div>
        </div>
        <!--Right Col-->
        <div class="drimg">
        <img src="~/assets/imgs/products/hp.png" alt="web development" class="img"/>
        </div>
      </div>
    </div>
    <div class="cv">
       <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shaper"></path>
    </svg>
    </div>

     <!-- section -->
     <section class="section">
      <div class="s-head">Popular products</div>
      <div class="flexin">
      <div class="gridincard">
       <card v-for="item in portfolios" :key="item.id" :item="item"/>
       <loadmore />
      </div>
      </div>
     </section>

     <!-- section -->
     <section class="section">
      <div class="s-head">Featured products</div>
      <div class="flexin">
      <div class="gridincard">
       <card v-for="item in portfolios" :key="item.id" :item="item"/>
       <loadmore />
      </div>
      </div>
     </section>
  </div>
</template>
<script>
import loadmore from '~/components/component/loadmore.vue'
import Ratings from '~/components/component/ratings.vue'
export default {
  components: { loadmore, Ratings },
  data () {
    return {
      portfolios: [
        {
          id: 1,
          img: `${require('~/assets/imgs/products/acer.png')}`,
          title: 'Website design',
          alt: 'Website design',
          price: 400,
          photos: 3,
          description: 'Responsive web designs is the core principle in our web development and as such bring about maximum user satisfaction'
        },
        {
          id: 2,
          img: `${require('~/assets/imgs/products/hp.png')}`,
          title: 'Website design',
          alt: 'Website design',
          price: 300,
          photos: 5,
          description: 'Responsive web designs is the core principle in our web development and as such bring about maximum user satisfaction'
        },
        {
          id: 3,
          img: `${require('~/assets/imgs/products/macbook.jpg')}`,
          title: 'Apple macbook pro blablablabla',
          alt: 'Website design',
          price: 900,
          photos: 2,
          description: 'Responsive web designs is the core principle in our web development and as such bring about maximum user satisfaction'
        }
      ]
    }
  }
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
.message{
  @apply flex flex-col text-xl font-bold text-white w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left;
}
.message1{
  @apply uppercase text-xl md:text-2xl text-white tracking-normal w-full;
}
.message2{
  @apply my-4 text-2xl md:text-4xl text-gray-300 font-bold leading-tight;
}
.comment{
  @apply leading-normal text-white text-xl md:text-2xl mb-8 mr-4;
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
.cv{
  @apply relative -mt-10 lg:-mt-24 border-transparent;
}
.section{
  @apply bg-white -mt-2 border border-b-2 py-4;
}
.s-head{
  @apply flex justify-center items-center text-3xl md:text-5xl mx-10 px-10 font-semibold text-gray-900;
}
.flexin{
  @apply flex justify-center items-center;
}
.gridincard{
  @apply grid  grid-cols-1 lg:grid-cols-4 gap-4  mt-14;
}
.social{
  @apply flex justify-center items-center;
}
.imgsoc{
  @apply w-8 h-8 mx-3 my-5;
}
</style>
