<template>
  <div class="min-h-screen flex flex-col items-center text-center space-y-6 dark:text-white py-10 px-4">
    <!-- Cím -->
    <p class="text-4xl md:text-6xl tracking-widest">
      <RouterLink to="/" class="no-underline hover:underline decoration-2">Martin</RouterLink>'s current songs<br> on repeat.<span class="blinking-cursor">_</span>
    </p>

    <!-- Lista -->
    <div class="flex flex-col space-y-6 mt-8 w-full max-w-xl">
      <div
  v-for="(sound, index) in sounds"
  :key="index"
  class="bg-gray-200 dark:bg-black outline-1 outline-gray-600 p-4 flex flex-row items-center space-x-4 w-full"
>
  <!-- Kép -->
  <img
    :src="sound.img"
    :alt="sound.title"
    class="w-32 h-32 sm:w-36 sm:h-36 object-cover flex-shrink-0 hover:scale-105 transition-transform duration-400"
  />

  <!-- Szöveg -->
  <div class="flex flex-col justify-center text-left max-w-full">
    <h2 class="text-lg sm:text-xl font-semibold mb-1 text-black dark:text-white">{{ sound.title }}</h2>
    <p class="text-gray-500 text-sm">{{ sound.author }}</p>
    <p class="text-gray-500 text-sm mt-1 font-semibold">{{ sound.album }}</p>
    <p class="text-gray-500 text-sm mt-1">{{ sound.time }}</p>
  </div>
</div>

    </div>
  </div>
</template>

<script>
export default {
  name: "WhatIHear",
  data() {
    return {
      sounds: [
        { title: "Feather", author: "Nujabes", album: "Modal Soul", img: "/images/nujabes.jpg", time: "2:55" },
        { title: "Back In Black", author: "AC/DC", album: "Back In Black", img: "/images/acdc2.jpg", time: "4:15" },
        { title: "Irregular God", author: "Kevin Penkin", album: "Tower Of God", img: "/images/KevinPenkin.jpg", time: "4:27" },
        { title: "Nocturne No.20", author: "Frederic Chopin", album: "", img: "/images/nocturne.jpg", time: "4:26" },
        { title: "Sweet Child O'Mine", author: "Guns N' Roses", album: "Appetite For Destruction", img: "/images/GunsNRoses.jpg", time: "5:56" },
      ]
    };
  }
};
</script>

<style scoped>
.blinking-cursor {
  display: inline-block;
  margin-left: 2px;
  width: 10px;
  animation: blink 2s steps(1) infinite;
}

@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}
</style>
