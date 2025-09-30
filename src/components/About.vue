<script setup lang="ts">
import { Code, Globe, BriefcaseBusiness } from 'lucide-vue-next'

const highlights = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Vue.js"
  },
  // {
  //   icon: Smartphone,
  //   title: "Mobile Development",
  //   description: "React Native, Flutter"
  // },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "RESTful APIs, Supabase, Firebase"
  },
  {
    icon: BriefcaseBusiness,
    title: "Tools & Optimization",
    description: "Jest, Vitest, Amplitude, Mixpanel, Vercel"
  }
]
</script>

<template>
  <section id="about" class="py-20 bg-white">
    <div class="px-4 md:px-5 lg:px-10 max-w-[1440px] mx-auto">
      <div class="mb-16">
        <h2 class="lg:text-3xl md:text-2xl text-[20px] font-bold text-gray-900 mb-4">
          <span class="underline underline-offset-8">about</span> me
        </h2>
        <div class="about-text grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
          <div class="intro">
            <h3 class="lg:text-3xl md:text-2xl text-[20px] my-4">John Obansa</h3>
            <p class="lg:text-lg text-[16px] text-gray-600 font-light mb-2">
              I'm a passionate full-stack developer with a strong background in creating
              modern web applications and mobile solutions. I love solving complex problems and building products that
              make a difference. 
            </p>
            <p class="lg:text-lg text-[16px] text-gray-600 font-light"> When I'm not coding, you can find me contributing to open-source projects, learning new technologies, going for long walks, playing football, or watching movies.
            </p>

            <div class="socials flex items-center gap-2 font-light mt-8">
              <a href="https://github.com/ozo-vehe" target="_blank" class="uppercase">twitter</a>
              <a href="https://x.com/__ozovehe" target="_blank" class="uppercase">github</a>
              <a href="mailto:johnobansa5@gmail.com" target="_blank" class="uppercase">email</a>
            </div>
          </div>

          <div class="max-w-4xl mx-auto">
            <h3 class="lg:text-3xl md:text-2xl text-[20px] my-4">
              My Journey
            </h3>
            <div class="prose prose-lg lg:text-lg text-[16px] text-gray-600 font-light">
              <p class="mb-2">
                With several years of experience in web development, I specialize in building
                scalable applications using modern technologies. I have a strong foundation in
                JavaScript, React, Node.js, and cloud platforms.
              </p>
              <p class="mb-2">
                I believe in writing clean, maintainable code and following best practices.
                I'm always eager to learn new technologies and stay updated with the latest
                industry trends.
              </p>
              <p>
                
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-8">
        <div v-for="(item, index) in highlights" :key="index"
          class="p-6 border border-gray-200 rounded-[4px] hover:shadow transition-shadow duration-200 flex items-center gap-2 lg:w-fit md:w-fit w-full">
          <div>
            <component :is="item.icon" class="w-12 h-12" />
          </div>
          <div aria-hidden="true" class="w-[2px] bg-gray-500 self-stretch"></div>
          <div>
            <h3 class="lg:text-lg text-[16px] font-semibold text-gray-900">
              {{ item.title }}
            </h3>
            <p class="text-gray-600 lg:text-[16px] text-sm">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>