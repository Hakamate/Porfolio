<template>
    <div>
        <h2 class="text-4xl text-center font-bold leading-relaxed"><span class="text-primary">A PROPOS DE</span> MOI</h2>
        <hr class="border-gray-700 mt-4">
        <div class="mt-10 grid grid-cols-2">
            <div>
                <ul>
                    <li v-for="(info, indexc) in contactInfo" :key="indexc" class="mb-5 last:mb-0 flex items-center">
                        <DynamicSvg :icon="info.icon" class="text-primary mr-3"/>
                        <a :href="info.url" target="_blank">{{ info.value }}</a>
                    </li>
                </ul>
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
            contactInfo: [
                {icon: 'envelope', url: 'mailto:thomas.clement@viacesi.fr', value: "thomas.clement@viacesi.fr"},
                {icon: 'phone', url: 'tel:0648352851', value:'06 48 35 28 51'},
                {icon: 'linkedin', url: 'https://www.linkedin.com/in/thomas-clmt/', value: "in/thomas-clmt/"},
                {icon: 'locate', url: '#contact', value:"59800 Lille"},
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