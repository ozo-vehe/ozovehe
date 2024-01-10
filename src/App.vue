<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import project_bg from './assets/images/project_bg.png';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <main class="bg-[#222831] relative">
    <img v-if="route.path === '/projects'" class="absolute top-0 left-0 w-full h-full object-cover" :src="project_bg"
      alt="">
    <NavbarComponent />
    <div class="pl-28 router_view">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .router_view {
    padding-left: 0px;
  }
  
}
</style>
