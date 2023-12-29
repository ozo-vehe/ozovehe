<script setup>
import ContactComponent from '../components/ContactComponent.vue';
</script>
<template>
  <Transition name="slide-fade" mode="out-in" appear>
    <ContactComponent/>
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
