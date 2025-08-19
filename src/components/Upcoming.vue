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
      <li>8/16/2025 - Twinfest (Independent Whitewater) - Salida, CO</li>
      <li>8/23/2025 - La Vida! - Colorado Springs, CO</li>
      <li>8/30/2025 - CO State Fair - Pueblo, CO</li>
      <li>9/20/2025 - Breckenridge Brewery - Littleton, CO</li>
      <li>11/14/2025 - Stargazer's - Colorado Springs, CO</li>
      <li>12/31/2025 - Mount Princeton - Buena Vista, CO</li>
      <li>2/6/2026 - Steamplant w/ Roundhouse Assembly - Salida, CO</li>
      <li>2/7/2026 - Steamplant w/ Roundhouse Assembly - Salida, CO</li>
    </ul>
  </div>
</template>
