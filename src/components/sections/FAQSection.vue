<script setup>
import { ref } from 'vue'

const faqs = [
  {
    q: 'How do I subscribe to Suburban Fiber?',
    a: 'You can easily subscribe by visiting our Get Connected page, filling out the online request form, or contacting our customer service team. We’ll confirm coverage in your area and schedule installation.'
  },
  { q: 'Do you offer enterprise-grade internet solutions?', a: 'Yes. We provide dedicated business internet, managed services, and cloud connectivity tailored to enterprise needs.' },
  { q: 'What is the typical installation timeline?', a: 'After confirming coverage and requirements, installation is usually scheduled within a few business days.' },
  { q: 'Can I upgrade my plan later?', a: 'Absolutely. Plans are flexible—you can upgrade as your bandwidth needs grow.' },
]

const openIndex = ref(0)

const toggleFaq = (idx) => {
  openIndex.value = openIndex.value === idx ? null : idx
}
</script>

<template>
  <section class="bg-white py-16 lg:py-24 font-sans">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="flex flex-col items-center gap-12">
        <h2 class="text-center text-3xl lg:text-[48px] leading-[1.08] tracking-[-0.02em] font-semibold text-[#012635]">
          Frequently asked questions
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[1240px]">
          <div
            v-for="(item, idx) in faqs"
            :key="idx"
            class="rounded-[32px] bg-white p-4 sm:p-6 lg:p-6 border border-gray-100 shadow-sm transition-shadow duration-200"
          >
            <button
              type="button"
              class="w-full flex items-center justify-between gap-6"
              :aria-expanded="openIndex === idx"
              @click="toggleFaq(idx)"
            >
              <h3 class="text-left text-[20px] leading-6 font-semibold text-[#012635] flex-1">{{ item.q }}</h3>
              <span
                class="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#D50036] transition-transform duration-200"
                :class="{ 'rotate-180': openIndex === idx }"
              >
                <img src="/logos/red icon.png" alt="Toggle" class="h-4 w-4" />
              </span>
            </button>

            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <p
                v-if="openIndex === idx"
                class="mt-4 text-[18px] leading-[26px] text-[#012635]/90"
              >
                {{ item.a }}
              </p>
            </transition>
          </div>
        </div>

        <button class="mt-4 inline-flex items-center justify-center px-6 lg:px-8 py-3 rounded-[24px] bg-[#D50036] text-white text-[18px] font-semibold shadow-sm hover:brightness-110 transition">
          Explore our FAQ
        </button>
      </div>
    </div>
  </section>
</template>
