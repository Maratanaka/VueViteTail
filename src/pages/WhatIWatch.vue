<template>
  <div class="min-h-screen flex flex-col items-center text-center space-y-6 dark:text-white py-10 px-4">
    <!-- Cím -->
    <p class="text-3xl md:text-6xl tracking-widest">
      <RouterLink to="/" class="no-underline hover:underline decoration-2">Martin</RouterLink>'s recently watched movies.<span class="blinking-cursor">_</span>
    </p>

    <!-- Lista -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <div
        v-for="(movie, index) in movies"
        :key="index"
        class="bg-gray-200 outline-1 dark:bg-black outline-gray-600 p-4  items-center space-x-61 w-full max-w-3xl"
        style="height: 29rem; width: 18rem;"
        >
        
          <div class="justify-center flex flex-col">
            <img
            :src="movie.img" 
            :alt="movie.title" 
            class="h-100"/>
              <p class="text-gray-600 text-sm mt-1">WATCHED: {{ movie.watched }}</p>
              <p class="text-gray-600 text-sm mt-0.5">RATING: {{ movie.rating }}</p>
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
        { watched: "October 2025", rating: "7.2", img: "/images/earth2.jpg"},
        { watched: "September 2025", rating: "7.5", img: "/images/predator.jpg"},
        { watched: "October 2025", rating: "7.5", img: "/images/deadpool_and_wolverine.jpg"},
        { watched: "September 2025", rating: "7.1", img: "/images/thunderbolts.jpg"},
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
