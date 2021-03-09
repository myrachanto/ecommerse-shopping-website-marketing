<template>
<div class="warp">
  <majorcategory :add="add"/>
</div>
</template>

<script>
import majorcategory from '~/components/forms/majorcategory.vue'
export default {
  layout: 'admin',
  components: {
    majorcategory
  },
  data () {
    return {
    }
  },
  methods: {
    add (fd) {
      this.$axios.post('/majorcategory', fd)
        .then((res) => {
          console.log(res)
          this.$router.push('/')
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}

</script>

<style scoped>
.container {
@apply h-full flex justify-center items-center text-center mx-auto;
}
.warp{
@apply mt-10 p-10 container rounded-lg overflow-hidden flex justify-center items-center ;
}
.btn1{
  @apply bg-white text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
</style>
