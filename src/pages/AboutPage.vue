<template>
  <div class="min-h-screen bg-gray-50">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <!-- Hero Section -->
      <section class="relative bg-white rounded-3xl p-4 sm:p-6 lg:p-8 md:p-12 shadow-xl overflow-hidden">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="space-y-6">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Powering Connectivity.<br/>
              Enabling Possibility.
            </h1>
            <p class="text-lg sm:text-xl text-gray-600 leading-relaxed">
              We are redefining connectivity across Africa, delivering high-speed, low-latency fiber solutions that power homes, businesses, and communities.
            </p>
          </div>
          <div class="grid gap-4">
            <!-- Top image (coo.png) centered - reduced size -->
            <div class="flex justify-center">
              <div class="w-full max-w-xs aspect-[3/2]">
                <img src="/logos/coo.png" alt="Team meeting" class="w-full h-full object-cover rounded-xl shadow-lg"/>
              </div>
            </div>
            <!-- Bottom two images -->
            <div class="flex justify-center gap-4">
              <div class="w-1/2 max-w-xs aspect-[4/3]">
                <img src="/logos/GROUPCEO.png" alt="Group CEO" class="w-full h-full object-cover rounded-xl shadow-lg"/>
              </div>
              <div class="w-1/2 max-w-xs aspect-[4/3]">
                <img src="/logos/CEO.png" alt="CEO" class="w-full h-full object-cover rounded-xl shadow-lg"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline Section -->
      <section class="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg">
        <div class="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
          <span class="text-xs sm:text-sm font-semibold tracking-wider text-red-600 uppercase">Suburban's Journey</span>
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-2">What we've been up to</h2>
          <p class="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 px-4 lg:px-0">
            From pioneering connectivity experiences to building resilient cloud and managed services, each milestone represents a new chapter in how we empower customers across Nigeria and beyond.
          </p>
        </div>

        <div class="relative">
          <!-- Timeline Track -->
          <div class="flex overflow-x-auto pb-4 hide-scrollbar">
            <div class="flex space-x-4 sm:space-x-6 lg:space-x-8 px-4">
              <div
                v-for="(item, index) in timeline"
                :key="item.year"
                @mouseover="activeTimeline = index"
                :class="{
                  'scale-110': activeTimeline === index,
                  'opacity-75 hover:opacity-100': activeTimeline !== index
                }"
                class="flex flex-col items-center cursor-pointer transition-all duration-300 flex-shrink-0 w-16 sm:w-20 lg:w-24"
                tabindex="0"
              >
                <div
                  class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg p-1 sm:p-2"
                  :class="{'ring-2 ring-offset-2 ring-pink-400': activeTimeline === index}"
                >
                  <img
                    :src="`/logos/${item.year}.png`"
                    :alt="`${item.year} Milestone`"
                    class="w-full h-full object-contain"
                  />
                </div>
                <span class="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-gray-700">{{ item.year }}</span>
              </div>
            </div>
          </div>

          <!-- Timeline Content -->
          <div class="mt-8 lg:mt-12">
            <transition-group name="fade" mode="out-in">
              <div
                v-for="(item, index) in timeline"
                v-show="activeTimeline === index"
                :key="item.year"
                class="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-inner"
              >
                <p class="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed">
                  {{ item.highlight }}
                </p>
              </div>
            </transition-group>
          </div>
        </div>
      </section>

      <!-- Story Section -->
      <section class="grid md:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 xl:gap-16 items-center">
        <div class="w-full max-w-4xl mx-auto px-4 sm:px-6">
          <span class="text-sm sm:text-base font-semibold tracking-wider text-red-600 uppercase">Our Story</span>
          <h2 class="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Year of formation and existence in Nigeria</h2>
          <div class="mt-6 sm:mt-8 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg">
            <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
              Suburban Fiber Company was incorporated in 2012 and has been in existence in Nigeria for over 20 years.
              Entered the Nigerian telecommunications market providing intelligence, statistical analysis, consultation,
              network. Began providing mobile phone companies with intercity and international transmission facilities,
              which established Suburban as an industry leader in this segment with 60% market share from 2003-06.
            </p>
          </div>
        </div>
        <div class="relative w-full max-w-xs mx-auto lg:mx-0 lg:ml-auto">
          <div class="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/logos/aircall-reportage-lord-photographe-claire-jaillard-6%201.png"
              alt="Suburban Fiber Office"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="bg-[#012635] rounded-3xl p-4 sm:p-6 lg:p-8 text-white shadow-xl">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            <div class="bg-white bg-opacity-20 p-4 sm:p-6 rounded-2xl backdrop-blur-sm">
              <img src="/logos/2015.png" alt="" class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain">
            </div>
            <div>
              <p class="text-sm sm:text-base lg:text-lg font-semibold text-blue-200">Our Core Values,</p>
              <h3 class="text-lg sm:text-xl lg:text-2xl font-bold mt-1">Suburban Fiber</h3>
              <p class="mt-2 sm:mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
                Our passion for excellence is the blueprint we adapt to live up to the highest standards. It describes who we are and how we work, led by our core values of customer first, integrity, respect, performance, and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Commitment Section -->
      <section class="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg">
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8 lg:mb-12">We're Committing to This Together</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div class="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 sm:w-14 sm:h-14 mb-3 lg:mb-4 flex items-center justify-center">
            <img src="/icons/connectivity.svg" alt="Connectivity" class="w-full h-full object-contain" />
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 lg:mb-3">Empowering Connectivity for All</h3>
            <p class="text-sm sm:text-base text-gray-600">
              We are dedicated to making fast, reliable fiber-optic internet accessible across Nigeria not just in cities, but in underserved communities too.
            </p>
          </div>
          <div class="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 sm:w-14 sm:h-14 mb-3 lg:mb-4 flex items-center justify-center">
            <img src="/icons/infrastructure-service.svg" alt="Excellence" class="w-full h-full object-contain" />
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 lg:mb-3">Local Excellence & Sovereignty</h3>
            <p class="text-sm sm:text-base text-gray-600">
              By keeping our services rooted in Nigeria, we ensure data stays close, performance is high, and our solutions remain responsive to local needs.
            </p>
          </div>
          <div class="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-2xl hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 sm:w-14 sm:h-14 mb-3 lg:mb-4 flex items-center justify-center">
            <img src="/icons/business-voice 2.svg" alt="Partnership" class="w-full h-full object-contain" />
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 lg:mb-3">Partnership & Trust</h3>
            <p class="text-sm sm:text-base text-gray-600">
              We believe that our relationship with you is a partnership, not just a service contract. We promise transparency and continuous improvement.
            </p>
          </div>
        </div>
      </section>
        <section class="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-20">
    <!-- Mission -->
    <div class="text-center mb-12 lg:mb-16">
      <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 lg:mb-8">Our Mission</h2>
      <div class="bg-violet-100 rounded-xl p-4 sm:p-6 lg:p-8 md:p-10 max-w-4xl mx-auto shadow-sm">
        <p class="text-3xl sm:text-4xl text-violet-600 mb-3 lg:mb-4">"</p>
        <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
          Our mission is to empower businesses with the right web-based and cloud
          solutions to enhance their productivity. We deliver this promise through a blend
          of infrastructure, technology and applications specifically customized to meet
          the needs of businesses in Nigeria. We've made technological advancements to
          help increase your organizational advancements through world class solutions
          that tap into your business needs and generate the required results. We digitally
          transform your operations to create a high-performance, cost-effective and
          hyper-converged infrastructure making our technology the next step in the
          progression of the processes you already have in place. At Suburban, we don't
          just meet your needs, we go further to making sure you remain productive.
        </p>
      </div>
    </div>

    <!-- Vision -->
    <div class="text-center">
      <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 lg:mb-8">Our Vision</h2>
      <div class="bg-blue-100 rounded-xl p-4 sm:p-6 lg:p-8 md:p-10 max-w-4xl mx-auto shadow-sm">
        <p class="text-3xl sm:text-4xl text-violet-700 mb-3 lg:mb-4">"</p>
        <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
          Our vision is to empower businesses reach their full potential with the use of
          technology. From cloud storage, to hosting or setting up the business WiFi or
          fibre optic laid Internet, we're geared to take your business to the digital age
          where all you need to do is plug and play.
        </p>
      </div>
    </div>
  </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '../components/sections/Footer.vue'

