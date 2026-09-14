<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { Github, Linkedin, Send, Loader2, ArrowUpRight } from 'lucide-vue-next'
const formData = ref({ name: '', email: '', message: '' })
const loading: Ref<boolean> = ref(false)
function handleSubmit(e: Event) {
  e.preventDefault(); loading.value = true
  const subject = encodeURIComponent(`Portfolio Contact from ${formData.value.name}`)
  const body = encodeURIComponent(`Name: ${formData.value.name}\nEmail: ${formData.value.email}\n\nMessage:\n${formData.value.message}`)
  loading.value = false; window.location.href = `mailto:johnobansa5@gmail.com?subject=${subject}&body=${body}`
}
</script>

<template>
  <section id="contact" class="bg-[#ef6c43] py-24 text-[#111111] md:py-36">
    <div class="mx-auto max-w-[1440px] px-5 md:px-10">
      <div class="grid gap-16 md:grid-cols-[1.1fr_1fr] md:gap-24">
        <div>
          <p class="mb-5 text-sm font-bold uppercase tracking-[0.2em]">03 / contact</p>
          <h2 class="max-w-3xl text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.8] tracking-[-0.09em]">Have a good<br /><span class="text-[#c9ff5a]">feeling?</span></h2>
          <p class="mt-10 max-w-md text-lg leading-relaxed text-[#291a16]">Tell me what you’re imagining. I’m always interested in ambitious products, odd ideas, and thoughtful collaborations.</p>
          <div class="mt-10 flex flex-wrap gap-3">
            <a href="mailto:johnobansa5@gmail.com" class="inline-flex items-center gap-2 border-b-2 border-[#111111] pb-1 font-bold uppercase tracking-[0.12em]">Email me <ArrowUpRight class="size-4" /></a>
            <a href="https://github.com/ozo-vehe" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="ml-4 border-b-2 border-[#111111] pb-1"><Github class="size-5" /></a>
            <a href="https://linkedin.com/in/ozovehe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="border-b-2 border-[#111111] pb-1"><Linkedin class="size-5" /></a>
          </div>
        </div>
        <form @submit="handleSubmit" class="flex flex-col gap-7 border-t-2 border-[#111111] pt-6">
          <label class="text-sm font-bold uppercase tracking-[0.15em]">Your name<input v-model="formData.name" required type="text" placeholder="John Doe" class="mt-3 w-full border-b border-[#111111]/40 bg-transparent py-3 text-xl outline-none placeholder:text-[#111111]/40 focus:border-[#111111]" /></label>
          <label class="text-sm font-bold uppercase tracking-[0.15em]">Your email<input v-model="formData.email" required type="email" placeholder="hello@example.com" class="mt-3 w-full border-b border-[#111111]/40 bg-transparent py-3 text-xl outline-none placeholder:text-[#111111]/40 focus:border-[#111111]" /></label>
          <label class="text-sm font-bold uppercase tracking-[0.15em]">Your message<textarea v-model="formData.message" required rows="3" placeholder="Let’s make something meaningful..." class="mt-3 w-full resize-none border-b border-[#111111]/40 bg-transparent py-3 text-xl outline-none placeholder:text-[#111111]/40 focus:border-[#111111]"></textarea></label>
          <button type="submit" class="inline-flex w-fit items-center gap-3 bg-[#111111] px-6 py-4 font-bold uppercase tracking-[0.12em] text-[#f4f0e8] transition-transform hover:-translate-y-1"> <Loader2 v-if="loading" class="size-4 animate-spin" /><template v-else>Send message <Send class="size-4" /></template></button>
        </form>
      </div>
    </div>
  </section>
</template>
