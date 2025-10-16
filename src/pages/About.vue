<template>
    <main>
        <div class="flex flex-col items-center text-center space-y-12 dark:text-white justify-center py-20 px-4">
        <h1 class="text-3xl sm:text-5xl md:text-6xl tracking-widest">
      <RouterLink to="/" class="no-underline hover:underline decoration-2">Martin</RouterLink>'s work and
      <br> projects.<span class="blinking-cursor">_</span>
        </h1>
        <p class="max-w-2xl mx-auto px-3 text-left dark:text-gray-400 text-lg">
            Hi, I'm Martin — currently studying software development and testing, and I am primarily looking to gain practical work experience in UX/UI design and Frontend development.</p>
        <p class="max-w-2xl mx-auto px-3 text-left dark:text-gray-400 text-lg">
            I have confident skills in HTML, CSS, and JavaScript, as well as experience working with ReactJS and Vue3 projects. I enjoy working in a team, learn quickly, and always strive to find the best solutions to improve the user experience.</p>
    </div>
    <div class="flex flex-col space-y-12 dark:text-white justify-center py-20">
        <h2 class="text-left text-3xl">Portfolio Website</h2>
        <ul class="list-disc max-w-2xl mx-auto px-3 text-left dark:text-gray-400 text-lg">
            <li>Built with Vue 3, Vite, and TailwindCSS</li>
            <li>Showcasing my sources of inspiration through a curated collection of images, music, movies, and books.</li>
            <li>The site is responsive, cleanly designed, and deployed to Vercel as a Single Page Application (SPA).</li>
        </ul>
        <h2 class="text-left text-3xl">Music App</h2>
        <ul class="list-disc max-w-2xl mx-auto px-3 text-left dark:text-gray-400 text-lg">
            <li>A music application built with Vue 3, Vite, TailwindCSS, Ionic, and Capacitor.</li>
            <li>Curated music library with in-browser playback, smooth navigation, and a clean, mobile-friendly interface.</li>
            <li>Deployed on Vercel as a cross-platform Single Page Application (SPA).</li>
        </ul>
    </div>
    </main>
    
</template>

<script>    

</script>

<style scoped>

.blinking-cursor {
  display: inline-block;
  margin-left: 2px;
  width: 10px;
  animation: blink 2s steps(1) infinite;
}

div {
    border-bottom: 1px solid gray;
    width: 80%;        /* a vonal szélessége */
    margin: 0 auto;   /* középre igazítás */
}

@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}
</style>