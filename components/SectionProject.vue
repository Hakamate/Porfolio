<template>
    <div>
        <h2 class="text-4xl text-center font-bold leading-relaxed">QUELQUES <span class="text-primary">PROJETS</span></h2>
        <hr class="border-gray-700 mt-4">
        <ul class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <li v-for="(experience, index) in experiences" :key="index">
                <img :src="require('~/assets/img/profile.jpg')" class="rounded-2xl w-full">
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