<template>
    <div>
        <h2 class="text-4xl text-center font-bold leading-relaxed">MES <span class="text-primary">OUTILS ET COMPETENCES</span></h2>
        <hr class="border-gray-700 mt-4">
        <ul class="mt-10 grid grid-cols-12 gap-2">
            <li v-for="(element, index) in toolsAndSkills" :key="index">
                <DynamicSvg :icon="'profile'" :width="50" :height="50" class="p-2 rounded-full bg-gray-400 hover:bg-primary" />
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            toolsAndSkills: [
                "git",
                "vuejs",
                "js",
                "ts",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
                "nestjs",
            ],
        }
    }
})
</script>