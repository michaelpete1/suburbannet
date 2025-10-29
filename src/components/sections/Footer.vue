<script setup>
import { Facebook, Twitter, Linkedin } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer-section bg-gray-900 text-white font-sans">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">
        <div class="col-span-2 md:col-span-1">
          <img src="/logos/suburbanlogo2.png" alt="Suburban Logo" class="h-8 mb-4"/>
          <p class="text-gray-400 text-sm mb-6">Connecting You to Speed, Reliability, and Support That Never Sleeps</p>
          <p class="text-sm font-semibold mb-3">Follow us</p>
          <div class="flex space-x-4 text-gray-400">
            <a href="#" class="hover:text-red-600 transition" aria-label="Facebook">
              <Facebook class="h-5 w-5" />
            </a>
            <a href="#" class="hover:text-red-600 transition" aria-label="Twitter">
              <Twitter class="h-5 w-5" />
            </a>
            <a href="#" class="hover:text-red-600 transition" aria-label="LinkedIn">
              <Linkedin class="h-5 w-5" />
            </a>
          </div>
        </div>
        <div class="space-y-6">
          <h4 class="font-bold text-base mb-3">Product</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-red-600">Suburban Fiber</a></li>
            <li><a href="#" class="hover:text-red-600">Suburban Academy</a></li>
            <li><a href="#" class="hover:text-red-600">Techosphere</a></li>
            <li><a href="#" class="hover:text-red-600">Suburban Future</a></li>
          </ul>
        </div>
        <div class="space-y-6">
          <h4 class="font-bold text-base mb-3">Features</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-red-600">Managed Services</a></li>
            <li><a href="#" class="hover:text-red-600">Business Dual Play</a></li>
            <li><a href="#" class="hover:text-red-600">Business Triple Play</a></li>
          </ul>
        </div>
        <div class="space-y-6">
          <h4 class="font-bold text-base mb-3">Company</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-red-600">Contact Us</a></li>
            <li><a href="#" class="hover:text-red-600">About Us</a></li>
            <li><a href="#" class="hover:text-red-600">Careers</a></li>
            <li><a href="#" class="hover:text-red-600">Uptime</a></li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-500 space-y-4 md:space-y-0">
        <p>Copyright Suburban 2025</p>
        <div class="flex flex-wrap justify-center space-x-4">
          <RouterLink to="/privacy-policy" class="hover:text-red-600">Privacy Policy</RouterLink>
          <RouterLink to="/terms-of-use" class="hover:text-red-600">Terms of use</RouterLink>
          <a href="#" class="hover:text-red-600">Security</a>
          <a href="#" class="hover:text-red-600">Privacy FAQs</a>
          <a href="#" class="hover:text-red-600">DPA</a>
          <a href="#" class="hover:text-red-600">Sitemap</a>
          <a href="#" class="hover:text-red-600">Cookies Preferences</a>
        </div>
      </div>
    </div>
  </footer>
</template>
