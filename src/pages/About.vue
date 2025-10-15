<template>
    <main>
        <div class="flex flex-col items-center text-center space-y-12 dark:text-white justify-center py-20 px-4">
        <h1 class="text-3xl sm:text-5xl md:text-6xl tracking-widest">
      <RouterLink to="/" class="no-underline hover:underline decoration-2">Martin</RouterLink>'s work and
      <br> projects.<span class="blinking-cursor">_</span>
        </h1>
        <p class="max-w-2xl mx-auto px-3 text-left dark:text-gray-400 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, molestiae, voluptates veniam laudantium quas vero cupiditate facilis at porro cum doloribus sit minus natus 
        </p>
        <p class="max-w-2xl mx-auto px-3 text-left dark:text-gray-400 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, molestiae, voluptates veniam laudantium quas vero cupiditate facilis at porro cum doloribus sit minus natus 
        </p>
    </div>
    <div class="flex flex-col space-y-12 dark:text-white justify-center py-20">
        <h2 class="text-left text-3xl">Portfolio Website</h2>
        <ul class="list-disc max-w-2xl mx-auto px-3 text-left dark:text-gray-400 text-lg">
            <li>Now this is a story all about how, my life got flipped-turned upside down. Now this is a story all about how, my life got flipped-turned upside down</li>
            <li>And I'd like to take a minute just sit right there</li>
            <li>I'll tell you how I became the prince of a town called Bel-Air</li>
        </ul>
        <h2 class="text-left text-3xl">Music App</h2>
        <ul class="list-disc max-w-2xl mx-auto px-3 text-left dark:text-gray-400 text-lg">
            <li>Now this is a story all about how, my life got flipped-turned upside down. Now this is a story all about how, my life got flipped-turned upside down</li>
            <li>And I'd like to take a minute just sit right there</li>
            <li>I'll tell you how I became the prince of a town called Bel-Air</li>
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