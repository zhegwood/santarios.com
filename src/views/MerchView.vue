<script setup lang="ts">
import { ref } from 'vue'
import type { MediaAsset } from '@/composables/UseModal'
import { useModal } from '@/composables/UseModal'
import Modal from '@/components/lib/Modal.vue'

const { showModal, hideModal, modalAsset } = useModal(null)

const images = ref<MediaAsset[]>([
  {
    src: new URL('@/assets/images/merch/t-shirt01.jpg', import.meta.url).href,
    alt: "Women's Tank Sunburst Angel",
  },
  {
    src: new URL('@/assets/images/merch/t-shirt02.jpg', import.meta.url).href,
    alt: "Women's Tank Turquoise Angel",
  },
  {
    src: new URL('@/assets/images/merch/t-shirt03.jpg', import.meta.url).href,
    alt: 'Heather Graphite Gray',
  },
  {
    src: new URL('@/assets/images/merch/t-shirt04.jpg', import.meta.url).href,
    alt: 'Gray with Turquoise Angel',
  },
])

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

const stickers = ref<MediaAsset[]>([
  {
    src: new URL('@/assets/images/merch/sticker01.jpg', import.meta.url).href,
    alt: '3 Stroked Logo',
  },
  {
    src: new URL('@/assets/images/merch/sticker02.jpg', import.meta.url).href,
    alt: 'Color Log w Dance Tag',
  },
  {
    src: new URL('@/assets/images/merch/sticker03.png', import.meta.url).href,
    alt: 'Thick Skewed with Tagline Gradient',
  },
  {
    src: new URL('@/assets/images/merch/sticker04.jpg', import.meta.url).href,
    alt: 'Thin Logo',
  },
  {
    src: new URL('@/assets/images/merch/sticker05.jpg', import.meta.url).href,
    alt: 'Angel Procreate',
  },
  {
    src: new URL('@/assets/images/merch/sticker06.jpg', import.meta.url).href,
    alt: 'Stacked Purple with Tag White Background',
  },
])
</script>
<template>
  <div>
    <h1>Merchandise</h1>
    <p class="text">Santa Rios merch available at all live concerts!</p>
    <hr class="my-4" />
    <h3>T-Shirts</h3>
    <div class="flex flex-wrap gap-4 mb-4">
      <button v-for="img in images" :key="img.src" @click="showModal(img)">
        <img :src="img.src" :alt="img.alt" class="h-full border rounded max-h-52" />
      </button>
    </div>
    <h3>Posters</h3>
    <div class="flex flex-wrap gap-4 mb-4">
      <button v-for="p in posters" :key="p.src" @click="showModal(p)">
        <img :src="p.src" :alt="p.alt" class="h-full border rounded max-h-52" />
      </button>
    </div>
    <h3>Stickers</h3>
    <div class="flex flex-wrap gap-4 mb-4">
      <button v-for="s in stickers" :key="s.src" @click="showModal(s)">
        <img :src="s.src" :alt="s.alt" class="w-full border rounded max-w-48" />
      </button>
    </div>
  </div>
  <Modal v-if="modalAsset" @close="hideModal">
    <img :src="modalAsset.src" :alt="modalAsset.alt" />
  </Modal>
</template>
