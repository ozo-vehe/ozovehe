<script setup>
import doodles from '../assets/images/doodles.png';
import bg from '../assets/images/bg.png';

</script>

<template>
  <header class="min-h-screen flex flex-wrap items-center justify-center gap-32 pr-10">
    <div class="header_text w-[550px]">
      <h1 class="poppins leading-[70px] font-bold uppercase text-[70px] mb-2 flex flex-col text-slate-100">creative web <span
          class="text-[#00adb5]">developer</span></h1>
      <div class="social_container flex items-center gap-4 mt-6">
        <button class="bg-[#00adb5] text-white py-4 px-8 text-center rounded-3xl">Hire me</button>
        <button class="bg-[#393e46bf] text-white py-4 px-8 rounded-3xl flex items-center justify-center gap-2">Download CV
          <img class="w-5 h-5" src="https://img.icons8.com/fluency-systems-filled/ffffff/96/download.png"
            alt="download" /></button>
      </div>
    </div>

    <div class="header_image w-[600px] h-[550px] relative">
      <img class="absolute w-[100%] -top-24 right-0" :src="doodles" alt="Doodles image">
      <img class="absolute bottom-0 left-[50%] -translate-x-[50%]" :src="bg" alt="Background image">
    </div>
  </header>
</template>

<style scoped></style>