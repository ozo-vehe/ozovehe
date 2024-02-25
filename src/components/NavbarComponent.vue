<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const slide_up = ref(false)

</script>

<template>
  <div class="bg-slate-700 flex items-center justify-center h-[0px] text-[#fbfbfb] px-4 py-0 transition-all duration-300" :class="{slide_up}" >
    <ul class="flex flex-col gap-2 inconsolata text-center">
      <li>
        <RouterLink to="/" @click="slide_up = !slide_up" :class="{ active: $route.path === '/' }">
          <span class="text-[18px]">Home</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/about" @click="slide_up = !slide_up" :class="{ active: $route.path === '/about' }">
          <span class="text-[18px]">About</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/contact" @click="slide_up = !slide_up" :class="{ active: $route.path === '/contact' }">
          <span class="text-[18px]">Contact</span>
        </RouterLink>
      </li>
    </ul>
  </div>

  <nav class="px-8 pt-10 sm:pt-10 md:pt-12 lg:pt-16 pb-6 sm:px-8 md:px-12 lg:px-20">
    <div class="inconsolata flex items-center justify-between">
      <RouterLink to="/">
        <span class="text-[24px]">MyPortfolio.</span>
      </RouterLink>
      <a href="#" class="burger" @click="slide_up = !slide_up">
        <span> </span>
      </a>
    </div>
  </nav>
</template>


<style scoped>
.active {
  text-decoration: underline;
}
.slide_up {
  height: 160px;
  padding-block: 16px;
}

/* Burger */
.burger {
  width: 28px;
  height: 32px;
  cursor: pointer;
  position: relative;
}

.burger:before, .burger span, .burger:after {
  width: 100%;
  height: 2px;
  display: block;
  background: #000;
  border-radius: 2px;
  position: absolute;
  opacity: 1;
}

.burger:before, .burger:after {
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  -webkit-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  content: "";
}

.burger:before {
  top: 4px;
}

.burger span {
  top: 15px;
}

.burger:after {
  top: 26px;
}

/* Hover */
.burger:hover:before {
  top: 7px;
}

.burger:hover:after {
  top: 23px;
}

/* Click */
.burger.active span {
  opacity: 0;
}

.burger.active:before, .burger.active:after {
  top: 40%;
}

.burger.active:before {
  transform: rotate(45deg);
}

.burger.active:after {
  transform: rotate(-45deg);
}

.burger:focus {
  outline: none;
}
</style>
