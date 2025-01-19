<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

interface Props {
  showNav?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showNav: false,
})

const emit = defineEmits(['close', 'next', 'prev'])

const onKeyup = (e: KeyboardEvent) => {
  if (e.keyCode === 27) {
    emit('close')
  }
}

onMounted(() => {
  document.body.addEventListener('keyup', onKeyup)
})

onBeforeUnmount(() => {
  document.body.removeEventListener('keyup', onKeyup)
})
</script>
<template>
  <div class="relative z-20" role="dialog" @keyup.esc="emit('close')">
    <div class="fixed inset-0 bg-gray-500/75" aria-hidden="true"></div>
    <div class="fixed inset-0 z-20 w-screen overflow-y-auto">
      <div class="flex items-center justify-center min-h-full p-4 text-center">
        <div
          class="relative text-left bg-white border rounded shadow-xl sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="p-4 bg-white">
            <div class="flex items-center justify-center">
              <slot />
            </div>
          </div>
          <button
            @click="emit('close')"
            class="absolute z-10 flex items-center justify-center w-8 h-8 bg-white border rounded-full -right-2 -top-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 50 50"
            >
              <path
                d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
              ></path>
            </svg>
          </button>
          <template v-if="props.showNav">
            <button
              class="absolute flex justify-center w-8 h-8 text-3xl leading-6 bg-white border rounded-full abolute nav-button align-center"
              @click="emit('prev')"
            >
              &lt;
            </button>
            <button
              class="absolute right-0 flex justify-center w-8 h-8 text-3xl leading-6 bg-white border rounded-full nav-button align-center"
              @click="emit('next')"
            >
              &gt;
            </button>
          </template>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.nav-button {
  top: 50%;
  transform: translateY(-50%);
}
</style>
