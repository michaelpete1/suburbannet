<template>
  <div class="about-page">
    <Navbar />

    <main class="about-main">
      <section class="hero">
        <div class="hero__content">
          <p class="hero__eyebrow">About Us</p>
          <h1 class="hero__title">Powering Connectivity. Enabling Possibility.</h1>
          <p class="hero__subtitle">
            We are redefining connectivity across Africa, delivering high-speed, low-latency fiber solutions that power homes, businesses, and communities.
          </p>
          <div class="hero__actions">
            <RouterLink :to="{ path: '/', hash: '#features' }" class="hero__cta hero__cta--primary">Explore Solutions</RouterLink>
            <RouterLink :to="{ path: '/', hash: '#request-form' }" class="hero__cta hero__cta--secondary">Request Service</RouterLink>
          </div>
        </div>
        <div class="hero__media" aria-hidden="true">
          <div class="hero__photo hero__photo--main">
            <img src="/logos/WOMANBLUE.png" alt="Suburban team member" />
          </div>
          <div class="hero__photo-stack">
            <img src="/logos/GROUPCEO.png" alt="Suburban leadership" />
            <img src="/logos/CEO.png" alt="Suburban executive conversation" />
          </div>
        </div>
      </section>

      <section class="journey">
        <div class="journey__header">
          <p class="journey__eyebrow">Suburban&apos;s Journey</p>
          <h2 class="journey__title">What we&apos;ve been up to</h2>
          <p class="journey__intro">
            From pioneering connectivity experiences to building resilient cloud and managed services, each milestone represents a new chapter in how we empower customers across Nigeria and beyond.
          </p>
        </div>

        <div class="journey__timeline">
          <div class="timeline__track">
            <div v-for="(item, index) in timeline" :key="item.year" class="timeline__item" :class="{ 'timeline__item--active': index === activeTimeline }" @mouseover="activeTimeline = index" @focusin="activeTimeline = index" tabindex="0">
              <span class="timeline__icon">{{ item.year }}</span>
              <span class="timeline__year">{{ item.year }}</span>
            </div>
          </div>

          <div class="timeline__detail">
            <transition-group name="fade" tag="div">
              <article v-for="(item, index) in timeline" v-show="index === activeTimeline" :key="item.year" class="timeline__card">
                <h3 class="timeline__card-year">{{ item.year }}</h3>
                <p class="timeline__card-highlight">{{ item.highlight }}</p>
              </article>
            </transition-group>
          </div>
        </div>
      </section>

      <section class="story">
        <div class="story__content">
          <p class="story__eyebrow">Our Story</p>
          <h2 class="story__title">Year of formation and existence in Nigeria</h2>
          <div class="story__card">
            <p>
              Suburban Fiber Company was incorporated in 2012 and has been in existence in Nigeria for over 20 years. We entered the Nigerian telecommunications market providing intelligence, statistical analysis, consultation, and network services.
            </p>
            <p>
              We began supplying mobile phone companies with intercity and international transmission facilities, establishing Suburban as an industry leader with 60% market share from 2003 to 2006.
            </p>
            <p>
              In less than five years the industry evolved to innovation leadership in advanced fiber technology, multimedia content distribution, and cloud platform services—a position we have sustained for the last two decades.
            </p>
          </div>
        </div>
        <div class="story__media" aria-hidden="true">
          <div class="story__image-frame">
            <img src="/logos/aircall-reportage-lord-photographe-claire-jaillard-6%201.png" alt="Hold the vision. Trust the process." />
          </div>
        </div>
      </section>

      <section class="leadership">
        <div class="leadership__header">
          <p class="leadership__eyebrow">Leadership spotlight</p>
          <h2 class="leadership__title">A team committed to the digital future</h2>
          <p class="leadership__intro">Meet the visionaries fostering growth, resilience, and inclusive connectivity across our network footprint.</p>
        </div>

        <div class="leadership__grid">
          <article v-for="leader in leaders" :key="leader.name" class="leader-card">
            <div class="leader-card__media">
              <img :src="leader.photo" :alt="leader.name" />
            </div>
            <div class="leader-card__body">
              <p class="leader-card__name">{{ leader.name }}</p>
              <p class="leader-card__role">{{ leader.role }}</p>
              <p class="leader-card__summary">{{ leader.summary }}</p>
            </div>
          </article>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/sections/Navbar.vue'
