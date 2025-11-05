<template>
  <div class="font-graphik py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BackButton class="mb-6" />
    </div>

    <div class="max-w-6xl mx-auto rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl"
         :class="gradientClasses">

      <h2 class="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        Infrastructure as a Service (IaaS)
      </h2>
      <p class="mt-4 text-xl sm:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
        Power your business with scalable, secure, on-demand infrastructure built for Africa, engineered for growth.
      </p>
    </div>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

      <div class="card-base">
        <div>
          <h3 class="text-2xl font-bold text-slate-800 mb-4">Data Center</h3>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            Our hyperscale facilities provide businesses with a one-stop-shop for all their IT and capacity requirements. Built-in a campus-style design, our hyper-scale facilities allow organizations to build out further data centers quickly within the same location. This enables scalability of storage and compute capacity rapidly to meet ever-fluctuating demand.
          </p>
        </div>
        <div class="mt-auto">
          <a :href="'#'" class="btn-iaas-red">
            Get Started
          </a>
        </div>
      </div>

      <div class="card-base">
        <div>
          <h3 class="text-2xl font-bold text-slate-800 mb-4">Video</h3>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            Suburban Video Services consist of our Content Delivery Network (CDN), Suburban Business TV, Suburban Surveillance System, and other related solutions aimed at business productivity.
          </p>
        </div>
        <div class="mt-auto">
          <a :href="'#'" class="btn-iaas-red">
            Request Services
          </a>
        </div>
      </div>

      <div class="card-base">
        <div>
          <h3 class="text-2xl font-bold text-slate-800 mb-4">Bundled Service</h3>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            Need a custom solution (Infrastructure, Network, and Business Applications (Software)) for your business, our bundled services have this covered for you.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            We plan, supply, and deploy all custom resources for your project, and our offerings are best suited for any form and size of business, with flexible payment options.
          </p>
        </div>
        <div class="mt-auto">
          <a :href="'#'" class="btn-iaas-red">
            Request Services
          </a>
        </div>
      </div>

      <div class="card-base">
        <div>
          <h3 class="text-2xl font-bold text-slate-800 mb-4">Connectivity</h3>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            We provide a wide range of connectivity solutions and services to meet mission-critical business objectives at the most efficient cost. Our vanilla Internet service - Business Internet is a high speed, low latency, SLA-backed connection that is designed for businesses that require high uptime and reliable internet connections.
          </p>
        </div>
        <div class="mt-auto">
          <a :href="'#'" class="btn-iaas-red">
            Get Connectivity
          </a>
        </div>
      </div>

    </div>

    <!-- Partners Carousel -->
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider text-center mb-8">
        THEY CHOOSE SUBURBAN
      </h3>
      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex space-x-8 pb-4 animate-scroll">
          <img v-for="logo in trackLogos" :key="logo" :src="logo" :alt="`Partner Logo`" class="h-12 w-auto flex-shrink-0 opacity-70 hover:opacity-100 transition object-contain">
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

// Define the classes for the hero banner gradient to match the image closely
const gradientClasses = computed(() => {
  return [
    'bg-gradient-to-b',
    'from-red-600', // Strong red start
    'to-red-400/80', // Slightly lighter, slightly transparent red end
  ];
});

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
/* Custom Tailwind components using standard CSS */

.card-base {
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid rgb(254, 202, 202);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.btn-iaas-red {
  display: block;
  width: 100%;
  text-align: center;
  border-radius: 9999px;
  padding: 1rem 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background: linear-gradient(to right, rgb(220, 38, 38), rgb(239, 68, 68));
  transition: background 150ms ease-in-out;
}

.btn-iaas-red:hover {
  background: linear-gradient(to right, rgb(185, 28, 28), rgb(220, 38, 38));
}

/* Responsive adjustments */
@media (min-width: 640px) {
  .card-base {
    padding: 2.5rem;
  }
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

/* Ensure Graphik is used if not set globally */
.font-graphik {
  font-family: 'Graphik Trial', sans-serif;
}
</style>
