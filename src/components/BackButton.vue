<template>
  <button 
    @click="$router.back()"
    class="inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
    aria-label="Go back to previous page"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
    <span class="font-medium">Back</span>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const $router = useRouter()
</script>