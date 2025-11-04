<template>
  <section id="request-form-step-2" class="bg-white font-sans">
    <div class="bg-red-50 py-12">
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

          <!-- Right: Promo Card -->
          <aside class="hidden lg:block">
            <div class="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-red-600 to-red-500 text-white">
              <div class="p-8">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-2xl font-bold">Now is the Time!</h3>
                    <p class="mt-3 text-sm text-red-100 max-w-xs leading-relaxed">Let's bring next-generation fiber to your location and beyond. Request service or recommend Suburban Fiber today.</p>
                  </div>
                <img src="/logos/staff.png" alt="Person" class="w-28 h-28 object-cover rounded-full border-4 border-white/20 shadow-md" />
                </div>

                <div class="mt-6 bg-white/10 rounded-xl p-3 flex items-center justify-center space-x-4">
                  <!-- partner logos (placeholders) -->
                  <img src="/logos/cisco.png" alt="Cisco" class="h-6 opacity-90" />
                  <img src="/logos/hauwei.png" alt="Huawei" class="h-6 opacity-90" />
                  <img src="/logos/micro.png" alt="Microsoft" class="h-6 opacity-90" />
                </div>
              </div>

              <div class="px-6 pb-6 pt-2">
                <div class="h-2 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </aside>

          <!-- Promo for mobile (below form) -->
          <aside class="lg:hidden">
            <div class="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-red-600 to-red-500 text-white p-6">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-xl font-bold">Now is the Time!</h3>
                  <p class="mt-2 text-sm text-red-100 leading-relaxed">Request service or recommend Suburban Fiber today.</p>
                </div>
                <img src="/logos/staff.png" alt="Person" class="w-20 h-20 object-cover rounded-full border-4 border-white/20 shadow-md" />
              </div>

              <div class="mt-4 bg-white/10 rounded-xl p-3 flex items-center justify-center space-x-4">
                <img src="/logos/cisco.png" alt="Cisco" class="h-5 opacity-90" />
                <img src="/logos/hauwei.png" alt="Huawei" class="h-5 opacity-90" />
                <img src="/logos/micro.png" alt="Microsoft" class="h-5 opacity-90" />
              </div>
            </div>
          </aside>
        </div>

        <!-- trust logos row -->
        <div class="mt-10 border-t border-gray-100 pt-8">
          <div class="max-w-5xl mx-auto flex items-center justify-between space-x-6 overflow-x-auto hide-scrollbar px-2">
            <img src="/logos/cbn.png" alt="Client 1" class="h-6 opacity-60" />
            <img src="/logos/tetfund.png" alt="Client 2" class="h-6 opacity-60" />
            <img src="/logos/nexim.png" alt="Client 3" class="h-6 opacity-60" />
            <img src="/logos/nihq.png" alt="Client 4" class="h-6 opacity-60" />
            <img src="/logos/npa.png" alt="Client 5" class="h-6 opacity-60" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['prev-step', 'next-step'])

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
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* small animation helpers kept from original */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}
</style>
