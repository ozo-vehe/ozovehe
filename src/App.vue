<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
</script>

<template>
  <main class="bg-[#fbfbfb] min-h-screen relative">
    <NavbarComponent />
    <div class="router_view">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
</style>
