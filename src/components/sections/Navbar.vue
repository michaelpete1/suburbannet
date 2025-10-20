<template>
  <div ref="rootEl" class="navbar font-sans" role="navigation" aria-label="Main">
    <div class="hidden lg:flex justify-end items-center gap-6 px-6 lg:px-12 py-2 bg-red-600 text-sm text-white">
      <a href="#" class="opacity-95 hover:opacity-100 inline-flex items-center gap-1">Suburban Cloud <span class="text-white/80 text-[10px]">▼</span></a>
      <a href="#" class="opacity-95 hover:opacity-100 inline-flex items-center gap-1">Suburban Academy <span class="text-white/80 text-[10px]">▼</span></a>
      <a href="#" class="opacity-95 hover:opacity-100">About us</a>
      <span class="font-semibold border-l border-white/40 pl-4">+234 908 7005 784</span>
      <a href="#" class="opacity-95 hover:opacity-100 inline-flex items-center gap-1">EN <span class="text-white/80 text-[10px]">▼</span></a>
    </div>

    <nav class="flex justify-between items-center px-5 lg:px-12 py-2 lg:py-4 border-b lg:border-gray-100 border-transparent bg-red-600 lg:bg-white sticky top-0 z-50">
      <div class="flex items-center gap-4 lg:gap-8">
        <img :src="brandSrc" @error="onBrandError" alt="Suburban Logo" class="hidden lg:block h-7 w-auto lg:h-9" />
        <div class="hidden lg:flex items-center gap-8 text-gray-800 relative">
          <button @click="toggleMenu('why')" :aria-expanded="openMenu==='why'" aria-haspopup="menu" aria-controls="menu-why" class="hover:text-red-600 font-medium inline-flex items-center gap-1">
            Why Suburban <span class="text-gray-400 text-[10px]">▼</span>
          </button>
          <button @click="toggleMenu('services')" :aria-expanded="openMenu==='services'" aria-haspopup="menu" aria-controls="menu-services" class="hover:text-red-600 font-medium inline-flex items-center gap-1">
            Services <span class="text-gray-400 text-[10px]">▼</span>
          </button>
          <a href="#request-form" class="hover:text-red-600 font-medium">Get Fiber</a>

          <Transition enter-active-class="transition transform duration-150 ease-out" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition transform duration-150 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
            <div v-if="openMenu==='why'" id="menu-why" role="menu" class="absolute top-full left-0 mt-3 w-56 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
              <a href="#features" role="menuitem" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Why Suburban</a>
              <a href="#commitment" role="menuitem" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Our Commitment</a>
              <a href="#testimonials" role="menuitem" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Testimonials</a>
            </div>
          </Transition>
          <Transition enter-active-class="transition transform duration-150 ease-out" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition transform duration-150 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
            <div v-if="openMenu==='services'" id="menu-services" role="menu" class="absolute top-full left-40 mt-3 w-56 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
              <a href="#request-form" role="menuitem" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Business Internet</a>
              <a href="#features" role="menuitem" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Managed Services</a>
              <a href="#partners" role="menuitem" class="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Cloud & Integrations</a>
            </div>
          </Transition>
        </div>
      </div>

      <div class="flex items-center space-x-3 lg:space-x-5">
        <button class="hidden lg:inline-flex items-center px-5 py-2 rounded-full font-semibold text-red-600 bg-rose-50 hover:bg-rose-100 transition shadow-sm">
          Book a demo
        </button>
        <a href="#request-form" class="hidden lg:inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition shadow-sm">
          Request for Fiber Service
        </a>
        <button class="lg:hidden text-xl text-white" @click="toggleMobile" aria-label="Open menu" :aria-expanded="mobileOpen">&#9776;</button>
      </div>
    </nav>

    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
      <div v-if="mobileOpen" ref="mobilePanelEl" tabindex="-1" class="lg:hidden bg-red-600 text-white px-6 py-5 space-y-5" role="dialog" aria-label="Mobile menu">
        <div class="space-y-2 border-b border-white/10 pb-4">
          <a href="#" class="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-white/10">
            <span class="font-medium">Suburban Cloud</span>
            <span class="text-white/80 text-xs">▼</span>
          </a>
          <a href="#" class="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-white/10">
            <span class="font-medium">Suburban Academy</span>
            <span class="text-white/80 text-xs">▼</span>
          </a>
          <a href="#" class="block px-2 py-2 rounded-lg hover:bg-white/10 font-medium">About us</a>
          <div class="flex items-center justify-between pt-3 border-t border-white/10 mt-2 px-2 text-sm">
            <span class="font-semibold">+234 908 7005 784</span>
            <a href="#" class="inline-flex items-center gap-1 text-white/80 hover:text-white">
              EN <span class="text-[10px]">▼</span>
            </a>
          </div>
        </div>

        <div class="space-y-2">
          <button @click="toggleMobileSection('why')" class="w-full flex items-center justify-between px-2 py-3 rounded-lg hover:bg-white/10">
            <span class="font-medium">Why Suburban</span>
            <span class="text-white/80 text-xs">{{ mobileSection==='why' ? '▲' : '▼' }}</span>
          </button>
          <div v-if="mobileSection==='why'" class="pl-4 space-y-1">
            <a href="#features" class="block px-2 py-2 text-sm rounded hover:bg-white/10">Why Suburban</a>
            <a href="#commitment" class="block px-2 py-2 text-sm rounded hover:bg-white/10">Our Commitment</a>
            <a href="#testimonials" class="block px-2 py-2 text-sm rounded hover:bg-white/10">Testimonials</a>
          </div>

          <button @click="toggleMobileSection('services')" class="w-full flex items-center justify-between px-2 py-3 rounded-lg hover:bg-white/10">
            <span class="font-medium">Services</span>
            <span class="text-white/80 text-xs">{{ mobileSection==='services' ? '▲' : '▼' }}</span>
          </button>
          <div v-if="mobileSection==='services'" class="pl-4 space-y-1">
            <a href="#request-form" class="block px-2 py-2 text-sm rounded hover:bg-white/10">Business Internet</a>
            <a href="#features" class="block px-2 py-2 text-sm rounded hover:bg-white/10">Managed Services</a>
            <a href="#partners" class="block px-2 py-2 text-sm rounded hover:bg-white/10">Cloud & Integrations</a>
          </div>

          <a href="#request-form" class="block px-2 py-3 font-medium rounded-lg hover:bg-white/10">Get Fiber</a>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 pt-1">
          <button class="w-full sm:flex-1 inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold text-red-600 bg-white hover:bg-white/90 transition">
            Book a demo
          </button>
          <a href="#request-form" class="w-full sm:flex-1 inline-flex items-center justify-center bg-white text-red-600 hover:bg-white/90 px-5 py-3 rounded-full font-semibold transition">
            Request for Fiber Service
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const mobileOpen = ref(false)
const openMenu = ref(null) // 'why' | 'services' | null
const mobileSection = ref(null) // same keys for mobile accordion
const rootEl = ref(null)
const mobilePanelEl = ref(null)
const brandSrc = ref('/logos/suburban logo.png')
const onBrandError = () => { brandSrc.value = '/vite.svg' }

const toggleMenu = (name) => {
  openMenu.value = openMenu.value === name ? null : name
}

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
  if (mobileOpen.value) {
    nextTick(() => mobilePanelEl.value && mobilePanelEl.value.focus())
  }
}

const toggleMobileSection = (name) => {
  mobileSection.value = mobileSection.value === name ? null : name
}

const closeAll = () => {
  openMenu.value = null
  mobileOpen.value = false
  mobileSection.value = null
}

const onKeydown = (e) => {
  if (e.key === 'Escape') closeAll()
}

const onClick = (e) => {
  if (!rootEl.value) return
  if (!rootEl.value.contains(e.target)) closeAll()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('click', onClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('click', onClick)
})
</script>

<style scoped>
</style>