const timeline = [
  { 
    year: '2017', 
    highlight: 'Exceeded the voice, data, and video performance benchmarks across our network.' 
  },
  { 
    year: '2013', 
    highlight: 'Built a state-of-the-art content delivery network in Nigeria.' 
  },
  { 
    year: '2015', 
    highlight: 'Commenced digitization and platform as a service for SME, Large Corporates, and Government agencies.' 
  },
  { 
    year: '2017', 
    highlight: 'Commenced delivery of services powering hundreds of businesses, network service providers, and governments through advanced technologies like software-defined networking and network function virtualization.' 
  },
  { 
    year: '2018', 
    highlight: 'Acquired advanced network security and threat monitoring capability to complement and protect existing infrastructure.' 
  },
  { 
    year: '2019', 
    highlight: 'Deployed hyper-converged infrastructure to enable the robust performance of web portals and localized hosting services for organizations in the West-African sub-region.' 
  },
  { 
    year: '2020', 
    highlight: 'Acquired Hyper Coverage Infrastructure and completed transition to a digital service provider.' 
  },
  { 
    year: '2021', 
    highlight: 'Launched 5G-ready infrastructure and expanded our network coverage across Nigeria.' 
  },
  { 
    year: '2022', 
    highlight: 'Introduced next-generation fiber technology, offering speeds up to 10Gbps for enterprise clients.' 
  }
]

const activeTimeline = ref(0)
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mobile responsiveness improvements */
@media (max-width: 640px) {
  .space-y-16 > * + * {
    margin-top: 3rem;
  }

  .rounded-3xl {
    border-radius: 1.5rem;
  }

  .shadow-xl {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
}

@media (max-width: 768px) {
  .space-y-16 > * + * {
    margin-top: 4rem;
  }

  .grid.md\\:grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .flex.flex-col.md\\:flex-row {
    flex-direction: column;
  }
}
</style>
