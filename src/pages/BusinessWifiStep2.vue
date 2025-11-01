<template>
  <div class="font-graphik py-16 px-4 sm:px-6 lg:px-8 bg-white">

    <div class="max-w-7xl mx-auto text-center mb-16">
      <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
        Our Product Stack
      </h2>
      <p class="text-xl text-gray-600">
        Transform your operations with custom network solutions built for scale.
      </p>
    </div>

    <div class="max-w-7xl mx-auto space-y-20">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="lg:pr-8">
          <h3 class="product-title">Infrastructure as a Service (IaaS)</h3>
          <p class="product-description">
            Power your business with scalable, secure, on-demand infrastructure. At Suburban, our IaaS offering delivers the fundamental compute, network and storage resources you need — available on demand, over the internet, and on a flexible pay-as-you-go basis.
          </p>
          <a href="#" class="btn-read-more">
            More Details
            <span class="ml-2">→</span>
          </a>
        </div>
        <div class="relative rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://via.placeholder.com/600x400/FEE2E2/B91C1C?text=IaaS+Image"
            alt="IT professionals monitoring server systems"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="lg:order-2 lg:pl-8">
          <h3 class="product-title">Suburban Cloud</h3>
          <p class="product-description">
            Nigeria’s truly **hyperlocal cloud service** delivery platform provides compute and storage services to ensure that your business acquires the most advanced functionalities and capabilities at the best cost.
          </p>
          <a href="#" class="btn-read-more">
            Read more
            <span class="ml-2">→</span>
          </a>
        </div>
        <div class="lg:order-1 relative rounded-xl overflow-hidden shadow-2xl">
          <div class="grid grid-cols-2 grid-rows-2 gap-2 p-2 bg-gray-100">
            <img src="https://via.placeholder.com/280x180/FEE2E2/B91C1C?text=Photo+1" alt="Business meeting" class="col-span-1 row-span-2 w-full h-full object-cover rounded-lg" />
            <img src="https://via.placeholder.com/280x90/FEE2E2/B91C1C?text=Photo+2" alt="Woman smiling at a conference" class="col-span-1 row-span-1 w-full h-full object-cover rounded-lg" />
            <img src="https://via.placeholder.com/280x90/FEE2E2/B91C1C?text=Photo+3" alt="Group of people attending an event" class="col-span-1 row-span-1 w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="lg:pr-8">
          <h3 class="product-title">Managed Services</h3>
          <p class="product-description">
            In a world where digital systems power every business decision, managing technology is no longer optional — it’s strategic. Suburban’s Managed Services deliver the expertise, tools, and network you need to keep your operations secure, reliable and future-ready.
          </p>
          <a href="#" class="btn-read-more">
            Read more
            <span class="ml-2">→</span>
          </a>
        </div>
        <div class="relative rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://via.placeholder.com/600x400/FEE2E2/B91C1C?text=Managed+Services+Image"
            alt="Man interacting with a digital interface"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// No specific script logic needed for this static component.
</script>

<style scoped>
/* Ensure Graphik is used if not set globally */
.font-graphik {
  font-family: 'Graphik Trial', sans-serif;
}

.product-title {
  @apply text-3xl sm:text-4xl font-bold text-gray-900 mb-4;
}

.product-description {
  @apply text-lg text-gray-600 leading-relaxed mb-6;
}

.btn-read-more {
  /* This style replicates the rounded, pinkish-red button with a subtle shadow */
  @apply inline-flex items-center justify-center rounded-full py-3 px-6 text-lg font-medium text-white shadow-lg
         bg-gradient-to-r from-red-500 to-pink-500
         hover:from-red-600 hover:to-pink-600 transition duration-150 ease-in-out;
}
</style>
