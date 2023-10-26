<template>
    <div>
        <h2 class="text-4xl mb-16 font-black leading-relaxed flex text-white">
            <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform -rotate-90 hidden sm:flex"/>
            <span class="z-20">Mes services freelance</span>
            <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform rotate-90 hidden sm:flex"/>
        </h2>
        <ul class="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <li v-for="(service, index) in services" :key="index" class="transition duration-500 transform hover:-translate-y-2 rounded-lg shadow-custom p-6 flex flex-col items-center justify-center" :class="service.color">
                <DynamicSvg :icon="'meteor'" class="text-white py-2" :width="50" :height="50"/>
                <div class="flex flex-col justify-center items-center text-center text-white">
                    <h3 class="text-2xl font-bold">{{ service.title }}</h3>
                    <p class="text-xl mt-2 font-normal"> {{ service.description }}</p>
                </div>
            </li>
        </ul>
        <p class="text-center text-xl text-white mt-6">Je suis disponible sur <a href="https://www.malt.fr/profile/thomasclement" target="_blank" class="font-semibold hover:underline text-blue-500">malt.fr</a> ou par <a href="#contact" class="font-semibold hover:underline text-blue-500">message</a></p>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            services: [
                {color:'bg-green-500' ,icon:'meteor', title: 'Développement Web', description: 'Création de site et application sur-mesure (Dashboard, CRM, Outil métier, etc...)'},
                {color:'bg-red-500' ,icon:'meteor', title: 'Automatisation', description: 'Automatisation de vos processus internes (RH, Newsletters, Inscriptions, etc...)'},
                {color:'bg-blue-500' ,icon:'meteor', title: 'Web Services', description: 'Création et installation de WebServices (API)'},
                {color:'bg-purple-500' ,icon:'meteor', title: 'Intégration Web', description: 'Transformer vos maquettes en sites vitrine (Application, Portfolio, Informations entreprise, etc...)'},
                {color:'bg-yellow-500' ,icon:'meteor', title: 'Accompagnement No-code', description: 'Accompagnement dans la mise en place d\'outils No-code'},
                {color:'bg-pink-500' ,icon:'meteor', title: '"Developpement" No-code', description: 'Création d\'Outils / Applications / Sites / Base de données en No-code'},
            ],
        }
    }
})
</script>
