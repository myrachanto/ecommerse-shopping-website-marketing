<template>
  <div class="form-main h-full bg-gray-300 rounded-lg overflow-hidden">
      <div class="flexing">
      <div class="griding">
        <div class="px-5 lg:px-20">
      <h1 class="text-gary-700 text-3xl text-center my-5"> Sign in</h1>
          <form class="text-gray-600" @submit.prevent="signin">
            <div class="flex flex-col max my-3">
              <ValidationProvider name="email" rules="required|min:3|email" v-slot="{ errors }">
              <input type="email" placeholder="email" v-model="form.email" class="placeholder-black border rounded w-full py-2 px-4 outline-none focus:shadow-inner "/>
              <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
             </ValidationProvider>
            </div>
            <div>
              <ValidationProvider name="password" rules="required|min:3" v-slot="{ errors }">
              <input type="password" placeholder="password" v-model="form.password" class="placeholder-black  border rounded my-3 w-full py-2 px-4 outline-none focus:shadow-inner"/>
              <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
             </ValidationProvider>
            </div>
            <div class="my-3 flex justify-between items-center">
              <button class="btn1"  @submit.prevent="signin">Login</button><div><nuxt-link to="/register">or Sign Up</nuxt-link></div>
            </div>
            <div class="my-3 text-center text-sm">
              &copy;2021 AllInsok0. All rights reserved
            </div>
          </form>
      </div>
    <div class="relative">
    <div class="absolute bottom-0 right-0 text-sm text-gray-700">
      <a href="#">AllInsok0</a>
    </div>
    <img src="~/assets/imgs/chantosweb_developers.jpg" alt="school management web application" class="w-full h-full object-cover"/>
    </div>
    </div>
      </div>

  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  props: {
    login: Function
  },
  components: {
    ValidationProvider
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    // login () {
    //   this.$router.push('/login')
    // },
    signin () {
      const fd = new FormData()
      fd.append('email', this.form.email)
      fd.append('password', this.form.password)
      this.login(fd)
    }
  }

}
</script>

<style scoped>
.btn1{
  @apply bg-white text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
.flexing{
  @apply flex justify-center items-center;
}
.griding{
  @apply grid lg:grid-cols-2 container;
}
.is-invalid{
  @apply text-red-700 rounded-lg;
}
</style>
