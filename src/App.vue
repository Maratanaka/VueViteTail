<template>
  <div>
    <!-- Felső bal sarok -->
    <div class="absolute top-0 left-0 m-6">
      <p class="dark:text-white text-sm">2025</p>
    </div>

    <!-- Felső jobb sarok -->
    <div class="absolute top-0 right-0 m-6 space-x-4">
      <RouterLink to="about" class="dark:text-white no-underline hover:underline decoration-1 text-sm">About me</RouterLink>
      <br />
      <a href="#" class="dark:text-white no-underline hover:underline decoration-1 text-sm">Contact</a>
    </div>

    <!-- Középső tartalom (átmenettel) -->
    <main class="min-h-screen flex flex-col justify-center items-center px-4 py-12 text-center">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Alsó jobb sarok -->
    <div class="fixed bottom-0 right-0 m-6 text-right space-y-1">
      <RouterLink to="/what-i-see" class="text-gray-400 no-underline hover:underline decoration-1 text-sm block">WHAT I SEE.</RouterLink>
      <RouterLink to="/what-i-read" class="text-gray-400 no-underline hover:underline decoration-1 text-sm block">WHAT I READ.</RouterLink>
      <RouterLink to="/what-i-hear" class="text-gray-400 no-underline hover:underline decoration-1 text-sm block">WHAT I HEAR.</RouterLink>
      <RouterLink to="/what-i-watch" class="text-gray-400 no-underline hover:underline decoration-1 text-sm block">WHAT I WATCH.</RouterLink>
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
