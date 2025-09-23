<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute top-40 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center" data-aos="fade-up" data-aos-duration="1000">
        <div class="mb-8" data-aos="zoom-in" data-aos-delay="200">
          <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
            <div class="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
              <span class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">JO</span>
            </div>
          </div>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-white" data-aos="fade-up" data-aos-delay="400">
          John <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Obansa</span>
        </h1>
        
        <div class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="600">
          <span class="typing-text"></span>
        </div>
        
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="800">
          Passionate frontend developer crafting exceptional digital experiences with modern technologies and creative solutions.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="1000">
          <button @click="scrollToSection('projects')" class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
            <span>View My Work</span>
            <ArrowDown class="w-5 h-5" />
          </button>
          <button @click="scrollToSection('contact')" class="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300">
            Get In Touch
          </button>
        </div>
        
        <div class="flex justify-center gap-6 mt-12" data-aos="fade-up" data-aos-delay="1200">
          <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" 
             class="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group">
            <component :is="social.icon" class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-500" />
          </a>
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown class="w-8 h-8 text-gray-400" />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { ArrowDown, ChevronDown, Github, Linkedin, Twitter } from 'lucide-vue-next'

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/ozo-vehe' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/ozovehe/' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/__ozovehe' }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Typing animation
  const texts = ['Frontend Developer', 'Vue.js Specialist', 'UI/UX Enthusiast', 'Problem Solver']
  let textIndex = 0
  let charIndex = 0
  let isDeleting = false
  const typingElement = document.querySelector('.typing-text')
  
  function typeText() {
    const currentText = texts[textIndex]
    
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1)
      charIndex--
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1)
      charIndex++
    }
    
    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, 2000)
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
    }
    
    const speed = isDeleting ? 50 : 100
    setTimeout(typeText, speed)
  }
  
  typeText()
})
</script>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.typing-text::after {
  content: '|';
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style>