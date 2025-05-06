<script setup lang="ts">
interface Props {
  hideTitle?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hideTitle: false,
})
</script>
<template>
  <div>
    <h3 v-if="!props.hideTitle">Upcoming Shows</h3>
    <ul>
      <li>5/30/2025 - The Lariat - Buena Vista, CO</li>
      <li>6/21/2025 - Nissi's - Lafayette, CO</li>
      <li>6/25/2025 - Four Mile Historic Park - Denver , CO</li>
      <li>7/4/2025 - Riverside Park - Salida, CO</li>
      <li>8/01/2025 - Little Cambodia (Private Event) - Salida, CO</li>
      <li>8/08/2025 - Boulder Theater - Boulder, CO</li>
      <li>8/16/2025 - Twinfest (Independet Whitewater) - Salida, CO</li>
      <li>8/23/2025 - La Vida! - Colorado Springs, CO</li>
      <li>8/30/2025 - CO State Fair - Pueblo, CO</li>
      <li>9/20/2025 - Breckenridge Brewery - Littleton, CO</li>
      <li>10/31/2025 - Stargazers - Colorado Springs, CO</li>
      <li>11/1/2025 - Steamplant - Salida, CO</li>
    </ul>
  </div>
</template>
