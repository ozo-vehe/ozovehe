<template>
  <section id="projects" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Featured <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Projects</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        <p class="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          A showcase of my recent work and creative solutions
        </p>
      </div>
      
      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
        <button v-for="filter in filters" :key="filter"
                @click="activeFilter = filter"
                :class="[
                  'px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105',
                  activeFilter === filter 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                ]">
          {{ filter === 'all' ? 'All Projects' : filter }}
        </button>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in filteredProjects" :key="project.id"
             class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800"
             :data-aos="'fade-up'"
             :data-aos-delay="index * 100">
          
          <!-- Project Image -->
          <div class="relative overflow-hidden aspect-video">
            <img :src="project.image" :alt="project.name" 
                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex gap-3">
                  <a :href="project.url" target="_blank" 
                     class="flex-1 bg-white/20 backdrop-blur-md text-white text-center py-2 px-4 rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                    <ExternalLink class="w-4 h-4" />
                    Live Demo
                  </a>
                  <a :href="project.github_repo" target="_blank" 
                     class="flex-1 bg-white/20 backdrop-blur-md text-white text-center py-2 px-4 rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                    <Github class="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Project Info -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white capitalize">
                {{ project.name }}
              </h3>
              <span class="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full font-medium">
                {{ project.category[0] }}
              </span>
            </div>
            
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {{ project.description }}
            </p>
            
            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.category.slice(0, 3)" :key="tech"
                    class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">
                {{ tech }}
              </span>
              <span v-if="project.category.length > 3" 
                    class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">
                +{{ project.category.length - 3 }} more
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- View All Projects Button -->
      <div class="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
        <a href="https://github.com/ozo-vehe" target="_blank"
           class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
          <Github class="w-5 h-5" />
          View All Projects on GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ExternalLink, Github } from 'lucide-vue-next'
import { projects } from '../assets/projects.js'

const activeFilter = ref('all')
const filters = ['all', 'vue', 'react', 'HTML']

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => 
    project.category.some(cat => cat.toLowerCase().includes(activeFilter.value.toLowerCase()))
  )
})
</script>