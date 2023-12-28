<script setup>
defineProps({
  project: Object
})
</script>

<template>
  <section
    class="project_container flex group w-[420px] h-[300px] px-[52px] py-[61px] justify-center items-center rounded-[16px] bg-[#393e4680] backdrop-blur-[2px]">
    <div class="h-full relative z-10">
      <img class="w-full h-full object-contain" :src='project.image' :alt='project.name' />
    </div>

    <div
      class="z-50 flex items-center justify-center absolute bottom-0 bg-black/70 w-full h-full scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 after:absolute after:h-10 after:w-10 after:bottom-3 after:right-3 after:border-b-2 after:border-r-2 after:border-[#97989a] before:absolute before:h-10 before:w-10 before:top-3 before:left-3 before:border-t-2 before:border-l-2 before:border-[#97989a]">

      <div class="absolute text-center z-10">
        <h3 class="raleway capitalize leading-none font-[700] text-3xl text-[#00ADB5]">
          {{ project.name }}
        </h3>
        <span class="capitalize text-custom-btn-gray text-sm text-slate-300 px-2">
          {{ project.description }}
        </span>

        <div class="project_urls flex mt-4 justify-center items-center gap-4">
          <a :href="project.url" target="_blank" class="cursor-pointer">
            <img class="w-7 h-7" src="https://img.icons8.com/ios-glyphs/00ADB5/60/link--v1.png" alt="link--v1" />
          </a>
          <a :href="project.github_repo" target="_blank" class="cursor-pointer">
            <img class="w-7 h-7" src="https://img.icons8.com/ios-glyphs/00ADB5/60/github.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>