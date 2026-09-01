<script setup lang="ts">
import { computed } from 'vue'
import PastVenue from '@/components/PastVenue.vue'
const year = computed(() => {
  return new Date().getFullYear()
})
</script>
<template>
  <div class="space-y-6">
    <section class="rounded-[2rem] bg-slate-900/60 p-6 backdrop-blur-sm sm:p-8">
      <h1>Booking</h1>
      <p class="text">Bare Bones Productions</p>
      <p class="text"><a href="mailto:bonesdrums@gmail.com" class="link">bonesdrums@gmail.com</a></p>
      <p class="text"><a href="tel:+17192073422" class="link">(719) 207-3422</a></p>
      <a href="Santa-Rios-Contract-Rider.pdf" target="_blank" class="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
        Santa Rios Contract Rider {{ year }}
      </a>
    </section>

    <section class="rounded-[2rem] bg-slate-800/70 p-6 text-slate-100 sm:p-8">
      <PastVenue />
    </section>
  </div>
</template>
