<script setup lang="ts">
import { computed } from 'vue'
import Upcoming from '@/components/Upcoming.vue'
const year = computed(() => {
  return new Date().getFullYear()
})
</script>
<template>
  <div>
    <h1>Booking</h1>
    <p class="text">Bare Bones Productions</p>
    <p class="text"><a href="mailto:bonesdrums@gmail.com" class="link">bonesdrums@gmail.com</a></p>
    <p class="text"><a href="tel:+17192073422" class="link">(719) 207-3422</a></p>
    <hr class="my-4" />
    <a href="Santa-Rios-Contract-Rider-2025.pdf" target="_blank" class="text link">
      Santa Rios Contract Rider {{ year }}
    </a>
    <hr class="my-4" />
    <Upcoming />
    <hr class="my-4" />
    <h3>Past Shows</h3>
    <ul>
      <li>2/8/2025 - Victoria Tavern - Salida, CO</li>
      <li>1/4/2025 - Boulder Theater - Boulder, CO</li>
      <li>11/16/2024 - Stargazers - Colorado Springs, CO</li>
      <li>11/2/2024 - Nissi's - Lafayette, CO</li>
      <li>11/1/2024 - Steamplant - Salida, CO</li>
      <li>9/14/2024 - Tabor Opera House - Leadville, CO</li>
      <li>8/23/2024 - Twinfest - Salida, CO</li>
      <li>7/4/2024 - Riverside Park - Salida, CO</li>
      <li>6/21/2024 - Stargazers - Colorado Springs, CO</li>
      <li>3/8/2024 - Ivy Ballroom - Buena Vista, CO</li>
      <li>11/24/2023 - Steamplant - Salida, CO</li>
      <li>8/25/2023 - Twinfest - Salida, CO</li>
      <li>7/4/2023 - Riverside Park - Salida, CO</li>
    </ul>
  </div>
</template>
