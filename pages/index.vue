<template>
  <div class="flex items-center h-full text-gray-800">
    <DynamicSvg class="z-20 fixed md:hidden top-4 right-4 bg-gray-600 text-white transition duration-500 hover:bg-primary p-2 cursor-pointer" :icon="'hamburger'" @clickedDynamic="toggleMenu()" />
    <NavBar :class="toggleMenuClass()" @toggleMenu="toggleMenu()" />
    <Main class="w-full" />
    <a href="#" class="fixed bottom-4 right-4 goingTop">
      <DynamicSvg :icon="'down'" class="transform rotate-180 p-4 text-white rounded-full bg-black opacity-10 hover:opacity-100 hover:bg-primary" />
      <span class="absolute bottom-0 right-0 w-0 h-0 opacity-0">Revenir en haut</span>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      menu: false
    }
  },
  mounted () {
    // this.$nextTick(async () => {
    //   this.$nuxt.$loading.start()
    //   // something to fetch
    //   this.$nuxt.$loading.finish()
    // })
  },
  methods: {
    toggleMenu () {
      this.menu = !this.menu
    },
    toggleMenuClass () {
      return this.menu === false ? 'fadeOutNav md:translate-x-0' : 'fadeInNav md:translate-x-0'
    }
  }
})
</script>

<style>
html {
   scroll-behavior: smooth;
}
body{
  background-color: #f9faff;
  font-family: Rubik, sans-serif;
}
body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: transparent;
  @apply rounded-lg shadow-custom;
}
body::-webkit-scrollbar-thumb {
  @apply bg-primary;    /* color of the scroll thumb */
}

.shadow-custom {
  box-shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);
}

@media (max-width: 768px) {
  .fadeInNav{
    animation: fadeInNav 0.8s forwards;
  }
  .fadeOutNav{
    animation: fadeOutNav 0.8s forwards;
  }
}

@keyframes fadeInNav {
  0% {
    transform: translateX(-100vw)
  }
  100% {
    transform: translateX(0)
  }
}

@keyframes fadeOutNav {
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(-100vw)
  }
}
@keyframes goingTop {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.goingTop:hover {
  animation: goingTop 0.8s infinite
}

</style>
