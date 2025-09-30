<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { Mail, Github, Linkedin, Send, Loader2 } from 'lucide-vue-next'

const formData = ref({
  name: '',
  email: '',
  message: '',
})
const loading: Ref<boolean> = ref(false);

function handleSubmit(e: Event) {
  e.preventDefault()
  loading.value = true;
  const subject = encodeURIComponent(`Portfolio Contact from ${formData.value.name}`)
  const body = encodeURIComponent(
    `Name: ${formData.value.name}\nEmail: ${formData.value.email}\n\nMessage:\n${formData.value.message}`
  )
  loading.value = false;

  window.location.href = `mailto:johnobansa5@gmail.com?subject=${subject}&body=${body}`
}
</script>

<template>
  <section id="contact" class="py-16">
    <div class="max-w-[1440px] mx-auto px-4 md:px-5 lg:px-10">
      <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
        <!-- Left side - Contact info -->
        <div class="space-y-6 sm:space-y-8">
          <div class="space-y-4">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Let's build something amazing together
            </h2>
            <p class="text-base sm:text-lg text-gray-500 leading-relaxed">
              I'm always interested in discussing new opportunities and innovative projects. Whether you have a
              project in mind or just want to connect, I'd love to hear from you.
            </p>
          </div>

          <!-- Contact methods -->
          <div class="space-y-4">
            <a href="mailto:johnobansa5@gmail.com"
              class="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-400/50 hover:bg-gray-50 transition-all duration-300 group">
              <div class="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <Mail class="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p class="font-medium text-gray-900">Email</p>
                <p class="text-sm text-gray-500 break-all">johnobansa5@gmail.com</p>
              </div>
            </a>
          </div>

          <!-- Social links -->
          <div class="space-y-4">
            <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">Connect with me</p>
            <div class="flex flex-wrap gap-3">
              <a href="https://linkedin.com/in/ozovehe" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-400/50 hover:bg-gray-50 transition-all duration-300 group">
                <Linkedin class="w-5 h-5 text-gray-600" />
                <span class="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="https://github.com/ozo-vehe" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-400/50 hover:bg-gray-50 transition-all duration-300 group">
                <Github class="w-5 h-5 text-gray-600" />
                <span class="text-sm font-medium">GitHub</span>
              </a>
              <a href="https://x.com/__ozovehe" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-400/50 hover:bg-gray-50 transition-all duration-300 group">
                <!-- <ExternalLink class="w-5 h-5 text-gray-600" /> -->
                <img class="w-5 h-5" src="https://img.icons8.com/windows/4a5565/32/twitterx.png" alt="twitterx" />
                <span class="text-sm font-medium">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right side - Contact form -->
        <div class="border border-gray-200 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm">
          <div class="p-4 sm:p-6 lg:p-8">
            <form @submit="handleSubmit" class="space-y-4 sm:space-y-6">
              <div class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-900 mb-2">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required v-model="formData.name"
                    class="w-full px-3 py-2 rounded border border-gray-200 focus:border-gray-500 focus:outline-none bg-white/80"
                    placeholder="Your name" />
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-900 mb-2">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required v-model="formData.email"
                    class="w-full px-3 py-2 rounded border border-gray-200 focus:border-gray-500 focus:outline-none bg-white/80"
                    placeholder="your.email@example.com" />
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" required v-model="formData.message" rows="5"
                    class="w-full px-3 py-2 rounded border border-gray-200 focus:border-gray-500 focus:outline-none bg-white/80 resize-none"
                    placeholder="Tell me about your project or just say hello..."></textarea>
                </div>
              </div>

              <button type="submit" aria-label="Submit button"
                class="w-full flex items-center justify-center bg-gray-700 hover:bg-gray-900 text-white font-medium rounded transition-all duration-300 h-[48px]">
                <Loader2 v-if="loading" class="animate-spin w-4 h-4" />
                <span v-else class="flex items-center">
                  <Send class="w-4 h-4 mr-2" />
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
