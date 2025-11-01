<template>
  <div class="font-graphik">
    <!-- Navbar Component -->
    <Navbar />

    <div class="font-graphik py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen flex items-start justify-center">

      <div class="max-w-xl w-full">

        <div class="rounded-t-3xl p-8 sm:p-10 text-center text-white shadow-lg"
             :class="gradientClasses">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Contact Us
          </h2>
          <p class="mt-2 text-base sm:text-lg max-w-sm mx-auto font-light leading-relaxed">
            At Suburban, we believe meaningful connections start with a simple conversation. Our team is ready to guide you toward the right solution for your business.
          </p>
        </div>

        <form @submit.prevent="submitForm" class="bg-white rounded-b-3xl p-8 sm:p-10 shadow-xl border-t border-red-100">

          <div class="mb-6">
            <label for="email" class="form-label">Enter Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="form-input"
              placeholder="Enter your email"
            >
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-6">

            <div>
              <label for="firstName" class="form-label">First name</label>
            <input type="text" id="firstName" v-model="formData.firstName" class="form-input" placeholder="First name">
          </div>

          <div>
            <label for="lastName" class="form-label">Last name</label>
            <input type="text" id="lastName" v-model="formData.lastName" class="form-input" placeholder="Last name">
          </div>

          <div>
            <label for="phone" class="form-label">Phone number</label>
            <input type="tel" id="phone" v-model="formData.phone" class="form-input" placeholder="Phone number">
          </div>

            <div>
              <label for="company" class="form-label">Company/Organization name</label>
              <input type="text" id="company" v-model="formData.company" class="form-input" placeholder="Company/Organization name">
            </div>
          </div>

          <div class="mb-6">
            <label for="service" class="form-label">Select Service</label>
            <select id="service" v-model="formData.selectedService" class="form-input appearance-none">
              <option disabled value="">Select a service</option>
              <option>Managed Service</option>
              <option>Infrastructure as a Service (IaaS)</option>
              <option>Suburban Cloud</option>
              <option>Technical Support</option>
              <option>Partnership</option>
              <option>Careers</option>
            </select>
            <span class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </span>
          </div>

          <div class="mb-6">
            <label for="enquiry" class="form-label">Select Enquiry</label>
            <select id="enquiry" v-model="formData.selectedEnquiry" class="form-input appearance-none">
              <option disabled value="">Select an enquiry</option>
              <option v-for="enquiry in enquiries" :key="enquiry" :value="enquiry">{{ enquiry }}</option>
            </select>
            <span class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </span>
          </div>

          <div class="mb-8">
            <label for="request" class="form-label">Request</label>
            <textarea
              id="request"
              v-model="formData.request"
              rows="4"
              class="form-input resize-none"
              placeholder="Type Here"
            ></textarea>
          </div>

          <button type="submit" class="btn-contact-submit">
            Contact us
          </button>
        </form>

      </div>
    </div>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Navbar from '../components/sections/Navbar.vue'
import Footer from '../components/sections/Footer.vue'

// Define the enquiries options
const enquiries = [
  'Infrastructure as a Service (IaaS)',
  'Partners Program',
  'Managed Service',
  'Careers',
  'Technical Support'
];

// Define the form data structure
const formData = reactive({
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  company: '',
  selectedService: 'Managed Service', // Default to show the sub-menu on load
  selectedEnquiry: '',
  request: ''
});

// Define the gradient classes for the header banner
const gradientClasses = computed(() => {
  return [
    'bg-gradient-to-b',
    'from-red-600',
    'to-red-400/80',
  ];
});

// Placeholder function for form submission
const submitForm = () => {
  console.log('Form Submitted:', formData);
  alert('Form submitted! Check console for data.');
};
</script>

<style scoped>
/* Ensure Graphik is used if not set globally */
.font-graphik {
  font-family: 'Graphik Trial', sans-serif;
}

/* Base style for form labels */
.form-label {
  @apply block text-sm font-semibold text-gray-700 mb-1;
}

/* Base style for all form inputs (text, email, select, textarea) */
.form-input {
  @apply block w-full py-3 px-4 text-gray-900 bg-gray-50 border border-gray-200 rounded-lg
         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
         transition duration-150 ease-in-out;
}

/* Styling for the Service Select wrapper (to position the custom arrow) */
#service {
  position: relative;
}

/* Submit Button Style */
.btn-contact-submit {
  /* Matches the distinct red gradient button style */
  @apply w-full text-center rounded-full py-4 text-xl font-bold text-white shadow-xl
         bg-gradient-to-r from-red-600 to-red-500
         hover:from-red-700 hover:to-red-600 transition duration-150 ease-in-out;
}
</style>