import Footer from '../components/sections/Footer.vue'

const timeline = [
  {
    year: '2012',
    highlight: 'Exceeded the voice, data, and video performance benchmarks across our network.'
  },
  {
    year: '2013',
    highlight: 'Built a state-of-the-art content delivery network in Nigeria.'
  },
  {
    year: '2015',
    highlight: 'Commenced digitization and platform-as-a-service for SMEs, large corporates, and government agencies.'
  },
  {
    year: '2017',
    highlight: 'Delivered services to hundreds of businesses and service providers with software-defined networking and network function virtualization.'
  },
  {
    year: '2018',
    highlight: 'Acquired advanced network security and threat monitoring capabilities to protect existing infrastructure.'
  },
  {
    year: '2019',
    highlight: 'Deployed hyper-converged infrastructure enabling high-performance web portals and localized hosting services across West Africa.'
  },
  {
    year: '2020',
    highlight: 'Acquired Hyper Coverage Infrastructure and completed the transition to a digital service provider.'
  }
]

const leaders = [
  {
    name: 'Group CEO',
    role: 'Guiding long-term strategy and investments',
    summary: 'Shapes our multi-year roadmap for fiber, cloud, and managed services that scale with customer ambitions.',
    photo: '/logos/GROUPCEO.png'
  },
  {
    name: 'Chief Executive Officer',
    role: 'Driving operational excellence',
    summary: 'Leads the teams that keep projects on track, experiences seamless, and support always-on.',
    photo: '/logos/CEO.png'
  },
  {
    name: 'Leadership Team',
    role: 'Empowering communities and partners',
    summary: 'Brings together expertise across engineering, product, and customer success to transform connectivity.',
    photo: '/logos/WOMANBLUE.png'
  }
]

const activeTimeline = ref(0)
</script>

<style scoped>
.about-page {
  background: #f8fafc;
  color: #0b1f33;
  min-height: 100vh;
}

.about-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(3rem, 5vw, 4.5rem) 1.5rem clamp(4rem, 7vw, 5.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(3.5rem, 6vw, 5rem);
}

.hero {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #fde8ee 55%, #fee2e2 100%);
  border-radius: clamp(1.75rem, 3vw, 2.5rem);
  padding: clamp(2.5rem, 5vw, 3.5rem);
  box-shadow: 0 24px 60px rgba(244, 63, 94, 0.15);
}

.hero__content {
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.35em;
  font-size: 0.75rem;
  font-weight: 600;
  color: #cf0a2c;
}

.hero__title {
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  line-height: 1.15;
  font-weight: 700;
  color: #0e1f3d;
}

.hero__subtitle {
  font-size: clamp(1rem, 1.4vw, 1.1rem);
  line-height: 1.75;
  color: rgba(11, 31, 51, 0.75);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 600;
  padding: 0.9rem 1.9rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  text-decoration: none;
}

.hero__cta--primary {
  background: #cf0a2c;
  color: #fff;
  box-shadow: 0 10px 30px rgba(207, 10, 44, 0.25);
}

.hero__cta--primary:hover {
  transform: translateY(-1px);
  background: #b00024;
}

.hero__cta--secondary {
  background: rgba(255, 255, 255, 0.65);
  color: #cf0a2c;
  border: 1px solid rgba(207, 10, 44, 0.25);
}

.hero__cta--secondary:hover {
  border-color: rgba(207, 10, 44, 0.45);
  transform: translateY(-1px);
}

.hero__media {
  flex: 1 1 320px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1.25rem;
  position: relative;
}

.hero__photo {
  border-radius: clamp(1.5rem, 3vw, 2rem);
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.18);
}

.hero__photo--main img,
.hero__photo-stack img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__photo--main {
  grid-row: span 2;
  background: #fff;
}

.hero__photo-stack {
  display: grid;
  gap: 1.25rem;
}

.journey {
  background: #fff;
  border-radius: clamp(1.75rem, 3vw, 2.5rem);
  padding: clamp(2.75rem, 5vw, 3.5rem);
  box-shadow: 0 18px 44px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 3vw, 2.75rem);
}

.journey__header {
  max-width: 720px;
}

.journey__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.75rem;
  font-weight: 600;
  color: #cf0a2c;
  margin-bottom: 0.75rem;
}

