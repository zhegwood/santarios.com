<script setup lang="ts">
import PastVenue from '@/components/PastVenue.vue'
import Upcoming from '@/components/Upcoming.vue'
</script>
<template>
  <div class="space-y-6">
    <section class="rounded-[2rem] bg-slate-900/60 p-6 backdrop-blur-sm sm:p-8">
      <h1>Upcoming Shows</h1>
      <p class="text">Find the next Santa Rios performance and plan your night around the rhythm.</p>
      <Upcoming hide-title />
    </section>

    <section class="rounded-[2rem] bg-slate-800/70 p-6 text-slate-100 sm:p-8">
      <PastVenue />
    </section>
  </div>
</template>
