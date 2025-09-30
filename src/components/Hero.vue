<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showFirst = ref(false)
const shrinkFirst = ref(false)
const showSecond = ref(false)

onMounted(() => {
  // Show first section, then animate to shrink, then show second section
  showFirst.value = true
  setTimeout(() => {
    shrinkFirst.value = true
    setTimeout(() => {
      showSecond.value = true
    }, 900) // shrink duration
  }, 900) // initial fill duration
})
</script>

<template>
  <section id="home" class="h-[90vh] flex items-center">
    <div class="w-full h-full mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
      <transition name="hero-expand">
        <section
          v-if="showFirst"
          :class="[
            'developer-name text-white relative bg-[url(./assets/bg-02.jpg)] flex-col flex items-center justify-center overflow-hidden transition-all duration-900 ease-in-out lg:px-10 md:px-5 px-4',
            shrinkFirst
              ? 'lg:col-span-1 md:col-span-1 col-span-1 h-full w-full lg:w-full md:w-full'
              : 'fixed inset-0 z-40 w-screen h-screen'
          ]"
          style="transition-property: all;"
        >
          <div class="absolute top-0 left-0 w-full h-full bg-radial from-[#4c4c4c]/90 from-40% to-[#4c4c4c]"></div>
          <h1 class="relative text-6xl uppercase bg-radial from-gray-200 from-70% to-[#4c4c4c] bg-clip-text text-transparent hover:from-50% hover:from-gray-50 transition-all duration-300 tracking-widest">
            John Obansa
          </h1>
          <p class="relative block lg:hidden md:hidden mt-4 text-[18px] bg-radial from-gray-200 from-70% to-[#4c4c4c] bg-clip-text text-transparent hover:from-50% hover:from-gray-50 transition-all duration-300 max-w-[500px]">
            Crafting delightful web experiences with React, Vue.js & modern frontend tools
          </p>
        </section>
      </transition>

      <transition name="hero-fade">
        <section
          v-if="showSecond"
          class="developer-title text-black relative bg-[url(./assets/bg-01.jpg)] h-full lg:flex md:flex hidden items-center justify-center lg:px-10 md:px-5 px-4 transition-opacity duration-700"
        >
          <div class="absolute top-0 left-0 w-full h-full bg-radial from-[#aec597]/80 from-20% to-[#aec597]/90"></div>
          <p class="relative lg:text-2xl md:text-xl text-[18px] bg-radial from-gray-700 from-40% to-black bg-clip-text text-transparent hover:from-50% hover:from-gray-600 transition-all duration-300 max-w-[500px]">
            Crafting delightful web experiences with React, Vue.js & modern frontend tools
          </p>
        </section>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.hero-expand-enter-active,
.hero-expand-leave-active {
  transition: all 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero-expand-enter-from,
.hero-expand-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
.hero-expand-enter-to,
.hero-expand-leave-from {
  opacity: 1;
  transform: scale(1);
}

.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}
.hero-fade-enter-to,
.hero-fade-leave-from {
  opacity: 1;
}
</style>