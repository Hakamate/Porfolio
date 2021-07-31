<template>
    <div>
        <h2 class="text-4xl mb-16 font-bold leading-relaxed"><span class="text-primary">A PROPOS DE</span> MOI</h2>
        
        <div class="mt-10 grid grid-cols-1 gap-10">
            <div class="flex flex-col items-center">
                <img src="~assets/img/original-profile.jpg" width="0" height="0" alt="Photo de profil Thomas CLEMENT" class="rounded-full mb-2 w-44">
                <ul>
                    <li v-for="(info, index) in aboutInfo" :key="index" class="mb-1 last:mb-0 text-center">
                        <p class="text-xl"><span class="font-semibold text-primary mr-1">{{ info.title }} :</span> {{ info.value }}</p>
                    </li>
                </ul>
                <ButtonApp :href="'/documents/CV Thomas CLEMENT - Chef de projet IT.pdf'" target="_blank" class="bg-primary text-white w-max mt-4 transform hover:scale-125">
                    <span class="mr-3 text-xl">Télécharger mon CV</span>
                    <DynamicSvg :icon="'download'" />
                </ButtonApp>
            </div>
            
            <div>
                <ul class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <li v-for ="(stat, indexS) in aboutStat" :key="indexS" class="transform hover:-translate-y-2 transition duration-500 group hover:bg-primary p-4 bg-white rounded-lg shadow-custom flex flex-col items-center justify-center">
                        <span class="group-hover:text-white text-5xl text-primary mb-2">{{ stat.value }}</span>
                        <p class="group-hover:text-white font-semibold text-2xl text-center">{{ stat.title }}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex items-center justify-center mt-5">

        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            aboutInfo: [
                {title: 'Age', value: '21'},
                {title: 'Diplôme', value: 'Bac + 5'},
                {title: 'Post', value: 'Ingénieur / Chef de projet IT'},
                {title: 'Langages', value: 'Français, Anglais, Espagnol'},
            ],
            aboutStat: [
                {title: 'Années d\'expériences', value: '4 +'},
                {title: 'Projets Ingénieur / IT Réalisés', value: '40 +'},
                {title: 'Expériences Professionnelles', value: '8'},
                {title: 'Vues sur LinkedIn', value: '300k +'}
            ]
        }
    }
})
</script>