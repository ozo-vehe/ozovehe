<template>
  <nav class="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
    <ul class="space-y-4">
      <li v-for="section in sections" :key="section.id">
        <button
          @click="scrollToSection(section.id)"
          :class="[
            'w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125',
            activeSection === section.id 
              ? 'bg-blue-500 border-blue-500 scale-125' 
              : 'bg-transparent border-gray-400 dark:border-gray-600'
          ]"
          :title="section.name"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' }
]

const activeSection = ref('hero')

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 100
  
  for (const section of sections) {
    const element = document.getElementById(section.id)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>