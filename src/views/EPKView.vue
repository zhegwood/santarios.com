<script setup lang="ts">
import { computed } from 'vue'
import { useModal } from '@/composables/UseModal'
import Modal from '@/components/lib/Modal.vue'
import Posters from '@/components/Posters.vue'

const { showModal, hideModal, modalAsset } = useModal(null)

const year = computed(() => {
  return new Date().getFullYear()
})
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
    <img
      src="@/assets/images/band_home.jpg"
      alt="Santa Rios Live"
      class="block object-contain w-full max-w-6xl mx-auto"
    />
    <hr class="my-4" />
    <div class="flex flex-col justify-center d-flex lg:flex-row align-center">
      <a href="Santa-Rios-One-Sheet.pdf" target="_blank" class="text-lg link">
        Santa Rios One Sheet
      </a>
      <span class="hidden mx-2 lg:flex">|</span>
      <a href="Santa-Rios-Contract-Rider-2025.pdf" target="_blank" class="text-lg link">
        Santa Rios Contract Rider {{ year }}
      </a>
      <span class="hidden mx-2 lg:flex">|</span>
      <a href="@/assets/images/stage-plot.jpg" target="_blank" class="text-lg link">
        Santa Rios Stage Plot
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
    <div>
      <h2>Input List</h2>
      <div class="w-full mb-4 text-lg">
        <div class="inline-block w-full md:w-1/2 lg:w-1/4">
          <div>1. Kick</div>
          <div>2. Snare</div>
          <div>3. High Hat</div>
          <div>4. Tom 1</div>
          <div>5. Tom 2</div>
          <div>6. Tom 3</div>
          <div>7. Tom 4</div>
          <div>8. Over Head</div>
        </div>
        <div class="inline-block w-full md:w-1/2 lg:w-1/4">
          <div>9. Conga</div>
          <div>10. Conga</div>
          <div>11. Conga</div>
          <div>12. Bongos</div>
          <div>13. Foot Bell</div>
          <div>14. Timbales</div>
          <div>15. Wind Chimes</div>
          <div>16. Perc Overhead</div>
        </div>
        <div class="inline-block w-full md:w-1/2 lg:w-1/4">
          <div>17. Bass</div>
          <div>18. Leslie Top L</div>
          <div>19. Leslie Top R</div>
          <div>20. Leslie Bottom</div>
          <div>21. Piano DI</div>
          <div>22. Electric Amp Mic</div>
          <div>23. Electric DI</div>
          <div>24. Acoustic DI</div>
        </div>
        <div class="inline-block w-full md:w-1/2 lg:w-1/4">
          <div>25. Trumpet</div>
          <div>26. Alto Sax</div>
          <div>27. Tenor Sax</div>
          <div>28. Vocal Aaron</div>
          <div>29. Vocal George Headset</div>
          <div>30. Vocal Toby</div>
          <div>31. Vocal Bones Headset</div>
          <div>32. MC (If Applicable)</div>
        </div>
      </div>
      <p class="text">
        Santa Rios provides Head-sets, Conga, Timbale & Bongo mics for inputs:<br />9, 10, 11, 12,
        14, 29 & 31
      </p>
      <p class="text-lg">In ear rack lives on top of Leslie</p>
    </div>
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
        <h2>Song List</h2>
        <div class="w-full mb-4 text-lg">
          <div class="inline-block w-full sm:w-1/2">
            <div>Ji Go Lo Ba</div>
            <div>Smooth</div>
            <div>Well All Right</div>
            <div>Black Magic Woman</div>
            <div>Gypsy Queen</div>
            <div>Oye Como Va</div>
            <div>Maria, Maria</div>
            <div>Tousaint La'Overture</div>
            <div>Hope You're Feeling Better</div>
            <div>Low Spark of High Heel Boys</div>
            <div>The Healer</div>
            <div>Love is Alive</div>
            <div>All I Ever Wanted</div>
            <div>She's Not There</div>
            <div>Guajira</div>
            <div>Ritmo del Sol</div>
          </div>
          <div class="inline-block w-full sm:w-1/2">
            <div>Rumba de Barcelona</div>
            <div>Samba Pa Ti</div>
            <div>Africa Bamba</div>
            <div>Butuka</div>
            <div>No One to Depend On</div>
            <div>Foo Foo</div>
            <div>Oh Well</div>
            <div>Corazón Espinado</div>
            <div>Everybody's Everything</div>
            <div>Se a Cabo</div>
            <div>Gitano</div>
            <div>Evil Ways</div>
            <div>Soul Sacrifice</div>
            <div>Late in the Evening</div>
            <div>Para los Rumberos</div>
            <div>Breaking Down the Door</div>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-4" />
    <Posters @show-modal="showModal" />
  </div>
  <Modal v-if="modalAsset" @close="hideModal">
    <img :src="modalAsset.src" :alt="modalAsset.alt" />
  </Modal>
</template>
