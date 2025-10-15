<template>
  <div>
    <!-- Felső bal sarok -->
    <div class="absolute top-0 left-0 m-6">
      <p class="dark:text-white text-sm">2025</p>
    </div>

    <!-- Felső jobb sarok -->
    <div class="absolute top-0 right-0 m-6 space-x-4 text-right">
      <RouterLink to="about" class="dark:text-white no-underline hover:underline decoration-1 text-sm">About me</RouterLink>
      <a href="#" class="dark:text-white no-underline hover:underline decoration-1 text-sm">Contact</a>
    </div>

    <!-- Középső tartalom -->
    <main class="min-h-screen flex flex-col justify-center items-center px-4 py-12 text-center">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Jobb alsó rotált menü -->
    <div class="fixed bottom-0 right-0 mr-6 mb-10 rotate-90 origin-bottom-right text-gray-400 text-sm space-x-3 whitespace-nowrap">
      <RouterLink to="/what-i-see" class="no-underline hover:underline decoration-1">WHAT I SEE.</RouterLink>
      <RouterLink to="/what-i-read" class="no-underline hover:underline decoration-1">WHAT I READ.</RouterLink>
      <RouterLink to="/what-i-hear" class="no-underline hover:underline decoration-1">WHAT I HEAR.</RouterLink>
      <RouterLink to="/what-i-watch" class="no-underline hover:underline decoration-1">WHAT I WATCH.</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Fade átmenet */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
