<template>
  <div class="min-h-screen bg-white font-sans text-[#012635]">
    <Navbar />

    <header class="bg-[#012635] text-white py-16 lg:py-20">
      <div class="max-w-6xl mx-auto px-6 lg:px-12 text-center space-y-4">
        <p class="uppercase tracking-[0.35em] text-sm font-semibold">Managed Services</p>
        <h1 class="text-4xl lg:text-5xl font-extrabold">Mission-Critical Infrastructure & Services</h1>
        <p class="text-lg opacity-80 max-w-3xl mx-auto">
          Suburban delivers end-to-end managed infrastructure that keeps your business resilient, secure, and ready to scale. Request a tailored solution in minutes.
        </p>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-6 lg:px-12 py-16 space-y-16">
      <section class="grid gap-8 lg:grid-cols-[2fr_3fr] items-start">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold">What We Manage</h2>
          <p class="text-base leading-7 text-[#012635]/80">
            Focus on your core operations while we engineer, secure, and operate the infrastructure that powers your organization. From fiber connectivity to data center environments, we provide the visibility and support required to stay always-on.
          </p>
          <ul class="space-y-3 text-base leading-7 text-[#012635]/80 list-disc list-inside">
            <li>Carrier-grade fiber and last-mile networks.</li>
            <li>Enterprise LAN, SD-WAN, and secure Wi-Fi architectures.</li>
            <li>Infrastructure monitoring, incident response, and SLA-backed support.</li>
          </ul>
        </div>
        <div class="p-8 bg-[#F9FAFB] border border-gray-200 rounded-3xl shadow-sm">
          <h3 class="text-2xl font-semibold mb-4 text-[#CF0A2C]">Request a Managed Services Consultation</h3>
          <ManagedServicesForm />
        </div>
      </section>

      <section id="infrastructure" class="space-y-8">
        <h2 class="text-3xl font-bold">Infrastructure Solutions</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <article class="p-6 rounded-3xl border border-gray-200 shadow-sm bg-white space-y-3">
            <h3 class="text-xl font-semibold">Campus & Branch Connectivity</h3>
            <p class="text-base leading-7 text-[#012635]/80">
              Design and deploy resilient fiber backbones, structured cabling, and wireless systems for enterprise campuses, hotels, and multi-branch operations.
            </p>
          </article>
          <article class="p-6 rounded-3xl border border-gray-200 shadow-sm bg-white space-y-3">
            <h3 class="text-xl font-semibold">Network Security Operations</h3>
            <p class="text-base leading-7 text-[#012635]/80">
              24/7 monitoring, DDoS protection, and managed firewalls to protect sensitive data while meeting regulatory compliance requirements.
            </p>
          </article>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-3xl font-bold">Partners Program</h2>
        <p class="text-base leading-7 text-[#012635]/80">
          Become part of Suburban’s partner ecosystem and deliver infrastructure, cloud, and security outcomes for your customers.
        </p>
        <RouterLink
          to="/business-internet#partners-program"
          class="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#CF0A2C] px-5 py-2.5 rounded-full hover:bg-[#A70028] transition"
        >
          Explore Partner Benefits
          <span aria-hidden="true">→</span>
        </RouterLink>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/sections/Navbar.vue'
import Footer from '../components/sections/Footer.vue'
import ManagedServicesForm from '../components/forms/ManagedServicesForm.vue'
</script>
