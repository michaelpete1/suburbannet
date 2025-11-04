<template>
  <section id="request-form-step-2" class="bg-white font-sans mt-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
      <!-- Header -->
      <div class="flex items-center text-red-600 font-semibold mb-6 space-x-3">
        <button
          type="button"
          class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-red-200 text-red-600 hover:bg-red-50 transition"
          @click="goBack"
          aria-label="Go back to previous step"
        >
          <span aria-hidden="true">←</span>
        </button>
        <span class="text-sm">Step 2 of 3</span>
      </div>

      <div class="max-w-3xl">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Tell us what you need — <span class="text-red-600">we'll handle the rest.</span>
        </h2>
      </div>

        <div class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <!-- Left: Form -->
          <form @submit.prevent="submitStep" class="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Service / Product -->
              <div class="sm:col-span-2">
                <label for="serviceType" class="text-sm font-medium text-gray-700 mb-2 block">Suburban Products or Services</label>
                <select
                  id="serviceType"
                  v-model="serviceType"
                  class="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white text-sm"
                  required
                >
                  <option value="" disabled>Select a product/service</option>
                  <option v-for="opt in serviceOptions" :key="opt.id" :value="opt.id">{{ opt.title }}</option>
                </select>
              </div>

              <div>
                <label for="firstName" class="text-sm font-medium text-gray-700 mb-2 block">First name</label>
                <input id="firstName" v-model="firstName" type="text" class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm" placeholder="Divine" required />
              </div>

              <div>
                <label for="lastName" class="text-sm font-medium text-gray-700 mb-2 block">Last name</label>
                <input id="lastName" v-model="lastName" type="text" class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm" placeholder="Chukwudi" required />
              </div>

              <div>
                <label for="phone" class="text-sm font-medium text-gray-700 mb-2 block">Phone number</label>
                <input id="phone" v-model="phone" type="tel" class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm" placeholder="+234 801 000 0000" required />
              </div>

              <div>
                <label for="company" class="text-sm font-medium text-gray-700 mb-2 block">Company / Organization</label>
                <input id="company" v-model="company" type="text" class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm" placeholder="Company name" />
              </div>

              <div>
                <label for="sector" class="text-sm font-medium text-gray-700 mb-2 block">Sector</label>
                <select id="sector" v-model="sector" class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm">
                  <option value="" disabled>Select sector</option>
                  <option v-for="s in sectorOptions" :key="s" :value="s">{{ s }}</option>
                </select>
              </div>

              <div>
                <label for="segment" class="text-sm font-medium text-gray-700 mb-2 block">Select Segment</label>
                <select id="segment" v-model="segment" class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm">
                  <option value="" disabled>Select segment</option>
                  <option v-for="seg in segmentOptions" :key="seg" :value="seg">{{ seg }}</option>
                </select>
              </div>

              <div class="sm:col-span-2">
                <label for="installation" class="text-sm font-medium text-gray-700 mb-2 block">Installation Location</label>
                <input id="installation" v-model="installation" type="text" class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm" placeholder="Street, City, State / Area" />
              </div>

              <div class="sm:col-span-2">
                <label for="additional" class="text-sm font-medium text-gray-700 mb-2 block">Additional details (optional)</label>
                <textarea id="additional" v-model="additional" rows="3" class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm" placeholder="Any specific requirements..."></textarea>
              </div>
            </div>

            <div class="mt-6">
              <button
                type="submit"
                :disabled="!isValid"
                class="w-full rounded-full bg-red-600 py-3 text-lg font-bold text-white shadow-lg hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                Continue
              </button>
            </div>

            <p class="text-xs text-gray-400 text-center mt-3">100% secured. No hidden fees.</p>
          </form>

          <!-- Right: Carousel -->
          <aside class="hidden lg:block">
            <div class="relative overflow-hidden rounded-2xl bg-cover bg-center min-h-[520px]" style="background-image: url('/logos/BG Frame.png');">
              <div class="absolute inset-0 bg-black/30 animate-fade"></div>
              <div class="absolute inset-0 flex flex-col items-center justify-end gap-8 p-8 text-white"
                @mouseenter="pauseCarousel"
                @mouseleave="resumeCarousel">
                <div class="w-full max-w-[440px] flex-grow flex items-end justify-center">
                  <Transition name="soft-fade" mode="out-in">
                    <picture :key="currentSlide.id + '-image'">
                      <source :srcset="currentSlide.image.desktop" media="(min-width: 1024px)" />
                      <img
                        :src="currentSlide.image.mobile"
                        :alt="currentSlide.image.alt"
                        class="w-full h-auto max-h-[420px] rounded-3xl border border-white/40 shadow-2xl shadow-black/30 object-contain bg-white/10"
                        loading="lazy"
                      />
                    </picture>
                  </Transition>
                </div>

                <div class="w-[calc(100%+4rem)] -mx-8">
                  <div :key="currentSlide.id + '-sponsors'" class="relative overflow-hidden rounded-none bg-white border border-white/60 shadow-lg">
                    <div class="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
                    <div class="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
                    <div class="px-8 py-4">
                      <div class="relative overflow-hidden">
                        <div class="sponsor-marquee" :style="{ '--gap': '2.5rem' }">
                          <div class="sponsor-track" :key="currentSlide.id + '-track-1'">
                            <img
                              v-for="sponsor in currentSlide.sponsors"
                              :key="currentSlide.id + '-track-1-' + sponsor.alt"
                              :src="sponsor.src"
                              :alt="sponsor.alt"
                              class="h-8 w-auto opacity-90 hover:opacity-100 transition"
                            />
                          </div>
                          <div class="sponsor-track" :key="currentSlide.id + '-track-2'">
                            <img
                              v-for="sponsor in currentSlide.sponsors"
                              :key="currentSlide.id + '-track-2-' + sponsor.alt"
                              :src="sponsor.src"
                              :alt="sponsor.alt"
                              class="h-8 w-auto opacity-90 hover:opacity-100 transition"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Transition name="soft-fade" mode="out-in">
                  <div class="text-center pb-4" :key="currentSlide.id + '-copy'">
                    <h3 class="text-3xl font-bold mb-3">{{ currentSlide.title }}</h3>
                    <p class="text-lg opacity-90">{{ currentSlide.description }}</p>
                    <div class="flex justify-center mt-6 space-x-2">
                      <button
                        v-for="(slide, index) in carouselSlides"
                        :key="slide.id"
                        type="button"
                        :aria-label="'Go to slide ' + (index + 1)"
                        @click="goToSlide(index)"
                        class="w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                        :class="index === activeSlide ? 'bg-white w-6' : 'bg-white/40'"
                      ></button>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </aside>

          <!-- Mobile view -->
          <aside class="lg:hidden mt-10">
            <picture>
              <img
                :src="currentSlide.image.mobile"
                :alt="currentSlide.image.alt"
                class="w-full rounded-2xl shadow-xl border border-gray-200 object-cover"
              />
            </picture>
            <div class="mt-6 text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/60">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ currentSlide.title }}</h3>
              <p class="text-base text-gray-600">{{ currentSlide.description }}</p>
            </div>
          </aside>
        </div>

        <!-- trust logos row -->
        <div class="mt-10 border-t border-gray-100 pt-8">
          <div class="max-w-5xl mx-auto">
            <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider text-center mb-6">THEY CHOOSE SUBURBAN</h3>
            <div class="overflow-x-auto hide-scrollbar">
              <div class="flex space-x-8 pb-4 animate-scroll">
                <img v-for="logo in trackLogos" :key="logo" :src="logo" :alt="`Partner Logo`" class="h-6 flex-shrink-0 opacity-60 hover:opacity-100 transition" />
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits(['prev-step', 'next-step'])

