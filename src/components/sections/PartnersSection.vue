<script setup>
const partners = [
  { name: 'Cisco', tag: 'Network Infrastructure', logo: '/logos/cisco.png' },
  { name: 'TP-Link', tag: 'Connectivity Hardware', logo: '/logos/tplink.png' },
  { name: 'Huawei', tag: 'Enterprise Solutions', logo: '/logos/hauwei.png' },
  { name: 'Microsoft', tag: 'Cloud & Productivity', logo: '/logos/microsoft.png' },
]
</script>

<template>
  <div
    class="partners-section bg-gray-900 text-white py-20 font-sans relative overflow-hidden"
    style="background-image: url('/logos/connect.png'); background-size: cover; background-position: center;"
  >
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
      <h2 class="text-4xl lg:text-5xl font-extrabold text-white mb-4">Meet Our Partners</h2>
      <p class="text-lg text-gray-400 mb-16 max-w-3xl mx-auto">We collaborate with leading global and local organizations to deliver world-class fiber infrastructure, cloud connectivity, and enterprise network solutions across Nigeria.</p>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <a
          v-for="p in partners"
          :key="p.name"
          href="#"
          class="p-6 rounded-xl transition-all duration-300 border border-gray-700 hover:border-red-600 hover:-translate-y-0.5 hover:shadow-lg/20 flex flex-col items-center text-center"
          style="background-color: rgba(255, 255, 255, 0.05);"
        >
          <div class="flex items-center justify-center w-full h-12 mb-6">
            <img :src="p.logo" :alt="p.name" class="partner-logo" />
          </div>
          <span class="text-lg font-bold mb-2">{{ p.name }}</span>
          <p class="text-sm text-gray-400">{{ p.tag }}</p>
        </a>
      </div>
      <button class="mt-16 bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition">Partner with us</button>
    </div>
  </div>
</template>

<style scoped>
.partner-logo {
  max-height: 2.5rem;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.88;
  transition: opacity 0.2s ease;
}

a:hover .partner-logo {
  opacity: 1;
}
</style>
