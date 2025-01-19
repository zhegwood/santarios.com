<script setup lang="ts">
import { computed } from 'vue'
const year = computed(() => {
  return new Date().getFullYear()
})
</script>
<template>
  <div>
    <h1>Tech Requirements and Rider</h1>
    <a href="Santa-Rios-Contract-Rider-2025.pdf" target="_blank" class="text link">
      Santa Rios Contract Rider {{ year }}
    </a>
    <hr class="my-4" />
    <img src="@/assets/images/stage-plot.jpg" alt="Santa Rios Stage Plot" />
  </div>
</template>