// Carousel slides data
const carouselSlides = ref([
  {
    id: 'connectivity',
    title: 'Now is the Time!',
    description: "Let's bring next-generation fiber to your location and beyond. Request service or recommend Suburban Fiber today.",
    image: {
      desktop: '/logos/hero-image2.png',
      mobile: '/logos/hero-image2.png',
      alt: 'Customer using Suburban Fiber services',
    },
    sponsors: [
      { src: '/logos/cisco.png', alt: 'Cisco' },
      { src: '/logos/tplink.png', alt: 'TP-Link' },
      { src: '/logos/hauwei.png', alt: 'Huawei' },
    ],
  },
  {
    id: 'business-internet',
    title: 'Power Your Operations',
    description: 'High-availability bandwidth, proactive monitoring, and expert support to keep your teams connected 24/7.',
    image: {
      desktop: '/logos/man.png',
      mobile: '/logos/man.png',
      alt: 'Business professionals collaborating with fiber connectivity',
    },
    sponsors: [
      { src: '/logos/microsoft.png', alt: 'Microsoft' },
      { src: '/logos/cisco.png', alt: 'Cisco' },
      { src: '/logos/tplink.png', alt: 'TP-Link' },
    ],
  },
  {
    id: 'business-dual-play',
    title: 'Business Dual Play',
    description: 'Power your Business with speed and Stability — Designed for small and growing businesses that need reliable connectivity to stay productive.',
    image: {
      desktop: '/logos/woman.png',
      mobile: '/logos/woman.png',
      alt: 'Customer enjoying managed connectivity services',
    },
    sponsors: [
      { src: '/logos/hauwei.png', alt: 'Huawei' },
      { src: '/logos/microsoft.png', alt: 'Microsoft' },
      { src: '/logos/tplink.png', alt: 'TP-Link' },
    ],
  },
])

