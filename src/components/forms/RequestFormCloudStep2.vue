<template>
  <div class="font-graphik py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">

    <div class="max-w-7xl mx-auto mb-12">
      <BackButton class="mb-4" />
      <p class="text-gray-600 text-sm font-semibold mb-2">
        <span class="text-red-600">●</span> Step 2 of 3
      </p>
      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
        Nigeria's Sovereign Cloud for a <br>
        <span class="text-red-600">Digital Africa</span>
      </h1>
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

      <div class="service-card" @click="selectService('email-hosting')" :class="{ 'ring-2 ring-red-500': selectedService === 'email-hosting' }">
        <span class="service-tag">Suburban Cloud</span>
        <h3 class="card-title">Email Hosting</h3>
        <p class="card-description">
          Professional, secure email for your business domain. Stay connected with enterprise-grade reliability and zero downtime.
        </p>
        <div class="mt-auto">
          <button class="btn-card-primary" @click.stop="selectService('email-hosting')">Setup Email</button>
        </div>
      </div>

      <div class="service-card" @click="selectService('dedicated-vps')" :class="{ 'ring-2 ring-red-500': selectedService === 'dedicated-vps' }">
        <span class="service-tag">Suburban Cloud</span>
        <h3 class="card-title">Dedicated VPS</h3>
        <p class="card-description">
          High-performance virtual servers with full control and scalability. Perfect for developers, enterprises, and mission-critical workloads.
        </p>
        <div class="mt-auto">
          <button class="btn-card-primary" @click.stop="selectService('dedicated-vps')">Deploy Now</button>
        </div>
      </div>


      <div class="service-card" @click="selectService('shared-hosting')" :class="{ 'ring-2 ring-red-500': selectedService === 'shared-hosting' }">
        <span class="service-tag bg-red-100 text-red-600">Suburban Cloud</span>
        <h3 class="card-title">Shared Hosting</h3>
        <p class="card-description">
          Reliable, secure, and affordable web hosting for startups and small businesses. Get your website live in minutes.
        </p>
        <div class="mt-auto">
          <button class="btn-card-primary" @click.stop="selectService('shared-hosting')">Get Started</button>
        </div>
      </div>

      <div class="service-card">
        <span class="service-tag">Suburban Cloud</span>
        <h3 class="card-title">Virtual Machine</h3>
        <p class="card-description">
          Power your applications with flexible, on-demand virtual machines. Scale while maintaining speed and data sovereignty.
        </p>
        <div class="mt-auto">
          <a href="#" class="btn-card-primary">Launch VM</a>
        </div>
      </div>

      <div class="service-card">
        <span class="service-tag">Suburban Cloud</span>
        <h3 class="card-title">Website Brand</h3>
        <p class="card-description">
          Bring your brand to life online with a professional, fast-loading website. Custom domains, responsive design, and cloud-backed performance.
        </p>
        <div class="mt-auto">
          <a href="#" class="btn-card-primary">Build my Brand Website</a>
        </div>
      </div>

      <div class="service-card">
        <span class="service-tag">Suburban Cloud</span>
        <h3 class="card-title">Website</h3>
        <p class="card-description">
          Build and host your website on Nigeria's sovereign cloud infrastructure. Optimized for performance, security, and scalability.
        </p>
        <div class="mt-auto">
          <a href="#" class="btn-card-primary">Create Website</a>
        </div>
      </div>

      <div class="service-card">
        <span class="service-tag">Suburban Cloud</span>
        <h3 class="card-title">Register Domain</h3>
        <p class="card-description">
          Secure your online identity with a unique domain name today. Fast registration, full control, and local DNS management.
        </p>
        <div class="mt-auto">
          <a href="#" class="btn-card-primary">Register Now</a>
        </div>
      </div>

      <div class="service-card">
        <span class="service-tag">Suburban Cloud</span>
        <h3 class="card-title">Transfer Domain</h3>
        <p class="card-description">
          Move your domain to Suburban Cloud for better control and reliability. Seamless transfer with zero downtime and 24/7 support.
        </p>
        <div class="mt-auto">
          <a href="#" class="btn-card-primary">Transfer Domain</a>
        </div>
      </div>

      <div class="service-card">
        <span class="service-tag bg-purple-100 text-purple-600">Suburban Cloud</span>
        <h3 class="card-title">Cart</h3>
        <p class="card-description">
          Review your selections and proceed to checkout securely. Your cloud journey begins here — reliable, scalable, and local.
        </p>
        <div class="mt-auto">
          <a href="#" class="btn-card-primary">Complete Purchase</a>
        </div>
      </div>

    </div>

    <div class="max-w-7xl mx-auto mt-16 text-center">
      <button
        v-if="selectedService"
        @click="continueToStep3"
        class="bg-red-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:bg-red-700 transition duration-150 ease-in-out text-xl"
      >
        Continue
      </button>
      <button
        v-else
        class="bg-gray-400 text-white font-bold py-4 px-12 rounded-full shadow-lg cursor-not-allowed text-xl"
        disabled
      >
        Select a Service to Continue
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BackButton from '../BackButton.vue'

const router = useRouter()
const selectedService = ref('')

const selectService = (service) => {
  selectedService.value = service
}

const continueToStep3 = () => {
  if (selectedService.value) {
    router.push('/cloud-services-step-3')
  }
}
</script>

<style scoped>
/* Ensure Graphik is used if not set globally */
.font-graphik {
  font-family: 'Graphik Trial', sans-serif;
}

/* Reusable styles for the service cards */
.service-card {
  @apply bg-white rounded-xl shadow-md p-6 flex flex-col h-full;
}

.service-tag {
  @apply inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4;
}

.card-title {
  @apply text-xl font-bold text-gray-900 mb-2;
}

.card-description {
  @apply text-gray-600 text-base leading-relaxed mb-6 flex-grow; /* flex-grow ensures descriptions take up available space */
}

.btn-card-primary {
  @apply block w-full text-center rounded-full py-3 text-lg font-medium text-red-600 border border-gray-200 bg-gray-50
         hover:bg-gray-100 hover:border-gray-300 transition duration-150 ease-in-out;
}
</style>
