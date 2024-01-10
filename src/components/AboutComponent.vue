<script setup>
import doodles from '../assets/images/about_doodle.png';
import bg from '../assets/images/about.png';

</script>

<template>
  <header class="min-h-screen flex flex-wrap items-center justify-center gap-20 pr-10 py-6">
    <div class="header_text w-[45%] text-slate-200">
      <h1 class="poppins leading-none font-bold text-[54px] mb-2 capitalize text-slate-100">about <span
          class="text-[#00adb5] lowercase">me</span></h1>
      <div class="social_container flex items-center gap-4 mt-6">
        <p class="leading-8 text-[20px] text-slate-300">
          I am a passionate web developer with the aim of creating amazing experience for all users all over the world with the aid of product research and the use of modern development tools.
          <br/><br/>
          I am very enthusiastic about creating visually appealing and functional interfaces that enhance user experience. I am always eager to learn and adapt to new technologies and strive to deliver quality work on time.
        </p>
      </div>
    </div>

    <div class="header_image w-[600px] h-[500px] relative">
      <img class="absolute w-full h-full -top-16 right-0" :src="doodles" alt="Doodles image">
      <img class="absolute bottom-0 left-[50%] -translate-x-[50%]" :src="bg" alt="Background image">
    </div>
  </header>
</template>

<style scoped>
@media screen and (max-width: 1400px) {
  .header_text {
    width: 100%;
  }
  .header_text h1 {
    font-size: 54px;
    line-height: 1.2;
  }
  .social_container p {
    font-size: 16px;
    line-height: 2;
  }
  .header_image {
    width: 450px;
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
    font-size: 46px;
  }
  .social_container {
    margin: 0px;
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

@media screen and (max-width: 400px) {
  .header_text h1 {
    font-size: 40px;
  }
  .header_text p {
    font-size: 16px;
    line-height: 1.5;
  }
  .header_image {
    height: 370px;
  }
  .header_image {
    height: 370px;
  }
}
</style>