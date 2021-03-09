<template>
  <div class="form-main h-full bg-gray-300 rounded-lg overflow-hidden">
      <div class="flexing">
      <div class="griding">
        <div class="px-5 lg:px-20 order-last">
      <h1 class="text-gary-700 text-3xl text-center my-5"> Sign Up</h1>
          <form class="text-gray-600" @submit.prevent="signup">
            <div class="flex flex-col max my-3">
              <ValidationProvider name="firstName" rules="required|min:3" v-slot="{ errors }">
              <input type="text" placeholder="First Name" v-model="form.firstName" class="placeholder-black border rounded w-full py-2 px-4 outline-none focus:shadow-inner"/>
              <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
             </ValidationProvider>
            </div>
            <div class="flex flex-col max my-3">
              <ValidationProvider name="lastName" rules="required|min:3" v-slot="{ errors }">
              <input type="text" placeholder="Last Name" v-model="form.lastName" class="placeholder-black border rounded w-full py-2 px-4 outline-none focus:shadow-inner"/>
              <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
             </ValidationProvider>
            </div>
            <div class="flex flex-col max my-3">
              <ValidationProvider name="username" rules="required|min:3" v-slot="{ errors }">
              <input type="text" placeholder="Username" v-model="form.username" class="placeholder-black border rounded w-full py-2 px-4 outline-none focus:shadow-inner"/>
              <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
             </ValidationProvider>
            </div>
            <div class="flex flex-col max my-3">
              <ValidationProvider name="phone" rules="numeric|required|min:3" v-slot="{ errors }">
              <input type="number" placeholder="Phone" v-model="form.phone" class="placeholder-black border rounded w-full py-2 px-4 outline-none focus:shadow-inner"/>
              <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
             </ValidationProvider>
            </div>
            <div class="flex flex-col max my-3">
              <ValidationProvider name="email" rules="required|min:3|email" v-slot="{ errors }">
              <input type="email" placeholder="email" v-model="form.email" class="placeholder-black border rounded w-full py-2 px-4 outline-none focus:shadow-inner"/>
              <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
             </ValidationProvider>
            </div>
            <div>
              <ValidationProvider name="password" rules="required|min:3" v-slot="{ errors }">
              <input type="password" placeholder="password" v-model="form.password" class="placeholder-black border rounded my-3 w-full py-2 px-4 outline-none focus:shadow-inner"/>
              <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
             </ValidationProvider>
            </div>
            <div>
              <ValidationProvider name="confirmpassword" rules="required|confirmed:password" v-slot="{ errors }">
              <input type="password" placeholder="Cornfirm password" v-model="form.confirmpassword" class="placeholder-black border rounded w-full py-2 px-4 outline-none focus:shadow-inner"/>
              <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
             </ValidationProvider>
            </div>
            <div class="my-3 flex justify-between items-center">
              <button class="btn1" @click="signup">Signup</button><div><nuxt-link to="/login">or login</nuxt-link></div>
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
    register: Function
  },
  components: {
    ValidationProvider
  },
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmpassword: ''
      }
    }
  },
  methods: {
    // login () {
    //   this.$router.push('/login')
    // },
    signup () {
      if (this.form.password === this.form.confirmpassword) {
        const fd = new FormData()
        fd.append('fname', this.form.firstName)
        fd.append('lname', this.form.lastName)
        fd.append('uname', this.form.username)
        fd.append('phone', this.form.phone)
        fd.append('email', this.form.email)
        fd.append('password', this.form.password)
        this.register(fd)
      } else {
        console.log('passwords did match!')
      }
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
