<script setup>
import { Globe2, ShieldCheck, Handshake } from 'lucide-vue-next'
</script>

<template>
  <div class="commitment-section bg-white py-20 font-sans">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center">
      <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-16">
        We're Committing to This Together
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 text-left">
        <div class="group p-6 rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] cursor-pointer animate-fade-up" style="animation-delay:0.0s">
          <div class="h-12 w-12 mb-4 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
            <Globe2 class="h-6 w-6" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Empowering Connectivity for All</h3>
          <p class="text-gray-600">We are dedicated to making fast, reliable fiber-optic internet accessible across Nigeria — not just in cities, but in underserved communities too.</p>
        </div>
        <div class="group p-6 rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] cursor-pointer animate-fade-up" style="animation-delay:0.08s">
          <div class="h-12 w-12 mb-4 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
            <ShieldCheck class="h-6 w-6" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Local Excellence & Sovereignty</h3>
          <p class="text-gray-600">By keeping our services rooted in Nigeria, we ensure data stays close, performance is high, and our solutions remain responsive to local needs and challenges.</p>
        </div>
        <div class="group p-6 rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] cursor-pointer animate-fade-up" style="animation-delay:0.16s">
          <div class="h-12 w-12 mb-4 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
            <Handshake class="h-6 w-6" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Partnership & Trust</h3>
          <p class="text-gray-600">We believe that our relationship with you is a partnership, not just a service contract. We promise transparency, responsive support, clear pricing, and continuous improvement.</p>
        </div>
      </div>
    </div>
  </div>
</template>
