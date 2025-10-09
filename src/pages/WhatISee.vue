<template>
  <div class="flex flex-col items-center text-center space-y-6 dark:text-white min-h-screen justify-center py-20">
    <p class="dark:text-white text-6xl tracking-widest">
      <RouterLink to="/" class="no-underline hover:underline decoration-2">Martin</RouterLink>'s recent
      <br> pictures.<span class="blinking-cursor">_</span>
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <img
  v-for="(image, index) in images"
  :key="index"
  :src="image"
  alt="visual inspiration"
  class="shadow-lg hover:scale-102 transition-transform duration-300 object-cover"
  style="height:32rem; width:24rem;"
/>

    </div>
  </div>
</template>


<script>
export default {
    name: "WhatISee",
    data() {
        return {
            images: [
                "/images/IMG_3602.JPG",
                "/images/IMG_3612 (1).JPG",
                "/images/IMG_3649.JPG",
                "/images/IMG_3660.JPG",
                "/images/IMG_3821 (1).JPG",
                "/images/IMG_4150.JPG",
                "/images/IMG_4258.JPG",
            ],
        };
    },
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