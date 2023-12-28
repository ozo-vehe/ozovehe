<script setup>
import doodles from '../assets/images/doodles.png';
import bg from '../assets/images/bg.png';
// import { ref } from 'vue';
// import { RouterLink } from 'vue-router'

// const socialImages = ref([
//   {
//     id: 1,
//     name: 'linkedin',
//     url: 'https://img.icons8.com/ios-filled/100/linkedin-2.png',
//     href: 'https://www.linkedin.com/in/ozovehe/',
//   },
//   {
//     id: 2,
//     name: 'twitter',
//     url: 'https://img.icons8.com/ios-filled/50/twitterx--v2.png',
//     href: 'https://twitter.com/__ozovehe',
//   },
//   {
//     id: 3,
//     name: 'github',
//     url: 'https://img.icons8.com/ios-filled/500/github.png',
//     href: 'www.google.com',
//   },
// ]);
</script>

<template>
  <header class="h-screen flex flex-wrap items-center justify-between pr-10">
    <div class="header_text">
      <h1 class="poppins leading-[96px] font-bold uppercase text-[96px] mb-2 flex flex-col text-white">creative web <span
          class="text-[#00adb5]">developer</span></h1>
      <div class="social_container flex items-center gap-4 mt-6">
        <button class="bg-[#00adb5] text-white py-4 px-8 text-center rounded-3xl">Hire me</button>
        <button class="bg-[#393e46bf] text-white py-4 px-8 rounded-3xl flex items-center justify-center gap-2">Download CV
          <img class="w-5 h-5" src="https://img.icons8.com/fluency-systems-filled/ffffff/96/download.png"
            alt="download" /></button>
      </div>
    </div>

    <div class="header_image w-[550px] h-[550px] relative overflow-hidden">
      <img class="absolute w-[90%] top-0 right-0" :src="doodles" alt="Doodles image">
      <img class="absolute -bottom-20 left-0" :src="bg" alt="Background image">
    </div>
  </header>
</template>

<style scoped></style>