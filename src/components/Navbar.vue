<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isOpen = ref(false)

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  // { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  // { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

function scrollToSection(href: string) {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isOpen.value = false
}
</script>

<template>
  <header class="absolute top-0 left-0 right-0 z-50">
    <div class="mx-auto px-4 lg:px-10 md:px-5">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0 w-[140px]">
          <button>
            <a href="/" rel="noopener noreferrer" class="text-gray-200 text-3xl font-[900] font-mono tracking-tighter hover:text-gray-50 transition-all duration-300">ozovehe.</a>
          </button>
        </div>
        <nav class="hidden md:block">
          <ul class="flex space-x-8">
            <li v-for="item in navItems" :key="item.name">
              <button
                type="button"
                aria-label="Nav button"
                @click="scrollToSection(item.href)"
                class="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
        </nav>
        <button
          class="md:hidden"
          @click="isOpen = !isOpen"
        >
          <component :is="isOpen ? X : Menu" class="h-6 w-6 text-gray-100" />
        </button>
      </div>
    </div>
    <div v-if="isOpen" class="md:hidden bg-white border-t border-gray-200">
      <div class="px-4 py-2 space-y-1">
        <button
          v-for="item in navItems"
          :key="item.name"
          @click="scrollToSection(item.href)"
          class="block w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 transition-colors duration-200"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </header>
</template>