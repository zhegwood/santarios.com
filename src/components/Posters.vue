<script setup lang="ts">
import type { MediaAsset } from '@/composables/UseModal'

const emit = defineEmits(['poster-click'])

interface Props {
  posters: MediaAsset[]
}

const props = withDefaults(defineProps<Props>(), {})

const showModal = (p: MediaAsset) => {
  emit('poster-click', p)
}
</script>
<template>
  <div>
    <h3>Posters</h3>
    <div class="flex flex-wrap gap-4">
      <button v-for="p in props.posters" :key="p.src" @click="showModal(p)">
        <img :src="p.src" :alt="p.alt" class="h-full border rounded max-h-52" />
      </button>
    </div>
  </div>
</template>
