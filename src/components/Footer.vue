<script setup lang="ts">
import { currentYear } from '../assets/data'
</script>

<template>
  <footer class="bg-[#111111] text-[#f4f0e8]"><div class="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-10 text-xs uppercase tracking-[0.14em] text-white/50 md:px-10"><p>© {{ currentYear }} John Obansa</p><a href="#home" class="transition-colors hover:text-[#c9ff5a]">Back to top ↑</a></div></footer>
</template>
