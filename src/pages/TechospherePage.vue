<template>
  <div class="min-h-screen bg-white font-sans">
    <Navbar />

    <main class="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-12">
      <header class="space-y-4 text-center">
        <p class="text-sm uppercase tracking-[0.3em] text-[#CF0A2C] font-semibold">About Us</p>
        <h1 class="text-4xl lg:text-5xl font-extrabold text-[#012635]">Inside Suburban Techosphere</h1>
        <p class="text-lg text-[#012635]/70 max-w-3xl mx-auto">
          Discover the people, partnerships, and platforms powering Suburban’s mission to deliver world-class connectivity and technology services across Africa.
        </p>
      </header>

      <section class="grid gap-8 lg:grid-cols-2">
        <article class="p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          <h2 class="text-2xl font-bold text-[#012635]">Our Story</h2>
          <p class="text-base leading-7 text-[#012635]/80">
            From fiber infrastructure to mission-critical managed services, Suburban has spent over two decades building resilient technology ecosystems. Techosphere is where our innovations, people, and culture unite to solve connectivity gaps for enterprises, public sector institutions, and communities.
          </p>
        </article>

        <article class="p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          <h2 class="text-2xl font-bold text-[#012635]">What Drives Us</h2>
          <ul class="space-y-3 text-base leading-7 text-[#012635]/80 list-disc list-inside">
            <li>Delivering reliable, high-capacity fiber networks backed by enterprise SLAs.</li>
            <li>Designing locally-aware managed services for security, productivity, and performance.</li>
            <li>Empowering teams with training, mentorship, and community-focused programs.</li>
          </ul>
        </article>
      </section>

      <section class="p-10 rounded-3xl bg-[#012635] text-white space-y-6">
        <h2 class="text-3xl font-bold">Leadership & Culture</h2>
        <p class="text-base leading-7 opacity-90">
          Our multidisciplinary teams of network engineers, cloud architects, designers, and support specialists keep enterprises connected and protected 24/7. Collaboration, curiosity, and accountability define Techosphere and shape every customer experience.
        </p>
      </section>

      <section class="grid gap-6 md:grid-cols-2">
        <div class="p-6 rounded-2xl border border-dashed border-[#CF0A2C]/40 bg-[#CF0A2C]/5">
          <h3 class="text-xl font-semibold text-[#CF0A2C] mb-2">Join Our Team</h3>
          <p class="text-base text-[#012635]/80 mb-4">
            We’re continuously recruiting passionate engineers, product specialists, and customer champions.
          </p>
          <RouterLink to="/careers" class="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#CF0A2C] px-5 py-2 rounded-full hover:bg-[#A70028] transition">
            Explore Careers
            <span aria-hidden="true">→</span>
          </RouterLink>
        </div>

        <div class="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
          <h3 class="text-xl font-semibold text-[#012635] mb-2">Partner With Us</h3>
          <p class="text-base text-[#012635]/80 mb-4">
            Collaborate with Suburban to extend advanced connectivity, cloud, and security capabilities to your customers.
          </p>
          <RouterLink to="/partners" class="inline-flex items-center gap-2 text-sm font-semibold text-[#CF0A2C] hover:text-[#A70028]">
            Become a Partner
            <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/sections/Navbar.vue'
import Footer from '../components/sections/Footer.vue'
</script>
