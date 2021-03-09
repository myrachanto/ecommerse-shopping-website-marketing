<template>
<div class="fixr">
  <header class="header">
    <div class="nav">
      <nuxt-link to="/" class="listy">
        <div class="logo">
            <img src="~/assets/imgs/logo.png" class="logo1"/>
            <span><span class="chantos">Sh</span>Psy </span>
          </div>
      </nuxt-link>
      <div class="relative">
    <nav :class="isOpen ? 'overnav' : 'hidden'" class="menu2">
            <nuxt-link to="/allproducts" class="menulist2">Laptops</nuxt-link>
            <nuxt-link to="/allproducts" class="menulist2">Computers</nuxt-link>
            <nuxt-link to="/allproducts" class="menulist2">Phones</nuxt-link>
            <nuxt-link to="/allproducts" class="menulist2">Tablets</nuxt-link>
            <nuxt-link to="/allproducts" class="menulist2">Printers</nuxt-link>
            <div >
      </div>
          </nav>
      </div>
    </div>
      <div class="lefty">
        <div class="m-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="svg" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg></div>
        <div class="relative">
        <div class="absolute top-0 right-0 text-sm z-10 bg-red-500 px-1 rounded-xl text-white m-2">
          <span>5</span>
        </div>
        <div class="m-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="svg"  viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg></div></div>
        <div class="m-2">
         <div class="dropdown relative ">
          <button @click="dropmenu = !dropmenu" class="">
            <span class=""><svg xmlns="http://www.w3.org/2000/svg" class="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg></span>
          </button>
          <ul class="dropdown-menu absolute text-gray-700 m-2" :class="dropmenu ? 'block' : 'hidden'">
            <li class=""> <nuxt-link to="/login" class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-10 block whitespace-no-wrap" >Signin</nuxt-link></li>
            <li class=""><nuxt-link to="/register" class="bg-gray-200 hover:bg-gray-400 py-2 px-10 block whitespace-no-wrap">Singup</nuxt-link></li>
          </ul>
        </div></div>
        <div class="m-2">
      <div class="menu1" @click="isOpen = !isOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </div></div>
      </div>
  </header>
      <hr class="hr" />
</div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
      dropmenu: false
    }
  },
  watch: {
    $route (to, from) {
      this.isOpen = false
      this.dropmenu = false
    }
  },
  computed: {
    isLogin () {
      return this.$store.getters.isLoggedin
    }
  },
  methods: {
    logout () {
      this.$store.commit('logout')
    }
  }
}
</script>
<style scoped>

.hidden{
  display: none;
}
.showing{
  display: flex;
}
.gradient {
        background: linear-gradient(90deg, #ec5a20 0%, #d4b29b 100%);
}
.block{
  display: block;
}
.overnav{
  @apply  gradient absolute block top-10 w-96 text-sm z-10 text-white;
}
.chantos{
  @apply text-gray-300;
}
.fixr{
  @apply fixed w-full gradient z-30 top-0 mb-10 text-white;
}
.header{
  @apply bg-transparent container flex sm:flex sm:justify-between sm:items-center sm:py-3 mx-auto justify-around items-center border-current ;
}
.nav{
  @apply flex  py-3 sm:p-0;
}
.logo{
  @apply text-2xl lg:text-3xl text-white flex justify-start items-start mr-4;
}
.logo1{
  @apply h-10 w-10 mr-4;
}
.svg{
  @apply h-8 w-8 ml-2;
}
.menu1{
  @apply sm:hidden flex;
}
.menubtn{
  @apply text-gray-500 hover:text-white focus:text-white focus:outline-none;
}
.menu2{
  @apply space-x-0 px-2 pt-2 pb-4 sm:flex sm:p-0;
}
.listy{
  text-decoration: none;
}
.menulist2{
  @apply mt-1 block listy px-2 py-1 text-2xl text-white font-semibold rounded hover:bg-white hover:text-black sm:mt-0 sm:ml-2;
   &.nuxt-link-exact-active{
     @apply  text-white;
   }
}
.btn1{
  @apply gradient mx-auto listy lg:mx-0 hover:underline text-white font-bold rounded-full my-2 py-2 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
.hr{
  @apply border-b border-gray-100 opacity-25 my-0 py-0;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
/* .leftmenu{
  @apply sm:showing;
} */
.lefty{
  @apply flex;
}

</style>
