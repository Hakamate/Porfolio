<template>
    <div>
        <h2 class="text-4xl mb-16 font-black leading-relaxed flex text-white">
            <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform -rotate-90 hidden sm:flex"/>
            <span class="z-20">Mes formations</span>
            <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform rotate-90 hidden sm:flex"/>
        </h2>
        <ul class="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <li v-for="(formation, index) in formations" :key="index" class="group bg-white transition duration-500 transform hover:-translate-y-2 hover:bg-blue-500 rounded-lg shadow-custom p-6">
                <div class="flex items-center">
                    <DynamicSvg :icon="'graduation'" class="mr-3 bg-blue-500 p-2 rounded-md text-white group-hover:text-blue-500 group-hover:bg-white"/>
                    <span class="text-2xl font-semibold group-hover:text-white">{{ formation.title }}</span>
                </div>
                <p class="text-lg mt-2 font-normal group-hover:text-white"> {{ formation.description }}</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            formations: [
                {title: 'Bac + 5', description: 'CESI école d\'ingénieurs'},
                {title: 'Certificat', description: 'Enactus France'},
                {title: 'CCNA 1 et 2', description: 'Network / Routing & Switching'},
                {title: 'Bac S', description: 'Lycée Robespierre Arras'},
                {title: 'Brevet', description: 'Charles Peguy Arras'},
            ],
        }
    }
})
</script>
