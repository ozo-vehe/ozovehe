<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { ref } from 'vue'

const isOpen = ref(false)
const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]
function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  isOpen.value = false
}
</script>

<template>
  <header class="absolute left-0 right-0 top-0 z-50 text-[#f4f0e8]">
    <div class="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 md:px-10">
      <a href="#home" class="text-2xl font-black tracking-[-0.08em] transition-colors hover:text-[#c9ff5a]">ozovehe<span class="text-[#c9ff5a]">.</span></a>
      <nav class="hidden items-center gap-8 md:flex">
        <button v-for="item in navItems" :key="item.name" type="button" @click="scrollToSection(item.href)" class="text-sm uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-[#c9ff5a]">{{ item.name }}</button>
      </nav>
      <button class="rounded-full border border-white/30 p-2 md:hidden" type="button" :aria-label="isOpen ? 'Close menu' : 'Open menu'" @click="isOpen = !isOpen">
        <component :is="isOpen ? X : Menu" class="size-5" />
      </button>
    </div>
    <div v-if="isOpen" class="border-y border-white/10 bg-[#111111]/95 px-5 py-5 backdrop-blur md:hidden">
      <button v-for="item in navItems" :key="item.name" type="button" @click="scrollToSection(item.href)" class="block w-full py-3 text-left text-sm uppercase tracking-[0.16em] text-white/80">{{ item.name }}</button>
    </div>
  </header>
</template>
