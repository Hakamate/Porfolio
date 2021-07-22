<template>
    <div>
        <h2 class="text-4xl text-center font-bold leading-relaxed"><span class="text-primary">A PROPOS DE</span> MOI</h2>
        <hr class="border-gray-700 mt-4">
        <div class="mt-10 grid grid-cols-2">
            <div>
                <ul>
                    <li v-for="(info, index) in aboutInfo" :key="index" class="mb-5 last:mb-0">
                        <p class="text-xl"><span class="font-semibold text-primary mr-1">{{ info.title }} :</span> {{ info.value }}</p>
                    </li>
                </ul>
                <ButtonApp :href="'/documents/CV Thomas CLEMENT - Chef de projet IT.pdf'" target="_blank" class="w-max mt-4">
                    <span class="mr-3">Télécharger mon CV</span>
                    <DynamicSvg :icon="'download'" />
                </ButtonApp>
            </div>
            <div>
                <ul class="grid grid-cols-2 gap-8">
                    <li v-for ="(stat, indexS) in aboutStat" :key="indexS" class="p-4 bg-gray-800 flex flex-col items-center justify-center">
                        <span class="text-5xl text-primary mb-2">{{ stat.value }}</span>
                        <p class="font-semibold text-2xl text-center">{{ stat.title }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            aboutInfo: [
                {title: 'Nom', value: 'Thomas CLEMENT'},
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