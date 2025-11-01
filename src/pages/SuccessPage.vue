<template>
  <div class="font-graphik bg-gray-50 min-h-screen flex flex-col">

    <main class="flex-grow flex items-center justify-center p-4">
      <div class="text-center max-w-lg mx-auto">
        <div class="mb-8 relative w-32 h-32 mx-auto">
            <div class="absolute inset-0 border-4 border-red-200 rounded-full animate-ping-slow"></div>
            <div class="absolute inset-0 flex items-center justify-center bg-red-100 border-4 border-red-500 rounded-full">
                <svg class="w-16 h-16 text-red-600 animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <div class="absolute top-1/2 left-0 right-0 h-1 bg-red-200 -z-10 animate-line-expand origin-left"></div>
            <div class="absolute top-1/2 left-0 right-0 h-1 bg-red-200 -z-10 animate-line-expand-delay origin-right"></div>
        </div>

        <h1 class="text-4xl font-bold text-gray-900 mb-4">All done!</h1>
        <p class="text-xl text-gray-600 mb-8">
          Congratulations! Your Payment is successful and your ticket has been created, we'll get back to you shortly.
        </p>

        <!-- Checklist -->
        <div class="bg-white rounded-2xl shadow-lg p-6 mb-8 text-left">
          <h3 class="text-lg font-semibold text-gray-900 mb-4 text-center">Your Request Summary</h3>
          <ul class="space-y-3">
            <li class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-gray-700">Product selected and configured</span>
            </li>
            <li class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-gray-700">Location and address verified</span>
            </li>
            <li class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-gray-700">Payment completed successfully</span>
            </li>
            <li class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-gray-700">Support ticket created</span>
            </li>
          </ul>
        </div>

        <div class="flex justify-center space-x-4">
          <router-link to="/" class="btn-secondary">
            Back to Product Page
          </router-link>
          <router-link to="/" class="btn-primary-red">
            Go Home
          </router-link>
        </div>
      </div>
    </main>

    <div class="text-center py-4 text-xs text-gray-500 border-t border-gray-100 mt-auto">
      <p>Suburban © 2025. All rights reserved.</p>
    </div>

  </div>
</template>

<script setup>
// No specific script logic needed for this static page.
</script>

<style scoped>
/* Reused Header Button Styles */
.btn-connect {
  @apply inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100 transition;
}

.btn-fiber {
  @apply inline-flex items-center justify-center rounded-full border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 transition;
}

/* Page-specific Button Styles */
.btn-secondary {
  @apply inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-lg font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition duration-150 ease-in-out;
}

.btn-primary-red {
  @apply inline-flex items-center justify-center rounded-full border border-transparent bg-red-600 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-red-700 transition duration-150 ease-in-out;
}

/* Ensure Graphik is used if not set globally */
.font-graphik {
  font-family: 'Graphik Trial', sans-serif;
}

/* Keyframe Animations for the success icon */
@keyframes ping-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
}

@keyframes checkmark {
  0% {
    stroke-dashoffset: 100;
    opacity: 0;
  }
  60% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes line-expand {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  70% {
      opacity: 0.5;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}

@keyframes line-expand-delay {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  30% {
      transform: scaleX(0);
      opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}


.animate-ping-slow {
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-checkmark {
  stroke-dasharray: 100; /* Needs to be larger than the path length */
  stroke-dashoffset: 100;
  animation: checkmark 1s ease-out forwards;
  animation-delay: 0.5s; /* Delay checkmark appearance */
}

.animate-line-expand {
    animation: line-expand 1s ease-out forwards;
    animation-delay: 0.2s; /* Start lines slightly before checkmark */
}

.animate-line-expand-delay {
    animation: line-expand 1s ease-out forwards;
    animation-delay: 0.4s; /* Second line slightly after first */
    transform-origin: right; /* Make it expand from the right */
}
</style>
