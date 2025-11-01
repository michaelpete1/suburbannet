<template>
  <section id="request-form-step-3" class="bg-white font-sans">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20 relative">
      <!-- Back button and step indicator -->
      <div class="flex items-center text-red-600 font-semibold mb-6 space-x-3">
        <button
          v-if="!showSuccess && !showPayment && !paymentComplete"
          type="button"
          class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-red-200 text-red-600 hover:bg-red-50 transition"
          @click="goBack"
          aria-label="Go back to previous step"
        >
          <span aria-hidden="true">&larr;</span>
        </button>
        <span class="text-sm" v-if="!showSuccess && !showPayment && !paymentComplete">Step 3 of 3</span>
      </div>

      <div class="max-w-3xl">
        <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Power your Business with — <span class="text-red-600">speed and stability</span>
        </h2>
      </div>

      <!-- Address Verification Form -->
      <div v-if="!showSuccess && !showPayment && !paymentComplete" class="mt-12 grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] items-start">
        <form class="space-y-8" @submit.prevent="verifyAddress">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Confirm Your Details</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2" for="location-name">Name of Plaza/Location</label>
                <input
                  id="location-name"
                  v-model="locationName"
                  type="text"
                  class="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm text-gray-700 shadow-sm transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  placeholder="Enter name"
                  required
                />
              </div>
              <div class="grid gap-4 sm:grid-cols-2">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2" for="state-select">State</label>
                  <div class="relative">
                    <select
                      id="state-select"
                      v-model="selectedState"
                      class="w-full appearance-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-700 shadow-sm transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                      required
                    >
                      <option disabled value="">Select State</option>
                      <option v-for="state in stateOptions" :key="state" :value="state">{{ state }}</option>
                    </select>
                    <span class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">&#9662;</span>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2" for="lga-select">Area / LGA</label>
                  <div class="relative">
                    <select
                      id="lga-select"
                      v-model="selectedLga"
                      class="w-full appearance-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-700 shadow-sm transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                      required
                    >
                      <option disabled value="">Select Area/LGA</option>
                      <option v-for="lga in lgaOptions" :key="lga" :value="lga">{{ lga }}</option>
                    </select>
                    <span class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">&#9662;</span>
                  </div>
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2" for="street-address">Street Name &amp; Number</label>
                <input
                  id="street-address"
                  v-model="streetAddress"
                  type="text"
                  class="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm text-gray-700 shadow-sm transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  placeholder="Enter street details"
                  required
                />
              </div>
            </div>
          </div>

          <div class="pt-4">
            <button
              type="submit"
              class="w-full rounded-full bg-red-600 py-4 text-lg font-bold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-700"
            >
              Continue
            </button>
          </div>
        </form>

        <aside class="rounded-3xl border border-gray-200 bg-white shadow-xl">
          <header class="px-8 py-6 bg-red-600 text-white rounded-t-3xl">
            <h3 class="text-xl font-bold">Review Order</h3>
          </header>
          <div class="px-8 py-6 space-y-6">
            <dl class="space-y-4 text-sm text-gray-700">
              <div class="flex justify-between">
                <dt class="font-semibold text-gray-500">Product Name</dt>
                <dd class="font-semibold text-gray-900">{{ plan?.title || '—' }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="font-semibold text-gray-500">Bundle Size</dt>
                <dd class="font-semibold text-gray-900">{{ summaryData.speed || '—' }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="font-semibold text-gray-500">Subscription Fee</dt>
                <dd class="font-semibold text-gray-900">{{ subscriptionFeeLabel }} / {{ plan?.billing || 'Month' }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="font-semibold text-gray-500">Selected Duration</dt>
                <dd class="font-semibold text-gray-900">{{ summaryData.duration || '—' }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="font-semibold text-gray-500">Sub-total</dt>
                <dd class="font-semibold text-gray-900">{{ formatCurrency(subTotalValue) }}</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="font-semibold text-gray-500">Installation Fees</dt>
                <dd class="font-semibold text-gray-900">{{ formatCurrency(installationFeeValue) }}</dd>
              </div>
            </dl>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2" for="discount-code">Discount code</label>
              <div class="flex rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <input
                  id="discount-code"
                  v-model="discountCode"
                  type="text"
                  class="flex-1 px-4 py-3 text-sm text-gray-700 focus:outline-none"
                  placeholder="Enter code"
                />
                <button type="button" class="px-5 text-sm font-semibold text-red-600 hover:text-red-700" @click="applyDiscount">Apply</button>
              </div>
              <p v-if="discountFeedback" class="mt-2 text-xs font-medium" :class="discountApplied ? 'text-green-600' : 'text-gray-500'">{{ discountFeedback }}</p>
            </div>

            <div>
              <div class="flex items-center justify-between text-sm font-semibold text-gray-500 mb-3">
                <span>Bundled Services (one-off)</span>
                <span>{{ formatCurrency(addonsTotalValue) }}</span>
              </div>
              <ul class="space-y-2 text-sm text-gray-600 max-h-32 overflow-y-auto">
                <li v-if="!selectedAddonDetails.length" class="italic text-gray-400">No bundled services selected</li>
                <li v-for="addon in selectedAddonDetails" :key="addon.id" class="flex justify-between">
                  <span>{{ addon.label }}</span>
                  <span class="font-medium text-gray-900">{{ addon.price }}</span>
                </li>
              </ul>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <div class="flex justify-between text-base font-bold text-gray-900">
                <span>Total</span>
                <span>{{ formatCurrency(totalValue) }}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div class="mt-10 flex flex-wrap gap-4 text-sm text-gray-400">
        <a href="#" class="hover:text-gray-600">Return policy</a>
        <a href="#" class="hover:text-gray-600">Privacy policy</a>
        <a href="#" class="hover:text-gray-600">Terms of service</a>
      </div>

      <transition name="fade-overlay">
        <div v-if="confirmationOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div class="absolute inset-0" @click="closeConfirmation" aria-hidden="true"></div>
          <div class="relative z-10 w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
              <span class="text-2xl">📍</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 text-center mb-3">Please confirm your address below</h3>
            <p class="text-sm text-gray-600 text-center leading-relaxed mb-6">{{ addressPreview || 'No address provided yet.' }}</p>
            <div class="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                class="rounded-full border border-gray-200 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50"
                @click="closeConfirmation"
              >
                Incorrect
              </button>
              <button
                type="button"
                class="rounded-full bg-red-600 py-3 text-sm font-semibold text-white hover:bg-red-700"
                @click="confirmSubmission"
              >
                Correct
              </button>
            </div>
          </div>
        </div>
      </transition>

      <!-- Success Message -->
      <div v-if="showSuccess" class="mt-12 max-w-2xl mx-auto text-center">
        <div class="bg-green-50 p-8 rounded-2xl border border-green-100">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Congratulations!</h2>
          <p class="text-gray-600 mb-8">Suburban is available in your area. Complete your payment to get connected.</p>
          <button
            @click="() => { showPayment = true; showSuccess = false; paymentComplete = false }"
            class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
          >
            Make Payment
          </button>
        </div>
      </div>

      <!-- Payment Form -->
      <div v-if="showPayment" class="mt-12 max-w-2xl mx-auto">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <!-- Card Payment Tab -->
          <div v-if="paymentMethod === 'card'" class="p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Pay with Card</h3>
            <form @submit.prevent="processPayment">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <input
                    v-model="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input
                      v-model="cardExpiry"
                      type="text"
                      placeholder="MM/YY"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input
                      v-model="cardCvv"
                      type="text"
                      placeholder="123"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                  <input
                    v-model="cardName"
                    type="text"
                    placeholder="John Doe"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  :disabled="processingPayment"
                  class="w-full mt-6 py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center"
                >
                  <span v-if="!processingPayment">Pay {{ formatCurrency(totalAmount) }}</span>
                  <svg v-else class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </button>
              </div>
            </form>
          </div>

          <!-- Bank Transfer Tab -->
          <div v-else class="p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Bank Transfer</h3>
            <div class="bg-gray-50 p-6 rounded-lg mb-6">
              <div class="space-y-4">
                <div>
                  <p class="text-sm text-gray-500">Bank Name</p>
                  <p class="font-medium">Suburban Network Limited</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Account Number</p>
                  <p class="font-mono">1234567890</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Amount</p>
                  <p class="text-xl font-bold">{{ formatCurrency(totalAmount) }}</p>
                </div>
                <div class="pt-4 border-t border-gray-200">
                  <p class="text-sm text-gray-500">Reference</p>
                  <p class="font-mono">SUB{{ Math.floor(100000 + Math.random() * 900000) }}</p>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-500 mb-6">Please make a transfer to the account details above and upload proof of payment below.</p>
            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p class="mt-2 text-sm text-gray-600">Upload proof of payment</p>
              <p class="text-xs text-gray-500 mt-1">PNG, JPG, PDF up to 5MB</p>
              <input
                type="file"
                class="hidden"
                accept=".jpg,.jpeg,.png,.pdf"
                @change="handleFileUpload"
                ref="fileInput"
              />
              <button
                type="button"
                @click="$refs.fileInput.click()"
                class="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Select File
              </button>
              <p v-if="uploadedFile" class="mt-2 text-sm text-green-600">{{ uploadedFile.name }}</p>
            </div>
            <button
              @click="completeBankTransfer"
              :disabled="!uploadedFile || processingPayment"
              class="w-full mt-6 py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center"
            >
              <span v-if="!processingPayment">Complete Payment</span>
              <svg v-else class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </button>
          </div>

          <!-- Payment Tabs -->
          <div class="border-t border-gray-200">
            <nav class="flex">
              <button
                @click="paymentMethod = 'card'"
                :class="{
                  'bg-white text-red-600 border-b-2 border-red-600': paymentMethod === 'card',
                  'text-gray-500 hover:text-gray-700': paymentMethod !== 'card'
                }"
                class="flex-1 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm focus:outline-none"
              >
                Credit/Debit Card
              </button>
              <button
                @click="paymentMethod = 'bank'"
                :class="{
                  'bg-white text-red-600 border-b-2 border-red-600': paymentMethod === 'bank',
                  'text-gray-500 hover:text-gray-700': paymentMethod !== 'bank'
                }"
                class="flex-1 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm focus:outline-none"
              >
                Bank Transfer
              </button>
            </nav>
          </div>
        </div>
      </div>

      <!-- Payment Complete -->
      <div v-if="paymentComplete" class="mt-12 max-w-3xl mx-auto text-center">
        <div class="bg-white border border-gray-200 rounded-3xl shadow-xl px-10 py-16">
          <div class="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">All done!</h2>
          <p class="text-gray-600 max-w-xl mx-auto mb-10">
            Congratulations! Your payment is successful and your ticket has been created. We'll get back to you shortly.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link
              to="/"
              class="px-6 py-3 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition"
            >
              Go Home
            </router-link>
            <router-link
              to="/"
              class="px-6 py-3 rounded-full bg-red-600 text-sm font-semibold text-white shadow-lg shadow-red-500/30 hover:bg-red-700 transition"
            >
              Back to Product Page
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { businessPlanOptions, businessAddonOptions } from './businessPlans'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form state
const showSuccess = ref(false)
const showPayment = ref(false)
const paymentComplete = ref(false)
const paymentMethod = ref('card')
const processingPayment = ref(false)
const uploadedFile = ref(null)

// Card details
const cardNumber = ref('')
const cardExpiry = ref('')
const cardCvv = ref('')
const cardName = ref('')

const props = defineProps({
  summaryData: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['prev-step', 'next-step'])

// Form data with default values from props if available
const locationName = ref(props.summaryData.locationName || props.summaryData.location || '')
const selectedState = ref(props.summaryData.state || 'Abuja FCT')
const selectedLga = ref(props.summaryData.lga || '')
const streetAddress = ref(props.summaryData.streetAddress || '')

const stateOptions = [
  'Lagos',
  'Abuja FCT',
  'Rivers',
  'Oyo',
  'Kano',
  'Edo',
  'Delta',
  'Ogun',
  'Kaduna',
  'Enugu',
  'Anambra',
  'Akwa Ibom',
  'Cross River',
  'Imo',
  'Abia'
]

const lgaMap = {
  Lagos: [
    'Agege',
    'Ajeromi-Ifelodun',
    'Alimosho',
    'Amuwo-Odofin',
    'Apapa',
    'Badagry',
    'Epe',
    'Eti Osa',
    'Ibeju-Lekki',
    'Ifako-Ijaiye',
    'Ikeja',
    'Ikorodu',
    'Kosofe',
    'Lagos Island',
    'Lagos Mainland',
    'Mushin',
    'Ojo',
    'Oshodi-Isolo',
    'Shomolu',
    'Surulere'
  ],
  'Abuja FCT': ['Abaji', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali', 'Municipal'],
  Rivers: ['Port Harcourt', 'Obio/Akpor', 'Bonny', 'Okrika', 'Eleme', 'Ikwerre'],
  Oyo: ['Ibadan North', 'Ibadan South-West', 'Ido', 'Ogbomosho North', 'Oyo West'],
  Kano: ['Dala', 'Gwale', 'Kumbotso', 'Nasarawa', 'Tarauni', 'Ungogo']
}

const discountCode = ref('')
const discountApplied = ref(0)
const discountFeedback = ref('')

const confirmationOpen = ref(false)

const plan = computed(() => businessPlanOptions.find((item) => item.id === props.summaryData.planId) || null)
const summaryData = computed(() => props.summaryData || {})

const subscriptionFeeValue = computed(() => (plan.value ? plan.value.priceValue : 0))
const subscriptionFeeLabel = computed(() => plan.value?.price || '₦0')

const monthsSelected = computed(() => {
  const duration = summaryData.value.duration || '1 Month'
  const match = duration.match(/\d+/)
  return match ? Number.parseInt(match[0], 10) : 1
})

const subTotalValue = computed(() => subscriptionFeeValue.value * monthsSelected.value)
const installationFeeValue = computed(() => (summaryData.value.fiberInstallation ? 255000 : 0))

const selectedAddonDetails = computed(() => {
  const selected = summaryData.value.addons || []
  return businessAddonOptions.filter((addon) => selected.includes(addon.id))
})

const addonsTotalValue = computed(() =>
  selectedAddonDetails.value.reduce((total, addon) => total + (addon.priceValue || 0), 0)
)

const totalValue = computed(() =>
  subTotalValue.value + installationFeeValue.value + addonsTotalValue.value - discountApplied.value
)

const totalAmount = computed(() => totalValue.value)

const lgaOptions = computed(() => lgaMap[selectedState.value] || [])

const addressPreview = computed(() => {
  return [locationName.value, streetAddress.value, selectedLga.value, selectedState.value]
    .filter(Boolean)
    .join(', ')
})

watch(
  () => props.summaryData,
  (next) => {
    if (!next) return
    locationName.value = next.locationName || next.location || ''
    selectedState.value = next.state || 'Abuja FCT'
    selectedLga.value = next.lga || ''
    streetAddress.value = next.streetAddress || ''
  },
  { deep: true }
)

watch(selectedState, (newState) => {
  if (!lgaMap[newState]) return
  if (!lgaMap[newState].includes(selectedLga.value)) {
    selectedLga.value = ''
  }
})

const formatCurrency = (value) => `₦${Number(value).toLocaleString('en-NG')}`

const goBack = () => {
  emit('prev-step')
}

const verifyAddress = () => {
  paymentComplete.value = false
  confirmationOpen.value = true
}

const closeConfirmation = () => {
  confirmationOpen.value = false
}

const applyDiscount = () => {
  const code = discountCode.value.trim().toUpperCase()
  if (!code) {
    discountApplied.value = 0
    discountFeedback.value = 'Enter a discount code to apply.'
    return
  }

  if (code === 'SUBURBAN10') {
    discountApplied.value = Math.round((subTotalValue.value + installationFeeValue.value) * 0.1)
    discountFeedback.value = 'Discount applied: 10% off subscription and installation fees.'
  } else {
    discountApplied.value = 0
    discountFeedback.value = 'This code is not valid. Please try another.'
  }
}

const confirmSubmission = () => {
  confirmationOpen.value = false
  showSuccess.value = true
  showPayment.value = false
}

const resetPaymentFlow = () => {
  processingPayment.value = false
  paymentMethod.value = 'card'
  router.replace(router.currentRoute.value.fullPath)
}

const processPayment = async () => {
  processingPayment.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push('/success')
  } catch (error) {
    console.error('Payment failed:', error)
    alert('Payment failed. Please try again.')
  } finally {
    processingPayment.value = false
  }
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    uploadedFile.value = file
  }
}

const completeBankTransfer = async () => {
  if (!uploadedFile.value) return
  processingPayment.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push('/success')
  } catch (error) {
    console.error('Error processing bank transfer:', error)
    alert('Failed to process bank transfer. Please try again.')
  } finally {
    processingPayment.value = false
  }
}
</script>

<style scoped>
.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.3s ease;
}
.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
}
</style>
