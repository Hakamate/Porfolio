<template>
    <div>
        <h2 class="text-4xl text-center font-bold leading-relaxed">MES <span class="text-primary">FORMATIONS</span></h2>
        <hr class="border-gray-700 mt-4">
        <ul class="mt-10 grid grid-cols-3 gap-6">
            <li v-for="(formation, index) in formations" :key="index" class="bg-gray-700 p-4">
                <div class="flex items-center">
                    <DynamicSvg :icon="'graduation'" class="mr-3 bg-primary p-2 rounded-full"/>
                    <span class="text-2xl font-semibold">{{ formation.title }}</span>
                </div>
                <p class="text-lg mt-2 font-medium text-gray-400"> {{ formation.description }}</p>
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
                {title: 'Bac + 5 ', description: 'CESI école d\'ingénieurs'},
                {title: 'Certif. d\'engagement', description: 'Enactus France'},
                {title: 'CCNA 1 et 2', description: 'Network / Routing & Switching'},
                {title: 'Bac S', description: 'Lycée Robespierre Arras'},
                {title: 'Brevet', description: 'Charles Peguy Arras'},
            ],
        }
    }
})
</script>