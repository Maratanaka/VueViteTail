<template>
  <div class="min-h-screen flex flex-col items-center text-center space-y-6 text-white py-24 px-4">
    <p class="text-6xl tracking-widest">
      <RouterLink to="/" class="no-underline hover:underline decoration-2">Martin</RouterLink>'s reading list.
      <span class="blinking-cursor">_</span>
    </p>

    <div
  v-for="(book, index) in books"
  :key="index"
  class="outline-1 outline-gray-600 p-4 shadow-lg flex items-center space-x-24 w-full max-w-3xl"
>
  <!-- Kép bal oldalon -->
  <img 
    :src="book.img" 
    :alt="book.title" 
    class="w-48 h-74 object-cover flex-shrink-0 hover:scale-102 transition-transform duration-400"
  />

  <!-- Szöveg jobb oldalon -->
  <div class="flex flex-col justify-center text-left">
    <h2 class="text-xl mb-2">{{ book.title }}</h2>
    <p class="text-gray-500 text-sm">{{ book.author }}</p>
    <p class="text-gray-400 text-sm mt-1">{{ book.year }}</p>
    <p class="text-gray-400 text-sm mt-1 ">{{ book.details }}</p>
  </div>
</div>
    </div>
</template>

<script>
export default {
  name: "WhatIRead",
  data() {
    return {
      books: [
  { 
    title: "Kezdetben az univerzum", 
    author: "Christophe Galfard", 
    year: 2021,
    img: "https://s01.static.libri.hu/cover/cf/f/7875644_4.jpg",
    details: "Miből áll az univerzum? Mi van közel a Földhöz? És távolabb? Milyen messzire tudunk ellátni? Lehet-e tudni valamit a világegyetem történetéről? Van-e egyáltalán története?"
  },
  { 
    title: "Atomi szokások", 
    author: "James Clear", 
    year: 2020,
    img: "https://s06.static.libri.hu/cover/af/8/6621203_5.jpg",
    details: "A könyv bemutatja, hogyan lehet apró, mindennapi szokások megváltoztatásával jelentős és tartós eredményeket elérni az élet különböző területein."
  },
  { 
    title: "A tibeti buddhizmus alapjai", 
    author: "Kalu Rinpocse", 
    year: 2024,
    img: "https://s06.static.libri.hu/cover/11/9/721548_5.jpg",
    details: "A tibeti buddhizmus alapjai átfogó képet ad arról a szellemi képzésről, amelyet a buddhizmuson belül vadzsrajánának, vagyis gyémántútnak neveznek."
  },
  
]

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
