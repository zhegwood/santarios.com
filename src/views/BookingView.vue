<script setup lang="ts">
import { computed } from 'vue'
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
  </div>
</template>
