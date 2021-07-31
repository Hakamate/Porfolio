<template>
    <div>
        <h2 class="text-4xl mb-16 font-bold leading-relaxed"><span class="text-primary">EXTRA</span></h2>
        <ul class="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <li v-for="(experience, index) in experiences" :key="index" class="bg-white hover:bg-primary-30 transition duration-500 transform hover:-translate-y-2 rounded-lg shadow-custom p-4">
                <div class="flex flex-col">
                    <span class="text-2xl font-semibold">{{ experience.title }}</span>
                </div>
                <p class="text-lg mt-2 font-medium0"> {{ experience.description }}</p>
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