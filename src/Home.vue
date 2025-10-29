<script setup>
import { ref } from 'vue'
import Navbar from './components/sections/Navbar.vue'
import HeaderHero from './components/sections/HeaderHero.vue'
import FeaturesSection from './components/sections/FeaturesSection.vue'
import RequestFormStep1 from './components/forms/RequestFormStep1.vue'
import RequestFormBusinessStep2 from './components/forms/RequestFormBusinessStep2.vue'
import RequestFormBusinessStep3 from './components/forms/RequestFormBusinessStep3.vue'
import CommitmentSection from './components/sections/CommitmentSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import PartnersSection from './components/sections/PartnersSection.vue'
import FAQSection from './components/sections/FAQSection.vue'
import Footer from './components/sections/Footer.vue'

const currentStep = ref(1)
const formData = ref({})

const handleStep1Next = (stepData) => {
  formData.value = { ...formData.value, ...stepData }
  if (stepData.product === 'Business Internet') {
    currentStep.value = 2
    return
  }
  console.log('Form Data (Step 1):', formData.value)
  alert('Thank you! Your request has been received.')
}

const handleStep2Prev = () => {
  currentStep.value = 1
}

const handleStep2Next = (stepData) => {
  formData.value = { ...formData.value, ...stepData }
  currentStep.value = 3
}

const handleStep3Prev = () => {
  currentStep.value = 2
}

const handleStep3Next = (stepData) => {
  formData.value = { ...formData.value, ...stepData }
  console.log('Final Form Data:', formData.value)
  alert('Thank you! Your request has been received.')
}
</script>

<template>
  <div class="relative w-full min-h-screen bg-white antialiased overflow-x-hidden">
    <Navbar />
    <HeaderHero id="home" />
    <FeaturesSection id="features" />
    <RequestFormStep1 v-if="currentStep === 1" id="request-form" @next-step="handleStep1Next" />
    <RequestFormBusinessStep2
      v-else-if="currentStep === 2"
      id="request-form"
      :initial-selection="{
        planId: formData.planId,
        speed: formData.speed,
        duration: formData.duration,
        addons: formData.addons,
        fiberInstallation: formData.fiberInstallation
      }"
      @prev-step="handleStep2Prev"
      @next-step="handleStep2Next"
    />
    <RequestFormBusinessStep3
      v-else-if="currentStep === 3"
      id="request-form"
      :summary-data="formData"
      @prev-step="handleStep3Prev"
      @next-step="handleStep3Next"
    />
    <CommitmentSection id="commitment" />
    <TestimonialsSection id="testimonials" />
    <PartnersSection id="partners" />
    <FAQSection id="faq" />
    <Footer />
  </div>
</template>
