<template>
  <button
    @click="toggleTheme"
    class="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group"
    aria-label="Toggle theme"
  >
    <Sun v-if="isDark" class="w-5 h-5 text-yellow-400 group-hover:rotate-180 transition-transform duration-300" />
    <Moon v-else class="w-5 h-5 text-slate-600 group-hover:rotate-180 transition-transform duration-300" />
  </button>
</template>

<script setup>
import { Sun, Moon } from 'lucide-vue-next'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()
const { isDark, toggleTheme } = themeStore
</script>