import type { MediaAsset } from '@/composables/UseModal'
export default <MediaAsset[]>[
  {
    src: new URL('@/assets/images/merch/poster01.jpg', import.meta.url).href,
    alt: 'Blank Angel on Guitar',
  },
  {
    src: new URL('@/assets/images/merch/poster02.jpg', import.meta.url).href,
    alt: 'Black Tan Poster Small',
  },
  {
    src: new URL('@/assets/images/merch/poster03.png', import.meta.url).href,
    alt: 'Tourquoise Torus on Black',
  },
  {
    src: new URL('@/assets/images/merch/poster04.jpg', import.meta.url).href,
    alt: 'Blank Turquoise Poster',
  },
]
