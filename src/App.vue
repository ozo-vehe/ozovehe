<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from './stores/theme'
import ThemeToggle from './components/ThemeToggle.vue'
import NavigationDots from './components/NavigationDots.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const themeStore = useThemeStore()

onMounted(() => {
  // Initialize theme
  themeStore.initTheme()
  
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
  })
  
  // Smooth scrolling for anchor links
  document.documentElement.style.scrollBehavior = 'smooth'
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
    <ThemeToggle />
    <NavigationDots />
    
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-800;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-400 dark:bg-gray-600 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-500 dark:bg-gray-500;
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Dark mode class */
.dark {
  color-scheme: dark;
}
</style>