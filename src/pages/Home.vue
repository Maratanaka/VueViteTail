<template>
  <div
    class="flex flex-col items-center justify-center text-center min-h-screen px-4 space-y-6"
  >
    <!-- Név -->
    <p class="dark:text-white text-4xl sm:text-5xl md:text-6xl leading-tight">
      <RouterLink
        to="/"
        class="no-underline hover:underline decoration-2"
      >Martin</RouterLink>
      Tokes<span class="blinking-cursor">_</span>
    </p>

    <!-- Leírás -->
    <p class="dark:text-white text-base sm:text-lg text-gray-300">
      Frontend developer / Designer / Student
    </p>

    <!-- GitHub link -->
    <a
      href="https://github.com/Maratanaka"
      target="_blank"
      class="dark:text-white underline decoration-1 text-sm sm:text-base"
    >
      Github
    </a>

    <!-- Lábléc -->
    <p
      class="fixed bottom-0 left-0 m-3 sm:m-6 text-gray-400 text-xs sm:text-sm text-left"
    >
      Made with Vue, Vite and TailwindCSS
    </p>
  </div>
</template>

<script>
export default { name: "Home" };
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
</style>
