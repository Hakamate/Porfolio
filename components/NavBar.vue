<template>
  <div class="z-10 fixed md:sticky top-0 left-0 bottom-0 min-h-screen p-8 bg-gray-800 flex flex-col justify-between transform">
      <DynamicSvg class="md:hidden bg-gray-600 hover:bg-primary p-1 cursor-pointer mb-4 mx-auto text-white" :icon="'close'" @clickedDynamic="toggleMenu()" />
      <div class="text-center flex flex-col items-center justify-center">
        <img src="~assets/img/profile.jpg" width="0" height="0" alt="Photo de profil Thomas CLEMENT" class="rounded-full mb-2 w-12">
      </div>
      <ul class="my-auto grid gap-7">
          <li v-for="(navigation, index) in navigations" :key="index">
            <a :href="navigation.to" class="flex justify-center" @clickedButton="toggleMenu()">
              <DynamicSvg :icon="navigation.icon" class="text-gray-500 hover:text-primary" :width="25" :height="25" />
            </a>
          </li>
      </ul>
      <div class="grid gap1">
        <a v-for="(contact, indexc) in contacts" :key="indexc" rel="noopener" target="_blank" :href="contact.to" class="mx-auto w-8 h-8 p-2 hover:bg-primary rounded-full flex items-center justify-center">
          <DynamicSvg :icon="contact.icon" class="text-gray-500" :width="20" :height="20" />
          <span class="w-0 h-0 opacity-0">{{ contact.icon }}</span>
        </a>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data(){
        return {
            navigations: [
                {icon:'home', title: 'Présentation', to:'#presentation'},
                {icon:'profile', title: 'A propos', to:'#about'},
                {icon:'meteor', title: 'Services', to:'#services'},
                {icon:'graduation', title: 'Formations', to:'#formations'},
                {icon:'work', title: 'Expériences', to:'#experiences'},
                {icon:'info', title: 'Extra', to:'#extra'},
                {icon:'tools', title: 'Compétences', to:'#competences'},
                {icon:'cubes', title: 'Projets', to:'#projects'},
                {icon:'phone', title: 'Contact', to:'#contact'},
            ],
            contacts: [
                {icon: 'linkedin', to:'https://www.linkedin.com/in/thomas-clmt/'},
                {icon: 'envelope', to:'mailto:thomas.clement@viacesi.fr'},
                {icon: 'phone', to:'tel:0648352851'},
                {icon: 'github', to:'https://github.com/Hakamate'},
            ]
        }
    },
    methods: {
      toggleMenu() {
        this.$emit('toggleMenu')
      },
    }
})
</script>