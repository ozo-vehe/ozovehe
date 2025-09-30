<script setup lang="ts">
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <main>
    <Analytics />
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