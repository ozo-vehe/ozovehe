<script setup>
import doodles from '../assets/images/doodles.png';
import bg from '../assets/images/bg.png';

</script>

<template>
  <header class="min-h-screen flex flex-wrap items-center justify-center gap-x-32 gap-y-10 pr-10 py-10">
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
      <img class="absolute w-[100%] h-[100%] -top-24 right-0" :src="doodles" alt="Doodles image">
      <img class="absolute bottom-0 left-[50%] -translate-x-[50%]" :src="bg" alt="Background image">
    </div>
  </header>
</template>

<style scoped>
@media screen and (max-width: 1400px) {
  .header_text {
    width: 400px;
  }
  .header_text h1 {
    font-size: 54px;
    line-height: 1.2;
  }
  .header_image {
    width: 400px;
    height: 450px;
  }
  img[alt="Doodles image"] {
    top: 0px;
  }
  img[alt="Background image"] {
    bottom: 10px;
    width: 70%;
  }
}

@media screen and (max-width: 768px) {
  header {
    padding: 30px 40px 10px;
    display: block;
    min-height: calc(100vh - 100px);
    margin: 0px;
  }
  .header_text {
    margin-bottom: 40px;
    width: 100%;
  }
  .header_text h1 {
    line-height: 1.2;
  }
  .header_image {
    width: 100%;
    height: 430px;
  }
  img[alt="Doodles image"] {
    top: 0px;
  }
  img[alt="Background image"] {
    bottom: 0px;
    width: 70%;
  }
}
</style>