// Carousel control variables
const activeSlide = ref(0)
const currentSlide = computed(() => carouselSlides.value[activeSlide.value])
let carouselTimer = null
const CAROUSEL_INTERVAL = 6000

// Carousel control functions
const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % carouselSlides.value.length
}

const scheduleNextSlide = () => {
  stopCarousel()
  if (carouselSlides.value.length <= 1) return
  carouselTimer = setTimeout(() => {
    nextSlide()
    scheduleNextSlide()
  }, CAROUSEL_INTERVAL)
}

const stopCarousel = () => {
  if (carouselTimer) {
    clearTimeout(carouselTimer)
    carouselTimer = null
  }
}

const startCarousel = () => {
  scheduleNextSlide()
}

const pauseCarousel = () => {
  stopCarousel()
}

const resumeCarousel = () => {
  scheduleNextSlide()
}

const goToSlide = (index) => {
  activeSlide.value = index
  scheduleNextSlide()
}

onMounted(startCarousel)
onBeforeUnmount(stopCarousel)

const serviceOptions = ref([
  { id: 'dark-fiber', title: 'Dark Fiber' },
  { id: 'managed-wifi', title: 'Managed WiFi' },
  { id: 'cloud-connect', title: 'Cloud Connect' },
  { id: 'enterprise-fibre', title: 'Enterprise Fiber' }
])

const sectorOptions = ref(['Financial Services', 'Education', 'Healthcare', 'Government', 'Enterprise'])
const segmentOptions = ref(['Bank', 'SME', 'Enterprise', 'Retail'])

const serviceType = ref('')
const firstName = ref('')
const lastName = ref('')
const phone = ref('')
const company = ref('')
const sector = ref('')
const segment = ref('')
const installation = ref('')
const additional = ref('')

const isValid = computed(() => {
  return serviceType.value && firstName.value.trim() && lastName.value.trim() && phone.value.trim()
})

const goBack = () => emit('prev-step')

const submitStep = () => {
  if (!isValid.value) return
  emit('next-step', {
    serviceType: serviceType.value,
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    phone: phone.value.trim(),
    company: company.value.trim(),
    sector: sector.value,
    segment: segment.value,
    installation: installation.value.trim(),
    additional: additional.value.trim()
  })
}

// partners / carousel logos (reused across pages)
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

const trackLogos = computed(() => [...logos, ...logos])
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Transition Styles */
.soft-fade-enter-active,
.soft-fade-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.soft-fade-enter-from,
.soft-fade-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

/* Marquee Styles */
.sponsor-marquee {
  position: relative;
  display: flex;
  width: max-content;
  gap: var(--gap, 2.5rem);
  animation: sponsor-scroll 14s linear infinite;
}

.animate-fade {
  animation: hero-fade 6s ease-in-out infinite alternate;
}

.sponsor-track {
  display: flex;
  gap: var(--gap, 2.5rem);
}

.sponsor-marquee:hover {
  animation-play-state: paused;
}

@keyframes sponsor-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes hero-fade {
  0% {
    opacity: 0.65;
  }
  100% {
    opacity: 0.9;
  }
}
</style>
