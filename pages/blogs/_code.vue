<template>
 <div class="section">
      <h2 class="header1">Services</h2>
      <div class="flexing">
      <div class="griding">
      <div class="comment">
      <h2 class="h2c">{{blog.title}}</h2>
      <p v-html="blog.intro"></p>
      </div>
      <div class="imaging">
        <img :src="`${host}/${blog.picture}`" :alt="blog.alt" class="cardimg1"/>
      </div>
    </div>
    </div>
      <div class="flexing">
      <div class="griding1">
      <div class="comment">
      <p v-html="blog.body"></p>
      </div></div>
      </div>
      <div class="flexing">
      <div class="griding1">
      <div class="comment">
      <p v-html="blog.summary"></p>
      </div>
      </div>
      </div>
    </div>
</template>

<script>
import { http, host } from '~/common/index.js'
export default {
  data () {
    return {
      host
    }
  },
  async asyncData ({ params }) {
    let blog = {}
    console.log(params)
    try {
      const { data } = await http.get(`/blogi/${params.code}`)
      blog = data
      // console.log(items)
      return { blog }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
<style scoped>
.section{
  @apply bg-gray-50;
}
.header1{
  @apply flex justify-center items-center text-3xl md:text-5xl md:mx-10 md:px-10 font-semibold text-gray-900 ;
}
.flexing{
  @apply flex justify-center items-center;
}
.griding{
  @apply grid lg:grid-cols-2 container gap-8 md:mt-10;
}
.griding1{
  @apply grid lg:grid-cols-1 container md:mt-5;
}
.comment{
  @apply text-gray-700 text-xl font-normal m-2 mx-5;
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
