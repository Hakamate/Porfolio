<template>
  <div class="bg-gray-900 flex items-center text-white">
    <NavBar/>
    <Main class="px-12 w-full"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
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
</style>
