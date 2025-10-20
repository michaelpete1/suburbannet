<template>
  <div class="testimonials-section bg-gray-50 py-20 font-sans">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center">
      <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-12">
        What Our Customers Say About Suburban Fiber
      </h2>
      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-4 text-left">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.quote"
          class="testimonial-card"
          :style="{ '--accent': testimonial.accent, '--bg': testimonial.background }"
        >
          <div class="testimonial-quote">“</div>
          <p class="testimonial-text">{{ testimonial.quote }}</p>
          <p class="testimonial-author">
            {{ testimonial.role }}
            <span class="testimonial-separator">·</span>
            {{ testimonial.company }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const testimonials = [
  {
    quote:
      '“Suburban’s fiber network has given us the stability and speed to serve our clients better. Their attention to uptime and proactive monitoring gives us peace of mind.”',
    role: 'IT Project Manager',
    company: 'Consulting Firm',
    accent: '#D91D45',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFD93 100%)',
  },
  {
    quote:
      '“Suburban Fiber is more than a service provider — they’re a true partner in our digital journey. Their infrastructure and professionalism reflect world-class standards.”',
    role: 'IT Project Manager',
    company: 'Caudalie',
    accent: '#7C3AED',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #BBD4EC 100%)',
  },
  {
    quote:
      '“Suburban Fiber has been a game-changer for our company. The connection is stable, the speed is consistent, and their customer service is always responsive. It’s the kind of reliability every business needs!”',
    role: 'Operations Manager',
    company: 'Tech Firm, Lagos',
    accent: '#2563EB',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #D6E7FC 100%)',
  },
  {
    quote:
      '“For years, we struggled with unstable internet. Since switching to Suburban Fiber, that’s history. Streaming, gaming, and remote work now happen without interruption.”',
    role: 'Home User',
    company: 'Remote Worker, Abuja',
    accent: '#DB2777',
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F1F0FF 100%)',
  },
]
</script>

<style scoped>
.testimonial-card {
  background: var(--bg);
  padding: 2.5rem;
  border-radius: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
}

.testimonial-quote {
  font-size: 3.5rem;
  line-height: 1;
  color: var(--accent);
  font-family: 'Graphik Trial', sans-serif;
  margin-bottom: 1.5rem;
}

.testimonial-text {
  font-size: 1.125rem;
  color: #1F2937;
  font-style: italic;
  margin-bottom: 1.75rem;
}

.testimonial-author {
  font-weight: 600;
  font-size: 0.95rem;
  color: #0F172A;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.testimonial-separator {
  opacity: 0.6;
}
</style>
