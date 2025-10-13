<template>
  <div class="min-h-screen flex flex-col items-center text-center space-y-6 dark:text-white py-24 px-4">
    <!-- Cím -->
    <p class="text-6xl tracking-widest">
      <RouterLink to="/" class="no-underline hover:underline decoration-2">Martin</RouterLink>'s recently<br>watched movies.<span class="blinking-cursor">_</span>
    </p>

    <!-- Lista -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <div
        v-for="(movie, index) in movies"
        :key="index"
        class="bg-gray-100 outline-1 dark:bg-gray-900 outline-gray-600 p-4 shadow-lg items-center space-x-61 w-full max-w-3xl"
        style="height: 24rem; width: 16rem;"
        >
        
          <div class="justify-center flex flex-col">
            <img
            :src="movie.img" 
            :alt="movie.title" 
            class=""/>         
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatIWatch",
  data() {
    return {
      movies: [
        { watched: "October 2025", rating: "7.5", img: "/images/strange.jpg"},
        { watched: "September 2025", rating: "8.8", img: "/images/earth2.jpg"},
        { watched: "August 2025", rating: "8.7", img: "/images/KevinPenkin.jpg"},
        { watched: "July 2025", rating: "8.6", img: "/images/nocturne.jpg"},
        { watched: "June 2025", rating: "9.0", img: "/images/GunsNRoses.jpg"},
      ]
    };
  }
};
</script>

<style scoped>

</style>
