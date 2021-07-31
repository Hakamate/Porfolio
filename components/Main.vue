<template>
    <div class="flex flex-col justify-center items-center">
        <div class="w-full bg-gray-800 flex justify-center relative min-h-screen">
            <div id="container" class="absolute w-full bg-gray-800 flex justify-center min-h-screen">
                <div id="scene" class="scene relative min-h-screen w-full">
                    <div data-depth="0.4" class="h-full w-full" ><DynamicSvg id="parallax-symbol1" :width="30" :height="30" :icon="'nuxtjs'" class="absolute text-primary"/></div>
                    <div data-depth="0.4" class="h-full w-full" ><DynamicSvg id="parallax-symbol2" :width="30" :height="30" :icon="'nodejs'" class="absolute text-primary"/></div>
                    <div data-depth="0.4" class="h-full w-full" ><DynamicSvg id="parallax-symbol3" :width="30" :height="30" :icon="'htmll'" class="absolute text-primary"/></div>
                    <div data-depth="0.4" class="h-full w-full" ><DynamicSvg id="parallax-symbol4" :width="30" :height="30" :icon="'nestjs'" class="absolute text-primary"/></div>
                    <div data-depth="0.4" class="h-full w-full" ><DynamicSvg id="parallax-symbol5" :width="30" :height="30" :icon="'figma'" class="absolute text-primary"/></div>
                    <div data-depth="0.4" class="h-full w-full" ><DynamicSvg id="parallax-symbol6" :width="30" :height="30" :icon="'javascript'" class="absolute text-primary"/></div>
                    <div data-depth="0.4" class="h-full w-full" ><DynamicSvg id="parallax-symbol7" :width="30" :height="30" :icon="'mongodb'" class="absolute text-primary"/></div>
                    <div data-depth="0.4" class="h-full w-full" ><DynamicSvg id="parallax-symbol8" :width="30" :height="30" :icon="'vuejs'" class="absolute text-primary"/></div>
                    <div data-depth="0.4" class="h-full w-full" ><DynamicSvg id="parallax-symbol9" :width="30" :height="30" :icon="'typescript'" class="absolute text-primary"/></div>
                    <div data-depth="0.4" class="h-full w-full" ><DynamicSvg id="parallax-symbol10" :width="30" :height="30" :icon="'mysql'" class="absolute text-primary"/></div>
                    <div data-depth="0.4" class="h-full w-full" ><DynamicSvg id="parallax-symbol11" :width="30" :height="30" :icon="'notion'" class="absolute text-primary"/></div>
                    <div data-depth="0.4" class="h-full w-full" ><DynamicSvg id="parallax-symbol12" :width="30" :height="30" :icon="'tailwind'" class="absolute text-primary"/></div>
                    <div data-depth="0.4" class="h-full w-full" ><DynamicSvg id="parallax-symbol13" :width="30" :height="30" :icon="'css'" class="absolute text-primary"/></div>
                </div>
            </div>
            <div id="presentation" class=" absolute max-w-5xl min-h-screen flex items-center w-full px-5 sm:px-8">
                <LazySectionPresentation class="w-full"/>
            </div>
        </div>
        <div class="w-full px-5 sm:px-8 flex justify-center">
            <div id="about" class="py-20 max-w-5xl flex items-center w-full">
                <LazySectionAbout class="w-full"/>
            </div>
        </div>
        <div class="w-full px-5 sm:px-8 flex justify-center">
            <div id="experiences" class="py-20 max-w-5xl flex items-center w-full">
                <LazySectionExperience class="w-full"/>
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
            <div id="extra" class="py-20 max-w-5xl flex items-center w-full">
                <LazySectionExtra class="w-full"/>
            </div>
        </div>
        <div class="w-full px-5 sm:px-8 flex justify-center">
            <div id="contact" class="py-20 max-w-5xl flex items-center w-full">
                <LazySectionContact class="w-full"/>
            </div>
        </div>
        <script>
            const scene = document.getElementById('scene');
            const parallax = new Parallax(scene);
        </script>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    head() {
      return {
        script:[{ src: 'https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js'},]
      }
    }
})
</script>
<style scoped>
#container{
    width: 100%;
    overflow: hidden;
}

#parallax-symbol1 { top: 10%; left: 10% }
#parallax-symbol2 { top: 8%; left: 50% }
#parallax-symbol3 { top: 9%; right: 10% }
#parallax-symbol4 { top: 20%; right: 30% }
#parallax-symbol5 { top: 30%; left: 25% }
#parallax-symbol6 { top: 40%; right: 15% }
#parallax-symbol7 { top: 50%; left: 7% }
#parallax-symbol8 { top: 60%; right: 19% }
#parallax-symbol9 { top: 70%; left: 34% }
#parallax-symbol10 { top: 80%; right: 31% }
#parallax-symbol11 { top: 90%; left: 10% }
#parallax-symbol12 { top: 50%; right: 50% }
#parallax-symbol13 { top: 91%; right: 10% }


.text h1{
    font-family:  Verdana, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: wheat;
    border: 1px solid rgb(19, 18, 18);
    background: rgb(19, 18, 18);
}
</style>
