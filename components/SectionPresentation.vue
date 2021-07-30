<template>
    <div class="text-white">
        <span class="text-3xl">BIENVENUE !</span>
        <h2 class="text-4xl font-bold leading-relaxed">Moi c'est <span class="text-primary">Thomas</span></h2>
        <p class="text-2xl mb-2">Je suis <span id="im" class="text-2xl underline"></span></p>
        <p class="text-xl">
            Passionné par la technologie et le monde qui l'entoure, j'aime m'investir dans de nombreux projets visant à répondre aux problématiques actuelles.
            En tant que maker je m’intéresse de plus prés aux métiers de business développeur et chargée d’affaire, et ce, dans l'objectif de compléter mon panel de compétences dans le monde de l'IT.</p>
        <ButtonApp href="#about" class="mt-3 w-max">
            <span class="mr-3">A propos de moi</span>
            <DynamicSvg :icon="'profile'"/>
        </ButtonApp>
        <div class="flex items-center justify-center flex-col mt-24 absolute bottom-10 left-0 right-0">
            <div class='icon-scroll'></div>
            <span class="text-xl font-light mt-2">Scroll</span>
        </div>
    </div>
</template>

<style scoped>
@keyframes fade-in-out {
    0% {
        @apply text-white
    }
    50% {
        @apply text-black
    }
    100% {
        @apply text-white
    }
}

.icon-scroll {
    position: relative
}
.icon-scroll:before {
    position: absolute;
    left: 50%;
    right: 50%;
}


.icon-scroll{
    width: 25px;
    height: 45px;
    box-shadow: inset 0 0 0 1px #fff;
    border-radius: 25px;
}

.icon-scroll:before {
    content: '';
    width: 8px;
    height: 8px;
    background: #fff;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
}

@keyframes scroll {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        transform: translateY(25px)
    }
}

.fade-in-out {
    animation: fade-in-out 2s infinite
}

#im:after{
    content: 'Développeur Web';
    @apply text-2xl;
    animation-name: head;
    animation-duration: 10s;
    animation-iteration-count: infinite;
}

@keyframes head {
    0% {
        opacity:1;
        content: 'Développeur Web';
    }
    14.3% {
        opacity:0;
    }
    28.6% {
        opacity:1;
        content: "Intégrateur"
    }
    42.9% {
        opacity:0;
    }
    57.2% {
        opacity:1; 
        content: "No-coder"
    }
    71.5% {
        opacity:0;
    }
    85.8% {
        opacity:1; 
        content: "Chef de projet IT"
    }
    100% {
        opacity: 0;
    }
}
/* @keyframes head {
    0% {font-size:600%; opacity:1;}
    25% {font-size:570%; opacity:0;}
    50% {font-size:600%; opacity:1;}
    65% {font-size:570%; opacity:0;}
    80% {font-size:600%; opacity:1; content: "Intégrateur"}
    90% {font-size:570%; opacity:0;}
    100% {font-size:600%;opacity:1; content: "No-coder"}
} */
</style>