<script setup>
defineProps({
  project: Object
})
</script>

<template>
  <section class="project group overflow-hidden relative max-h-[400px] shadow-[0_0_10px_#efefef]">
    <RouterLink :to="{name: 'project', params: {id: project.id} }" class="item-wrap fancybox">
      <div
        class="-z-10 flex items-center justify-center absolute bottom-0 bg-black/60 w-full h-full opacity-0 group-hover:z-50 group-hover:opacity-100 transition-all duration-300">

        <div class="project_details absolute text-center z-10">
          <h3 class="raleway block capitalize leading-none font-[500] text-[20px] text-slate-100">
            {{ project.name }}
          </h3>
          <span class="text-custom-btn-gray inconsolata uppercase block text-sm text-slate-100 px-2 mt-1">
            {{ project.category[0] }}
          </span>
        </div>
      </div>
      <img class="scale-100 transition-all duration-300 group-hover:scale-105" :src="project.image">
    </RouterLink>
  </section>
</template>

<style scoped>
@media screen and (max-width: 400px) {
  .project_container {
    width: 100vw;
    height: 270px;
  }

  .project_details h3 {
    font-size: 24px;
  }

  .project_details span {
    font-size: 12px;
    line-height: normal;
  }

  .project_urls {
    margin-top: 10px;
  }

  .project_urls img {
    width: 24px;
    height: 24px;
  }
}
</style>