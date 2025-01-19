<script setup lang="ts">
import { ref } from 'vue'
import type { MediaAsset } from '@/composables/UseModal'
import { useModal } from '@/composables/UseModal'
import Modal from '@/components/lib/Modal.vue'

const images = ref<MediaAsset[]>([
  {
    src: new URL('@/assets/images/photos/photos01.jpg', import.meta.url).href,
    alt: "Stargazer's",
    smallHeight: '251px',
  },
  {
    src: new URL('@/assets/images/photos/photos02.jpg', import.meta.url).href,
    alt: 'Aaron Ivy Ballroom',
    smallHeight: '251px',
  },
  {
    src: new URL('@/assets/images/photos/photos03.jpg', import.meta.url).href,
    alt: 'Guitarlos',
    smallHeight: '251px',
  },
  {
    src: new URL('@/assets/images/photos/photos04.jpg', import.meta.url).href,
    alt: 'George 1',
    smallHeight: '251px',
  },
  {
    src: new URL('@/assets/images/photos/photos05.jpg', import.meta.url).href,
    alt: 'Blowers',
    smallHeight: '251px',
  },
  {
    src: new URL('@/assets/images/photos/photos06.jpg', import.meta.url).href,
    alt: 'Santa Rios',
    smallHeight: '262px',
  },
  {
    src: new URL('@/assets/images/photos/photos07.jpg', import.meta.url).href,
    alt: 'Paco de la Toby',
    smallHeight: '262px',
  },
  {
    src: new URL('@/assets/images/photos/photos08.jpg', import.meta.url).href,
    alt: "Aaron's Rig",
    smallHeight: '262px',
  },
  {
    src: new URL('@/assets/images/photos/photos09.jpg', import.meta.url).href,
    alt: 'Toby Cropped',
    smallHeight: '262px',
  },
  {
    src: new URL('@/assets/images/photos/photos10.jpg', import.meta.url).href,
    alt: 'El Diggo',
    smallHeight: '279px',
  },
  {
    src: new URL('@/assets/images/photos/photos11.jpg', import.meta.url).href,
    alt: 'Mont, Mark, and Kerry',
    smallHeight: '279px',
  },
  {
    src: new URL('@/assets/images/photos/photos12.jpg', import.meta.url).href,
    alt: 'Bones Ivy',
    smallHeight: '279px',
  },
  {
    src: new URL('@/assets/images/photos/photos13.jpg', import.meta.url).href,
    alt: 'Really?!',
    smallHeight: '279px',
  },
  {
    src: new URL('@/assets/images/photos/photos14.jpg', import.meta.url).href,
    alt: "George Stargazer's",
    smallHeight: '273px',
  },
  {
    src: new URL('@/assets/images/photos/photos15.jpg', import.meta.url).href,
    alt: 'Bones & Karl Perazzo',
    smallHeight: '273px',
  },
  {
    src: new URL('@/assets/images/photos/photos16.jpg', import.meta.url).href,
    alt: 'Ivy Sun',
    smallHeight: '273px',
  },
  {
    src: new URL('@/assets/images/photos/photos17.jpg', import.meta.url).href,
    alt: 'Huesos',
    smallHeight: '273px',
  },
  {
    src: new URL('@/assets/images/photos/photos18.jpg', import.meta.url).href,
    alt: 'Dig @ Steamplant',
    smallHeight: '273px',
  },
  {
    src: new URL('@/assets/images/photos/photos19.jpg', import.meta.url).href,
    alt: 'Dazzling',
    smallHeight: '273px',
  },
  {
    src: new URL('@/assets/images/photos/photos20.jpg', import.meta.url).href,
    alt: "You Can't Not Dance",
    smallHeight: '273px',
  },
  {
    src: new URL('@/assets/images/photos/photos21.jpg', import.meta.url).href,
    alt: 'Aaron Miguel Chao & Jorge',
    smallHeight: '252px',
  },
  {
    src: new URL('@/assets/images/photos/photos22.jpg', import.meta.url).href,
    alt: 'Guitarlos & Zach',
    smallHeight: '252px',
  },
  {
    src: new URL('@/assets/images/photos/photos23.jpg', import.meta.url).href,
    alt: 'Jorge & Guitarlos',
    smallHeight: '252px',
  },
  {
    src: new URL('@/assets/images/photos/photos24.jpg', import.meta.url).href,
    alt: 'Blowers and a Banger',
    smallHeight: '252px',
  },
  {
    src: new URL('@/assets/images/photos/photos25.jpg', import.meta.url).href,
    alt: "Bones' Rig",
    smallHeight: '252px',
  },
  {
    src: new URL('@/assets/images/photos/photos26.jpg', import.meta.url).href,
    alt: 'Bones & Mark Steamplant',
    smallHeight: '265px',
  },
])

// @ts-expect-error refs types are dump
const { showModal, hideModal, onPrev, onNext, modalAsset } = useModal(images)
</script>
<template>
  <h1>Photos</h1>
  <div class="flex justify-center mb-4">
    <div class="flex flex-wrap max-w-6xl gap-2">
      <button v-for="img in images" :key="img.src" @click="showModal(img)">
        <img
          :src="img.src"
          :alt="img.alt"
          class="h-full border rounded"
          :style="`height: ${img.smallHeight}`"
        />
      </button>
    </div>
  </div>
  <Modal v-if="modalAsset" show-nav @prev="onPrev" @next="onNext" @close="hideModal">
    <img :src="modalAsset.src" :alt="modalAsset.alt" />
  </Modal>
</template>
