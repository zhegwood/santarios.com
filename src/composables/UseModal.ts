import { computed, ref } from 'vue'

export interface MediaAsset {
  src: string
  alt: string
  smallHeight?: string
}

export function useModal() {
  const modalAsset = ref<MediaAsset | null>(null)
  const assets = ref<MediaAsset[] | null>(null)

  const currentIdx = computed((): number => {
    if (!assets.value) {
      return 0
    }
    return assets.value.findIndex((a) => {
      return a === modalAsset.value
    })
  })

  const setAssets = (newAssets: MediaAsset[]) => {
    assets.value = newAssets
  }

  const showModal = (asset: MediaAsset) => {
    modalAsset.value = asset
  }

  const hideModal = () => {
    modalAsset.value = null
  }

  const onPrev = () => {
    if (!assets.value) {
      return
    }
    modalAsset.value =
      currentIdx.value === 0
        ? assets.value[assets.value.length - 1]
        : assets.value[currentIdx.value - 1]
  }

  const onNext = () => {
    if (!assets.value) {
      return
    }
    modalAsset.value =
      currentIdx.value === assets.value.length - 1
        ? assets.value[0]
        : assets.value[currentIdx.value + 1]
  }

  return {
    showModal,
    hideModal,
    onPrev,
    onNext,
    setAssets,
    modalAsset,
  }
}
