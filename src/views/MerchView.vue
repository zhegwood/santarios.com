<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { MediaAsset } from '@/composables/UseModal'
import { useModal } from '@/composables/UseModal'
import shirts from '@/mediats/shirts'
import posters from '@/mediats/posters'
import Modal from '@/components/lib/Modal.vue'
import Posters from '@/components/Posters.vue'

const { showModal, hideModal, setAssets, onNext, onPrev, modalAsset } = useModal()

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
    src: new URL('@/assets/images/merch/sticker07.png', import.meta.url).href,
    alt: 'Turquoise Torus 2',
  },
  {
    src: new URL('@/assets/images/merch/sticker06.jpg', import.meta.url).href,
    alt: 'Stacked Purple with Tag White Background',
  },
])

const onMediaClick = async (assets: MediaAsset[], asset: MediaAsset) => {
  setAssets(assets)
  await nextTick()
  showModal(asset)
}

const onPosterClick = async (poster: MediaAsset) => {
  setAssets(posters)
  await nextTick()
  showModal(poster)
}
</script>
<template>
  <div>
    <h1>Merchandise</h1>
    <p class="text">Santa Rios merch available at all live concerts!</p>
    <hr class="my-4" />
    <h3>T-Shirts</h3>
    <div class="flex flex-wrap gap-4 mb-4">
      <button v-for="shirt in shirts" :key="shirt.src" @click="onMediaClick(shirts, shirt)">
        <img :src="shirt.src" :alt="shirt.alt" class="h-full border rounded max-h-52" />
      </button>
    </div>
    <Posters class="mb-4" :posters="posters" @posterClick="onPosterClick" />
    <h3>Stickers</h3>
    <div class="flex flex-wrap gap-4 mb-4">
      <button v-for="s in stickers" :key="s.src" @click="onMediaClick(stickers, s)">
        <img :src="s.src" :alt="s.alt" class="w-full border rounded max-w-48" />
      </button>
    </div>
  </div>
  <Modal v-if="modalAsset" show-nav @prev="onPrev" @next="onNext" @close="hideModal">
    <img :src="modalAsset.src" :alt="modalAsset.alt" />
  </Modal>
</template>
