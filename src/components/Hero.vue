<script setup lang="ts">
import { ArrowDownRight, Sparkles } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import bg02Url from '../assets/bg-02.jpg'

const isVisible = ref(false)

onMounted(() => {
  requestAnimationFrame(() => { isVisible.value = true })
})
</script>

<template>
  <section id="home" class="hero relative min-h-screen overflow-hidden bg-[#111111] text-[#f4f0e8]">
    <div class="hero-grid absolute inset-0 opacity-20" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-one" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-two" aria-hidden="true"></div>
    <img :src="bg02Url" alt="" class="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen" aria-hidden="true" />
    <div class="relative mx-auto flex min-h-[max(680px,100svh)] max-w-[1440px] flex-col justify-end px-5 pb-7 pt-24 sm:pb-10 md:min-h-screen md:px-10 md:pb-14 md:pt-28">
      <div :class="['hero-copy max-w-5xl transition-all duration-1000', isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']">
        <div class="mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-[#c9ff5a]">
          <Sparkles class="size-4 animate-pulse" aria-hidden="true" />
          <span>Frontend engineer / creative technologist</span>
        </div>
        <h1 class="max-w-6xl text-[clamp(4rem,12vw,11rem)] font-black leading-[0.82] tracking-[-0.085em]">
          <span class="block">Ideas</span>
          <span class="block pl-[12vw] text-[#c9ff5a]">in motion<span class="text-[#f4f0e8]">.</span></span>
        </h1>
        <div class="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p class="max-w-md text-lg leading-relaxed text-[#c8c4ba] md:text-xl">
            I turn ambitious product ideas into thoughtful, expressive digital experiences that feel as good as they work.
          </p>
          <a href="#projects" class="group inline-flex w-fit items-center gap-3 border-b border-[#c9ff5a] pb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#c9ff5a] transition-colors hover:text-white">
            Explore selected work
            <ArrowDownRight class="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div class="mt-16 flex items-center justify-between border-t border-white/20 pt-5 text-xs uppercase tracking-[0.2em] text-[#c8c4ba]">
        <span>Based in Lagos, Nigeria</span>
        <span class="hidden md:inline">Scroll to discover</span>
        <span>Available for select projects</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-grid { background-image: linear-gradient(rgba(244,240,232,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,232,.35) 1px, transparent 1px); background-size: 72px 72px; }
.hero-orb { position: absolute; border-radius: 9999px; filter: blur(2px); opacity: .8; animation: float 10s ease-in-out infinite; }
.hero-orb-one { width: 28rem; height: 28rem; right: -8rem; top: 10%; background: radial-gradient(circle, rgba(201,255,90,.45), transparent 68%); }
.hero-orb-two { width: 20rem; height: 20rem; left: 32%; top: 18%; background: radial-gradient(circle, rgba(239,108,67,.32), transparent 68%); animation-delay: -4s; }
@keyframes float { 0%, 100% { transform: translate3d(0, 0, 0) scale(1); } 50% { transform: translate3d(-20px, 24px, 0) scale(1.08); } }
</style>6.
