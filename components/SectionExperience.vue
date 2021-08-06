<template>
    <div>
        <h2 class="text-4xl mb-16 font-black leading-relaxed flex">
            <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform -rotate-90 hidden sm:flex"/>
            <span>Mes expériences</span>
            <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform rotate-90 hidden sm:flex"/>
        </h2>
        <ul class="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <li v-for="(experience, index) in experiences" :key="index" class="hover:bg-primary-30 transition duration-500 transform hover:-translate-y-2 bg-white rounded-lg shadow-custom p-6">
                <div class="flex flex-col">
                    <div class="flex items-center">
                        <DynamicSvg :icon="'work'" class="mr-3 bg-primary p-2 rounded-full text-white"/>
                        <span class="text-lg font-semibold text-gray-500">{{ experience.date }}</span>
                    </div>
                    <span class="text-2xl font-semibold mt-2">{{ experience.title }}</span>
                </div>
                <p class="text-lg mt-2 font-normal"> {{ experience.description }}</p>
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
                {title: 'Assistant Chef de projet / Développeur – Delia', description: 'Développement d\'un outil de mise en relation entre chargés de projet et dirigeants de magasins d’une marque de la grande distribution. Gestion de projet (User stories, cartographie, sprint, relation client)', date:'2021 : 4,5 mois'},
                {title: 'Développeur Web – Netvigie', description: 'Développement d\'un outil interne pour la gestion du parc informatique de l\'entreprise. Intégration du nouveau site et blog seenaptic.com', date:'2020 : 3 mois'},
                {title: 'Développeur Web – PRIMEVER SERVICES', description: 'Formulaire Php/Javascript, et maintien de l’application GLPI', date:'2019 : 1,5 mois'},
                {title: 'Développeur Web – PRIMEVER SERVICES', description: 'Frontend, interface utilisateur de GLPI, paramétrage et mise en place de formulaires dynamiques (+ Design RDWeb et Shopify)', date:'2019 : 2,5 mois'},
                {title: 'Développeur IOT – Adviser', description: 'Maquettes d’éclairage d’un circuit de voitures, création de driver USB, migration d’un serveur Windows vers Raspbian', date:'2018 : 2 mois'},
                {title: 'Freelance - Prestation de services Web', description: 'Création de Site vitrine / e-commerce. Création, Mise en place et/ou configuration d\'outils métier. Amélioration d\'outils ou sites existants', date:'Depuis 2020'},
            ],
        }
    }
})
</script>