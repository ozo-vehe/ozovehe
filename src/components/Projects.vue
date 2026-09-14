<script setup lang="ts">
import { ExternalLink, Github, ArrowUpRight } from 'lucide-vue-next'
import { projects } from '../assets/data'
</script>

<template>
  <section id="projects" class="bg-[#111111] py-24 text-[#f4f0e8] md:py-36">
    <div class="mx-auto max-w-[1440px] px-5 md:px-10">
      <div class="mb-20 flex items-end justify-between gap-6">
        <div>
          <p class="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#c9ff5a]">02 / selected work</p>
          <h2 class="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.08em]">Things I’ve<br /><span class="text-[#c9ff5a]">made.</span></h2>
        </div>
        <span class="hidden pb-2 text-sm uppercase tracking-[0.18em] text-white/50 md:block">Scroll / hover / explore</span>
      </div>
      <div class="grid gap-16 md:grid-cols-2 md:gap-x-8 md:gap-y-28">
        <article v-for="(project, index) in projects" :key="project.title" class="group" :class="index % 2 ? 'md:mt-24' : ''">
          <a :href="project.url.startsWith('[') ? undefined : project.url" target="_blank" rel="noopener noreferrer" class="block" :aria-label="`View ${project.title} project`">
            <div class="relative aspect-[1.25] overflow-hidden bg-[#2a2a26]">
              <img :src="project.image" :alt="project.title" loading="lazy" decoding="async" class="h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0" />
              <div class="absolute inset-0 bg-[#c9ff5a]/0 transition-colors duration-500 group-hover:bg-[#c9ff5a]/10"></div>
              <div class="absolute right-5 top-5 flex size-12 translate-y-3 items-center justify-center rounded-full bg-[#c9ff5a] text-[#111111] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight class="size-5" /></div>
            </div>
          </a>
          <div class="mt-5 flex items-start justify-between gap-4 border-t border-white/20 pt-4">
            <div>
              <h3 class="text-2xl font-black tracking-tight">{{ project.title }}</h3>
              <p class="mt-1 text-sm text-white/50">{{ project.subtitle || 'Digital experience' }}</p>
            </div>
            <div class="flex gap-3 pt-1">
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" :aria-label="`${project.title} source code`" class="text-white/50 transition-colors hover:text-[#c9ff5a]"><Github class="size-5" /></a>
              <a v-if="!project.url.startsWith('[')" :href="project.url" target="_blank" rel="noopener noreferrer" :aria-label="`${project.title} live site`" class="text-white/50 transition-colors hover:text-[#c9ff5a]"><ExternalLink class="size-5" /></a>
            </div>
          </div>
          <p class="mt-4 max-w-md text-[#c8c4ba]">{{ project.description.main }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in project.technologies.slice(0, 4)" :key="tech" class="border border-white/20 px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-white/50">{{ tech }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
