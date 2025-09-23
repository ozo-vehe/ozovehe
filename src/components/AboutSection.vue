<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          About <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Me</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right" data-aos-delay="200">
          <div class="relative">
            <div class="w-full max-w-md mx-auto">
              <div class="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                <div class="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                      <span class="text-4xl font-bold text-white">JO</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-white">John Obansa</h3>
                    <p class="text-gray-600 dark:text-gray-400">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
        
        <div data-aos="fade-left" data-aos-delay="400">
          <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Passionate Developer & Creative Problem Solver
          </h3>
          
          <div class="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I am a dedicated web developer driven by the goal of crafting exceptional user experiences worldwide through meticulous product research and the proficient use of cutting-edge development tools.
            </p>
            
            <p>
              My enthusiasm lies in designing visually captivating and seamlessly functional interfaces that elevate user interactions. I possess a keen interest in staying abreast of the latest technologies, demonstrating a relentless commitment to continuous learning and adaptation.
            </p>
            
            <p>
              My work ethic revolves around delivering high-quality results within specified timelines. I am poised to contribute my skills and passion to create innovative and impactful digital solutions.
            </p>
          </div>
          
          <div class="grid grid-cols-2 gap-6 mt-8">
            <div class="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div class="text-3xl font-bold text-blue-500 mb-2">{{ projectCount }}+</div>
              <div class="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div class="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div class="text-3xl font-bold text-purple-500 mb-2">{{ experienceYears }}+</div>
              <div class="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
          </div>
          
          <div class="flex flex-wrap gap-4 mt-8">
            <a href="https://drive.google.com/file/d/1jYrSEPLK6UslZKSwv_7OyKToepemKnJb/view?usp=drive_link" 
               target="_blank"
               class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Download class="w-5 h-5" />
              Download Resume
            </a>
            <button @click="scrollToSection('contact')" 
                    class="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Download } from 'lucide-vue-next'

const projectCount = ref(0)
const experienceYears = ref(0)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Animate counters
  const animateCounter = (target, finalValue, duration = 2000) => {
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      target.value = Math.floor(finalValue * progress)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    animate()
  }
  
  // Start animations when section is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(projectCount, 15)
        animateCounter(experienceYears, 3)
        observer.disconnect()
      }
    })
  })
  
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    observer.observe(aboutSection)
  }
})
</script>

<style scoped>
.animation-delay-1000 {
  animation-delay: 1s;
}
</style>