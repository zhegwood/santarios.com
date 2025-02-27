<script setup lang="ts">
import { computed, nextTick } from 'vue'
import { useModal } from '@/composables/UseModal'
import type { MediaAsset } from '@/composables/UseModal'
import posters from '@/mediats/posters'
import logos from '@/mediats/logos'
import Modal from '@/components/lib/Modal.vue'
import Posters from '@/components/Posters.vue'

const { onPrev, onNext, showModal, hideModal, setAssets, modalAsset } = useModal()

const onPosterClick = async (poster: MediaAsset) => {
  setAssets(posters)
  await nextTick()
  showModal(poster)
}

const onLogoClick = async (logo: MediaAsset) => {
  setAssets(logos)
  await nextTick()
  showModal(logo)
}
</script>
<template>
  <div>
    <h1>Electronic Press Kit</h1>
    <p class="text">
      Santa Rios captivates audiences from the very first note to the final chord, faithfully
      recreating tunes from Carlos Santana's illustrious five plus decades career.
    </p>
    <p class="text">
      The band's remarkable live performances showcase their exceptional musicianship and underscore
      their unwavering dedication to honoring the legendary musician's legacy with joy and
      precision."
    </p>
    <p class="text"><i>"You Can't Not Dance!"</i></p>
    <hr class="my-4" />
    <div class="flex flex-col justify-center d-flex lg:flex-row align-center">
      <a href="Santa-Rios-Band-Bio.pdf" target="_blank" class="text-lg link whitespace-nowrap">
        Band Bio
      </a>
      <span class="hidden mx-2 lg:flex">|</span>
      <a href="Santa-Rios-One-Sheet.pdf" target="_blank" class="text-lg link whitespace-nowrap">
        One Sheet
      </a>
      <span class="hidden mx-2 lg:flex">|</span>
      <a href="Santa-Rios-Song-List.pdf" target="_blank" class="text-lg link whitespace-nowrap">
        Song List
      </a>
      <span class="hidden mx-2 lg:flex">|</span>
      <a
        href="Santa-Rios-Contract-Rider-2025.pdf"
        target="_blank"
        class="text-lg link whitespace-nowrap"
      >
        Contract Rider
      </a>
      <span class="hidden mx-2 lg:flex">|</span>
      <a href="Santa-Rios-Input-List.pdf" target="_blank" class="text-lg link whitespace-nowrap">
        Input List
      </a>
      <span class="hidden mx-2 lg:flex">|</span>
      <a href="Santa-Rios-Stage-Plot.pdf" target="_blank" class="text-lg link whitespace-nowrap">
        Stage Plot
      </a>
      <span class="hidden mx-2 lg:flex">|</span>
      <a
        href="https://www.youtube.com/@SantaRiosBand/videos?view=0&sort=dd&shelf_id=2"
        target="_blank"
        class="text-lg link whitespace-nowrap"
      >
        Live Videos
      </a>
    </div>
    <hr class="my-4" />
    <img
      src="@/assets/images/Band_BnW.jpg"
      alt="Santa Rios Live"
      class="block object-contain w-full max-w-6xl mx-auto"
    />
    <hr class="my-4" />
    <div class="flex flex-col gap-8 lg:flex-row">
      <div class="w-full lg:w-1/2">
        <img
          src="@/assets/images/band_cuba.jpg"
          alt="Santa Rios"
          class="block object-contain w-full max-w-6xl mx-auto"
        />
      </div>
      <div class="w-full lg:w-1/2">
        <Posters :posters="posters" @poster-click="onPosterClick" />
        <hr class="my-4" />
        <h3>Logos</h3>
        <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
          <button v-for="logo in logos" :key="logo.src" @click="onLogoClick(logo)" class="mx-auto">
            <img :src="logo.src" :alt="logo.alt" class="h-full border rounded max-h-52" />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  </div>
  <Modal v-if="modalAsset" show-nav @prev="onPrev" @next="onNext" @close="hideModal">
    <div>
      <img :src="modalAsset.src" :alt="modalAsset.alt" />
      <a v-if="modalAsset.fullSrc" :href="modalAsset.fullSrc" class="link" target="_blank">
        View/Download High Res
      </a>
    </div>
  </Modal>
</template>
