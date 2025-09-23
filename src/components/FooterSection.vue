<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div data-aos="fade-up">
          <h3 class="text-2xl font-bold mb-4">John Obansa</h3>
          <p class="text-gray-400 leading-relaxed">
            Frontend Developer passionate about creating exceptional digital experiences with modern technologies.
          </p>
        </div>
        
        <!-- Quick Links -->
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><button @click="scrollToSection('about')" class="text-gray-400 hover:text-white transition-colors duration-300">About</button></li>
            <li><button @click="scrollToSection('skills')" class="text-gray-400 hover:text-white transition-colors duration-300">Skills</button></li>
            <li><button @click="scrollToSection('projects')" class="text-gray-400 hover:text-white transition-colors duration-300">Projects</button></li>
            <li><button @click="scrollToSection('contact')" class="text-gray-400 hover:text-white transition-colors duration-300">Contact</button></li>
          </ul>
        </div>
        
        <!-- Social Links -->
        <div data-aos="fade-up" data-aos-delay="400">
          <h4 class="text-lg font-semibold mb-4">Connect With Me</h4>
          <div class="flex gap-4">
            <a v-for="social in socialLinks" :key="social.name" 
               :href="social.url" target="_blank"
               class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 group">
              <component :is="social.icon" class="w-5 h-5 group-hover:text-white" />
            </a>
          </div>
          <p class="text-gray-400 mt-4">
            <a href="mailto:johnozovehe@gmail.com" class="hover:text-white transition-colors duration-300">
              johnozovehe@gmail.com
            </a>
          </p>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} John Obansa. All rights reserved.
        </p>
        <p class="text-gray-400 text-sm mt-4 md:mt-0">
          Built with ❤️ using Vue.js & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { Github, Linkedin, Twitter } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())

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
</script>