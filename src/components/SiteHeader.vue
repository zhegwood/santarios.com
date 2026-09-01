<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['header-loaded'])

const expanded = ref(false)

const navItems = [
  { label: 'Home', name: 'home' },
  { label: 'History', name: 'history' },
  { label: 'Shows', name: 'shows' },
  { label: 'Booking', name: 'booking' },
  { label: 'Merch', name: 'merch' },
  { label: 'Photos', name: 'photos' },
  { label: 'Videos', href: 'https://www.youtube.com/@SantaRiosBand' },
  { label: 'EPK', name: 'epk' },
  { label: 'Tech', name: 'tech' },
]

// this emit is in case someone is on a super slow connection and header height needs to be re-calc'd
const onImageLoad = () => {
  emit('header-loaded')
}
</script>
<template>
  <div class="fixed left-0 right-0 top-0 z-20 border-b border-white/10 bg-slate-950/95 shadow-[0_20px_60px_rgba(2,6,23,0.55)] backdrop-blur-xl">
    <div class="mx-auto flex max-w-7xl flex-col px-3 py-2 sm:px-6 lg:px-8">
      <menu class="hidden justify-end border-b border-white/10 pb-2 sm:flex">
        <ul class="flex flex-row flex-wrap items-center justify-end gap-1 rounded-full border border-white/10 bg-slate-900/50 px-1.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <li v-for="item in navItems" :key="item.label">
            <RouterLink
              v-if="item.name"
              :to="{ name: item.name }"
              class="rounded-full px-3 py-1.5 text-[0.9rem] font-medium tracking-[0.02em] text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {{ item.label }}
            </RouterLink>
            <a
              v-else
              :href="item.href"
              class="rounded-full px-3 py-1.5 text-[0.9rem] font-medium tracking-[0.02em] text-slate-300 transition hover:bg-white/10 hover:text-white"
              target="_blank"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </menu>

      <div class="mx-auto mt-3 flex justify-center">
        <img
          src="@/assets/images/logos/Color_Logo_Large_Transparent.png"
          alt="Santa Rios"
          class="block h-auto max-h-40 w-auto max-w-[56rem] object-contain drop-shadow-[0_0_16px_rgba(0,0,0,0.45)]"
          @load="onImageLoad"
        />
      </div>

      <menu class="flex h-10 items-center justify-end border-t border-white/10 pt-3 sm:hidden">
        <button type="button" class="mr-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-100 shadow-inner transition hover:bg-white/20" @click="expanded = !expanded">
          <svg
            v-if="!expanded"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path
              d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path
              d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </menu>

      <div v-if="expanded" class="mt-3 rounded-[1.5rem] border border-white/10 bg-slate-900/95 p-3 shadow-[0_20px_60px_rgba(2,6,23,0.45)] sm:hidden">
        <ul class="flex flex-col gap-1">
          <li v-for="item in navItems" :key="item.label">
            <RouterLink
              v-if="item.name"
              :to="{ name: item.name }"
              class="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              @click="expanded = false"
            >
              <span>{{ item.label }}</span>
              <span class="text-sm text-slate-400">↗</span>
            </RouterLink>
            <a
              v-else
              :href="item.href"
              class="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              target="_blank"
              @click="expanded = false"
            >
              <span>{{ item.label }}</span>
              <span class="text-sm text-slate-400">↗</span>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
