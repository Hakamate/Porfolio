<template>
  <div class="z-50 fixed md:sticky w-full md:w-auto top-0 left-0 bottom-0 min-h-screen p-4 bg-gray-800 flex flex-col transform">
    <DynamicSvg class="md:hidden bg-gray-600 transition duration-500 hover:bg-blue-500 p-1 cursor-pointer mb-4 mx-auto text-white" :icon="'close'" @clickedDynamic="toggleMenu()" />
    <div class="hidden text-center md:flex flex-col items-center justify-center">
      <img src="~assets/img/Thomas.jpg" width="0" height="0" alt="Photo de profil Thomas CLEMENT" class="rounded-full mb-2 w-12">
    </div>
    <ul class="my-4 grid gap-3 md:gap-6">
      <li v-for="(navigation, index) in navigations" :key="index">
        <a :href="navigation.to" class="group flex md:justify-center" @click="toggleMenu()">
          <DynamicSvg :icon="navigation.icon" class="text-gray-500 transition duration-500 group-hover:text-blue-500" :width="18" :height="18" />
          <span class="md:hidden text-gray-400 ml-4 group-hover:text-blue-500 transition duration-500">{{ navigation.title }}</span>
        </a>
      </li>
    </ul>
    <ul class="grid gap-3 md:gap-6 mt-auto">
      <li v-for="(contact, indexc) in contacts" :key="index">
        <a :href="contact.to" class="group flex md:justify-center" @click="toggleMenu()">
          <DynamicSvg :icon="contact.icon" class="text-gray-500 transition duration-500 group-hover:text-blue-500" :width="18" :height="18" />
          <span class="md:hidden text-gray-400 ml-4 group-hover:text-blue-500 transition duration-500">{{ contact.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      navigations: [
        { icon: 'home', title: 'Présentation', to: '#presentation' },
        { icon: 'profile', title: 'A propos', to: '#about' },
        { icon: 'meteor', title: 'Services', to: '#services' },
        { icon: 'work', title: 'Expériences', to: '#experiences' },
        { icon: 'graduation', title: 'Formations', to: '#formations' },
        { icon: 'tools', title: 'Compétences', to: '#competences' },
        { icon: 'eye', title: 'Domaines qui m\'intéressent', to: '#interest' },
        { icon: 'cubes', title: 'Projets', to: '#projects' },
        { icon: 'info', title: 'Extra', to: '#extra' },
        { icon: 'phone', title: 'Contact', to: '#contact' }
      ],
      contacts: [
        { icon: 'linkedin', title: 'LinkedIn', to: 'https://www.linkedin.com/in/thomas-clmt/' },
        { icon: 'envelope', title: 'Envoyer un mail', to: 'mailto:thomas.clement.professionnel@gmail.com' },
        { icon: 'phone', title: 'Appeler', to: 'tel:0648352851' },
        { icon: 'github', title: 'Github', to: 'https://github.com/Hakamate' }
      ]
    }
  },
  methods: {
    toggleMenu () {
      this.$emit('toggleMenu')
    }
  }
})
</script>
