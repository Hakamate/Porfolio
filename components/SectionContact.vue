<template>
  <div>
    <!-- <h2 class="text-4xl mb-16 font-bold leading-relaxed">ME <span class="text-blue-500">CONTACTER</span></h2> -->
    <h2 class="text-4xl mb-16 font-black leading-relaxed flex">
      <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform -rotate-90 hidden sm:flex" />
      <span>Me contacter</span>
      <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform rotate-90 hidden sm:flex" />
    </h2>
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
      <form
        name="contactus"
        action="/merci"
        method="post"
        netlify
        netlify-honeypot="bot-field"
        class="grid gap-4"
      >
        <input type="hidden" name="form-name" value="contactus">
        <div class="flex flex-col">
          <label class="w-0 h-0 ml-6" for="name">Name:</label>
          <input type="text" name="name" class="rounded-md focus:outline-none p-4 bg-white shadow-custom placeholder-gray-400" placeholder="Nom complet..." required>
        </div>
        <div class="flex flex-col">
          <label class="w-0 h-0 ml-6" for="object">Objet:</label>
          <input type="text" name="object" class="rounded-md focus:outline-none p-4 bg-white shadow-custom placeholder-gray-400" placeholder="Sujet du message..." required>
        </div>
        <div class="flex flex-col">
          <label class="w-0 h-0 ml-6" for="email">Email:</label>
          <input type="email" name="email" class="rounded-md focus:outline-none p-4 bg-white shadow-custom placeholder-gray-400" placeholder="Adresse email..." required>
        </div>
        <div class="flex flex-col">
          <label class="w-0 h-0 ml-6" for="message">Message:</label>
          <textarea name="message" class="rounded-md focus:outline-none p-4 bg-white shadow-custom placeholder-gray-400" placeholder="Ecrire votre message ici..." required />
        </div>
        <button type="submit" class="flex items-center rounded-md text-white font-semibold bg-blue-500 px-3 py-2 w-24 transition duration-500 transform hover:scale-110" value="Send message">
          <span class="w-full text-center">Envoyer</span>
        </button>
      </form>
      <div>
        <ul>
          <li v-for="(info, indexc) in contactInfo" :key="indexc" class="mb-5 last:mb-0 flex items-center">
            <a :href="info.url" target="_blank" rel="noopener" class="flex hover:text-blue-500 hover:underline text-xl">
              <DynamicSvg :icon="info.icon" :width="25" :height="25" class="text-blue-500 mr-3" />
              <span class="line-clamp-1">
                {{ info.value }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      contactInfo: [
        // { icon: 'envelope', url: 'mailto:thomas.clement.professionnel@gmail.com', value: 'thomas.clement.professionnel@gmail.com' },
        { icon: 'phone', url: 'tel:0648352851', value: '06 48 35 28 51' },
        { icon: 'linkedin', url: 'https://www.linkedin.com/in/thomas-clmt/', value: 'in/thomas-clmt/' },
        { icon: 'github', url: 'https://github.com/Hakamate', value: '@Hakamate' },
        { icon: 'locate', url: 'https://www.google.fr/maps/place/Lille', value: '59800 Lille' }
      ],
      aboutStat: [
        { title: 'Années d\'expériences', value: '4 +' },
        { title: 'Projets Ingénieur / IT Réalisés', value: '40 +' },
        { title: 'Expériences Professionnelles', value: '8' },
        { title: 'Vues sur LinkedIn', value: '300k +' }
      ]
    }
  }
})
</script>
