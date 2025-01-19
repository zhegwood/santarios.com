<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'

const header = ref<Ref | null>(null)
const bodyTopPadding = ref<Record<string, string>>({})

const setTopPadding = async () => {
  setTimeout(() => {
    if (!header.value) {
      return undefined
    }
    const height = header.value.$el.getBoundingClientRect().height
    bodyTopPadding.value = {
      paddingTop: `${height + 16}px`,
    }
  }, 100)
}

onMounted(() => {
  setTopPadding()
  window.addEventListener('resize', setTopPadding)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', setTopPadding)
})
</script>

<template>
  <SiteHeader ref="header" />
  <div class="container px-4 pb-8 mx-auto" :style="bodyTopPadding">
    <RouterView />
  </div>
</template>
