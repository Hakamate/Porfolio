<template>
    <div>
        <h2 class="text-4xl mb-16 font-black leading-relaxed flex text-white">
            <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform -rotate-90 hidden sm:flex"/>
            <span class="z-20">Ces domaines m'interessent</span>
            <DynamicSvg :icon="'down'" :width="40" :height="40" class="text-gray-300 transform rotate-90 hidden sm:flex"/>
        </h2>
        <div class="mt-10">
            <ul class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                <li v-for="(element, index) in interest" :key="index" class="flex flex-col items-center w-full">
                    <button class="rounded-md px-2 py-1 transition duration-500 transform hover:-translate-y-2 w-full h-20 bg-white text-gray-80 hover:bg-blue-500 hover:text-white text-lg font-semibold shadow-custom" :class="element.color">{{ elementMaj(element.name) }}</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            interest:[
                {name:"Développement Web"},
                {name:"Business Développement"},
                {name:"Conception Produit"},
                {name:"Growth Marketing"},
                {name:"Contact client"},
                {name:"Management"},
                {name:"Growth Hacking"},
                {name:"Copywriting"},
                {name:"UX / UI Design"},
                {name:"Growth Engineering"},
                {name:"No/Low Code"},
            ],
        }
    },
    methods: {
        elementMaj(element:string){
            if (element === 'htmll') { return 'Html' }
            return element.charAt(0).toUpperCase() + element.slice(1);
        }
    }
})
</script>
