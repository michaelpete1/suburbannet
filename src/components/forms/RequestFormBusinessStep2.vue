<template>
  <section id="request-form-step-2" class="bg-white font-sans">
    <div class="bg-red-50 py-12">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
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

      <div class="max-w-3xl">
        <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Power your Business with — <span class="text-red-600">speed and stability</span>
        </h2>
      </div>

      <Transition name="fade-scale" mode="out-in">
        <template v-if="!selectedPlan">
          <div key="plan-selection" class="mt-12">
            <p class="text-gray-600 mb-8 max-w-2xl">Choose the package that best matches your team's bandwidth and reliability needs. You can still adjust preferences on the next screen.</p>

            <TransitionGroup name="card-fade" tag="div" class="grid gap-6 lg:grid-cols-3">
              <article
                v-for="plan in planOptions"
                :key="plan.id"
                class="relative rounded-3xl bg-white p-8 lg:p-10 shadow-sm transition-all duration-300 cursor-pointer group overflow-hidden"
                :class="planCardClass(plan.id)"
                style="box-shadow: 0 4px 20px rgba(0,0,0,0.05);"
                @click="selectPlan(plan.id)"
              >
                <!-- Bubble hover effect -->
                <div class="absolute -inset-1 bg-gradient-to-r from-red-100 to-red-200 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105 -z-10"></div>
                
                <div class="relative flex items-center mb-4">
                  <span class="w-3 h-3 rounded-full" :class="planAccentClass(plan.id)"></span>
                  <h3 class="ml-3 text-2xl font-bold text-gray-900">{{ plan.title }}</h3>
                </div>
                <p class="text-sm text-gray-500 mb-6">{{ plan.description }}</p>

                <div class="flex items-baseline mb-6">
                  <span class="text-4xl font-extrabold text-gray-900">{{ plan.price }}</span>
                  <span class="ml-2 text-sm text-gray-500">{{ plan.billing }}</span>
                </div>

                <ul class="space-y-3 text-sm text-gray-700">
                  <li v-for="feature in plan.features" :key="feature" class="flex items-start group-hover:translate-x-1 transition-transform duration-200">
                    <span class="flex-shrink-0 mt-0.5">
                      <svg v-if="plan.id === 'triple-play'" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span v-else class="text-red-500">&#10003;</span>
                    </span>
                    <span class="ml-2 leading-relaxed" :class="{ 'text-white': plan.id === 'triple-play' }">{{ feature }}</span>
                  </li>
                </ul>

                <button
                  type="button"
                  class="mt-8 inline-flex items-center justify-center w-full rounded-full py-3 text-sm font-semibold transition"
                  :class="planButtonClass(plan.id)"
                >
                  Get Started Now
                </button>
              </article>
            </TransitionGroup>
          </div>
        </template>
        <template v-else>
          <div key="plan-config" class="mt-12 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] items-start">
          <Transition name="fade-delay" appear>
            <aside key="active-plan" class="rounded-3xl bg-gradient-to-b from-red-600 to-red-500 text-white p-10 shadow-xl">
              <p class="text-sm opacity-80 mb-3">Selected Plan</p>
              <h3 class="text-3xl font-extrabold mb-4">{{ selectedPlan.title }}</h3>
              <p class="text-sm text-red-100 mb-8 leading-relaxed">{{ selectedPlan.description }}</p>

              <div class="flex items-baseline mb-8">
                <span class="text-5xl font-black">{{ selectedPlan.price }}</span>
                <span class="ml-2 text-sm font-medium opacity-80">{{ selectedPlan.billing }}</span>
              </div>

              <ul class="space-y-3 text-sm font-medium text-white">
                <li v-for="feature in selectedPlan.features" :key="feature" class="flex items-start">
                  <span class="mt-0.5 text-white">&#10003;</span>
                  <span class="ml-3 leading-relaxed text-white">{{ feature }}</span>
                </li>
              </ul>

              <button
                type="button"
                class="mt-10 inline-flex items-center text-sm font-semibold text-white/90 hover:text-white transition"
                @click="resetPlan"
              >
                &larr; Choose another plan
              </button>
            </aside>
          </Transition>

          <form class="space-y-8" @submit.prevent="submitStep">
            <div class="grid gap-6 sm:grid-cols-2">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2" for="download-speed">Choose Desired Download Speed</label>
                <div class="relative">
                  <select
                    id="download-speed"
                    v-model="selectedSpeed"
                    class="w-full appearance-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-700 shadow-sm transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    required
                  >
                    <option disabled value="">Select download speed</option>
                    <option v-for="option in speedOptions" :key="option" :value="option">{{ option }}</option>
                  </select>
                  <span class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">&#9662;</span>
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2" for="contract-duration">Select Duration</label>
                <div class="relative">
                  <select
                    id="contract-duration"
                    v-model="selectedDuration"
                    class="w-full appearance-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-700 shadow-sm transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    required
                  >
                    <option disabled value="">Select duration</option>
                    <option v-for="option in durationOptions" :key="option" :value="option">{{ option }}</option>
                  </select>
                  <span class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">&#9662;</span>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Add Bundled Services</label>
              <div class="relative">
                <button
                  type="button"
                  class="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-left text-sm font-medium text-gray-700 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-red-200"
                  @click="toggleAddons"
                  :aria-expanded="addonsOpen"
                >
                  <span v-if="selectedAddons.length">{{ selectedAddonsSummary }}</span>
                  <span v-else>Select services</span>
                </button>
                <span class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">&#9662;</span>

                <Transition name="dropdown">
                  <div
                    v-if="addonsOpen"
                    class="absolute z-10 mt-2 w-full rounded-2xl border border-gray-100 bg-white shadow-xl overflow-hidden"
                  >
                    <div class="max-h-56 overflow-y-auto divide-y divide-gray-100">
                      <label
                        v-for="addon in addonOptions"
                        :key="addon.id"
                        class="flex items-start gap-3 px-5 py-4 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          class="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                          :value="addon.id"
                          v-model="selectedAddons"
                        />
                        <span class="flex-1">
                          <span class="block font-medium text-gray-900">{{ addon.label }}</span>
                          <span class="block text-xs text-gray-500">{{ addon.price }}</span>
                        </span>
                      </label>
                    </div>
                    <div class="flex items-center justify-between px-5 py-3 bg-gray-50">
                      <button type="button" class="text-sm font-medium text-gray-500 hover:text-gray-700" @click="clearAddons">Clear</button>
                      <button type="button" class="text-sm font-semibold text-red-600 hover:text-red-700" @click="closeAddons">Done</button>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <input
                id="fiber-installation"
                type="checkbox"
                class="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                v-model="fiberInstallation"
              />
              <label for="fiber-installation" class="text-sm text-gray-600 select-none">
                Fiber installation
              </label>
            </div>

            <div class="pt-6">
              <button
                type="submit"
                class="w-full rounded-full bg-red-600 py-4 text-lg font-bold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                :disabled="!selectedSpeed || !selectedDuration">
                  Continue
                </button>
              </div>
          </form>
          </div>
        </template>
      </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { businessPlanOptions, businessAddonOptions } from './businessPlans'

