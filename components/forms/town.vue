<template>
  <div class="form-main h-full bg-gray-300 rounded-lg overflow-hidden">
      <div class="flexing">
      <div class="griding">
        <div class="px-5 lg:px-20 order-last">
      <h1 class="text-gary-700 text-3xl text-center my-5">Create</h1>
          <form class="text-gray-600" @submit.prevent="create">
            <div class="flex flex-col max my-3">
              <ValidationProvider name="Product name" rules="required|min:3" v-slot="{ errors }">
              <input type="text" placeholder="Product name" v-model="form.name" class="placeholder-black border rounded w-full py-2 px-4 outline-none focus:shadow-inner"/>
              <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
             </ValidationProvider>
            </div>
            <div class="flex flex-col max my-3">
              <ValidationProvider name="location" rules="required|min:3" v-slot="{ errors }">
              <input type="text" placeholder="location" v-model="form.location" class="placeholder-black border rounded w-full py-2 px-4 outline-none focus:shadow-inner"/>
              <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
             </ValidationProvider>
            </div>
            <div class="flex flex-col max my-3">
              <ValidationProvider name="address" rules="required|min:3" v-slot="{ errors }">
              <textarea  placeholder="address" v-model="form.address" class="placeholder-black border rounded w-full py-2 px-4 outline-none focus:shadow-inner"></textarea>
              <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
             </ValidationProvider>
            </div>
            <div class="my-3 flex justify-between items-center">
              <button class="btn1" @click="create">Create </button>
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
    add: Function
  },
  components: {
    ValidationProvider
  },
  data () {
    return {
      form: {
        name: '',
        location: '',
        address: ''
      }
    }
  },
  methods: {
    // login () {
    //   this.$router.push('/login')
    // },
    create () {
      const fd = new FormData()
      fd.append('name', this.form.name)
      fd.append('location', this.form.location)
      fd.append('address', this.form.address)
      this.add(fd)
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
