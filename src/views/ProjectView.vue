<script setup>
import { projects } from '../assets/projects';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const id = route.params.id;
const project = ref(null);

onBeforeMount(() => {
  project.value = projects.find((project) => project.id === id)
})
</script>

<template>
  <section class="project px-8 pt-12 pb-6 sm:px-8 md:px-12 lg:px-20">
    <div
      class="flex flex-wrap md:flex-nowrap lg:flex-nowrap sm:flex-wrap gap-10 items-start justify-between lg:justify-between md:justify-between sm:justify-center">
      <div class="w-full lg:w-[60%] md:w-[60%] sm:w-full" data-aos="fade-up">
        <img :src="project.image" alt="Image" class="w-full">
      </div>
      <div class="w-full lg:w-[37%] md:w-[37%] sm:w-full" data-aos="fade-up" data-aos-delay="100">
        <div class="max-w-[500px]">
          <h3 class="text-[24px] raleway font-[600] capitalize">{{ project.name }}</h3>
          <div class="mt-2 mb-5">
            <p class="inconsolata">{{ project.description }}</p>
          </div>

          <h4 class="text-[18px] raleway font-[600] mb-1">Built using</h4>
          <ul class="mb-10 list-disc pl-5">
            <li class="inconsolata capitalize" v-for="(tech, index) in project.category" :key="index">{{ tech }}</li>
          </ul>

          <div>
            <button class="border border-slate-800 mr-4 inconsolata py-2 hover:bg-slate-800 hover:text-[#f7f7f7] transition-all duration-200 min-w-[100px]">
              <a :href="project.url" target="_blank" class="text-[14px] py-2 px-2">Visit Website</a>
            </button>

            
            <button class="border border-slate-800 mr-4 inconsolata py-2 hover:bg-slate-800 hover:text-[#f7f7f7] transition-all duration-200 min-w-[100px]">
              <a :href="project.github_repo" target="_blank" class="text-[14px] py-2 px-8">GitHub</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>