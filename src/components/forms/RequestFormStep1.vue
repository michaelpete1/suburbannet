<template>
  <section id="request-form" class="request-form-section bg-white font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20 grid lg:grid-cols-12 gap-8 sm:gap-12">
      <div class="lg:col-span-7">
        <div class="mb-8 sm:mb-10">
          <p class="text-red-600 font-semibold mb-2 flex items-center">
            <span class="rounded-full border-2 border-red-600 w-5 sm:w-6 h-5 sm:h-6 inline-flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">1</span>
            Step 1 of 3
          </p>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Tell us what you need — <span class="text-red-600">we'll handle the rest.</span>
          </h2>
        </div>

        <form @submit.prevent="submitStep1" class="space-y-6">
          <div class="space-y-3">
            <div>
              <label for="work-email" class="block text-sm font-semibold text-gray-700 mb-2">Work Email</label>
              <input type="email" id="work-email" v-model="formData.email" placeholder="Work email (required)" class="w-full p-4 border border-gray-300 rounded-xl transition-colors duration-200 ease-out focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 placeholder-gray-500" required aria-label="Work email" />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label for="first-name" class="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                <input type="text" id="first-name" v-model="formData.firstName" placeholder="First Name (required)" class="w-full p-4 border border-gray-300 rounded-xl transition-colors duration-200 ease-out focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 placeholder-gray-500" required aria-label="First Name" />
              </div>
              <div>
                <label for="last-name" class="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                <input type="text" id="last-name" v-model="formData.lastName" placeholder="Last Name (required)" class="w-full p-4 border border-gray-300 rounded-xl transition-colors duration-200 ease-out focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 placeholder-gray-500" required aria-label="Last Name" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label for="phone-number" class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <div class="flex border border-gray-300 rounded-xl transition-colors duration-200 ease-out focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-200 hover:border-red-500">
                  <label for="country-code" class="sr-only">Country Code</label>
                  <select id="country-code" class="p-4 border-r border-gray-300 rounded-l-xl bg-gray-50 appearance-none transition-colors duration-200 ease-out hover:border-red-500 focus:border-red-500 focus:outline-none text-gray-700">
                    <option value="+234">🇳🇬 +234</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                  </select>
                  <input type="tel" id="phone-number" v-model="formData.phoneNumber" placeholder="Phone number (required)" class="flex-grow p-4 bg-white rounded-r-xl transition-colors duration-200 ease-out focus:outline-none focus:border-red-500 hover:border-red-500 placeholder-gray-500" required aria-label="Phone number" />
                </div>
              </div>
              <div>
                <label for="organization" class="block text-sm font-semibold text-gray-700 mb-2">Company/Organization Name</label>
                <input type="text" id="organization" v-model="formData.organization" placeholder="Company/Organization name" class="w-full p-4 border border-gray-300 rounded-xl transition-colors duration-200 ease-out focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 placeholder-gray-500" aria-label="Company or Organization name" />
              </div>
            </div>
          </div>

          <div class="space-y-2 pt-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label for="sector" class="block text-sm font-semibold text-gray-700 mb-2">Sector</label>
                <select id="sector" v-model="formData.sector" class="w-full p-4 border border-gray-300 rounded-xl transition-colors duration-200 ease-out focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 text-gray-700 aria-label:text-gray-500" :class="{ 'text-gray-500': !formData.sector }">
                  <option disabled value="">Choose a Sector (required)</option>
                  <option>Technology</option>
                  <option>Consulting and Services</option>
                  <option>Security</option>
                  <option>Retail</option>
                  <option>Not for profit</option>
                  <option>Government/Diplomatic Missions</option>
                  <option>Education</option>
                  <option>Financial Services</option>
                  <option>Health</option>
                  <option>Hospitality</option>
                  <option>Media</option>
                </select>
              </div>
              <div>
                <label for="segment" class="block text-sm font-semibold text-gray-700 mb-2">Segment</label>
                <select id="segment" v-model="formData.segment" class="w-full p-4 border border-gray-300 rounded-xl transition-colors duration-200 ease-out focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 text-gray-700" :class="{ 'text-gray-500': !formData.segment }">
                  <option disabled value="">Select Segment (required)</option>
                  <option>Bank</option>
                  <option>Asset Management</option>
                  <option>Independent Services</option>
                  <option>Zendesk</option>
                  <option>Other</option>
                  <option>None</option>
                </select>
              </div>
            </div>

            <div>
              <label for="location" class="block text-sm font-semibold text-gray-700 mb-2">Address/Service Location</label>
              <input type="text" id="location" v-model="formData.location" placeholder="Address/Service Location (required)" class="w-full p-4 border border-gray-300 rounded-xl transition-colors duration-200 ease-out focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 placeholder-gray-500" required aria-label="Address or Service Location" />
            </div>

            <div>
              <label for="product" class="block text-sm font-semibold text-gray-700 mb-2">Choose a Product</label>
              <select id="product" v-model="formData.product" class="w-full p-4 border border-gray-300 rounded-xl transition-colors duration-200 ease-out focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 text-gray-700" :class="{ 'text-gray-500': !formData.product }">
                <option disabled value="">Choose a Product (required)</option>
                <option>Business Internet</option>
                <option>Business WIFI</option>
                <option>Cloud</option>
                <option>Managed Services</option>
              </select>
            </div>
          </div>

          <fieldset class="space-y-3 pt-4">
            <legend class="sr-only">Consent Options</legend>
            <label for="marketing-consent" class="flex items-start text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" id="marketing-consent" v-model="formData.marketingConsent" class="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 flex-shrink-0" />
              <span class="ml-3">Yes, I would like to receive marketing communications about Suburban products, content and events.</span>
            </label>
            <label for="terms-consent" class="flex items-start text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" id="terms-consent" v-model="formData.termsConsent" class="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 flex-shrink-0" required />
              <span class="ml-3">I confirm that I have read and I agree to Suburban Fiber
                <a href="#" class="text-red-600 underline hover:text-red-700 font-medium whitespace-nowrap">Terms of Use.</a>
                <span class="text-red-600 font-bold ml-1">*</span>
              </span>
            </label>
          </fieldset>

          <button type="submit" :disabled="!formData.termsConsent" class="w-full bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-red-700 transition duration-300 ease-in-out mt-4 sm:mt-6 disabled:opacity-50 disabled:cursor-not-allowed">
            Request for Connectivity Services
          </button>
          <p class="text-center text-xs sm:text-sm text-gray-500 mt-2">100% secured. No Hidden fees.</p>
        </form>
      </div>

      <div class="lg:hidden mt-10">
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
      </div>

      <div
        class="lg:col-span-5 relative overflow-hidden rounded-2xl bg-cover bg-center hidden lg:block lg:mt-10 min-h-[520px]"
        style="background-image: url('/logos/BG Frame.png');"
      >
        <div class="absolute inset-0 bg-black/30 animate-fade"></div>
        <div
          class="absolute inset-0 flex flex-col items-center justify-end gap-8 p-8 text-white"
          @mouseenter="pauseCarousel"
          @mouseleave="resumeCarousel"
        >
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
            <div
              :key="currentSlide.id + '-sponsors'"
              class="relative overflow-hidden rounded-none bg-white border border-white/60 shadow-lg"
            >
              <div class="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div class="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
              <div class="px-8 py-6">
                <div class="relative overflow-hidden">
                  <div class="sponsor-marquee" :style="{ '--gap': '3rem' }">
                    <div class="sponsor-track" :key="currentSlide.id + '-track-1'">
                      <img
                        v-for="sponsor in currentSlide.sponsors"
                        :key="currentSlide.id + '-track-1-' + sponsor.alt"
                        :src="sponsor.src"
                        :alt="sponsor.alt"
                        class="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition"
                      />
                    </div>
                    <div class="sponsor-track" :key="currentSlide.id + '-track-2'">
                      <img
                        v-for="sponsor in currentSlide.sponsors"
                        :key="currentSlide.id + '-track-2-' + sponsor.alt"
                        :src="sponsor.src"
                        :alt="sponsor.alt"
                        class="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition"
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
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
const emit = defineEmits(['next-step'])

const formData = ref({
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '', // Added a default phone number to match the other defaults
  organization: '', // Added a default organization
  sector: '',
  segment: '',
  location: '',
  product: '',
  marketingConsent: false,
  termsConsent: false,
})

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

const activeSlide = ref(0)
const currentSlide = computed(() => carouselSlides.value[activeSlide.value])

let carouselTimer = null
const CAROUSEL_INTERVAL = 6000

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

const submitStep1 = () => {
  if (!formData.value.termsConsent || !formData.value.product) {
    console.error('Validation failed: Terms of Use and Product must be selected.')
    // The disabled attribute on the button largely negates the need for this alert on a standard click.
    console.error('Validation failed: Terms of Use must be accepted.')
    return
  }
  emit('next-step', { ...formData.value })
}
</script>

<style scoped>
/* Transition Styles */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(16px);
}

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
  gap: var(--gap, 3rem);
  animation: sponsor-scroll 20s linear infinite;
  padding: 0.5rem 0;
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

/* Custom styling for select fields to look 'filled' */
select:not([value=""]) {
  color: theme('colors.gray.900');
}
select[disabled] {
  color: theme('colors.gray.500');
}
</style>