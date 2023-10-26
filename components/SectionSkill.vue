<template>
  <div>
    <h2 class="text-4xl mb-12 font-black leading-relaxed flex">
      <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform -rotate-90 hidden sm:flex" />
      <span class="z-20">Mes outils et compétences</span>
      <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform rotate-90 hidden sm:flex" />
    </h2>
    <div>
      <h3 class="text-2xl text-gray-600 font-semibold mb-5">
        Langage / Frontend
      </h3>
      <ul class="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-12 gap-5 rounded-md bg-white shadow-custom p-6">
        <li v-for="(element, indexf) in front" :key="indexf" class="flex flex-col items-center group cursor-pointer">
          <DynamicSvg v-tooltip="element.tooltip" :icon="element.icon" :width="30" :height="30" class="p-3 rounded-md bg-gray-200 transition duration-500 hover:bg-blue-500 flex items-center justify-center" />
        </li>
      </ul>
    </div>
    <div class="mt-7">
      <h3 class="text-2xl text-gray-600 font-semibold mb-5">
        Backend
      </h3>
      <ul class="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-12 gap-5 rounded-md bg-white shadow-custom p-6 ml-auto">
        <li v-for="(element, indexb) in back" :key="indexb" class="flex flex-col items-center group cursor-pointer">
          <DynamicSvg v-tooltip="element.tooltip" :icon="element.icon" :width="30" :height="30" class="p-3 rounded-md bg-gray-200 transition duration-500 hover:bg-blue-500 flex items-center justify-center" />
        </li>
      </ul>
    </div>
    <div class="mt-7">
      <h3 class="text-2xl text-gray-600 font-semibold mb-5">
        Architecture
      </h3>
      <ul class="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-12 gap-5 rounded-md bg-white shadow-custom p-6">
        <li v-for="(element, indexa) in architecture" :key="indexa" class="flex flex-col items-center group cursor-pointer">
          <DynamicSvg v-tooltip="element.tooltip" :icon="element.icon" :width="30" :height="30" class="p-3 rounded-md bg-gray-200 transition duration-500 hover:bg-blue-500 flex items-center justify-center" />
        </li>
      </ul>
    </div>
    <div class="mt-7">
      <h3 class="text-2xl text-gray-600 font-semibold mb-5">
        No/Low-code et Gestion de projet
      </h3>
      <ul class="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-12 gap-5 rounded-md bg-white shadow-custom p-6">
        <li v-for="(element, indexn) in nocode" :key="indexn" class="flex flex-col items-center group cursor-pointer">
          <DynamicSvg v-tooltip="element.tooltip" :icon="element.icon" :width="30" :height="30" class="p-3 rounded-md bg-gray-200 transition duration-500 hover:bg-blue-500 flex items-center justify-center" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      front: [
        { icon: 'javascript', tooltip: 'JavaScript' },
        { icon: 'typescript', tooltip: 'TypeScript' },
        { icon: 'htmll', tooltip: 'Html' },
        { icon: 'css', tooltip: 'CSS' },
        { icon: 'nuxtjs', tooltip: 'Nuxt.js' },
        { icon: 'vuejs', tooltip: 'Vue.js' },
        { icon: 'tailwind', tooltip: 'TailwindCSS' },
      ],
      back: [
        { icon: 'nodejs', tooltip: 'Node.js' },
        { icon: 'adonisjs', tooltip: 'Adonis.js' },
        { icon: 'nestjs', tooltip: 'Nest.js' },
        { icon: 'strapi', tooltip: 'Strapi' }
      ],
      architecture: [
        { icon: 'linux', tooltip: 'Linux' },
        { icon: 'windows', tooltip: 'Windows' },
        { icon: 'bash', tooltip: 'Bash' },
        { icon: 'postman', tooltip: 'Postman' },
        { icon: 'docker', tooltip: 'Docker' },
        { icon: 'postgresql', tooltip: 'PostgreSQL' },
        { icon: 'mysql', tooltip: 'MySQL' },
        { icon: 'mongodb', tooltip: 'MongoDB' }
      ],
      nocode: [
        { icon: 'notion', tooltip: 'Notion' },
        { icon: 'clickup', tooltip: 'Clickup' },
        { icon: 'asana', tooltip: 'Asana' },
        { icon: 'scrum', tooltip: 'Scrum' },
        { icon: 'bubble', tooltip: 'Bubble' },
        { icon: 'zapier', tooltip: 'Zapier' },
        { icon: 'integromat', tooltip: 'Integromat' },
        { icon: 'airtable', tooltip: 'Airtable' },
        { icon: 'mailchimp', tooltip: 'Mailchimp' },
        { icon: 'figma', tooltip: 'Figma' }
      ]
    }
  },
  methods: {
    elementMaj (element:string) {
      if (element === 'htmll') { return 'Html' }
      return element.charAt(0).toUpperCase() + element.slice(1)
    }
  }
})
</script>
