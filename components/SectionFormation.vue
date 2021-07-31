<template>
    <div>
        <h2 class="text-4xl mb-16 font-bold leading-relaxed">MES <span class="text-primary">FORMATIONS</span></h2>
        <ul class="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <li v-for="(formation, index) in formations" :key="index" class="group bg-white transition duration-500 transform hover:-translate-y-2 hover:bg-primary-30 rounded-lg shadow-custom p-4">
                <div class="flex items-center">
                    <DynamicSvg :icon="'graduation'" class="mr-3 bg-primary p-2 rounded-full text-white"/>
                    <span class="text-2xl font-semibold">{{ formation.title }}</span>
                </div>
                <p class="text-lg mt-2 font-normal"> {{ formation.description }}</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
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