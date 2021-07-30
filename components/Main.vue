<template>
    <div class="flex flex-col justify-center items-center">
        <div class="w-full bg-gray-800 flex justify-center relative">
            <div id="presentation" class="max-w-5xl min-h-screen flex items-center w-full px-5 sm:px-8">
                <LazySectionPresentation class="w-full"/>
            </div>
        </div>
        <div class="w-full px-5 sm:px-8 flex justify-center">
            <div id="about" class="py-20 max-w-5xl flex items-center w-full">
                <LazySectionAbout class="w-full"/>
            </div>
        </div>
        <div class="w-full px-5 sm:px-8 flex justify-center">
            <div id="services" class="py-20 max-w-5xl flex items-center w-full">
                <LazySectionService class="w-full"/>
            </div>
        </div>
        <div class="w-full px-5 sm:px-8 flex justify-center">
            <div id="formations" class="py-20 max-w-5xl flex items-center w-full">
                <LazySectionFormation class="w-full"/>
            </div>
        </div>
        <div class="w-full px-5 sm:px-8 flex justify-center">
            <div id="experiences" class="py-20 max-w-5xl flex items-center w-full">
                <LazySectionExperience class="w-full"/>
            </div>
        </div>
        <div class="w-full px-5 sm:px-8 flex justify-center">
            <div id="extra" class="py-20 max-w-5xl flex items-center w-full">
                <LazySectionExtra class="w-full"/>
            </div>
        </div>
        <div class="w-full px-5 sm:px-8 flex justify-center">
            <div id="competences" class="py-20 max-w-5xl flex items-center w-full">
                <LazySectionSkill class="w-full"/>
            </div>
        </div>
        <div class="w-full px-5 sm:px-8 flex justify-center">
            <div id="projects" class="py-20 max-w-5xl flex items-center w-full">
                <LazySectionProject class="w-full"/>
            </div>
        </div>
        <div class="w-full px-5 sm:px-8 flex justify-center">
            <div id="contact" class="py-20 max-w-5xl flex items-center w-full">
                <LazySectionContact class="w-full"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>