<template>
  <div
    class="flex flex-col items-center text-center space-y-6 dark:text-white min-h-screen justify-center py-10 px-4"
  >
    <!-- Cím -->
    <p
      class="dark:text-white text-4xl sm:text-5xl md:text-6xl tracking-widest leading-tight"
    >
      <RouterLink
        to="/"
        class="no-underline hover:underline decoration-2"
      >Martin</RouterLink>'s recent
      <br class="hidden sm:block" />
      pictures.<span class="blinking-cursor">_</span>
    </p>

    <!-- Képgaléria -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="visual inspiration"
        class="shadow-lg hover:scale-105 transition-transform duration-300 object-cover mx-auto rounded-lg"
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
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
}

/* Kép méretezés reszponzívan, keskenyebb képaránnyal */
img {
  width: 80vw;
  max-width: 15rem; /* korábban 20rem volt */
  height: auto;
}

@media (min-width: 640px) {
  img {
    width: 13rem;
    height: 22rem;
  }
}

@media (min-width: 1024px) {
  img {
    width: 14rem;
    height: 24rem;
  }
}
</style>
