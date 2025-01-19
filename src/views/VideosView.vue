<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const width = ref(0)
const height = ref(0)

const computeDimensions = () => {
  setTimeout(async () => {
    const sw = document.body.getBoundingClientRect().width
    width.value = sw < 560 ? sw - 32 : 560
    height.value = (width.value * 9) / 16
  }, 100)
}

onMounted(() => {
  computeDimensions()
  window.addEventListener('resize', computeDimensions)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', computeDimensions)
})
</script>
<template>
  <div>
    <h1>Videos</h1>
    <div class="flex justify-center mb-4">
      <div class="flex flex-wrap justify-center max-w-6xl gap-3">
        <iframe :width="width" :height="height" src="https://www.youtube.com/embed/s2eU5LumgxM">
        </iframe>
        <iframe :width="width" :height="height" src="https://www.youtube.com/embed/wNyuAUUUzQ4">
        </iframe>
        <iframe :width="width" :height="height" src="https://www.youtube.com/embed/uJ2pM_IS9w4">
        </iframe>
        <iframe :width="width" :height="height" src="https://www.youtube.com/embed/Ugozy-OTTBQ">
        </iframe>
      </div>
    </div>
  </div>
</template>
