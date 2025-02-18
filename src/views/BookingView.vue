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
    <h3>Past Venues</h3>
    <ul>
      <li>Victoria Tavern - Salida, CO</li>
      <li>Boulder Theater - Boulder, CO</li>
      <li>Stargazers - Colorado Springs, CO</li>
      <li>Nissi's - Lafayette, CO</li>
      <li>Steamplant - Salida, CO</li>
      <li>Tabor Opera House - Leadville, CO</li>
      <li>The Lariat - Buena Vista, CO</li>
      <li>Independent Whitewater - Salida, CO</li>
      <li>Riverside Park - Salida, CO</li>
      <li>Ivy Ballroom - Buena Vista, CO</li>
    </ul>
  </div>
</template>
