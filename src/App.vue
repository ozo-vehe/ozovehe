<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue'
import Hero from './components/Hero.vue'
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const showAnalytics = ref(false)
const AsyncAnalytics = defineAsyncComponent(async () => {
  const mod = await import('@vercel/analytics/vue')
  return mod.Analytics
})

onMounted(() => {
  const enable = () => { showAnalytics.value = true }
  if (document.readyState === 'complete') enable()
  else window.addEventListener('load', enable, { once: true })

  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'))
    return
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })
  elements.forEach((element) => observer.observe(element))
})
</script>

<template>
  <main>
    <AsyncAnalytics v-if="showAnalytics" />
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </main>
</template>

<style scoped>
main { overflow: clip; }
</style>
