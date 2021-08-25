<template>
    <div class="flex flex-col justify-center items-center min-h-screen min-w-screen p-5">
        <p class="text-2xl text-center">Merci d'avoir pris le temps de me contacter</p>
        <p class="text-center text-xl my-6">Pour retourner sur le site, c'est par <a href="/" class="font-semibold hover:underline text-primary">ici</a></p>
        <MerciSvg />
    </div>
</template>

<style scoped>
body{
  background-color: #f9faff;
  font-family: Rubik, sans-serif;
}
body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: transparent;
  @apply rounded-lg; 
}
body::-webkit-scrollbar-thumb {
  @apply bg-primary;    /* color of the scroll thumb */
}
</style>