<script setup>
import contact from '../assets/images/contact.png';
import shadow from '../assets/images/contact_shadow.png';
import { ref } from 'vue';

const socialImages = ref([
  {
    id: 1,
    name: 'linkedin',
    url: 'https://img.icons8.com/ios-filled/eeeeee/100/linkedin-2.png',
    href: 'https://www.linkedin.com/in/ozovehe/',
  },
  {
    id: 2,
    name: 'twitter',
    url: 'https://img.icons8.com/ios-filled/eeeeee/50/twitterx--v2.png',
    href: 'https://twitter.com/__ozovehe',
  },
  {
    id: 3,
    name: 'github',
    url: 'https://img.icons8.com/ios-filled/eeeeee/500/github.png',
    href: 'https://github.com/ozo-vehe',
  },
]);
</script>

<template>
  <header class="min-h-screen flex flex-wrap items-center justify-center gap-20 pr-10 py-6">
    <div class="header_image w-[500px] h-[600px] relative">
      <h1 class="poppins leading-none font-bold text-[54px] mb-2 capitalize text-white">Got a project in <span
          class="text-[#00adb5] lowercase">mind?</span>
      </h1>

      <img class="absolute w-[60%] bottom-12 right-0 left-[50%] -translate-x-[50%]" :src="contact" alt="Doodles image">
      <img class="absolute bottom-0 opacity-50 w-[60%] left-[50%] -translate-x-[50%]" :src="shadow"
        alt="Background image">
    </div>

    <div class="header_text w-[530px] text-slate-200">
      <form @submit="handleSubmit">
        <div class="user_details flex items-start justify-between flex-wrap gap-4">
          <div class="name w-[250px]">
            <label for="name">Your Name</label>
            <input class="mt-2 py-4 px-6 w-full bg-[#393E4680] rounded-xl" type="text" name="name" id="name" placeholder="Name" v-model="name">
          </div>

          <div class="email w-[250px]">
            <label for="email">Your Email</label>
            <input class="mt-2 py-4 px-6 w-full bg-[#393E4680] rounded-xl" type="email" name="email" id="email" placeholder="Email" v-model="email">
          </div>
        </div>

        <div class="message mt-6">
          <label for="message">Your message</label>
          <textarea class="w-full h-[200px] bg-[#393E4680] rounded-xl px-6 py-3 mt-2" name="message" id="message" placeholder="Message"></textarea>
        </div>

        <button type="submit" class="px-6 py-3 border border-[#00adb5] mt-4 rounded-xl bg-[#00adb5] hover:bg-[#27878c] transition-all duration-300">Send message</button>
      </form>

      <div class="social_icons mt-4">
        <div class="social_container flex items-center gap-4">
          <a v-for="social in socialImages" :key="social.id" :href="social.href" target="_blank">
            <img class="w-10 bg-[#393E46] rounded-full p-[11px]" :src="social.url" :alt="social.name" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>