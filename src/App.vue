<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';

// Code-split non-critical sections
const About = defineAsyncComponent(() => import('./components/About.vue'))
const Projects = defineAsyncComponent(() => import('./components/Projects.vue'))
const Contact = defineAsyncComponent(() => import('./components/Contact.vue'))
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'))

// Defer analytics until after load to avoid impacting LCP
const showAnalytics = ref(false)
const AsyncAnalytics = defineAsyncComponent(async () => {
  const mod = await import('@vercel/analytics/vue')
  return mod.Analytics
})

onMounted(() => {
  const enable = () => { showAnalytics.value = true }
  if (document.readyState === 'complete') {
    enable()
  } else {
    window.addEventListener('load', enable, { once: true })
  }
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

<style lang="scss" scoped>

</style>