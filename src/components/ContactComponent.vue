<script setup>
import contact from '../assets/images/contact.png';
import shadow from '../assets/images/contact_shadow.png';
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_f3ytnp6';
const TEMPLATE_ID = 'template_zbx4fme';
const PUBLIC_KEY = 'Zg7ZI3Udlsr0ade51';

const socialImages = ref([
  {
    id: 1,
    name: 'twitter',
    url: 'https://img.icons8.com/ios-filled/eeeeee/50/twitterx--v2.png',
    href: 'https://twitter.com/__ozovehe',
  },
  {
    id: 2,
    name: 'linkedin',
    url: 'https://img.icons8.com/ios-filled/eeeeee/100/linkedin-2.png',
    href: 'https://www.linkedin.com/in/ozovehe/',
  },
  {
    id: 3,
    name: 'github',
    url: 'https://img.icons8.com/ios-filled/eeeeee/500/github.png',
    href: 'https://github.com/ozo-vehe',
  },
]);

const form = ref(null)

let loading = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  try {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.value, PUBLIC_KEY)
      .then((result) => {
        result.text == 'OK' ? loading.value = false : console.log('FAILED...', result.text);
        console.log('SUCCESS!', result.text);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  } catch (err) {
    console.log(err);
  }
}

</script>

<template>
  <header class="min-h-screen flex flex-wrap items-center justify-center gap-20 pr-10 py-6">
    <div class="header_image w-[500px] h-[600px] relative">
      <h1 class="poppins leading-none font-bold text-[54px] mb-2 capitalize text-slate-100">Got a project in <span
          class="text-[#00adb5] lowercase">mind?</span>
      </h1>

      <img class="absolute w-[60%] bottom-12 right-0 left-[50%] -translate-x-[50%]" :src="contact" alt="Doodles image">
      <img class="absolute bottom-0 opacity-50 w-[60%] left-[50%] -translate-x-[50%]" :src="shadow"
        alt="Background image">
    </div>

    <div class="header_text w-[530px] text-slate-200">
      <form ref="form" @submit.prevent="handleSubmit">
        <div class="user_details flex items-start justify-between flex-wrap gap-4">
          <div class="name w-[250px]">
            <label for="name">Your Name</label>
            <input class="mt-2 py-4 px-6 w-full bg-[#393E4680] rounded-xl" type="text" name="user_name" id="name"
              placeholder="Name" required>
          </div>

          <div class="email w-[250px]">
            <label for="email">Your Email</label>
            <input class="mt-2 py-4 px-6 w-full bg-[#393E4680] rounded-xl" type="email" name="user_email" id="email"
              placeholder="Email" required>
          </div>
        </div>

        <div class="message mt-6">
          <label for="message">Your message</label>
          <textarea class="w-full h-[200px] bg-[#393E4680] rounded-xl px-6 py-3 mt-2" name="message" id="message"
            placeholder="Message" required></textarea>
        </div>

        <button type="submit"
          class="flex items-center justify-center min-w-[170px] h-[55px] px-6 py-3 border border-[#00adb5] mt-4 rounded-xl bg-[#00adb5] hover:bg-[#27878c] hover:border-[#27878c] transition-all duration-300">
          <img v-if="loading" class="w-8 h-8 animate-spin"
            src="https://img.icons8.com/material-rounded/eeeeee/48/spinner-frame-4.png" alt="spinner-frame-4" />
          <span v-else>Send message</span>
        </button>
      </form>

      <div class="social_icons mt-6">
        <p class="text-slate-300 mb-2">Connect with me on:</p>
        <div class="social_container flex items-center gap-4">
          <a v-for="social in socialImages" :key="social.id" :href="social.href" target="_blank">
            <img class="w-10 bg-[#393E46] rounded-full p-[11px]" :src="social.url" :alt="social.name" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  header {
    padding: 30px 40px 10px;
    min-height: calc(100vh - 100px);
  }

  .header_text {
    margin-bottom: 40px;
    width: 100%;
  }

  .header_image h1 {
    line-height: 1.2;
    font-size: 46px;
  }

  .header_image {
    width: 100%;
    height: 550px;
  }

  .user_details>div {
    width: 100%;
  }
}

@media screen and (max-width: 400px) {
  .header_image h1 {
    font-size: 40px;
  }
  .header_image {
    width: 100%;
    height: 450px;
  }
  form button {
    font-size: 14px;
    padding: 15px 20px;
    min-width: 150px;
    height: auto;
  }
}
</style>