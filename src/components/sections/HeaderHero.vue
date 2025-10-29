<template>
  <div class="header-hero-section font-sans">
    <!-- Mobile logo bar below navbar -->
    <div class="lg:hidden bg-white border-b border-gray-100 px-4 py-2 flex items-center justify-start">
      <img src="/logos/suburban logo.png" alt="Suburban Logo" class="h-5 sm:h-6 w-auto" />
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Get Connected with
            <span class="block text-gray-900">Suburban Fiber</span>
          </h1>
          <p class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl">
            We bring dedicated high-speed fiber internet straight to your doorstep. Fill the forms to get started, our team
            will reach out within 24 hours. You can also enter your contact email and we’ll reach out to you.
          </p>

          <div class="mt-8">
            <div class="flex items-stretch rounded-full shadow-sm bg-white border border-gray-200 overflow-hidden max-w-xl">
              <input
                v-model="email"
                type="email"
                placeholder="Enter contact Email"
                class="flex-1 px-4 sm:px-5 py-3 sm:py-4 outline-none text-gray-900 placeholder-gray-400 text-sm sm:text-base"
              />
              <button
                @click="sendRequest"
                class="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base"
              >
                Send Request
              </button>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="relative mx-auto w-full max-w-[372px]">
            <div class="relative h-[340px] rounded-[24px] shadow-2xl">
              <img
                src="/logos/hero-image.jpg"
                alt="Customer enjoying Suburban Fiber service"
                class="h-[340px] w-[372px] object-cover  rounded-[24px] shadow-2xl shadow-black/15"
              />

              <div class="pointer-events-none absolute inset-0">
                <div class="absolute -top-6 -right-24 flex flex-col items-end gap-3 w-[220px]">
                  <div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-lg rounded-full px-5 py-2 text-[12px] font-medium text-gray-700 border border-white/60">
                    <span class="inline-block h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                    Fiber request
                  </div>
                </div>

                <div class="absolute top-32 -right-32 w-[280px] rounded-[26px] bg-white/80 backdrop-blur-sm shadow-[0px_18px_40px_rgba(15,23,42,0.12)] px-5 py-3">
                  <div class="flex items-start gap-3">
                    <div class="h-10 w-10 rounded-full bg-gradient-to-br from-[#FF5A6F] to-[#FF7D9E] text-white flex items-center justify-center text-sm font-semibold shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-4 w-4"
                      >
                        <path d="M5 3v18l14-9-14-9z" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <p class="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.22em]">Installation Update</p>
                      <div class="flex items-center justify-between mt-1.5">
                        <span class="text-sm font-semibold text-gray-900">In progress</span>
                        <span class="text-xs font-semibold text-gray-500">{{ installationProgress }}80%</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3 h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div
                      class="h-full rounded-full bg-gradient-to-r from-pink-500 to-red-500"
                      :style="{ width: installationProgress + '%' }"
                    ></div>
                  </div>
                </div>

                <div class="absolute top-6 -right-24 w-[184px] rounded-[26px] bg-[#CF0A2C]/85 text-white shadow-[0_20px_48px_rgba(207,10,44,0.28)] flex items-center px-3.5 py-3 gap-3 backdrop-blur-sm border border-white/15">
                  <div class="h-10 w-10 rounded-full bg-[#FECF2F]/90 flex items-center justify-center shadow-[0_10px_20px_rgba(254,207,47,0.28)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#CF0A2C"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-6 w-6"
                    >
                      <path d="M13 2 L3 14 h7 l-1 8 10-12 h-7z" />
                    </svg>
                  </div>
                  <div class="flex flex-col leading-tight">
                    <span class="text-[10px] font-semibold tracking-[0.32em] text-white/80 uppercase">Speed</span>
                    <span class="text-lg font-black text-white mt-0.5">10 Gbps</span>
                  </div>
                </div>

                <div class="absolute -bottom-4 -right-24 w-[280px] rounded-[26px] bg-white/80 backdrop-blur-sm shadow-[0px_18px_40px_rgba(15,23,42,0.12)] px-5 py-3">
                  <div class="flex items-start gap-4">
                    <div class="h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold shadow-md">SF</div>
                    <div class="flex-1">
                      <p class="text-base font-semibold text-gray-900 leading-tight">Assigned to John Ayo</p>
                      <p class="text-sm text-gray-500 mt-0.5">Project Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 sm:mt-14 text-center">
        <h3 class="text-xs sm:text-sm font-semibold uppercase text-gray-500 mb-5 sm:mb-8 tracking-widest">
          They Choose Suburban
        </h3>
        <div class="marquee-container marquee-paused overflow-hidden py-3 sm:py-4">
          <div class="marquee-track gap-8 sm:gap-12 items-center">
            <img
              v-for="(logo, idx) in trackLogos"
              :key="idx + '-' + logo.alt"
              :src="logo.src"
              :alt="logo.alt"
              class="inline-block h-6 sm:h-8 md:h-10 mx-4 sm:mx-6 opacity-80 hover:opacity-100 transition grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const email = ref('')
// Logos for the "They Choose Suburban" strip. Place matching files in /public/logos/
const logos = [
  { src: '/logos/cbn.png', alt: 'Central Bank of Nigeria' },
  { src: '/logos/nihq.png', alt: 'Nigerian Army Headquarters' },
  { src: '/logos/npa.png', alt: 'Nigerian Ports Authority' },
  { src: '/logos/tetfund.png', alt: 'TETFund' },
  { src: '/logos/nexim.png', alt: 'NEXIM' },
   { src: '/logos/israel embassy.png', alt: 'IE' },
]

// Duplicate the logos to create a seamless looping track
const trackLogos = computed(() => [...logos, ...logos])

const sendRequest = () => {
  const el = document.querySelector('#request-form')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
</style>
