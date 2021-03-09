<template>
<div class="fixr">
  <header class="header">
    <div class="nav">
      <nuxt-link to="/" class="listy">
    <div class="logo">
        <img src="~/assets/imgs/logo.png" class="logo1"/>
        <span><span class="chantos">All</span> InsoK0</span>
      </div>
      </nuxt-link>
      <div class="menu1" @click="isOpen = !isOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="menu2">
      <div class="flex max menulist2">
              <input type="email" placeholder="Search" class="border rounded w-full px-4 outline-none focus:shadow-inner"/>
            </div>
      <nuxt-link to="/aindustry" class="menulist2">Industry</nuxt-link>
      <nuxt-link to="/atown" class="menulist2">Town</nuxt-link>
      <nuxt-link to="/ashop" class="menulist2">Shops</nuxt-link>
      <nuxt-link to="/majorcategory" class="menulist2">Majorcategory</nuxt-link>
      <nuxt-link to="/category" class="menulist2">Category</nuxt-link>
     <button @click="loging_out" class="menulist2">logout</button>
      <div >
</div>
    </nav>
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
  methods: {
    loging_out () {
      this.$store.commit('logout')
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.block{
  display: block;
}
.hidden{
  display: none;
}
.gradient {
        background: linear-gradient(90deg, #ec5a20 0%, #d4b29b 100%);
}
.chantos{
  @apply text-gray-300;
}
.fixr{
  @apply fixed w-full gradient z-30 top-0 mb-10 text-white;
}
.header{
  @apply bg-transparent container sm:flex sm:justify-between sm:items-center sm:py-3 mx-auto justify-around items-center border-current ;
}
.nav{
  @apply flex items-center justify-between py-3 sm:p-0;
}
.logo{
  @apply text-2xl lg:text-3xl text-white flex justify-start items-start mr-4;
}
.logo1{
  @apply h-10 w-10 mr-4;
}
.svg{
  @apply h-8 w-8;
}
.menu1{
  @apply sm:hidden ;
}
.menubtn{
  @apply block text-gray-500 hover:text-white focus:text-white focus:outline-none;
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
     @apply gradient text-white;
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

</style>
