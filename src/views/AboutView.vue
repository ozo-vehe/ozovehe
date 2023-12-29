<script setup>
import AboutComponent from '../components/AboutComponent.vue';
</script>
<template>
  <Transition name="slide-fade" mode="out-in" appear>
    <AboutComponent/>
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
