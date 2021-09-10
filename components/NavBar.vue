<template>
  <div class="z-50 fixed md:sticky w-full md:w-auto  top-0 left-0 bottom-0 min-h-screen p-8 bg-gray-800 flex flex-col justify-between transform">
    <DynamicSvg class="md:hidden bg-gray-600 transition duration-500 hover:bg-primary p-1 cursor-pointer mb-4 mx-auto text-white" :icon="'close'" @clickedDynamic="toggleMenu()" />
    <div class="hidden text-center md:flex flex-col items-center justify-center">
      <img src="~assets/img/profile.jpg" width="0" height="0" alt="Photo de profil Thomas CLEMENT" class="rounded-full mb-2 w-12">
    </div>
    <ul class="mb-4 md:my-auto grid gap-3 md:gap-7">
      <li v-for="(navigation, index) in navigations" :key="index">
        <a :href="navigation.to" class="group flex md:justify-center" @click="toggleMenu()">
          <DynamicSvg :icon="navigation.icon" class="text-gray-500 transition duration-500 group-hover:text-primary" :width="25" :height="25" />
          <span class="md:hidden text-gray-400 ml-4 group-hover:text-primary transition duration-500">{{ navigation.title }}</span>
        </a>
      </li>
    </ul>
    <div class="flex md:flex-col">
      <a
        v-for="(contact, indexc) in contacts"
        :key="indexc"
        rel="noopener"
        target="_blank"
        :href="contact.to"
        class="group mx-auto w-8 h-8 transition duration-500 hover:bg-primary rounded-full flex items-center justify-center"
      >
        <DynamicSvg :icon="contact.icon" class="group-hover:text-white transition duration-500 text-gray-500 p-2" :width="20" :height="20" />
        <span class="w-0 h-0 opacity-0">{{ contact.icon }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
        { icon: 'linkedin', to: 'https://www.linkedin.com/in/thomas-clmt/' },
        { icon: 'envelope', to: 'mailto:thomas.clement@viacesi.fr' },
        { icon: 'phone', to: 'tel:0648352851' },
        { icon: 'github', to: 'https://github.com/Hakamate' }
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
