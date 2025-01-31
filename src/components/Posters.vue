<script setup lang="ts">
import { ref } from 'vue'
import type { MediaAsset } from '@/composables/UseModal'

const emit = defineEmits(['show-modal'])

const posters = ref<MediaAsset[]>([
  {
    src: new URL('@/assets/images/merch/poster01.jpg', import.meta.url).href,
    alt: 'Blank Angel on Guitar',
  },
  {
    src: new URL('@/assets/images/merch/poster02.jpg', import.meta.url).href,
    alt: 'Black Tan Poster Small',
  },
  {
    src: new URL('@/assets/images/merch/poster03.png', import.meta.url).href,
    alt: 'Tourquoise Torus on Black',
  },
  {
    src: new URL('@/assets/images/merch/poster04.jpg', import.meta.url).href,
    alt: 'Blank Turquoise Poster',
  },
])

const showModal = (p: MediaAsset) => {
  emit('show-modal', p)
}
</script>
<template>
  <div>
    <h3>Posters</h3>
    <div class="flex flex-wrap gap-4">
      <button v-for="p in posters" :key="p.src" @click="showModal(p)">
        <img :src="p.src" :alt="p.alt" class="h-full border rounded max-h-52" />
      </button>
    </div>
  </div>
</template>
