<template>
  <form class="space-y-4" @submit.prevent="handleSubmit">
    <div class="grid gap-3 md:grid-cols-2">
      <div>
        <label for="ms-name" class="block text-sm font-semibold text-[#012635] mb-2">Full Name</label>
        <input
          id="ms-name"
          v-model="form.name"
          type="text"
          required
          placeholder="Jane Doe"
          class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#CF0A2C] focus:ring-2 focus:ring-[#CF0A2C]/20"
        />
      </div>
      <div>
        <label for="ms-email" class="block text-sm font-semibold text-[#012635] mb-2">Work Email</label>
        <input
          id="ms-email"
          v-model="form.email"
          type="email"
          required
          placeholder="name@company.com"
          class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#CF0A2C] focus:ring-2 focus:ring-[#CF0A2C]/20"
        />
      </div>
    </div>

    <div class="grid gap-3 md:grid-cols-2">
      <div>
        <label for="ms-phone" class="block text-sm font-semibold text-[#012635] mb-2">Phone Number</label>
        <input
          id="ms-phone"
          v-model="form.phone"
          type="tel"
          required
          placeholder="0800 000 0000"
          class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#CF0A2C] focus:ring-2 focus:ring-[#CF0A2C]/20"
        />
      </div>
      <div>
        <label for="ms-company" class="block text-sm font-semibold text-[#012635] mb-2">Company</label>
        <input
          id="ms-company"
          v-model="form.company"
          type="text"
          required
          placeholder="Organization name"
          class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#CF0A2C] focus:ring-2 focus:ring-[#CF0A2C]/20"
        />
      </div>
    </div>

    <div>
      <label for="ms-service" class="block text-sm font-semibold text-[#012635] mb-2">Primary Need</label>
      <select
        id="ms-service"
        v-model="form.service"
        required
        class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-[#012635] focus:border-[#CF0A2C] focus:ring-2 focus:ring-[#CF0A2C]/20"
      >
        <option disabled value="">Select a service</option>
        <option>Infrastructure Build & Operations</option>
        <option>Managed Network Security</option>
        <option>Enterprise Wi-Fi</option>
        <option>SD-WAN</option>
        <option>Other</option>
      </select>
    </div>

    <div>
      <label for="ms-notes" class="block text-sm font-semibold text-[#012635] mb-2">Project Notes</label>
      <textarea
        id="ms-notes"
        v-model="form.notes"
        rows="4"
        placeholder="Share timelines, locations, or existing infrastructure."
        class="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#CF0A2C] focus:ring-2 focus:ring-[#CF0A2C]/20"
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full inline-flex items-center justify-center rounded-full bg-[#CF0A2C] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#A70028] focus:outline-none focus:ring-2 focus:ring-[#CF0A2C]/40"
    >
      Submit Request
    </button>

    <p v-if="submitted" class="text-sm text-green-600">Thank you! We will reach out shortly.</p>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const submitted = ref(false)
const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  notes: ''
})

const handleSubmit = () => {
  console.table(form)
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
  }, 4000)

  form.name = ''
  form.email = ''
  form.phone = ''
  form.company = ''
  form.service = ''
  form.notes = ''
}
</script>
