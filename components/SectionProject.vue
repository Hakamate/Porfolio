<template>
    <div>
        <h2 class="text-4xl text-center font-bold leading-relaxed">QUELQUES <span class="text-primary">PROJETS</span></h2>
        <hr class="border-gray-700 mt-4">
        <ul class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <li v-for="(project, index) in projects" :key="index" class="flex flex-col relative hover-description">
                <img :src="require(`~/assets/img/projets/${project.image}`)" :alt="project.alt" width="0" height="0" class="rounded-2xl h-full w-full">
                <span class="text-xl font-semibold text-center w-full mt-3">{{ project.title }}</span>
                <div class="p-2 font-medium hidden absolute top-0 left-0 items-center justify-center bg-primary h-full w-full rounded-2xl">
                    <p>{{ project.description }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            projects: [
                {image: 'login_searchii.png', title: 'Searchii', alt:'Image Searchii', description: 'Vous êtes actuellement en recherche de CDD, CDI, Stage, Alternance ou tout simplement d\'un job ? Inscrivez-vous et bénéficiez d\'un outil de suivi.'},
                {image: 'oneforalldiscordbot.png', title: 'OneForAll Discord bot', alt:'Image OneForAll Discord bot', description: 'Un bot discord qui permet de réaliser tout type de commandes (stats, quizzs, news, organisation, événements vocaux, etc...)'},
                {image: 'swiper_zumee.png', title: 'Zumee', alt:'Image Zumee', description: 'Recrutement pas CV vidéo'},
                {image: 'popup_nocodz.png', title: 'NoCodz', alt:'Image NoCodz', description: 'L\'extension chrome qui répertorie des outils No-code'},
                {image: 'lp_levioss.png', title: 'Levioss', alt:'Image Levioss', description: 'Lévioss permet la mise en relation entre recruteurs et étudiants tout en souhaitant lutter contre la discrimination.'},
                {image: 'home_seenaptic.png', title: 'Seenaptic', alt:'Image Seenaptic', description: 'Outil de Data Quality, seenaptic vous aide à garantir la qualité de votre Tag Management et de vos données Analytics'},
                {image: 'login_foodzup.jpg', title: 'Foodzup', alt:'Image Foodzup', description: 'Clone d\'Ubereat avec une grande infrastructure (2 Bases de données, 3 applications, 1 client lourd, Kubernetes et Docker, développé avec Nuxtjs, TailwindCSS, NestJs et C#'},
                {image: 'messenger_infeasy.png', title: 'Infeasy Actualité', alt:'Image Infeasy Actualité', description: 'De l\'actualité quotidienne sur divers sujets orientés autour des technologies'},
            ],
        }
    }
})
</script>
<style scoped>
.hover-description:hover > div {
    display: flex;
}
</style>