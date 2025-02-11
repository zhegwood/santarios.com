<script setup lang="ts">
import { nextTick } from 'vue'
import images from '@/mediats/photos'
import { useModal } from '@/composables/UseModal'
import type { MediaAsset } from '@/composables/UseModal'
import Modal from '@/components/lib/Modal.vue'

const { showModal, hideModal, onPrev, onNext, setAssets, modalAsset } = useModal()

const onAssetClick = async (img: MediaAsset) => {
  setAssets(images)
  await nextTick()
  showModal(img)
}
</script>
<template>
  <h1>Photos</h1>
  <div class="flex justify-center mb-4">
    <div class="flex flex-wrap max-w-6xl gap-2">
      <button v-for="img in images" :key="img.src" @click="onAssetClick(img)">
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
