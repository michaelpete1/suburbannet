<script setup>
import { Zap, ShieldCheck, GaugeCircle, Handshake } from 'lucide-vue-next'
</script>

<template>
  <div class="features-section bg-white py-16 lg:py-20 font-sans">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center">
      <h2 class="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-10 lg:mb-16">
        Why Choose Suburban Fiber?
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        <div class="group text-left p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] cursor-pointer animate-fade-up" style="animation-delay:0.0s">
          <div class="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
            <Zap class="h-5 w-5" />
          </div>
          <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2">Blazing-Fast Internet</h3>
          <p class="text-gray-600 text-sm">Enjoy true fiber-optic performance with consistent upload and download speeds. Our network infrastructure is built for stability.</p>
        </div>
        <div class="group text-left p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] cursor-pointer animate-fade-up" style="animation-delay:0.08s">
          <div class="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
            <ShieldCheck class="h-5 w-5" />
          </div>
          <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2">Smart Managed Services</h3>
          <p class="text-gray-600 text-sm">Managed WiFi, VoIP, and Cloud Connectivity to keep your business unified and efficient.</p>
        </div>
        <div class="group text-left p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] cursor-pointer animate-fade-up" style="animation-delay:0.16s">
          <div class="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
            <GaugeCircle class="h-5 w-5" />
          </div>
          <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2">Unmatched Reliability</h3>
          <p class="text-gray-600 text-sm">Flexible packages that grow with your bandwidth and operational needs.</p>
        </div>
        <div class="group text-left p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] cursor-pointer animate-fade-up" style="animation-delay:0.24s">
          <div class="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
            <Handshake class="h-5 w-5" />
          </div>
          <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
          <p class="text-gray-600 text-sm">No hidden charges, no unexpected fees. Clear, consistent pricing.</p>
        </div>
      </div>
    </div>
  </div>
</template>
