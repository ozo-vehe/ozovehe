<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Get In <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Touch</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        <p class="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div data-aos="fade-right" data-aos-delay="200">
          <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-8">
            Let's Start a Conversation
          </h3>
          
          <div class="space-y-6">
            <div class="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Mail class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 dark:text-white">Email</h4>
                <p class="text-gray-600 dark:text-gray-400">johnozovehe@gmail.com</p>
              </div>
            </div>
            
            <div class="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <MapPin class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 dark:text-white">Location</h4>
                <p class="text-gray-600 dark:text-gray-400">Nigeria</p>
              </div>
            </div>
            
            <div class="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Clock class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 dark:text-white">Response Time</h4>
                <p class="text-gray-600 dark:text-gray-400">Within 24 hours</p>
              </div>
            </div>
          </div>
          
          <!-- Social Links -->
          <div class="mt-8">
            <h4 class="font-semibold text-gray-800 dark:text-white mb-4">Follow Me</h4>
            <div class="flex gap-4">
              <a v-for="social in socialLinks" :key="social.name" 
                 :href="social.url" target="_blank"
                 class="w-12 h-12 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group">
                <component :is="social.icon" class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-500" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div data-aos="fade-left" data-aos-delay="400">
          <form @submit.prevent="handleSubmit" ref="form" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input type="text" id="name" name="user_name" required
                       v-model="formData.name"
                       :class="[
                         'w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500',
                         formErrors.name 
                           ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                           : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:border-blue-500'
                       ]"
                       placeholder="John Doe" />
                <p v-if="formErrors.name" class="text-red-500 text-sm mt-1">{{ formErrors.name }}</p>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input type="email" id="email" name="user_email" required
                       v-model="formData.email"
                       :class="[
                         'w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500',
                         formErrors.email 
                           ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                           : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:border-blue-500'
                       ]"
                       placeholder="john@example.com" />
                <p v-if="formErrors.email" class="text-red-500 text-sm mt-1">{{ formErrors.email }}</p>
              </div>
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input type="text" id="subject" name="subject"
                     v-model="formData.subject"
                     class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                     placeholder="Project Discussion" />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea id="message" name="message" rows="6" required
                        v-model="formData.message"
                        :class="[
                          'w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none',
                          formErrors.message 
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:border-blue-500'
                        ]"
                        placeholder="Tell me about your project..."></textarea>
              <p v-if="formErrors.message" class="text-red-500 text-sm mt-1">{{ formErrors.message }}</p>
            </div>
            
            <button type="submit" :disabled="loading"
                    class="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              <Loader2 v-if="loading" class="w-5 h-5 animate-spin" />
              <Send v-else class="w-5 h-5" />
              {{ loading ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
          
          <!-- Success/Error Messages -->
          <div v-if="submitStatus === 'success'" 
               class="mt-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg flex items-center gap-3">
            <CheckCircle class="w-5 h-5 text-green-600 dark:text-green-400" />
            <p class="text-green-700 dark:text-green-300">Message sent successfully! I'll get back to you soon.</p>
          </div>
          
          <div v-if="submitStatus === 'error'" 
               class="mt-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg flex items-center gap-3">
            <AlertCircle class="w-5 h-5 text-red-600 dark:text-red-400" />
            <p class="text-red-700 dark:text-red-300">Failed to send message. Please try again or contact me directly.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Mail, MapPin, Clock, Send, Loader2, CheckCircle, AlertCircle, Github, Linkedin, Twitter } from 'lucide-vue-next'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_f3ytnp6'
const TEMPLATE_ID = 'template_zbx4fme'
const PUBLIC_KEY = 'Zg7ZI3Udlsr0ade51'

const form = ref(null)
const loading = ref(false)
const submitStatus = ref('')

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const formErrors = reactive({
  name: '',
  email: '',
  message: ''
})

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/ozo-vehe' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/ozovehe/' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/__ozovehe' }
]

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  Object.keys(formErrors).forEach(key => formErrors[key] = '')
  
  // Name validation
  if (!formData.name.trim()) {
    formErrors.name = 'Name is required'
    isValid = false
  } else if (formData.name.trim().length < 2) {
    formErrors.name = 'Name must be at least 2 characters'
    isValid = false
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email.trim()) {
    formErrors.email = 'Email is required'
    isValid = false
  } else if (!emailRegex.test(formData.email)) {
    formErrors.email = 'Please enter a valid email address'
    isValid = false
  }
  
  // Message validation
  if (!formData.message.trim()) {
    formErrors.message = 'Message is required'
    isValid = false
  } else if (formData.message.trim().length < 10) {
    formErrors.message = 'Message must be at least 10 characters'
    isValid = false
  }
  
  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return
  
  loading.value = true
  submitStatus.value = ''
  
  try {
    const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.value, PUBLIC_KEY)
    
    if (result.text === 'OK') {
      submitStatus.value = 'success'
      // Reset form
      Object.keys(formData).forEach(key => formData[key] = '')
    } else {
      submitStatus.value = 'error'
    }
  } catch (error) {
    console.error('Email send error:', error)
    submitStatus.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>