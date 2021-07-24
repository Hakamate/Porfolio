<template>
  <div class="bg-gray-900 flex items-center text-white h-full">
    <DynamicSvg class="fixed md:hidden top-4 right-4 bg-gray-600 hover:bg-primary p-2 cursor-pointer" :icon="'hamburger'" @clickedDynamic="toggleMenu()" />
    <NavBar :class="toggleMenuClass()" @toggleMenu="toggleMenu()"/>
    <Main class="px-5 sm:px-8 w-full" />
    <a href="#" class="fixed bottom-4 right-4 goingTop">
      <DynamicSvg :icon="'down'" class="transform rotate-180 p-4 rounded-full bg-gray-600 hover:bg-primary"/>
      <span class="absolute bottom-0 right-0 text-gray-800 w-0 h-0 opacity-0">Revenir en haut</span>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      menu: false
    }
  },
  methods : {
    toggleMenu() {
      console.log('eeee');
      this.menu = !this.menu
    },
    toggleMenuClass() {
      return this.menu === false ? '-translate-x-96 md:translate-x-0' : ''
    }
  }
})
</script>

<style>
html {
   scroll-behavior: smooth;
}

body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  @apply bg-gray-700; 
}
body::-webkit-scrollbar-thumb {
  @apply bg-primary;    /* color of the scroll thumb */
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
