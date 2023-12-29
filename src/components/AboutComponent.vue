<script setup>
import doodles from '../assets/images/about_doodle.png';
import bg from '../assets/images/about.png';

</script>

<template>
  <header class="min-h-screen flex flex-wrap items-center justify-center gap-20 pr-10 py-6">
    <div class="header_text w-[45%] text-slate-200">
      <h1 class="poppins leading-none font-bold text-[80px] mb-2 capitalize text-white">about <span
          class="text-[#00adb5] lowercase">me</span></h1>
      <div class="social_container flex items-center gap-4 mt-6">
        <p class="leading-8 text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis modi blanditiis repellat consequatur ipsa, dolores tenetur asperiores error similique odio laborum magni sequi sint molestiae sunt!</p>
      </div>
    </div>

    <div class="header_image w-[600px] h-[500px] relative">
      <img class="absolute w-full h-full -top-16 right-0" :src="doodles" alt="Doodles image">
      <img class="absolute bottom-0 left-[50%] -translate-x-[50%]" :src="bg" alt="Background image">
    </div>
  </header>
</template>

<style scoped></style>