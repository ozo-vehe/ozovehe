<script setup lang="ts">
import { projects } from '../assets/data';
import { ExternalLink, Github } from 'lucide-vue-next'
</script>

<template>
  <section id="projects" class="py-20 max-w-[1440px] mx-auto">
    <div class="px-4 sm:px-5 lg:px-10">
      <div class="mb-16">
        <h2 class="font-bold text-gray-900 mb-2 text-right lg:text-3xl md:text-2xl text-[20px]">
          featured <span class="underline underline-offset-8">projects</span>
        </h2>
        <p class="lg:text-lg text-[16px] text-gray-600 text-right">
          Some of my recent work and side projects
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-16">
        <div v-for="(project, index) in projects" :key="index" class="flex flex-wrap gap-y-2 h-fit">
          <div class="image-container bg-white lg:w-[45%] w-full flex flex-col items-end justify-between p-5 h-[300px]">
            <div class="image w-[90%] m-auto h-[50%]">
              <img :src="project.image" :alt="project.title"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>

            <div class="programming-languages flex justify-end gap-1 flex-wrap">
              <span v-for="(tech, i) in project.technologies" :key="i"
                class="px-2 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full">
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="p-6 lg:w-[55%] w-full project-details-container flex flex-col justify-between">
            <div class="project-details">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                {{ project.title }} <span class="text-xs font-light">{{ project.subtitle }}</span>
              </h3>
              <div class="text-gray-600 mb-4">
                <p class="mb-2">
                  {{ project.description.main }}
                </p>
                <!-- <ul class="list-disc pl-5 space-y-1 text-sm">
                  <li v-for="(bullet, i) in project.description.bullets" :key="i">
                    {{ bullet }}
                  </li>
                </ul> -->
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <a :href="project.github" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Github class="w-5 h-5 mr-2" />
                Code
              </a>
              <a :href="project.url" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center text-gray-600">
                <ExternalLink class="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>