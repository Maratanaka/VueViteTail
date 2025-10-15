<template>
    <main>
        <div class="flex flex-col items-center text-center space-y-12 dark:text-white justify-center py-20 px-4">
        <h1 class="text-3xl sm:text-5xl md:text-6xl tracking-widest">
      <RouterLink to="/" class="no-underline hover:underline decoration-2">Martin</RouterLink>'s work and
      <br> projects.<span class="blinking-cursor">_</span>
        </h1>
        <p class="max-w-2xl mx-auto px-3 text-left dark:text-gray-400 text-lg">
            Hi, I'm Martin — an engineering leader passionate about building fast, scalable web experiences.        </p>
        <p class="max-w-2xl mx-auto px-3 text-left dark:text-gray-400 text-lg">
            I’m French with Vietnamese heritage, grew up in Paris, lived in London and Munich, and now call San Francisco home.        </p>
    </div>
    <div class="flex flex-col space-y-12 dark:text-white justify-center py-20">
        <h2 class="text-left text-3xl">Portfolio Website</h2>
        <ul class="list-disc max-w-2xl mx-auto px-3 text-left dark:text-gray-400 text-lg">
            <li>Joined as a Software Engineer on the Next.js team.</li>
            <li>Helped launch the App Router and improved core framework performance.</li>
            <li>Became an Engineering Manager in 2023.</li>
            <li>Now leading a team of talented engineers to build the future of Next.js.</li>
        </ul>
        <h2 class="text-left text-3xl">Music App</h2>
        <ul class="list-disc max-w-2xl mx-auto px-3 text-left dark:text-gray-400 text-lg">
            <li>Started as a UI Engineer on Workplace, focusing on performance and infra.</li>
            <li>Moved to the React Native team in 2021, working on core framework improvements.</li>
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