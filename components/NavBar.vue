<template>
  <div class="z-10 fixed md:sticky top-0 left-0 bottom-0 min-h-screen p-8 bg-gray-800 flex flex-col w-80 transform">
      <DynamicSvg class="fixed md:hidden top-4 right-4 bg-gray-600 hover:bg-primary p-2 cursor-pointer" :icon="'close'" @clickedDynamic="toggleMenu()" />
      <div class="text-center flex flex-col items-center justify-center">
        <img src="~assets/img/profile.jpg" alt="Photo de profil" class="rounded-full mb-2 w-24">
        <div class="hidden md:block">
          <h1 class="text-2xl font-bold leading-10">Thomas Clement</h1>
          <h2 class="text-xl font-semibold text-gray-200">Chef de projet IT</h2>
        </div>
      </div>
      <ul class="mt-2 md:mt-6">
          <li v-for="(navigation, index) in navigations" :key="index">
            <ButtonApp :href="navigation.to" class="w-full mt-3" @clickedButton="toggleMenu()">
                <span class="w-full text-center">{{ navigation.title }}</span>
            </ButtonApp>
          </li>
      </ul>
      <div class="mt-auto">
          <div class="flex items-center justify-center">
            <a v-for="(contact, indexc) in contacts" :key="indexc" target="_blank" :href="contact.to" class="w-10 h-10 mr-2 last:mr-0 bg-gray-600 hover:bg-primary rounded-full flex items-center justify-center">
              <DynamicSvg :icon="contact.icon"/>
            </a>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data(){
        return {
            navigations: [
                {title: 'Présentation', to:'#presentation'},
                {title: 'A propos', to:'#about'},
                {title: 'Formations', to:'#formations'},
                {title: 'Expériences', to:'#experiences'},
                {title: 'Extra', to:'#extra'},
                {title: 'Compétences', to:'#competences'},
                {title: 'Projets', to:'#projects'},
                {title: 'Contact', to:'#contact'},
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