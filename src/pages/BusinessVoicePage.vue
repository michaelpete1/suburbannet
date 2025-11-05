<template>
  <div class="font-graphik bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BackButton class="mb-6" />

    </div>

    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
        Suburban Business <span class="text-red-600">Voice</span>
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div class="bg-red-600 rounded-xl shadow-2xl p-8 lg:p-12 text-white flex flex-col justify-between">
          <div>
            <h2 class="text-2xl font-bold mb-4">Suburban Business Voice</h2>
            <p class="text-xl opacity-90 leading-relaxed mb-6">
            Suburban Business Voice delivers crystal-clear, enterprise-grade communication powered by our reliable fiber network. Designed for performance and flexibility, it ensures seamless local and international calls with zero downtime.

Our Hosted PBX, SIP Trunking, and Hybrid Voice solutions integrate easily with existing systems, providing advanced features like call forwarding, voicemail-to-email, and centralized management.

Scalable, secure, and supported 24/7, Suburban Business Voice empowers your team to collaborate effortlessly and communicate with confidence.
            </p>

          </div>
          <button class="bg-white text-red-600 font-bold py-3 mt-10 rounded-full shadow-lg hover:bg-gray-100 transition">
            Request Form
          </button>
        </div>

        <div class="space-y-8">

          <div class="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row gap-6 items-center">
            <div class="w-full sm:w-2/5 flex-shrink-0">
              <img src="/logos/image 45.png" alt="Voice network illustration" class="rounded-lg w-full h-auto object-cover">
            </div>
            <div class="w-full sm:w-3/5">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Clear, Reliable Communication for Modern Enterprises</h3>
              <ul class="text-gray-600 space-y-2 text-sm">
                <li><span class="text-red-600 text-lg mr-2">•</span> Superior Call Quality: Low latency, high-definition voice for both local and global calls.</li>
                <li><span class="text-red-600 text-lg mr-2">•</span> Trusted Network Backbone: Suburban’s extensive fiber-optic infrastructure gives you the reliability and performance your business voice traffic demands.</li>
              </ul>
            </div>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-xl shadow-lg p-6">
            <div class="flex items-center space-x-2 text-red-600 font-semibold mb-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <span>Client's Testimonial</span>
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-3">Seamless Communication That Drives Productivity</h4>
            <p class="text-gray-700 italic leading-relaxed">
              "Suburban Business Voice transformed our communication. Calls are clearer, connections are reliable, and setup was effortless. Features like voicemail-to-email and call forwarding keep our operations smooth and professional. Suburban’s support and reliability give us confidence every day"
            </p>
          </div>

          <div class="mt-8">
            <h4 class="text-lg font-bold text-gray-900 mb-2">Ready to upgrade your business Voice?</h4>
            <p class="text-gray-600">
              Contact us today and find the Suburban Business Voice plan that fits your organization. Our team will guide you through options, installation and ongoing support.
            </p>
          </div>

        </div>
      </div>
    </div>

    <!-- Partners Carousel -->
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider text-center mb-8">
        THEY CHOOSE SUBURBAN
      </h3>
      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex space-x-8 pb-4 animate-scroll">
          <img v-for="logo in trackLogos" :key="logo" :src="logo" :alt="`Partner Logo`" class="h-12 flex-shrink-0 opacity-70 hover:opacity-100 transition">
        </div>
      </div>
    </div>

    <div class="text-center py-4 text-xs text-gray-500 border-t border-gray-100 mt-10">
      <p>Suburban © 2025. All rights reserved.</p>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import BackButton from '../components/BackButton.vue'

const logos = [

  '/logos/cbn.png',
  '/logos/cisco.png',
  '/logos/hauwei.png',
  '/logos/microsoft.png',
  '/logos/nihq.png',
  '/logos/npa.png',
  '/logos/tplink.png',
  '/logos/tetfund.png'
]

// Duplicate the logos to create a seamless looping track
const trackLogos = computed(() => [...logos, ...logos])
</script>

<style scoped>
/* Custom styles can be added here */

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Animation for feature cards */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .feature-card {
    padding: 1.5rem;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Hide scrollbar for carousel */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Auto-scroll animation for carousel */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}
</style>
