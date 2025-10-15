<template>
  <div class="flex flex-col items-center text-center space-y-6 dark:text-white min-h-screen py-40 px-4">
    <p class="dark:text-white text-5xl">
      <RouterLink to="/" class="no-underline  hover:underline decoration-2">Martin</RouterLink> 
      Tokes<span class="blinking-cursor">_</span>
    </p>
    <p class="dark:text-white">Frontend developer / Designer / Student</p>
    <a
      href="https://github.com/Maratanaka"
      target="_blank"
      class="dark:text-white underline decoration-1"
    >
      Github
    </a>
    <p class="fixed bottom-0 left-0 m-3 sm:m-6 text-gray-400 text-s text-left  max-w-[40vw] leading-snug">
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