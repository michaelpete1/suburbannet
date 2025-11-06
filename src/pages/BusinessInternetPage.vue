 <template>
  <div class="font-graphik bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BackButton class="mb-6" />

    </div>

    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
        Suburban Business <span class="text-red-600">Internet</span>
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div class="bg-red-600 rounded-xl shadow-2xl p-8 lg:p-12 text-white flex flex-col justify-between">
          <div>
            <h2 class="text-2xl font-bold mb-4">Suburban Business Internet</h2>
            <p class="text-xl opacity-90 leading-relaxed mb-6">
              Connect to Suburban’s Internet solutions built for businesses and subscription plans designed for value. We offer dedicated, high-capacity fiber optic network and scalable data services, for efficient delivery of Internet and phone solutions. With a robust network that forms the basis of our fiber optic Internet services and other Internet-based services for small, mid-market, and enterprise-level businesses.
            </p>
            <p class="text-xl opacity-90 leading-relaxed">
              Our internet is built for optimal business performance to keep your business applications running smoothly and everyone in your organization connected with one robust and secure network. With Suburban Internet, you’ll exchange data safely and securely, up to 150Mbps.
            </p>
          </div>
          <button class="bg-white text-red-600 font-bold py-3 mt-10 rounded-full shadow-lg hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </div>

        <div class="space-y-8">

          <div class="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row gap-6 items-center">
            <div class="w-full sm:w-2/5 flex-shrink-0">
              <img src="/logos/two w.png" alt="Partners collaborating" class="rounded-lg w-full h-auto object-cover">
            </div>
            <div class="w-full sm:w-3/5">
              <h3 class="text-xl font-bold text-gray-900 mb-3">High-Performance Connectivity for Your Enterprise</h3>
              <ul class="text-gray-600 space-y-2 text-sm">
                <li><span class="text-red-600 text-lg mr-2">•</span> Dedicated fiber-optic network & scalable data services built for business performance.</li>
                <li><span class="text-red-600 text-lg mr-2">•</span> Unlimited data quota with no caps and no fair-usage policy — guaranteed speed.</li>
                <li><span class="text-red-600 text-lg mr-2">•</span> Installation, support and service built for business: professional setup, 24/7 customer support, annual contract renewals available.</li>
              </ul>
            </div>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-xl shadow-lg p-6">
            <div class="flex items-center space-x-2 text-red-600 font-semibold mb-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <span>Client's Testimonial</span>
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-3">Connectivity That Powers Growth</h4>
            <p class="text-gray-700 italic leading-relaxed">
              "Switching to Suburban Business Internet transformed our operations. As a company that relies on cloud systems, video conferencing, and real-time collaboration, we needed a connection that was fast, reliable, and consistent. The 150Mbps speed and low-latency boosted productivity across all teams. Our digital infrastructure is now stronger and more efficient. Suburban isn't just a provider; they’re a trusted technology partner helping us scale confidently in today's connected world."
            </p>
          </div>

          <div class="mt-8">
            <h4 class="text-lg font-bold text-gray-900 mb-2">Ready to elevate your business connectivity?</h4>
            <p class="text-gray-600">
              Contact us today and find the Suburban Business Internet plan that fits your organization. Our team will guide you through options, installation and ongoing support.
            </p>
          </div>

        </div>
      </div>
    </div>

    <!-- Partners Carousel -->
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider text-center mb-8">
        THEY CHOOSE SUBURBAN
      </h3>
      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex space-x-8 pb-4 animate-scroll">
          <img v-for="(logo, index) in trackLogos" :key="index" :src="logo.src" :alt="logo.alt" class="h-12 flex-shrink-0 opacity-70 hover:opacity-100 transition">
        </div>
      </div>
    </div>

    <div class="text-center py-4 text-xs text-gray-500 border-t border-gray-100 mt-10">
      <p>Suburban © 2025. All rights reserved.</p>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import BackButton from '../components/BackButton.vue'

const logos = [
  { src: '/logos/cbn.png', alt: 'Central Bank of Nigeria' },
  { src: '/logos/nhiq.png', alt: 'Nigerian Army' },
  { src: '/logos/npa.png', alt: 'Nigerian Ports Authority' },
  { src: '/logos/tetfund.png', alt: 'TETFund' },
  { src: '/logos/nexim.png', alt: 'NEXIM' },
  { src: '/logos/israel embassy.png', alt: 'IE' },
]

// Duplicate the logos to create a seamless looping track
const trackLogos = computed(() => [...logos, ...logos])
</script>

<style scoped>
/* Custom styles can be added here */

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Animation for feature cards */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .feature-card {
    padding: 1.5rem;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Hide scrollbar for carousel */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Auto-scroll animation for carousel */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}
</style>
