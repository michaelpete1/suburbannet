<script setup>
import { Zap, ShieldCheck, GaugeCircle, Handshake } from 'lucide-vue-next'
</script>

<template>
  <!-- New Experience Connectivity Section -->
  <div class="bg-gradient-to-b from-gray-900 via-red-800 to-red-600 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center mb-16 pt-12">
      <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
        Experience Connectivity Without Limits
      </h2>
      <p class="mt-6 text-xl text-white opacity-90 max-w-2xl mx-auto">
        Empower your enterprise with reliable, high-performance connectivity. From SMEs to large organizations, We ensure your business operates at the speed of innovation.
      </p>
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12 px-4 sm:px-6 lg:px-8">
      <!-- Business Internet Card -->
      <div class="bg-white rounded-xl shadow-xl p-8 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2">
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Suburban Business Internet</h3>
          <p class="text-gray-600 text-base leading-relaxed mb-6">
            Connect to Suburban's Internet solutions built for businesses and subscription plans designed for value. We offer dedicated, high-capacity fiber optic network and scalable data services.
          </p>
        </div>
        <div class="mt-auto">
          <router-link to="/business-internet" class="btn-gradient-purple">
            Learn More
          </router-link>
        </div>
      </div>

      <!-- Business WiFi Card -->
      <div class="bg-white rounded-xl shadow-xl p-8 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2">
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Suburban Business WiFi</h3>
          <p class="text-gray-600 text-base leading-relaxed mb-6">
            Suburban's business-grade Wi-Fi is a cost-effective high-speed Wi-Fi solution that is fully managed and secure, using state-of-the-art cloud-based management systems.
          </p>
        </div>
        <div class="mt-auto">
          <router-link to="/business-wifi" class="btn-gradient-blue">
            Learn More
          </router-link>
        </div>
      </div>

      <!-- Business Voice Card -->
      <div class="bg-white rounded-xl shadow-xl p-8 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2">
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Suburban Business Voice</h3>
          <p class="text-gray-600 text-base leading-relaxed mb-6">
            Our Business VoIP services enable your business to achieve more with Business Voice utilizing our Hosted PBX and SIP Trunks, ensuring high call quality for both local and international calls.
          </p>
        </div>
        <div class="mt-auto">
          <router-link to="/business-voice" class="btn-gradient-red">
            Learn More
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <div class="features-section bg-white py-16 lg:py-20 font-sans">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 text-center">
      <h2 class="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-10 lg:mb-16">
        Why Choose Suburban Fiber?
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        <div class="group text-left p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] cursor-pointer animate-fade-up" style="animation-delay:0.0s">
          <div class="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
            <Zap class="h-5 w-5" />
          </div>
          <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2">Blazing-Fast Internet</h3>
          <p class="text-gray-600 text-sm">Enjoy true fiber-optic performance with consistent upload and download speeds. Our network infrastructure is built for stability.</p>
        </div>
        <div class="group text-left p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] cursor-pointer animate-fade-up" style="animation-delay:0.08s">
          <div class="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
            <ShieldCheck class="h-5 w-5" />
          </div>
          <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2">Smart Managed Services</h3>
          <p class="text-gray-600 text-sm">Managed WiFi, VoIP, and Cloud Connectivity to keep your business unified and efficient.</p>
        </div>
        <div class="group text-left p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] cursor-pointer animate-fade-up" style="animation-delay:0.16s">
          <div class="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
            <GaugeCircle class="h-5 w-5" />
          </div>
          <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2">Unmatched Reliability</h3>
          <p class="text-gray-600 text-sm">Flexible packages that grow with your bandwidth and operational needs.</p>
        </div>
        <div class="group text-left p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] cursor-pointer animate-fade-up" style="animation-delay:0.24s">
          <div class="h-10 w-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
            <Handshake class="h-5 w-5" />
          </div>
          <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
          <p class="text-gray-600 text-sm">No hidden charges, no unexpected fees. Clear, consistent pricing.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Button Gradients */
.btn-gradient-purple {
  display: block;
  width: 100%;
  text-align: center;
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background: linear-gradient(to right, rgb(139, 92, 246), rgb(79, 70, 229));
  transition: background 150ms ease-in-out;
}

.btn-gradient-purple:hover {
  background: linear-gradient(to right, rgb(147, 51, 234), rgb(67, 56, 202));
}

.btn-gradient-blue {
  display: block;
  width: 100%;
  text-align: center;
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background: linear-gradient(to right, rgb(96, 165, 250), rgb(6, 182, 212));
  transition: background 150ms ease-in-out;
}

.btn-gradient-blue:hover {
  background: linear-gradient(to right, rgb(59, 130, 246), rgb(8, 145, 178));
}

.btn-gradient-red {
  display: block;
  width: 100%;
  text-align: center;
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background: linear-gradient(to right, rgb(239, 68, 68), rgb(219, 39, 119));
  transition: background 150ms ease-in-out;
}

.btn-gradient-red:hover {
  background: linear-gradient(to right, rgb(220, 38, 38), rgb(190, 24, 93));
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-4xl {
    font-size: 2rem;
  }

  .text-xl {
    font-size: 1.125rem;
  }

  .p-8 {
    padding: 1.5rem;
  }
}
</style>
