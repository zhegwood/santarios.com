import type { MediaAsset } from '@/composables/UseModal'
export default <MediaAsset[]>[
  {
    src: new URL('@/assets/images/merch/t-shirt01.jpg', import.meta.url).href,
    alt: "Women's Tank Sunburst Angel",
  },
  {
    src: new URL('@/assets/images/merch/t-shirt02.jpg', import.meta.url).href,
    alt: "Women's Tank Turquoise Angel",
  },
  {
    src: new URL('@/assets/images/merch/t-shirt03.jpg', import.meta.url).href,
    alt: 'Heather Graphite Gray',
  },
  {
    src: new URL('@/assets/images/merch/t-shirt04.jpg', import.meta.url).href,
    alt: 'Gray with Turquoise Angel',
  },
]
