<template>
  <div>
    <h2 class="text-4xl mb-16 font-black leading-relaxed flex">
      <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform -rotate-90 hidden sm:flex" />
      <span class="z-20">Quelques projets</span>
      <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform rotate-90 hidden sm:flex" />
    </h2>
    <!-- <ul class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <li v-for="(project, index) in projects" :key="index" class="flex flex-col relative hover-description">
                <img :src="require(`~/assets/img/projets/${project.image}`)" :alt="project.alt" width="0" height="0" class="rounded-md h-full w-full shadow-custom">
                <span class="text-xl font-semibold text-center w-full mt-3">{{ project.title }}</span>
                <div class="p-2 text-lg text-gray-800 font-normal hidden absolute top-0 left-0 items-center justify-center bg-blue-500 h-full w-full rounded-md shadow-custom">
                    <p>{{ project.description }}</p>
                </div>
            </li>
        </ul>  -->
    <ul class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <li v-for="(project, index) in projects" :key="index">
        <div class="card h-full">
          <div class="card-body">
            <img :src="require(`~/assets/img/projets/${project.image}`)" :alt="project.alt" width="0" height="0" class="card-front rounded-md h-full w-full shadow-custom">
            <div class="card-back py-3 px-4 text-lg bg-white flex flex-col items-center justify-center">
              <span class="text-lg font-semibold mb-1 text-center">{{ project.title }}</span>
              <span class="text-sm text-center">{{ project.description }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      projects: [
        { image: 'login_searchii.png', title: 'Searchii', alt: 'Image Searchii', description: 'Vous êtes actuellement en recherche de CDD, CDI, Stage, Alternance ou tout simplement d\'un job ? Inscrivez-vous et bénéficiez d\'un outil de suivi.' },
        { image: 'n-crm.png', title: 'n-crm', alt: 'Image n-crm', description: 'Automatisation de sa prospection LinkedIn vers Notion - CRM Notion.' },
        { image: 'n-chart.png', title: 'n-chart', alt: 'Image n-chart', description: 'Ajoute des graphiques sur tes pages Notion en quelques clics' },
        { image: 'liiloo.png', title: 'liiloo', alt: 'Image liiloo', description: 'Application dotée d\'une intelligence artificielle, pour améliorer la qualité de vos contenus sur les réseaux.' },
        { image: 'oneforalldiscordbot.png', title: 'OneForAll Discord bot', alt: 'Image OneForAll Discord bot', description: 'Un bot discord qui permet de réaliser tout type de commandes (stats, quizzs, news, organisation, événements vocaux, etc...)' },
        { image: 'swiper_zumee.png', title: 'Zumee', alt: 'Image Zumee', description: 'Rendre le recrutement plus dynamique en passant par le support qu\'est la vidéo de présentation' },
        { image: 'popup_nocodz.png', title: 'NoCodz', alt: 'Image NoCodz', description: 'Une extension chrome qui permet de répertorier des outils No-code par catégorie' },
        { image: 'lp_levioss.png', title: 'Levioss', alt: 'Image Levioss', description: 'Lévioss permet la mise en relation entre recruteurs et étudiants tout en souhaitant lutter contre la discrimination.' },
        { image: 'home_seenaptic.png', title: 'Seenaptic', alt: 'Image Seenaptic', description: 'Outil de Data Quality, seenaptic vous aide à garantir la qualité de votre Tag Management et de vos données Analytics' },
        { image: 'login_foodzup.jpg', title: 'Foodzup', alt: 'Image Foodzup', description: 'Clone d\'Ubereat avec une grande infrastructure (2 Bases de données, 3 applications, 1 client lourd, Kubernetes et Docker, développé avec Nuxtjs, TailwindCSS, NestJs et C#' },
        { image: 'messenger_infeasy.png', title: 'Infeasy Actualité', alt: 'Image Infeasy Actualité', description: 'De l\'actualité quotidienne sur divers sujets orientés autour des technologies' }
      ]
    }
  }
})
</script>
<style scoped>
.hover-description:hover > div {
    transition-duration: 0.5s;
    display: flex;
}
</style>
<style scoped>

.cards {
  display: grid;
}

.card {
  perspective: 40rem;
}

.card-body {
  transform-style: preserve-3d;
  transition: 0.707s transform;
}

.card:hover .card-body  {
    transform: rotateX(-180deg);
}

.card-front, .card-back {
  backface-visibility: hidden;
}

.card-back {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  transform: rotateX(-180deg);
}

/* Make it Pretty */

.card {
  display: flex;
  transition: transform calc(0.707s / 4);
  text-decoration: none;
  color: inherit;
}

.card:active {
    transform: scale(0.975);
}

.card-body {
  border-radius: 0.25rem;
  flex: 1;
}

.card-front, .card-back {
  box-shadow: 0 -1px 1px rgba(0,0,0,0.04),
              0 2px 2px rgba(0,0,0,0.04),
              0 4px 4px rgba(0,0,0,0.04),
              0 8px 8px rgba(0,0,0,0.04),
              0 16px 16px rgba(0,0,0,0.04);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 0.25rem;
}

</style>
