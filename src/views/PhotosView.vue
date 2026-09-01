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
  <div>
    <div class="space-y-6">
      <section class="rounded-[2rem] bg-slate-900/60 p-6 backdrop-blur-sm sm:p-8">
        <h1>Photos</h1>
        <p class="text">A glimpse into the energy, color, and atmosphere of the live experience.</p>
      </section>

      <section class="rounded-[2rem] bg-slate-800/50 p-4 sm:p-6">
        <div class="flex justify-center">
          <div class="flex max-w-6xl flex-wrap gap-3">
            <button
              v-for="img in images"
              :key="img.src"
              class="mx-auto rounded-[1.25rem] bg-slate-900/70 p-2 transition hover:-translate-y-1 hover:bg-slate-700/70 md:mx-0"
              @click="onAssetClick(img)"
            >
              <img
                :src="img.src"
                :alt="img.alt"
                class="h-full rounded-[0.9rem] object-cover"
                :style="`height: ${img.smallHeight}`"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
    <Modal v-if="modalAsset" show-nav @prev="onPrev" @next="onNext" @close="hideModal">
      <img :src="modalAsset.src" :alt="modalAsset.alt" />
    </Modal>
  </div>
</template>
