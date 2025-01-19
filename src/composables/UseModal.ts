import { computed, ref } from 'vue'

export interface MediaAsset {
  src: string
  alt: string
  smallHeight?: string
}

export function useModal(assets: typeof ref<MediaAsset[]> | null) {
  const modalAsset = ref<MediaAsset | null>(null)

  const currentIdx = computed((): number => {
    // @ts-expect-error ref types are dumb
    return assets.value.findIndex((a) => {
      return a === modalAsset.value
    })
  })

  const showModal = (asset: MediaAsset) => {
    modalAsset.value = asset
  }

  const hideModal = () => {
    modalAsset.value = null
  }

  const onPrev = () => {
    modalAsset.value =
      currentIdx.value === 0
        ? // @ts-expect-error ref types are dumb
          assets.value[assets.value.length - 1]
        : // @ts-expect-error ref types are dumb
          assets.value[currentIdx.value - 1]
  }

  const onNext = () => {
    modalAsset.value =
      // @ts-expect-error ref types are dumb
      currentIdx.value === assets.value.length - 1
        ? // @ts-expect-error ref types are dumb
          assets.value[0]
        : // @ts-expect-error ref types are dumb
          assets.value[currentIdx.value + 1]
  }

  return {
    showModal,
    hideModal,
    onPrev,
    onNext,
    modalAsset,
  }
}