const props = defineProps({
  initialSelection: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['prev-step', 'next-step'])

const planOptions = ref([...businessPlanOptions])

const speedOptions = ref([
  '50Mbps',
  '100Mbps',
  '144Mbps',
  '250Mbps',
  '500Mbps'
])

const durationOptions = ref([
  '3 Months',
  '6 Months',
  '12 Months'
])

const addonOptions = ref([...businessAddonOptions])

const selectedPlanId = ref(props.initialSelection.planId || '')
const selectedSpeed = ref(props.initialSelection.speed || '')
const selectedDuration = ref(props.initialSelection.duration || '')
const selectedAddons = ref(props.initialSelection.addons ? [...props.initialSelection.addons] : [])
const fiberInstallation = ref(Boolean(props.initialSelection.fiberInstallation))
const addonsOpen = ref(false)

const selectedPlan = computed(() => planOptions.value.find((plan) => plan.id === selectedPlanId.value) || null)

watch(
  () => props.initialSelection,
  (next) => {
    if (!next) return
    selectedPlanId.value = next.planId || ''
    selectedSpeed.value = next.speed || ''
    selectedDuration.value = next.duration || ''
    selectedAddons.value = next.addons ? [...next.addons] : []
    fiberInstallation.value = Boolean(next.fiberInstallation)
  },
  { deep: true }
)

const selectedAddonsSummary = computed(() => {
  if (!selectedAddons.value.length) return ''
  const labels = addonOptions.value
    .filter((addon) => selectedAddons.value.includes(addon.id))
    .map((addon) => addon.label)
  if (!labels.length) return ''
  if (labels.length === 1) return labels[0]
  if (labels.length === 2) return labels.join(', ')
  return `${labels[0]}, ${labels[1]} + ${labels.length - 2} more`
})

const planCardClass = (planId) => {
  const classes = []
  // Base hover effect for all cards
  if (selectedPlanId.value === planId) {
    classes.push('border-red-500 shadow-lg scale-[1.02]')
  } else {
    // Enhanced base hover effects for all cards
    classes.push('border-gray-200 transition-all duration-300 ease-out')
    
    // Different hover effects based on plan type
    if (planId === 'dual-play') {
      // Dual Play hover effects
      classes.push('hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20')
      classes.push('hover:border-blue-300 hover:ring-2 hover:ring-blue-100')
      classes.push('hover:bg-gradient-to-br hover:from-white hover:to-blue-50')
      classes.push('hover:-translate-y-0.5')
      
      // Add a subtle shine effect on hover
      classes.push('relative overflow-hidden')
      classes.push('before:absolute before:top-0 before:left-0 before:right-0 before:h-20 before:bg-gradient-to-b before:from-white/30 before:via-white/10 before:to-transparent before:opacity-0')
      classes.push('hover:before:opacity-100 hover:before:animate-shine')
      
    } else if (planId === 'triple-play-x') {
      // Triple PlayX hover effects
      classes.push('hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20')
      classes.push('hover:border-purple-300 hover:ring-2 hover:ring-purple-100')
      classes.push('hover:bg-gradient-to-br hover:from-white hover:to-purple-50')
      classes.push('hover:-translate-y-0.5')
      
      // Add a subtle shine effect on hover
      classes.push('relative overflow-hidden')
      classes.push('before:absolute before:top-0 before:left-0 before:right-0 before:h-20 before:bg-gradient-to-b before:from-white/30 before:via-white/10 before:to-transparent before:opacity-0')
      classes.push('hover:before:opacity-100 hover:before:animate-shine')
      
      // Add a subtle pulse effect to the price on hover
      classes.push('group-hover:[&_.text-4xl]:animate-pulse-slow')
      
    } else {
      // Default hover for any other plans
      classes.push('hover:border-red-300 hover:shadow-md')
    }
  }
  
  // Add group class for nested hover effects
  classes.push('group')
  
  // Special styling for the middle plan (triple-play)
  if (planId === 'triple-play') {
    // Enhanced red gradient background with animation
    classes.push('bg-gradient-to-br from-red-500 to-red-600 text-white border-2 border-transparent')
    classes.push('transform transition-all duration-500 ease-in-out')
    
    // Hover effect only when not selected
    if (selectedPlanId.value !== planId) {
      // Enhanced hover effects
      classes.push('hover:scale-[1.03] hover:shadow-2xl hover:shadow-red-500/40')
      classes.push('hover:border-red-300 hover:ring-4 hover:ring-red-200/30')
      
      // Add a gentle light reflection from the top with animation
      classes.push('relative overflow-hidden')
      classes.push('before:absolute before:top-0 before:left-0 before:right-0 before:h-20 before:bg-gradient-to-b before:from-white/20 before:via-white/10 before:to-transparent before:opacity-0')
      classes.push('hover:before:opacity-100 hover:before:animate-shine')
      
      // Add a subtle pulse animation to the "Most Popular" badge
      classes.push('after:transition-all after:duration-300 after:ease-in-out')
      classes.push('hover:after:scale-105 hover:after:shadow-lg hover:after:shadow-yellow-400/30')
      
      // Add a subtle glow effect on hover
      classes.push('hover:ring-1 hover:ring-red-400/50')
      
      // Add transition for smooth hover effects
      classes.push('transition-all duration-300 ease-out')
      
      // Add a subtle lift effect
      classes.push('hover:-translate-y-1')
    }
    
    // Update text colors for better contrast on the red background
    classes.push('[&_.text-gray-500]:text-red-100 [&_.text-gray-700]:text-white [&_.text-gray-900]:text-white')
    
    // Style the price and speed text to be more prominent
    classes.push('[&_.text-4xl]:text-5xl [&_.text-4xl]:font-black [&_.text-4xl]:tracking-tight')
    classes.push('[&_.text-sm]:text-red-100 [&_.text-sm]:opacity-90')
    
    // Style the select button to stand out more
    classes.push('[&_.bg-red-600]:bg-white [&_.text-white]:text-red-600 [&_.hover\:bg-red-700]:hover:bg-red-50 [&_.hover\:bg-red-700]:hover:text-red-700')
    
    // Add custom styles for the middle card content
    classes.push('[&_h3]:text-2xl [&_h3]:font-extrabold [&_h3]:mb-2')
    classes.push('[&_p]:text-red-100 [&_p]:text-sm [&_p]:mb-6 [&_p]:leading-relaxed')
    classes.push('[&_ul]:space-y-3 [&_li]:flex [&_li]:items-start [&_li_svg]:text-white [&_li_span]:ml-2 [&_li_span]:text-red-100 [&_li_span]:text-sm')
    classes.push('[&_button]:mt-8 [&_button]:w-full [&_button]:py-3 [&_button]:rounded-full [&_button]:font-bold [&_button]:text-red-600 [&_button]:bg-white [&_button]:hover:bg-red-50 [&_button]:hover:text-red-700 [&_button]:transition-colors [&_button]:duration-200')
    
    // Add a "Most Popular" badge
    classes.push('pt-12 relative')
    classes.push('after:absolute after:top-0 after:right-0 after:bg-yellow-400 after:text-red-700 after:px-4 after:py-1 after:font-bold after:text-xs after:uppercase after:tracking-wide after:rounded-bl-lg after:rounded-tr-3xl')
    classes.push('after:content-["Most_Popular"] after:whitespace-nowrap')
  }
  
  return classes.join(' ')
}

const planAccentClass = (planId) => {
  return selectedPlanId.value === planId ? 'bg-red-500' : 'bg-red-200'
}

const planButtonClass = (planId) => {
  if (selectedPlanId.value === planId) {
    return 'bg-white text-red-600 shadow-md shadow-red-400/40 hover:bg-red-50'
  }
  if (planId === 'triple-play') {
    return 'bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30'
  }
  return 'border border-red-200 text-red-600 hover:bg-red-50'
}

const selectPlan = (planId) => {
  selectedPlanId.value = planId
}

const resetPlan = () => {
  selectedPlanId.value = ''
}

const toggleAddons = () => {
  addonsOpen.value = !addonsOpen.value
}

const closeAddons = () => {
  addonsOpen.value = false
}

const clearAddons = () => {
  selectedAddons.value = []
}

const goBack = () => {
  emit('prev-step')
}

const submitStep = () => {
  if (!selectedPlan.value || !selectedSpeed.value || !selectedDuration.value) return

  emit('next-step', {
    planId: selectedPlan.value.id,
    planName: selectedPlan.value.title,
    speed: selectedSpeed.value,
    duration: selectedDuration.value,
    addons: [...selectedAddons.value],
    fiberInstallation: fiberInstallation.value
  })
}
</script>

<style scoped>
@keyframes shine {
  0% {
    transform: translateY(-100%) translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateY(100%) translateX(100%) rotate(45deg);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-shine {
  animation: shine 2s ease-in-out infinite;
}
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

.card-fade-enter-active,
.card-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.card-fade-enter-from,
.card-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.fade-delay-enter-active,
.fade-delay-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-delay-enter-from,
.fade-delay-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.card-fade-leave-active {
  position: absolute;
}
</style>
