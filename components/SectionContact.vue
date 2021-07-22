<template>
    <div>
        <h2 class="text-4xl text-center font-bold leading-relaxed">ME <span class="text-primary">CONTACTER</span></h2>
        <hr class="border-gray-700 mt-4">
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
                    <ul>
                        <li v-for="(info, indexc) in contactInfo" :key="indexc" class="mb-5 last:mb-0 flex items-center">
                            <DynamicSvg :icon="info.icon" :width="25" :height="25" class="text-primary mr-3"/>
                            <a :href="info.url" target="_blank" class="text-xl">{{ info.value }}</a>
                        </li>
                    </ul>
            </div>
            <form name="contact" netlify class="w-full">
                    <div class="flex flex-col">
                        <label class="w-0 h-0 text-gray-900" for="fname">Nom complet</label>
                        <input id="fname" class="rounded-2xl px-3 py-2 bg-gray-700" placeholder="Ex: John Doe" type="text">
                    </div>

                    <div class="flex flex-col my-4">
                        <label class="w-0 h-0 text-gray-900" for="email">Email</label>
                        <input id="email" class="rounded-2xl px-3 py-2 bg-gray-700" placeholder="Ex: nom.prenom@gail.com" type="email">
                    </div>

                    <div class="flex flex-col">
                        <label class="w-0 h-0 text-gray-900" for="content">Message</label>
                        <textarea id="content" class="rounded-2xl px-3 py-2 bg-gray-700" placeholder="Ecrire votre message ici..." name="content" cols="30" rows="10"></textarea>
                    </div>

                    <input class="flex items-center rounded-full bg-gray-600 font-medium hover:bg-primary px-3 py-2 mt-4" type="submit" value="Envoyer le mail">
             </form>
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