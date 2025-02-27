<script setup lang="ts">
import PastVenue from '@/components/PastVenue.vue'
import Upcoming from '@/components/Upcoming.vue'
</script>
<template>
  <div>
    <h1>Upcoming Shows</h1>
    <Upcoming hide-title />
    <hr class="my-4" />
    <PastVenue />
  </div>
</template>
