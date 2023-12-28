<script setup>
import ProjectComponent from '../components/ProjectComponent.vue';
import studdy from '../assets/images/studdy.png';
import trivia from '../assets/images/trivia.png';
import buildtogether from '../assets/images/build.png';
import weather from '../assets/images/weather.png';
import { reactive, ref, computed } from 'vue';
// Carousel package used
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

// Default settings for the carousel
const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
}
// breakpoints are mobile first
// any settings not specified will fallback to the carousel settings
const breakpoints = {
  // 0px and up
  1000: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  // 768px and up
  1300: {
    itemsToShow: 2.5,
    snapAlign: 'start',
  },
  // 1024 and up
  1450: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
}
// Carousel reference
const carousel = ref(null)

// Projects array for portfolio
const projects = reactive([
  {
    name: 'studdy',
    description: 'Creating a fun learning atmosphere for transforming your academic journey, providing a range of comprehensive services.',
    image: studdy,
    url: 'https://studdy-six.vercel.app/',
    github_repo: 'https://github.com/ozo-vehe/studdy',
    category: ['vue', 'important'],
  },
  {
    name: 'build together',
    description: 'Empowering tech talents globally, propelling them to become drivers of innovation, success, and positive change in the tech ecosystem',
    image: buildtogether,
    url: 'https://build-togetherv2.vercel.app/',
    github_repo: 'https://github.com/ozo-vehe/build-togetherv2',
    category: ['vue', 'important'],
  },
  {
    name: 'trivia',
    description: 'A simple trivia project built with html, css and vanilla JavaScript',
    image: trivia,
    url: 'https://studdy-six.vercel.app/',
    github_repo: 'https://github.com/ozo-vehe/studdy',
    category: ['vanilla', 'important'],
  },
  {
    name: 'react weather app',
    description: 'A simple web application that allows users to check the current weather and the 5-day weather forecast for any city worldwide',
    image: weather,
    url: 'https://react-weather-app-ozo-vehe.vercel.app/',
    github_repo: 'https://github.com/ozo-vehe/react-weather-app',
    category: ['react', 'important'],
  },
])
// Current active project category
const active_project = ref('important');

// Computed property to filter projects based on active_project
const displayed_projects = computed(() => {
  const proj = projects.filter(project => project.category.includes(active_project.value));
  console.log(proj);
  return proj;
})

</script>

<template>
  <section class="projects h-screen overflow-hidden pr-10 w-full">
    <div class="project_header">
      <h2 class="mt-10 text-[64px] leading-normal text-white font-bold">My <span class="text-[#00adb5]">projects</span>
      </h2>

      <div class="project_categories flex gap-4 items-center my-10 font-bold">
        <button
          class="important text-center px-8 py-3 capitalize rounded-[16px] text-white hover:cursor-pointer hover:bg-[#00adb5] transition-all duration-300"
          :class="{ 'bg-[#00adb5]': active_project === 'important', 'bg-[#393e4680] backdrop-blur-sm': active_project !== 'important' }"
          @click="active_project = 'important'">top</button>

        <button
          class="vue text-center px-8 py-3 rounded-[16px] text-white hover:cursor-pointer hover:bg-[#00adb5] transition-all duration-300"
          :class="{ 'bg-[#00adb5]': active_project === 'vue', 'bg-[#393e4680] backdrop-blur-sm': active_project !== 'vue' }"
          @click="active_project = 'vue'">Vue JS</button>

        <button
          class="react text-center px-8 py-3 capitalize rounded-[16px] text-white hover:cursor-pointer hover:bg-[#00adb5] transition-all duration-300"
          :class="{ 'bg-[#00adb5]': active_project === 'react', 'bg-[#393e4680] backdrop-blur-sm': active_project !== 'react' }"
          @click="active_project = 'react'">React
          JS</button>

        <button
          class="vanilla text-center px-8 py-3 capitalize rounded-[16px] text-white hover:cursor-pointer hover:bg-[#00adb5] transition-all duration-300"
          :class="{ 'bg-[#00adb5]': active_project === 'vanilla', 'bg-[#393e4680] backdrop-blur-sm': active_project !== 'vanilla' }"
          @click="active_project = 'vanilla'">Vanilla
          JS</button>
      </div>
    </div>


    <Transition name="slide-fade" mode="out-in" appear>
      <div class="relative w-full overflow-hidden text-white">
        <Carousel v-bind="settings" :breakpoints="breakpoints" ref="carousel">
          <Slide v-for="(project, index) in displayed_projects" :key="index">
            <ProjectComponent v-if="project.category.includes(active_project)" :project="project" />
          </Slide>
          <template #addons>
            <div class="flex mt-8 gap-4 items-center justify-center">
              <button
                class="bg-[#393e4680] backdrop-blur-sm text-center px-8 py-3 capitalize rounded-[14px] text-white hover:cursor-pointer hover:bg-[#00adb5] transition-all duration-300"
                @click="carousel.prev()">Previous</button>

              <button
                class="bg-[#393e4680] backdrop-blur-sm text-center px-8 py-3 capitalize rounded-[14px] text-white hover:cursor-pointer hover:bg-[#00adb5] transition-all duration-300"
                @click="carousel.next()">Next</button>
            </div>
          </template>
        </Carousel>
      </div>

    </Transition>
  </section>
</template>

<style scoped>
.slide-fade-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
</style>