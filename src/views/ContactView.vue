<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_f3ytnp6';
const TEMPLATE_ID = 'template_zbx4fme';
const PUBLIC_KEY = 'Zg7ZI3Udlsr0ade51';

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
  <Transition name="slide-fade" mode="out-in" appear>
    <header class="flex flex-wrap flex-col items-center justify-center gap-10 py-12 px-4 sm:px-8 md:px-12 lg:px-20">
      <div class="w-full flex flex-col items-center justify-center">
        <h1 class="leading-none font-[500] text-[30px] mb-4 capitalize text-slate-700 raleway">contact</h1>
        <p class="inconsolata max-w-[600px] text-center">
          Do you have a project in mind, business inquiries, collaboration opportunities, or any professional matters?
        </p>
      </div>

      <div class="header_text text-slate-200">
        <form ref="form" @submit.prevent="handleSubmit">
          <div class="flex items-start justify-between flex-wrap gap-4">
            <div class="name lg:w-[300px] md:w-[300px] sm:w-[300px] w-full">
              <label class="inconsolata text-slate-700" for="name">Name</label>
              <input class="text-slate-700 mt-2 py-3 pl-2 w-full bg-[#f5f6f7] focus:bg-[#eff1f4] outline-none" type="text"
                name="user_name" id="name" required>
            </div>
            <div class="name lg:w-[300px] md:w-[300px] sm:w-[300px] w-full">
              <label class="inconsolata text-slate-700" for="email">Email</label>
              <input class="text-slate-700 mt-2 py-3 pl-2 w-full bg-[#f5f6f7] focus:bg-[#eff1f4] outline-none"
                type="email" name="user_email" id="email" required>
            </div>
          </div>

          <div class="message mt-6">
            <label class="inconsolata text-slate-700" for="message">Message</label>
            <textarea class="w-full h-[150px] bg-[#f5f6f7] focus:bg-[#eff1f4] px-6 py-3 mt-2 outline-none" name="message"
              id="message" required></textarea>
          </div>

          <button type="submit"
            class="text-slate-700 inconsolata flex items-center justify-center w-full lg:w-1/2 md:w-1/2 sm:w-1/2 px-6 py-3 border border-slate-700 mt-4 bg-[#eff1f4] hover:bg-slate-700 hover:text-slate-50 transition-all duration-300">
            <img v-if="loading" class="w-8 h-8 animate-spin"
              src="https://img.icons8.com/material-rounded/eeeeee/48/spinner-frame-4.png" alt="spinner-frame-4" />
            <span v-else>Send message</span>
          </button>
        </form>
      </div>
    </header>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
</style>
