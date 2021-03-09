<template>
  <div class="cont">
        <!-- section -->
     <section class="section mt-16">
      <div class="s-head">All products</div>
      <div class="flexin" v-if="items">
      <div class="gridincard" >
       <cardi v-for="item in items" :key="item._id" :item="item"/>
      </div>
      </div>
     </section>
     <!-- section -->
  </div>
</template>
<script>
import cardi from '~/components/component/cardi.vue'
// import { http } from '~/common/index.js'
export default {
  components: { cardi },
  data () {
    return {
      items: [
        {
          id: 1,
          picture: `${require('~/assets/imgs/products/iphone1.jpeg')}`,
          oldprice: 2500,
          newprice: 2300,
          title: 'Iphone 1',
          alt: 'Iphone 1',
          price: 400,
          photos: 3,
          description: 'The MacBook Air is a line of laptop computers developed and manufactured by Apple Inc. It consists of a full-size keyboard, a machined aluminum case, and, in the more modern versions, a thin light structure'
        },
        {
          id: 2,
          picture: `${require('~/assets/imgs/products/iphone2.jpeg')}`,
          oldprice: 2000,
          newprice: 1800,
          title: 'iphone 2',
          alt: 'iphone 2',
          price: 300,
          photos: 5,
          description: 'The MacBook Air is a line of laptop computers developed and manufactured by Apple Inc. It consists of a full-size keyboard, a machined aluminum case, and, in the more modern versions, a thin light structure'
        },
        {
          id: 3,
          picture: `${require('~/assets/imgs/products/iphone3.png')}`,
          oldprice: 3000,
          newprice: 2700,
          title: 'Iphone 3 ',
          alt: 'iphone 3',
          price: 900,
          photos: 2,
          description: 'The MacBook Air is a line of laptop computers developed and manufactured by Apple Inc. It consists of a full-size keyboard, a machined aluminum case, and, in the more modern versions, a thin light structure'
        },
        {
          id: 4,
          picture: `${require('~/assets/imgs/products/iphone4.jpeg')}`,
          oldprice: 3000,
          newprice: 2700,
          title: 'Iphone 4',
          alt: 'iphone 4',
          price: 900,
          photos: 2,
          description: 'The MacBook Air is a line of laptop computers developed and manufactured by Apple Inc. It consists of a full-size keyboard, a machined aluminum case, and, in the more modern versions, a thin light structure'
        }
      ]
    }
  },

  // async asyncData () {
  //   let items = []
  //   try {
  //     const { data } = await http.get('/products')
  //     items = data
  //     console.log(items)
  //     return { items }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },
  methods: {
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
