<template>
    <div>
        <h2 class="text-4xl text-center font-bold leading-relaxed">MES <span class="text-primary">OUTILS ET COMPETENCES</span></h2>
        <hr class="border-gray-700 mt-4">
        <div class="mt-10">
            <h3 class="text-3xl font-medium mb-2">Frontend</h3>
            <ul class="grid grid-cols-12 gap-5">
                <li v-for="(element, indexf) in front" :key="indexf" class="flex flex-col items-center">
                    <DynamicSvg :icon="element" :width="40" :height="40" class="p-3 rounded-full bg-gray-400 hover:bg-primary flex items-center justify-center" />
                    <span class="mt-1">{{ elementMaj(element) }}</span>
                </li>
            </ul>
        </div>
        <div class="mt-7">
            <h3 class="text-3xl font-medium mb-2">Backend</h3>
            <ul class="grid grid-cols-12 gap-5 ml-auto">
                <li v-for="(element, indexb) in back" :key="indexb" class="flex flex-col items-center">
                    <DynamicSvg :icon="element" :width="40" :height="40" class="p-3 rounded-full bg-gray-400 hover:bg-primary flex items-center justify-center" />
                    <span class="mt-1">{{ elementMaj(element) }}</span>
                </li>
            </ul>
        </div>
        <div class="mt-7">
            <h3 class="text-3xl font-medium mb-2">Architecture</h3>
            <ul class="grid grid-cols-12 gap-5">
                <li v-for="(element, indexa) in architecture" :key="indexa" class="flex flex-col items-center">
                    <DynamicSvg :icon="element" :width="40" :height="40" class="p-3 rounded-full bg-gray-400 hover:bg-primary flex items-center justify-center" />
                    <span class="mt-1">{{ elementMaj(element) }}</span>
                </li>
            </ul>
        </div>
        <div class="mt-7">
            <h3 class="text-3xl font-medium mb-2">No-code et Low-code</h3>
            <ul class="grid grid-cols-12 gap-5">
                <li v-for="(element, indexn) in nocode" :key="indexn" class="flex flex-col items-center">
                    <DynamicSvg :icon="element" :width="40" :height="40" class="p-3 rounded-full bg-gray-400 hover:bg-primary flex items-center justify-center" />
                    <span class="mt-1">{{ elementMaj(element) }}</span>
                </li>
            </ul>
        </div>
        <div class="mt-7">
            <h3 class="text-3xl font-medium mb-2">Autres</h3>
            <ul class="grid grid-cols-12 gap-5">
                <li v-for="(element, indexo) in other" :key="indexo" class="flex flex-col items-center">
                    <DynamicSvg :icon="element" :width="40" :height="40" class="p-3 rounded-full bg-gray-400 hover:bg-primary flex items-center justify-center" />
                    <span class="mt-1">{{ elementMaj(element) }}</span>
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
            other: [
                "javascript",
                "typescript",
                "php",
                "vscode",
                "git",
                "google",
                "office",
            ],
            front:[
                "htmll",
                "css",
                "nuxtjs",
                "vuejs",
                "reactjs",
                "tailwind",
                "vuetify",
                "bootstrap",
            
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
            ],
            nocode: [
                "notion",
                "bubble",
                "zapier",
                "integromat",
                "airtable",
                "mailchimp",
                "clickup",
                "asana",
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