<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import project_bg from './assets/images/project_bg.png';
import { useRoute } from 'vue-router';
// import { logEvent } from "firebase/analytics";
// import analytics from './firebaseinit';

// logEvent(analytics, 'notification_received');

const route = useRoute();
</script>

<template>
  <main class="bg-[#222831] relative">
    <img v-if="route.path === '/projects'" class="absolute top-0 left-0 w-full h-full object-cover" :src="project_bg"
      alt="">
    <NavbarComponent />
    <div class="pl-40">
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
