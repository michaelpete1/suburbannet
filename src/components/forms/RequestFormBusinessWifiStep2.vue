<template>
  <div class="font-graphik bg-white min-h-screen">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="mb-8">
        <p class="text-sm text-red-600">Step 2 of 3</p>
        <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900">Nigeria's Sovereign Cloud for a <span class="text-red-600">Digital Africa</span></h1>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="plan in plans"
          :key="plan.id"
          class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative"
        >
          <label class="absolute inset-0 cursor-pointer" :for="plan.id"></label>
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-2xl font-extrabold text-gray-900">{{ plan.users }} Users</h3>
            </div>
            <div class="ml-4">
              <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-md">
                <span class="text-sm mr-2">{{ plan.price }}</span>
              </div>
            </div>
          </div>

          <div class="mt-4 space-y-3">
            <div>
              <label class="text-xs text-gray-500">Access Points</label>
              <select v-model="selections[plan.id].accessPoints" class="w-full mt-2 rounded-lg border border-gray-200 px-3 py-2 text-sm">
                <option v-for="n in [1,2,3,4]" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>

            <div>
              <label class="text-xs text-gray-500">Select Duration</label>
              <select v-model="selections[plan.id].duration" class="w-full mt-2 rounded-lg border border-gray-200 px-3 py-2 text-sm">
                <option value="1 Month">1 Month</option>
                <option value="3 Months">3 Months</option>
                <option value="12 Months">12 Months</option>
              </select>
            </div>

            <div>
              <label class="text-xs text-gray-500">Add Bundled Service</label>
              <select v-model="selections[plan.id].bundle" class="w-full mt-2 rounded-lg border border-gray-200 px-3 py-2 text-sm">
                <option value="Tier 1 VPS Hosting">Tier 1 VPS Hosting</option>
                <option value="Tier 2 Managed Firewall">Tier 2 Managed Firewall</option>
                <option value="No Bundle">No Bundle</option>
              </select>
            </div>
          </div>

          <div class="mt-6">
            <input type="radio" :id="plan.id" name="selectedPlan" class="hidden" v-model="selectedPlan" :value="plan.id" />
            <button @click.prevent="selectPlan(plan.id)" :class="['w-full rounded-full py-3 text-white font-semibold transition', selectedPlan === plan.id ? 'bg-red-700' : 'bg-red-600 hover:bg-red-700']" @click="selectPlan(plan.id)">Select</button>
          </div>
        </article>
      </div>

      <div class="mt-10 max-w-3xl">
        <button :disabled="!selectedPlan" @click="continueWithPlan" class="w-full rounded-full bg-red-600 py-3 text-lg font-bold text-white shadow-lg hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed transition">Continue</button>
      </div>
    </main>

    <!-- Partners Carousel (reuse markup from pages) -->
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-6">
      <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider text-center mb-8">THEY CHOOSE SUBURBAN</h3>
      <div class="overflow-x-auto hide-scrollbar">
        <div class="flex space-x-8 pb-4 animate-scroll">
          <img v-for="logo in trackLogos" :key="logo" :src="logo" :alt="`Partner Logo`" class="h-12 flex-shrink-0 opacity-70 hover:opacity-100 transition">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const plans = ref([
  { id: 'p3', users: 3, price: '₦10,850' },
  { id: 'p5', users: 5, price: '₦16,850' },
  { id: 'p6', users: 6, price: '₦10,850' },
  { id: 'p8', users: 8, price: '₦30,850' },
  { id: 'p10', users: 10, price: '₦37,850' },
  { id: 'p12', users: 12, price: '₦10,850' },
  { id: 'p17', users: 17, price: '₦66,850' },
  { id: 'p22', users: 22, price: '₦86,850' },
  { id: 'p32', users: 32, price: '₦127,850' }
])

const selections = reactive({})
plans.value.forEach(p => {
  selections[p.id] = { accessPoints: 2, duration: '3 Months', bundle: 'Tier 1 VPS Hosting' }
})

const selectedPlan = ref('')

const selectPlan = (id) => {
  selectedPlan.value = id
}

const continueWithPlan = () => {
  if (!selectedPlan.value) return
  const payload = {
    planId: selectedPlan.value,
    details: selections[selectedPlan.value]
  }
  // emit an event or navigate — here we'll just log and emit next-step if parent expects it
  // emit('next-step', payload)
  console.log('Selected plan', payload)
  // For compatibility with other request-form components, emit via custom event
  const e = new CustomEvent('business-wifi-step2-complete', { detail: payload })
  window.dispatchEvent(e)
}

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
.font-graphik { font-family: 'Graphik Trial', sans-serif; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.hide-scrollbar::-webkit-scrollbar { display: none; }

@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.animate-scroll { animation: scroll 30s linear infinite; }
</style>
