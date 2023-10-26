<template>
  <div class="text-white">
    <div class="grid">
      <span class="text-xs">Portfolio créé en 2019</span>
      <span class="text-3xl">BIENVENUE !</span>
    </div>
    <h2 class="text-4xl font-bold leading-relaxed">
      Moi c'est <span class="text-blue-300">Thomas</span>
    </h2>
    <p class="text-2xl mb-2">
      Je suis <span id="im" class="text-2xl underline" />
    </p>
    <p class="text-xl">
      Fan de tech depuis l'âge de 6 ans, j'ai commencé à créer des applications à 11.
      Oui c'est un virus.

      Aujourd'hui je crée des produits pour nous simplifier la vie et je suis un touche à tout : Growth hacking, Marketing, Communication, Design, Développement, etc...
    </p>
    <ButtonApp href="#about" class="mt-3 w-max">
      <span class="mr-3">A propos de moi</span>
      <DynamicSvg :icon="'profile'" />
    </ButtonApp>
    <div class="flex items-center justify-center flex-col mt-10 sm:mt-24 sm:absolute bottom-10 left-0 right-0">
      <div class="icon-scroll" />
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

.text-shadow-xl {
    text-shadow: 0px 2px 10px rgb(46 46 46);
}

.text-shadow-lg {
    text-shadow: 1px 1px 3px rgb(46 46 46);;
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
        content: "Product Builder"
    }
    42.9% {
        opacity:0;
    }
    57.2% {
        opacity:1;
        content: "No-Coder"
    }
    71.5% {
        opacity:0;
    }
    85.8% {
        opacity:1;
        content: "Fondateur"
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
