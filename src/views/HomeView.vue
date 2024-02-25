<script setup>
// import HeroComponent from '../components/HeroComponent.vue';
import ProjectComponent from '../components/ProjectComponent.vue';
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { projects } from '../assets/projects.js';


// Current active project category
const active_project = ref('all');

// Computed property to filter projects based on active_project
const displayed_projects = computed(() => {
  const proj = active_project.value === 'all' ? projects : projects.filter(project => project.category.includes(active_project.value));
  return proj;
})

</script>

<template>
  <header class="flex flex-wrap gap-y-12 mt-20 justify-between px-4 sm:px-8 md:px-12 lg:px-20 mb-5 items-center">
    <div class="mb-4" data-aos="">
      <h2 class="raleway text-[34px] font-[500]">Hey, I'm John Obansa</h2>
      <p class="mb-0 inconsolata">Frontend Web Developer</p>
    </div>

    <div data-aos="fade-up" data-aos-delay="100">
      <div class="text-[14px] lg:text-[16px] md:text-[16px] sm:text-[14px] flex gap-x-6 inconsolata">
        <p @click="active_project = 'all'" class="cursor-pointer hover:underline hover:underline-offset-[5px]" :class="{'underline underline-offset-[5px]': active_project === 'all', 'no-underline': active_project !== 'all'}">All</p>
        <p @click="active_project = 'HTML'" class="cursor-pointer hover:underline hover:underline-offset-[5px]" :class="{'underline underline-offset-[5px]': active_project === 'HTML', 'no-underline': active_project !== 'HTML'}">HTML/CSS/JavaScript</p>
        <p @click="active_project = 'vue'" class="cursor-pointer hover:underline hover:underline-offset-[5px]" :class="{'underline underline-offset-[5px]': active_project === 'vue', 'no-underline': active_project !== 'vue'}">Vue</p>
        <p @click="active_project = 'react'" class="cursor-pointer hover:underline hover:underline-offset-[5px]" :class="{'underline underline-offset-[5px]': active_project === 'react', 'no-underline': active_project !== 'react'}">React</p>
      </div>
    </div>
  </header>

  <section class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-8 md:px-12 lg:px-20 projects w-full" data-aos="fade-up" data-aos-delay="200">
    <div v-for="(project, index) in displayed_projects" :key="index" class="item web columns-sm-6 columns-md-4 columns-lg-4 mb-4">
      <RouterLink to="/project">
        <ProjectComponent :project="project" />
      </RouterLink>
    </div>
  </section>
</template>

<style scoped></style>