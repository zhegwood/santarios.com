<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'

const header = ref<any | null>(null)
const bodyTopPadding = ref<Record<string, string>>({ paddingTop: '0px' })
let resizeObserver: ResizeObserver | null = null

const setTopPadding = () => {
  if (!header.value?.$el) {
    return
  }

  const height = header.value.$el.getBoundingClientRect().height
  bodyTopPadding.value = {
    paddingTop: `${height + 16}px`,
  }
}

onMounted(() => {
  setTopPadding()
  window.addEventListener('resize', setTopPadding)

  resizeObserver = new ResizeObserver(() => {
    setTopPadding()
  })

  if (header.value?.$el) {
    resizeObserver.observe(header.value.$el)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', setTopPadding)
  resizeObserver?.disconnect()
})
</script>

<template>
  <div class="min-h-screen">
    <SiteHeader ref="header" @header-loaded="setTopPadding" />
    <main class="mx-auto flex w-full max-w-7xl flex-col px-4 pb-10 pt-8 sm:px-6 lg:px-8" :style="bodyTopPadding">
      <router-view v-slot="{ Component }">
        <transition name="router-view" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="scss">
.global-link {
  @apply text-blue-500;
}
</style>