.journey__title {
  font-size: clamp(2rem, 3vw, 2.7rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #0e1f3d;
}

.journey__intro {
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(11, 31, 51, 0.7);
}

.journey__timeline {
  display: grid;
  gap: clamp(2rem, 3vw, 2.75rem);
}

.timeline__track {
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  scrollbar-width: thin;
}

.timeline__track::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.35rem;
  height: 2px;
  background: linear-gradient(90deg, rgba(207, 10, 44, 0.25), rgba(15, 23, 42, 0.1));
}

.timeline__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  min-width: 84px;
  outline: none;
}

.timeline__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 24px;
  background: linear-gradient(150deg, #f43f5e, #fb7185);
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 10px 24px rgba(244, 63, 94, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.timeline__year {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(11, 31, 51, 0.65);
}

.timeline__item--active .timeline__icon,
.timeline__item:focus-visible .timeline__icon,
.timeline__item:hover .timeline__icon {
  transform: translateY(-4px);
  box-shadow: 0 18px 34px rgba(244, 63, 94, 0.3);
}

.timeline__detail {
  min-height: 140px;
  position: relative;
}

.timeline__card {
  background: linear-gradient(135deg, rgba(207, 10, 44, 0.12), rgba(255, 255, 255, 0.95));
  border-radius: 20px;
  padding: 1.75rem;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
}

.timeline__card-year {
  font-size: 1.25rem;
  font-weight: 700;
  color: #cf0a2c;
  margin-bottom: 0.75rem;
}

.timeline__card-highlight {
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(11, 31, 51, 0.78);
}

.story {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: center;
}

.story__content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.story__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.75rem;
  font-weight: 600;
  color: #cf0a2c;
}

.story__title {
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 700;
  color: #0e1f3d;
}

.story__card {
  background: #fff;
  border-radius: clamp(1.5rem, 3vw, 2.25rem);
  padding: clamp(1.75rem, 4vw, 2.5rem);
  box-shadow: 0 22px 48px rgba(15, 23, 42, 0.12);
  display: grid;
  gap: 1.25rem;
  color: rgba(11, 31, 51, 0.75);
  font-size: 1rem;
  line-height: 1.85;
}

.story__media {
  display: flex;
  justify-content: center;
}

.story__image-frame {
  border-radius: clamp(1.5rem, 3vw, 2.25rem);
  overflow: hidden;
  box-shadow: 0 22px 42px rgba(15, 23, 42, 0.22);
}

.story__image-frame img {
  display: block;
  width: 100%;
  height: auto;
}

.leadership {
  background: #fff;
  border-radius: clamp(1.75rem, 3vw, 2.5rem);
  padding: clamp(2.75rem, 5vw, 3.5rem);
  box-shadow: 0 18px 44px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 3vw, 2.75rem);
}

.leadership__header {
  max-width: 680px;
}

.leadership__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.75rem;
  font-weight: 600;
  color: #cf0a2c;
  margin-bottom: 0.75rem;
}

.leadership__title {
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 700;
  color: #0e1f3d;
  margin-bottom: 0.75rem;
}

.leadership__intro {
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(11, 31, 51, 0.7);
}

.leadership__grid {
  display: grid;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.leader-card {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.04), rgba(255, 255, 255, 0.95));
  border-radius: 1.75rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.12);
}

.leader-card__media {
  background: #0e1f3d;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.leader-card__media img {
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  border-radius: 1.25rem;
}

.leader-card__body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.leader-card__name {
  font-weight: 700;
  font-size: 1.1rem;
  color: #0e1f3d;
}

.leader-card__role {
  font-size: 0.9rem;
  color: rgba(11, 31, 51, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.leader-card__summary {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(11, 31, 51, 0.7);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .hero {
    align-items: flex-start;
  }

  .hero__media {
    grid-template-columns: 1fr 1fr;
  }

  .story {
    grid-template-columns: 1fr;
  }

  .story__media {
    order: 2;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: clamp(2rem, 8vw, 2.75rem);
  }

  .hero__media {
    grid-template-columns: 1fr;
  }

  .hero__photo-stack {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .journey {
    padding: clamp(2rem, 7vw, 2.75rem);
  }

  .leadership {
    padding: clamp(2rem, 7vw, 2.75rem);
  }
}

@media (max-width: 640px) {
  .hero__actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .leader-card__media img {
    max-height: 220px;
  }
}
</style>
