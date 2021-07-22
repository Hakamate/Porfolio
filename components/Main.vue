<template>
    <div class="flex flex-col justify-center items-center">
        <div id="presentation" class="max-w-5xl min-h-screen flex items-center">
            <SectionPresentation />
        </div>
        <div id="about" class="max-w-5xl min-h-screen flex items-center">
            <SectionAbout />
        </div>
        <div id="formations" class="max-w-5xl min-h-screen flex items-center">
            <SectionFormation />
        </div>
        <div id="experiences" class="max-w-5xl min-h-screen flex items-center">
            <SectionExperience />
        </div>
        <div id="extra" class="max-w-5xl min-h-screen flex items-center">
            <SectionExtra />
        </div>
        <div id="competences" class="max-w-5xl min-h-screen flex items-center">
            <SectionSkill />
        </div>
        <div id="projects" class="max-w-5xl min-h-screen flex items-center">
            <SectionProject />
        </div>
        <div id="contact" class="max-w-5xl  min-h-screen flex items-center">
            <SectionContact />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>