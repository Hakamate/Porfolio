<template>
    <div>
        <h2 class="text-4xl mb-12 font-black leading-relaxed flex">
            <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform -rotate-90 hidden sm:flex"/>
            <span class="z-20">Mes outils et compétences</span>
            <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform rotate-90 hidden sm:flex"/>
        </h2>
        <div>
            <h3 class="text-2xl text-gray-600 font-semibold mb-5">Langage / Frontend</h3>
            <ul class="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-12 gap-5 rounded-2xl bg-white shadow-custom p-6">
                <li v-for="(element, indexf) in front" :key="indexf" class="flex flex-col items-center group">
                    <DynamicSvg :icon="element" :width="30" :height="30" class="p-3 rounded-full bg-gray-200 transition duration-500 hover:bg-primary flex items-center justify-center" />
                    <span class="hidden group-hover:block mt-1">{{ elementMaj(element) }}</span>
                </li>
            </ul>
        </div>
        <div class="mt-7">
            <h3 class="text-2xl text-gray-600 font-semibold mb-5">Backend</h3>
            <ul class="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-12 gap-5 rounded-2xl bg-white shadow-custom p-6 ml-auto">
                <li v-for="(element, indexb) in back" :key="indexb" class="flex flex-col items-center group">
                    <DynamicSvg :icon="element" :width="30" :height="30" class="p-3 rounded-full bg-gray-200 transition duration-500 hover:bg-primary flex items-center justify-center" />
                    <span class="hidden group-hover:block mt-1">{{ elementMaj(element) }}</span>
                </li>
            </ul>
        </div>
        <div class="mt-7">
            <h3 class="text-2xl text-gray-600 font-semibold mb-5">Architecture</h3>
            <ul class="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-12 gap-5 rounded-2xl bg-white shadow-custom p-6">
                <li v-for="(element, indexa) in architecture" :key="indexa" class="flex flex-col items-center group">
                    <DynamicSvg :icon="element" :width="30" :height="30" class="p-3 rounded-full bg-gray-200 transition duration-500 hover:bg-primary flex items-center justify-center" />
                    <span class="hidden group-hover:block mt-1">{{ elementMaj(element) }}</span>
                </li>
            </ul>
        </div>
        <div class="mt-7">
            <h3 class="text-2xl text-gray-600 font-semibold mb-5">No/Low-code et Gestion de projet</h3>
            <ul class="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-12 gap-5 rounded-2xl bg-white shadow-custom p-6">
                <li v-for="(element, indexn) in nocode" :key="indexn" class="flex flex-col items-center group">
                    <DynamicSvg :icon="element" :width="30" :height="30" class="p-3 rounded-full bg-gray-200 transition duration-500 hover:bg-primary flex items-center justify-center" />
                    <span class="hidden group-hover:block mt-1">{{ elementMaj(element) }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            front:[
                "javascript",
                "typescript",
                "htmll",
                "css",
                "nuxtjs",
                "vuejs",
                "reactjs",
                "tailwind",
                "vuetify",
            ],
            back: [
                "nodejs",
                "adonisjs",
                "nestjs",
                "postgresql",
                "mysql",
                "mongodb",
                "graphql",
            ],
            architecture: [
                "linux",
                "windows",
                "bash",
                "npm",
                "postman",
                "jwt",
                "netlify",
                "heroku",
                "docker",
                "git",
            ],
            nocode: [
                "notion",
                "clickup",
                "asana",
                "jira",
                "confluence",
                "miro",
                "trello",
                "scrum",
                "bubble",
                "zapier",
                "integromat",
                "airtable",
                "mailchimp",
                "figma",
                "strapi",
                "wordpress",
            ]
        }
    },
    methods: {
        elementMaj(element:string){
            if (element === 'htmll') { return 'Html' }
            return element.charAt(0).toUpperCase() + element.slice(1);
        }
    }
})
</script>