<template>
    <div>
        <h2 class="text-4xl mb-16 font-black leading-relaxed text-white flex">
            <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform -rotate-90 hidden sm:flex"/>
            <span>Extra</span>
            <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform rotate-90 hidden sm:flex"/>
        </h2>
        <ul class="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <li v-for="(experience, index) in experiences" :key="index" class="group bg-white hover:bg-primary transition duration-500 transform hover:-translate-y-2 rounded-lg shadow-custom p-6">
                <div class="flex flex-col">
                    <span class="text-2xl font-semibold group-hover:text-white">{{ experience.title }}</span>
                </div>
                <p class="text-lg mt-2 group-hover:text-white"> {{ experience.description }}</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            experiences: [
                {title: 'Maker', description: 'Réalisation de divers projets personnels'},
                {title: 'LinkedIn', description: 'Réalisation de contenus'},
                {title: 'Cesi Corp Ambassadeur', description: 'Orienter les élèves dans leurs choix post Bac'},
                {title: 'ExiaMiam (Secrétaire)', description: ' Organisation de repas / événements'},
                {title: 'ExiaMake/Antsane', description: 'Association de projets informatiques'},
            ],
        }
    }
})
</script>