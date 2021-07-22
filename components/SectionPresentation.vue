<template>
    <div>
        <span class="text-3xl">BIENVENUE !</span>
        <h2 class="text-4xl font-bold leading-relaxed">Je m'appelle <span class="text-primary">Thomas</span></h2>
        <p class="text-xl text-gray-300">Je suis actuellement à Cesi, une école d'ingénieur informatique. Les métiers que j’affectionne se tournent autour du Web ou du développement de logiciels et d'applications. Devenir Product Owner / Scrum Master est mon objectif actuel. Et m’intéresse de plus prés au métier de business développeur et chargée d’affaire.</p>
        <ButtonApp href="#about" class="mt-3 w-max">
            <span class="mr-3">A propos de moi</span>
            <DynamicSvg :icon="'profile'"/>
        </ButtonApp>
        <div class="flex items-center justify-center flex-col mt-24">
            <span class="text-xl text-gray-500 font-light">Scroll</span>
            <DynamicSvg :icon="'down'" :width="30" :height="30" class="text-gray-300 fade-in-out" />
        </div>
    </div>
</template>
<style scoped>
    @keyframes fade-in-out {
        0% {
            @apply text-white
        }
        50% {
            @apply text-gray-500
        }
        100% {
            @apply text-white
        }
    }

    .fade-in-out {
        animation: fade-in-out 2s infinite
    }
</style>