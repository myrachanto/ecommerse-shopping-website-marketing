<template>
<div class="warp">
 <register :register="register"/>
</div>
</template>

<script>
// import { ValidationProvider } from 'vee-validate'
import Register from '~/components/forms/register.vue'
import { http } from '~/common/index.js'
export default {
  components: {
    // ValidationProvider
    Register
  },
  data () {
    return {
      http
    }
  },
  methods: {
    register (fd) {
      this.http.post('/register', fd)
        .then((res) => {
          console.log(res)
          this.$router.push('/login')
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
