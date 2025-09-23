<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          My <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Skills</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        <p class="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(skill, index) in skills" :key="skill.name" 
             class="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
             :data-aos="'fade-up'"
             :data-aos-delay="index * 100">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <img :src="skill.icon" :alt="skill.name" class="w-8 h-8 object-contain" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ skill.name }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ skill.category }}</p>
            </div>
          </div>
          
          <div class="mb-2 flex justify-between items-center">
            <span class="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
            <span class="text-sm font-semibold text-gray-800 dark:text-white">{{ skill.level }}%</span>
          </div>
          
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div class="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                 :style="{ width: skillAnimated ? skill.level + '%' : '0%' }"></div>
          </div>
        </div>
      </div>
      
      <!-- Additional Skills Tags -->
      <div class="mt-16" data-aos="fade-up" data-aos-delay="600">
        <h3 class="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Additional Technologies
        </h3>
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="tech in additionalTechs" :key="tech"
                class="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const skillAnimated = ref(false)

const skills = [
  {
    name: "HTML5",
    category: "Markup",
    level: 95,
    icon: "https://img.icons8.com/color/144/html-5--v1.png"
  },
  {
    name: "CSS3",
    category: "Styling",
    level: 90,
    icon: "https://img.icons8.com/color/144/css3.png"
  },
  {
    name: "JavaScript",
    category: "Programming",
    level: 88,
    icon: "https://img.icons8.com/color/240/javascript--v1.png"
  },
  {
    name: "Vue.js",
    category: "Framework",
    level: 92,
    icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png"
  },
  {
    name: "React",
    category: "Framework",
    level: 85,
    icon: "https://img.icons8.com/officel/160/react.png"
  },
  {
    name: "TypeScript",
    category: "Programming",
    level: 80,
    icon: "https://img.icons8.com/fluency/144/typescript--v2.png"
  }
]

const additionalTechs = [
  "Tailwind CSS", "Pinia", "Vue Router", "Firebase", "Vite", "Git", "GitHub", 
  "Responsive Design", "REST APIs", "Webpack", "ESLint", "Prettier", "Figma"
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          skillAnimated.value = true
        }, 300)
        observer.disconnect()
      }
    })
  })
  
  const skillsSection = document.getElementById('skills')
  if (skillsSection) {
    observer.observe(skillsSection)
  }
})
</script>