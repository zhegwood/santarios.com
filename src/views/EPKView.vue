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
    <p class="text">Santa Rios brings the electrifying Latin fusion of Carlos Santana to life!</p>
    <p class="text">
      Faithfully recreating tunes from Santana's 5 + decades career, Santa Rios captivates audiences
      from their first note.
    </p>
    <p class="text">
      This powerful, nine-piece ensemble pays homage to Santana's iconic music, blending Afro-Cuban
      rhythms, Blues and Rock with passion and precision. The band's amazing live performances
      showcase their musicianship and dedication to honoring Carlos Santana's legendary legacy,
      covering his extensive catalog and getting everybody dancing.
    </p>
    <p class="text">
      Santa Rios seamlessly segues from Santana's psychedelic jams of San Francisco and Woodstock
      through the timeless hits from their Supernatural album and beyond.
    </p>
    <p class="text">
      Known for their high-energy concerts, Santa Rios has built a strong following selling out many
      performances at some of Colorado's most prestigious venues. They offer a diverse and
      accessible setlist that appeals to both die-hard Santana fans and newcomers alike.
    </p>
    <p class="text">
      Santa Rios infuses every show with Santana's soul-stirring melodies and infectious rhythms,
      creating an atmosphere that is so joyous...
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
      src="@/assets/images/band_home.jpg"
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
