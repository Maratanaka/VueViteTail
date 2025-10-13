<template>
  <div class="min-h-screen flex flex-col items-center text-center space-y-6 dark:text-white py-24 px-4">
    <!-- Cím -->
    <p class="text-6xl tracking-widest">
      <RouterLink to="/" class="no-underline hover:underline decoration-2">Martin</RouterLink>'s current songs<br> on repeat.<span class="blinking-cursor">_</span>
    </p>

    <!-- Lista -->
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-8 w-full max-w-5xl">
      <div
        v-for="(sound, index) in sounds"
        :key="index"
        class="bg-gray-200 outline-1 dark:bg-gray-900 outline-gray-600 p-4 shadow-lg flex items-center space-x-61 w-full max-w-3xl"
      >
        <img 
          :src="sound.img" 
          :alt="sound.title" 
          class="w-32 h-32 object-cover"
        />
          <div class="flex flex-col justify-center text-left">
            <h2 class="text-black dark:text-white text-xl font-semibold mb-1">{{ sound.title }}</h2>
            <p class="text-gray-600 text-sm mt-1">{{ sound.author }}</p>
            <p class="text-gray-600 text-sm mt-1 font-semibold">{{ sound.album }}</p>
            <p class="text-gray-600 text-sm">{{ sound.time }}</p>          
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
        { title: "Nocturne No.20", author: "Frederic Chopin",  album: "", img: "/images/nocturne.jpg", time: "4:26" },
        { title: "Sweet Child O'Mine", author: "Guns N' Roses",  album: "Appetite For Destruction", img: "/images/GunsNRoses.jpg", time: "5:56" },
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
