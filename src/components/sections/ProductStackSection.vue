<template>
  <div class="py-20 px-6 sm:px-8 lg:px-12 font-graphik bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full"></div>
      <div class="absolute bottom-20 right-10 w-48 h-48 bg-blue-200 rounded-full"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200 rounded-full"></div>
    </div>

    <div class="max-w-3xl mx-auto text-center mb-8 sm:mb-12 relative z-10">
      <div class="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-red-100 rounded-full mb-4 sm:mb-6 animate-pulse">
        <svg class="w-6 sm:w-8 h-6 sm:h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      </div>
      <h2 class="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 animate-fade-in-up">
        Our Product Stack
      </h2>
      <p class="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 animate-fade-in-up animation-delay-200">
        Transform your operations with custom network solutions built for scale.
      </p>
    </div>

    <div class="max-w-7xl mx-auto space-y-20 sm:space-y-40 relative z-10">
      <!-- IaaS Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center animate-on-scroll">
        <div class="lg:order-1 animate-slide-in-left">
          <div class="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
            Infrastructure
          </div>
          <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Infrastructure as a Service (IaaS)
          </h3>
          <p class="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            Power your business with scalable, secure, on-demand infrastructure. At Suburban, our IaaS offering delivers the fundamental compute, network, and storage over the internet, and available on flexible pay-as-you-go basis.
          </p>
          <router-link to="/infrastructure" class="group inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            More Details
            <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>
        <div class="lg:order-2 animate-slide-in-right">
          <div class="relative group">
            <div class="image-container rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <img src="/logos/staff.png" alt="Infrastructure as a Service" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div class="text-white text-center">
                  <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  <p class="text-sm font-medium">Scalable Infrastructure</p>
                </div>
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500 rounded-full opacity-20 animate-bounce"></div>
          </div>
        </div>
      </div>

      <!-- Suburban Cloud Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20 xl:gap-40 2xl:gap-48 animate-on-scroll">
        <div class="lg:order-2 animate-slide-in-right">
          <!-- Mobile layout: text first, then images -->
          <div class="lg:hidden">
            <!-- Text content -->
            <div class="mb-8">
              <div class="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Cloud Services
              </div>
              <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Suburban Cloud
              </h3>
              <p class="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Nigeria's truly hyperlocal cloud service delivery platform provides compute and storage services to ensure that your business acquires the latest advanced functionalities.
              </p>
              <a href="https://suburbancloud.ng" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Visit Suburban Cloud
                <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            <!-- Images below text -->
            <div class="flex flex-col gap-6 sm:gap-8">
              <!-- WOMANBLUE image at top -->
              <div class="w-full -mx-2 sm:-mx-4">
                <div class="aspect-w-16 aspect-h-9 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative group">
                  <img src="/logos/WOMANBLUE.png" alt="Suburban Cloud Meeting" class="w-full h-full object-cover">
                  <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div class="text-white text-center">
                      <svg class="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      <p class="text-xs font-medium">Team Collaboration</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Bottom row - Two images side by side -->
              <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 -mx-2 sm:-mx-4">
                <div class="w-full sm:w-1/2">
                  <div class="aspect-w-1 aspect-h-1 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative group">
                    <img src="/logos/CEO.png" alt="Suburban Cloud Team 2" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div class="text-white text-center">
                        <svg class="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                        </svg>
                        <p class="text-xs font-medium">Cloud Computing</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full sm:w-1/2">
                  <div class="aspect-w-1 aspect-h-1 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative group">
                    <img src="/logos/GROUPCEO.png" alt="Suburban Cloud Team 3" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div class="text-white text-center">
                        <svg class="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                        </svg>
                        <p class="text-xs font-medium">Data Storage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Desktop layout: original side-by-side (smaller height) -->
          <div class="hidden lg:flex gap-4 sm:gap-6 h-48 sm:h-56">
            <!-- Left side - Two square images stacked vertically -->
            <div class="w-1/2 h-full flex flex-col gap-2 sm:gap-4">
              <div class="h-1/2 image-container rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative group">
                <img src="/logos/CEO.png" alt="Suburban Cloud Team 1" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2 sm:pb-4">
                  <div class="text-white text-center">
                    <svg class="w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                    </svg>
                    <p class="text-xs font-medium">Cloud Computing</p>
                  </div>
                </div>
              </div>
              <div class="h-1/2 image-container rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animation-delay-200 relative group">
                <img src="/logos/GROUPCEO.png" alt="Suburban Cloud Team 2" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2 sm:pb-4">
                  <div class="text-white text-center">
                    <svg class="w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                    </svg>
                    <p class="text-xs font-medium">Data Storage</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Right side - One larger image -->
            <div class="w-1/2 h-full flex-shrink-0">
              <div class="image-container h-full rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animation-delay-400 relative group">
                <img src="/logos/WOMANBLUE.png" alt="Suburban Cloud Meeting" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2 sm:pb-4">
                  <div class="text-white text-center">
                    <img src="/icons/connectivity.svg" class="w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-1" />
                    <p class="text-xs font-medium">Team Collaboration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:order-2 animate-slide-in-right">
          <!-- Text content only for desktop -->
          <div class="hidden lg:block max-w-md mr-4 lg:mr-8 2xl:mr-16">
            <div class="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Cloud Services
            </div>
            <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Suburban Cloud
            </h3>
            <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Nigeria's truly hyperlocal cloud service delivery platform provides compute and storage services to ensure that your business acquires the latest advanced functionalities.
            </p>
            <div class="flex justify-end">
              <a href="https://suburbancloud.ng" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center px-8 py-3.5 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                <span>Visit Suburban Cloud</span>
                <svg class="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Managed Services Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center animate-on-scroll">
        <div class="lg:order-1 animate-slide-in-left">
          <div class="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Management
          </div>
          <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Managed Services
          </h3>
          <p class="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            In a world where digital systems power every business decision, managing technology is no longer optional — it's strategic. Suburban's Managed Services deliver the expertise, tools, and network you need to keep your future-ready.
          </p>
          <router-link to="/managed-services" class="group inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Learn More
            <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>
        <div class="lg:order-2 animate-slide-in-right">
          <div class="relative group">
            <div class="image-container managed-image-container rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
            <img src="/logos/About Image.png" alt="Managed Services" class="w-full h-full object-cover scale-75">
              <div class="absolute inset-0 bg-gradient-to-t from-green-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div class="text-white text-center">
                  <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p class="text-sm font-medium">Expert Management</p>
                </div>
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full opacity-20 animate-bounce animation-delay-500"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

onMounted(() => {
  initScrollAnimations()
})
</script>

<style scoped>
.image-container {
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
}

.managed-image-container {
  height: 250px;
}

.image-container img {
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}

.image-container img {
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}

/* Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

/* Intersection Observer for scroll animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}

.animate-on-scroll.animate {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .space-y-40 > * + * {
    margin-top: 5rem;
  }

  .grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .lg\\:order-1,
  .lg\\:order-2 {
    order: initial;
  }

  .image-container {
    aspect-ratio: 16 / 9;
    height: auto;
    min-height: 200px;
  }

  .col-span-2 {
    grid-column: span 1;
  }

  .gap-16 {
    gap: 2rem;
  }

  .gap-6 {
    gap: 1rem;
  }

  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .px-12 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (max-width: 640px) {
  .py-20 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .space-y-20 > * + * {
    margin-top: 3rem;
  }

  .space-y-40 > * + * {
    margin-top: 3rem;
  }

  .gap-8 {
    gap: 1.5rem;
  }

  .gap-16 {
    gap: 1.5rem;
  }

  .px-6 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .px-8 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .px-12 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .image-container {
    min-height: 180px;
  }
}
</style>


