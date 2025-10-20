<script setup>
import { ref } from 'vue'
import Navbar from './components/sections/Navbar.vue'
import HeaderHero from './components/sections/HeaderHero.vue'
import FeaturesSection from './components/sections/FeaturesSection.vue'
import RequestFormStep1 from './components/forms/RequestFormStep1.vue'
import CommitmentSection from './components/sections/CommitmentSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import PartnersSection from './components/sections/PartnersSection.vue'
import FAQSection from './components/sections/FAQSection.vue'
import Footer from './components/sections/Footer.vue'

const currentStep = ref(1)
const formData = ref({})

const handleNextStep = (stepData) => {
  formData.value = { ...formData.value, ...stepData }
  console.log('Form Data (Step 1):', formData.value)
  alert('Thank you! Your request has been received.')
}
</script>

<template>
  <div class="relative w-full min-h-screen bg-white antialiased overflow-x-hidden">
    <Navbar />
    <HeaderHero id="home" />
    <FeaturesSection id="features" />
    <RequestFormStep1 id="request-form" @next-step="handleNextStep" />
    <CommitmentSection id="commitment" />
    <TestimonialsSection id="testimonials" />
    <PartnersSection id="partners" />
    <FAQSection id="faq" />
    <Footer />
  </div>
</template>
