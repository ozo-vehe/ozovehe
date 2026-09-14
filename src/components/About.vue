<script setup lang="ts">
import { Code, Globe, BriefcaseBusiness } from 'lucide-vue-next'
import { skills } from '../assets/data'
const highlights = [
  { icon: Code, title: 'Frontend craft', description: 'React, TypeScript, Next.js, Vue' },
  { icon: Globe, title: 'Product thinking', description: 'APIs, systems, useful details' },
  { icon: BriefcaseBusiness, title: 'Measured impact', description: 'Testing, analytics, optimization' },
]
</script>

<template>
  <section id="about" class="bg-[#f4f0e8] py-24 text-[#111111] md:py-36">
    <div class="mx-auto max-w-[1440px] px-5 md:px-10">
      <div data-reveal class="reveal mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-start"><p class="text-sm font-bold uppercase tracking-[0.2em] text-[#ef6c43]">01 / about</p><p class="max-w-2xl text-[clamp(2rem,4vw,4.5rem)] font-black leading-[0.95] tracking-[-0.06em]">The best interfaces make complexity feel <span class="text-[#ef6c43]">obvious.</span></p></div>
      <div data-reveal class="reveal grid gap-14 border-t border-[#111111]/20 pt-8 md:grid-cols-[1fr_1.4fr] md:gap-24"><div><p class="max-w-md text-xl leading-relaxed text-[#4e4a43]">I’m John, a frontend engineer who cares about the space between a good idea and a great experience.</p><div class="mt-10 flex flex-wrap gap-4 text-sm font-bold uppercase tracking-[0.15em]"><a href="https://github.com/ozo-vehe" target="_blank" rel="noopener noreferrer" class="border-b border-[#111111] pb-1 hover:text-[#ef6c43]">Github</a><a href="https://x.com/__ozovehe" target="_blank" rel="noopener noreferrer" class="border-b border-[#111111] pb-1 hover:text-[#ef6c43]">X / Twitter</a><a href="mailto:johnobansa5@gmail.com" class="border-b border-[#111111] pb-1 hover:text-[#ef6c43]">Email</a></div></div><div class="max-w-2xl space-y-5 text-lg leading-relaxed text-[#4e4a43]"><p>I build modern web applications with a balance of engineering rigor and visual curiosity. My work lives where systems, storytelling, and motion meet.</p><p>When I’m away from the keyboard, I’m usually walking, playing football, watching movies, or learning something that will make the next build sharper.</p></div></div>
      <div data-reveal class="reveal mt-20 grid gap-4 md:grid-cols-3"> <article v-for="item in highlights" :key="item.title" class="group border-t-2 border-[#111111] pt-5 transition-transform duration-300 hover:-translate-y-2"><component :is="item.icon" class="mb-10 size-8 text-[#ef6c43]" aria-hidden="true" /><h3 class="text-xl font-black">{{ item.title }}</h3><p class="mt-2 text-[#6d675d]">{{ item.description }}</p></article></div>
      <div data-reveal class="reveal mt-16 border-t border-[#111111]/20 pt-5"><p class="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#6d675d]">Tools I reach for</p><div class="flex flex-wrap gap-2"><span v-for="skill in skills" :key="skill" class="rounded-full border border-[#111111]/20 px-3 py-2 text-sm">{{ skill }}</span></div></div>
    </div>
  </section>
</template>
