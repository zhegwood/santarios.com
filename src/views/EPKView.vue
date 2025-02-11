<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { useModal } from '@/composables/UseModal'
import type { MediaAsset } from '@/composables/UseModal'
import posters from '@/mediats/posters'
import logos from '@/mediats/logos'
import Modal from '@/components/lib/Modal.vue'
import Posters from '@/components/Posters.vue'

const year = computed(() => {
  return new Date().getFullYear()
})

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
      The brainchild of Producers George A. Mossman and Bones Davis, Santa Rios is the fruition of
      their dream to create a respectful homage to the music of Carlos Santana. The drummers have
      collaborated on several projects including a Grateful Dead Tribute and a Last Waltz production
      that has sold out every performance for the past 8 years!.
    </p>
    <p class="text">
      Bones' first saw Santana in concert at the age of 12 in his native New Mexico and he has been
      a true fan ever since. This initial spark led him on a life long quest to absorb as much
      knowledge about Latin and African rhythms and traditions as possible. Bones shares his passion
      for drumming with George who is also well versed in a variety of styles and is a Conguero
      Extraordinaire!
    </p>
    <p class="text">
      Hailing from central Colorado, the 2 recruited Toby “Guitarlos” Dunn on guitars, Aaron
      Handrich on Hammond and Piano, and Zach Hegwood on Bass. Colorado Floyd's long time drummer
      and the SNLW horn section round out this powerful, nine-piece ensemble who blend Afro-Cuban
      rhythms with Blues and Rock to get everyone dancing.
    </p>
    <p class="text">
      Santa Rios captivates its audiences from their first note to the last, authentically
      recreating tunes from Santana's five-decade + career. The band's amazing live performances
      showcase their musicianship and dedication to honoring Santana's legendary legacy. From the
      psychedelic jams of San Francisco and Woodstock in the '60s to the timeless hits from the
      Supernatural album and beyond, Santa Rios covers Santana's extensive catalog with passion and
      precision. From chart-toppers to hidden gems, Santa Rios offers a diverse and accessible
      setlist that appeals to both die-hard Santana fans and newcomers alike. Known for their
      high-energy concerts, Santa Rios infuses every show with infectious rhythms and soul-stirring
      melodies, creating an atmosphere that is so joyous…
    </p>
    <p class="text"><i>"You Can't Not Dance!"</i></p>
    <hr class="my-4" />
    <div class="flex flex-col justify-center d-flex lg:flex-row align-center">
      <a href="Santa-Rios-One-Sheet.pdf" target="_blank" class="text-lg link">
        Santa Rios One Sheet
      </a>
      <span class="hidden mx-2 lg:flex">|</span>
      <a href="Santa-Rios-Song-List.pdf" target="_blank" class="text-lg link">
        Santa Rios Song List
      </a>
      <span class="hidden mx-2 lg:flex">|</span>
      <a href="Santa-Rios-Contract-Rider-2025.pdf" target="_blank" class="text-lg link">
        Santa Rios Contract Rider {{ year }}
      </a>
      <span class="hidden mx-2 lg:flex">|</span>
      <a href="Santa-Rios-Input-List.pdf" target="_blank" class="text-lg link">
        Santa Rios Input List
      </a>
      <span class="hidden mx-2 lg:flex">|</span>
      <a
        href="https://www.youtube.com/@SantaRiosBand/videos?view=0&sort=dd&shelf_id=2"
        target="_blank"
        class="text-lg link"
      >
        Santa Rios Live Videos
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
    <img :src="modalAsset.src" :alt="modalAsset.alt" />
  </Modal>
</template>
