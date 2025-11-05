e <template>
  <div class="font-graphik bg-white min-h-screen">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="mb-8">
        <div class="flex items-center text-red-600 font-semibold mb-6 space-x-3">
          <button
            type="button"
            class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-red-200 text-red-600 hover:bg-red-50 transition"
            @click="goBack"
            aria-label="Go back to previous step"
          >
            <span aria-hidden="true">&larr;</span>
          </button>
          <span class="text-sm">Step 2 of 3</span>
        </div>
        <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900">Choose Your Business WiFi <span class="text-red-600">Plan</span></h1>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="plan in plans"
          :key="plan.id"
          class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative hover:shadow-xl"
          :class="selectedPlan === plan.id ? 'ring-2 ring-red-200' : ''"
        >
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
              <div class="select-with-icon mt-2">
                <select v-model="selections[plan.id].accessPoints" class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" @click.stop @keydown.stop>
                  <option v-for="n in [1,2,3,4]" :key="n" :value="n">{{ n }}</option>
                </select>
                <svg class="select-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6 8L10 12L14 8" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>

            <div>
              <label class="text-xs text-gray-500">Select Duration</label>
              <div class="select-with-icon mt-2">
                <select v-model="selections[plan.id].duration" class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" @click.stop @keydown.stop>
                  <option value="1 Month">1 Month</option>
                  <option value="3 Months">3 Months</option>
                  <option value="12 Months">12 Months</option>
                </select>
                <svg class="select-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6 8L10 12L14 8" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>

            <div>
              <label class="text-xs text-gray-500">Add Bundled Service</label>
              <div class="select-with-icon mt-2">
                <select v-model="selections[plan.id].bundle" class="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" @click.stop @keydown.stop>
                  <option value="Tier 1 VPS Hosting">Tier 1 VPS Hosting</option>
                  <option value="Tier 2 Managed Firewall">Tier 2 Managed Firewall</option>
                  <option value="No Bundle">No Bundle</option>
                </select>
                <svg class="select-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6 8L10 12L14 8" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <!-- radio bound to the plan id so label clicks work natively -->
          <input type="radio" :id="plan.id" name="selectedPlan" class="hidden" v-model="selectedPlan" :value="plan.id" />

          <div class="mt-6">
            <button type="button" @click.stop="selectAndContinue(plan.id)" :class="['w-full rounded-full py-3 text-white font-semibold transition', selectedPlan === plan.id ? 'bg-red-700' : 'bg-red-600 hover:bg-red-700']">Select</button>
          </div>
        </article>
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
  { id: 'p3', users: 3, price: '₦10,850', description: 'Small office kit: basic coverage, ideal for micro-offices.' },
  { id: 'p5', users: 5, price: '₦16,850', description: 'Starter pack: good for small teams with medium traffic.' },
  { id: 'p6', users: 6, price: '₦10,850', description: 'Compact plan for light workloads and guest access.' },
  { id: 'p8', users: 8, price: '₦30,850', description: 'Balanced plan with more APs for larger rooms.' },
  { id: 'p10', users: 10, price: '₦37,850', description: 'Office plan for steady user counts and higher throughput.' },
  { id: 'p12', users: 12, price: '₦10,850', description: 'Larger team plan with better coverage and redundancy.' },
  { id: 'p17', users: 17, price: '₦66,850', description: 'Enterprise-lite: for teams with higher device density.' },
  { id: 'p22', users: 22, price: '₦86,850', description: 'Enterprise plan suited for multiple meeting rooms and heavy traffic.' },
  { id: 'p32', users: 32, price: '₦127,850', description: 'Full-office deployment with advanced features and support.' }
])

const selections = reactive({})
plans.value.forEach(p => {
  selections[p.id] = { accessPoints: 2, duration: '3 Months', bundle: 'Tier 1 VPS Hosting' }
})

const selectedPlan = ref('')

const selectAndContinue = (id) => {
  selectedPlan.value = id
  continueWithPlan()
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
  // Navigate to step 3
  window.location.href = '/business-wifi-step-3'
}

const goBack = () => {
  window.location.href = '/business-wifi'
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

/* custom select wrapper with right chevron */
.select-with-icon { position: relative; }
.select-with-icon select { appearance: none; -webkit-appearance: none; padding-right: 2.25rem; }
.select-with-icon .select-icon { position: absolute; right: 0.6rem; top: 50%; transform: translateY(-50%); pointer-events: none; }
</style>
