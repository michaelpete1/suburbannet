<template>
  <div class="font-graphik py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BackButton class="mb-6" />
    </div>

    <div class="max-w-6xl mx-auto rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl"
         :class="gradientClasses">

      <h2 class="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        Managed Services
      </h2>
      <p class="mt-4 text-xl sm:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
        In today's digital world, managing technology is **strategic—not optional**. Suburban Managed Services provides the expertise, tools, and network to keep your operations secure, reliable, and future-ready.
      </p>
    </div>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

      <div class="card-base">
        <div>
          <h3 class="text-2xl font-bold text-slate-800 mb-4">Technical Support</h3>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            Getting a skilled professional is difficult and when you find one, often too expensive, but you still need them for your business. With the lowest market rate and highly skilled and professional delivery of services, we attend to your business technology needs. We provide technical support for the full spectrum of your I.T needs.
          </p>
        </div>
        <div class="mt-auto">
          <RouterLink :to="{ path: '/', hash: '#request-form' }" class="btn-managed-red" @click="setProduct('Managed Services')">
            Request Services
          </RouterLink>
        </div>
      </div>

      <div class="card-base">
        <div>
          <h3 class="text-2xl font-bold text-slate-800 mb-4">Professional Services</h3>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            With over **20 Years' experience** in the Telecommunication and Internet Service Industry, our professional services avail you the benefit of all our learning over the years.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            We would guide your project to stay on the course of **Integrity, Excellence, and Profitability**.
          </p>
        </div>
        <div class="mt-auto">
          <RouterLink :to="{ path: '/', hash: '#request-form' }" class="btn-managed-red" @click="setProduct('Managed Services')">
            Request Services
          </RouterLink>
        </div>
      </div>



    </div>

    <!-- Partners Carousel -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-20">
      <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider text-center mb-12">
        THEY CHOOSE SUBURBAN
      </h3>
      <div class="relative w-full overflow-hidden py-12">
        <div class="flex items-center justify-center space-x-16 animate-scroll">
          <img v-for="logo in trackLogos" :key="logo" :src="logo" :alt="`Partner Logo`" class="h-14 w-auto object-contain flex-shrink-0 opacity-70 hover:opacity-100 transition duration-300 max-w-full">
        </div>
      </div>
    </div>

    <div class="text-center py-4 text-xs text-gray-500 border-t border-gray-100">
      <p>Suburban © 2025. All rights reserved.</p>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import BackButton from '../components/BackButton.vue'

const setProduct = (product) => {
  // Store the selected product in sessionStorage or localStorage
  sessionStorage.setItem('selectedProduct', product)
}

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

.btn-managed-red {
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

.btn-managed-red:hover {
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
    transform: translateX(calc(-50% - 3rem)); /* Adjust for spacing between duplicated sets */
  }
}

.animate-scroll {
  animation: scroll 40s linear infinite;
  min-width: max-content;
}

/* Ensure Graphik is used if not set globally */
.font-graphik {
  font-family: 'Graphik Trial', sans-serif;
}
</style>
