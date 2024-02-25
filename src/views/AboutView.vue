<script setup>
const technologies = [
  { name: "HTML", icon: "https://img.icons8.com/color/144/html-5--v1.png" },
  { name: "CSS", icon: "https://img.icons8.com/color/144/css3.png" },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/240/javascript--v1.png",
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/fluency/144/typescript--v2.png",
  },
  {
    name: "Vue",
    icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png",
  },
  { name: "React", icon: "https://img.icons8.com/officel/160/react.png" },
];
const socialImages = [
  {
    id: 1,
    name: 'twitter',
    url: 'https://img.icons8.com/ios-filled/eeeeee/50/twitterx--v2.png',
    href: 'https://twitter.com/__ozovehe',
  },
  {
    id: 2,
    name: 'linkedin',
    url: 'https://img.icons8.com/ios-filled/eeeeee/100/linkedin-2.png',
    href: 'https://www.linkedin.com/in/ozovehe/',
  },
  {
    id: 3,
    name: 'github',
    url: 'https://img.icons8.com/ios-filled/eeeeee/500/github.png',
    href: 'https://github.com/ozo-vehe',
  },
];
</script>

<template>
  <header class="flex flex-wrap items-start justify-center gap-10 py-12 px-8 sm:px-8 md:px-12 lg:px-20">
    <div class="w-full lg:w-[60%] md:w-[60%]">
      <h1 class="leading-none font-[500] text-[30px] mb-4 capitalize text-slate-700 raleway">about me</h1>
      <p class="inconsolata">
        I am a dedicated web developer driven by the goal of crafting exceptional user experiences worldwide through
        meticulous product research and the proficient use of cutting-edge development tools. <br /><br />

        My enthusiasm lies in designing visually captivating and seamlessly functional interfaces that elevate user
        interactions.<br /><br />

        I possess a keen interest in staying abreast of the latest technologies, demonstrating a relentless
        commitment to continuous learning and adaptation.<br /><br />

        My work ethic revolves around delivering high-quality results within specified timelines. I am poised to
        contribute my skills and passion to create innovative and impactful digital solutions.
      </p>
      <button
        class="border border-slate-800 mr-4 inconsolata py-2 hover:bg-slate-800 hover:text-[#f7f7f7] transition-all duration-200 min-w-[100px] mt-6">
        <a href="#" target="_blank" class="text-[14px] py-2 px-2">View Resume</a>
      </button>
      <button
        class="border border-slate-800 mr-4 inconsolata py-2 hover:bg-slate-800 hover:text-[#f7f7f7] transition-all duration-200 min-w-[100px] mt-6">
        <RouterLink to="/contact" class="text-[14px] py-2 px-2"> Hire Me </RouterLink>
      </button>

      <div class="social_container flex items-center gap-4 mt-8">
        <a v-for="social in socialImages" :key="social.id" :href="social.href" target="_blank">
          <img class="w-10 bg-[#393E46] rounded-full p-[11px]" :src="social.url" :alt="social.name" />
        </a>
      </div>
    </div>

    <div class="tech_stack text-slate-700 flex flex-wrap items-center justify-center gap-10 w-full lg:w-[35%] md:w-[35%]">
      <div
        class="technologies flex flex-col items-center justify-center p-4 text-center w-[40%] lg:w-[27%] md:w-[30%] sm:w-[40%] shadow-[0_0_10px_#e9e9e9] rounded-[8px]"
        v-for="(tech, index) in technologies" :key="index">
        <img class="w-[90%]" :src="tech.icon" :alt="tech.name" />
        <p class="inconsolata">{{ tech.name }}</p>
      </div>
    </div>
  </header>
</template>

<style scoped></style>