<template>
<div>
  <div>
    <div class="section">
      <h2 class="header1">Why us</h2>
      <div class="flexing">
      <div class="griding">
        <div class="imaging">
        <img :src="`${product.picture}`" :alt="product.alt" class="cardimg1"/>
      </div>
      <div class="comment">
      <h2 class="h2c">{{product.title}}</h2>
       <div v-html="product.description"></div>
        <div class="sd flex justify-start items-center my-5">
        <productratings />
        </div>
        <div class="cardbodyp flex justify-start items-center pt-4">
           <div class="old">OLd Price: ${{product.oldprice}}</div>
        </div>
        <div class="cardbodyp flex justify-start items-center pt-4">
           <div class="mr-5 new">New Price: ${{product.newprice}}</div>
        </div>
        <div class="flex justify-start items-start">
        <div class="flex justify-center items-center rounded-xl pr-2 bg-red-300"><nuxt-link to="#" class="learn"> <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg></nuxt-link><p>Add to cart</p></div>
        </div>
       </div>
       </div>
    </div>
    </div>
    </div>
     <section class="section">
      <div class="s-head">Featured products</div>
      <div class="flexin">
      <div class="gridincard">
       <cardi v-for="item in items" :key="item.id" :item="item"/>
      </div>
      </div>
     </section>
     <section class="section">
      <div class="s-head">Customers also viewed</div>
      <div class="flexin">
      <div class="gridincard">
       <cardi v-for="item in items" :key="item.id" :item="item"/>
      </div>
      </div>
     </section>
  </div>
</template>

<script>
import Productratings from '~/components/component/productratings.vue'
// import { http, host } from '~/common/index.js'
export default {
  components: { Productratings },
  data () {
    return {
      product: {
        id: 2,
        picture: `${require('~/assets/imgs/products/macbook.png')}`,
        oldprice: 2000,
        newprice: 1800,
        title: 'Mac book',
        alt: 'Mac book',
        price: 300,
        photos: 5,
        description: 'The MacBook Air is a line of laptop computers developed and manufactured by Apple Inc. It consists of a full-size keyboard, a machined aluminum case, and, in the more modern versions, a thin light structure'
      },
      items: [
        {
          id: 1,
          picture: `${require('~/assets/imgs/products/macbook air.jpg')}`,
          oldprice: 2500,
          newprice: 2300,
          title: 'Mac book air',
          alt: 'Mac book air',
          price: 400,
          photos: 3,
          description: 'mac book air '
        },
        {
          id: 2,
          picture: `${require('~/assets/imgs/products/macbook.png')}`,
          oldprice: 2000,
          newprice: 1800,
          title: 'Mac book',
          alt: 'Mac book',
          price: 300,
          photos: 5,
          description: 'Mac book'
        },
        {
          id: 3,
          picture: `${require('~/assets/imgs/products/macbook pro.jpg')}`,
          oldprice: 3000,
          newprice: 2700,
          title: 'Apple macbook pro ',
          alt: 'mac book',
          price: 900,
          photos: 2,
          description: 'mac book'
        },
        {
          id: 4,
          picture: `${require('~/assets/imgs/products/macbook.jpg')}`,
          oldprice: 3000,
          newprice: 2700,
          title: 'Apple macbook pro ',
          alt: 'mac book',
          price: 900,
          photos: 2,
          description: 'mac book'
        }
      ]
    }
  }
  // async asyncData ({ params }) {
  //   let items = []
  //   let product = {}
  //   console.log(params)
  //   try {
  //     const { data } = await http.get('/productlimit')
  //     const response = await http.get(`/product/${params.code}`)
  //     items = data
  //     product = response.data
  //     // console.log(items)
  //     return { items, product }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
}
</script>

<style scoped>
.section{
  @apply bg-gray-50 px-4;
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
  @apply grid lg:grid-cols-2 container gap-2 mt-3 md:mt-10 py-8;
}
.comment{
  @apply text-xl w-5/6 text-gray-700 font-normal m-2;
}
.imaging{
  @apply rounded w-5/6 overflow-hidden shadow-lg;
}
.cardimg1{
  @apply w-full h-32 sm:h-full object-cover transform transition duration-500 hover:scale-125;
}
.br{
  @apply my-2;
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
.svg{
  @apply h-16 w-16 hover:text-green-900 mx-2 py-3;
}
.old{
  @apply text-red-700 line-through;
}
.new{
  @apply text-green-800;
}
</style>
