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
    <h3 v-if="!props.hideTitle">Past Venue Highlights</h3>
    <ul>
      <li>Breckenridge Brewery - Littleton, CO</li>
      <li>Colorado State Fair - Pueblo, CO</li>
      <li>Cheyenne Mountain Resort - Colorado Springs, CO</li>
      <li>Four Mile Historic Park - Denver, CO</li>
      <li>Mesa Theater - Grand Junction, CO</li>
      <li>Boulder Theater - Boulder, CO</li>
      <li>Stargazers - Colorado Springs, CO</li>
      <li>Nissi's - Lafayette, CO</li>
      <li>SteamPlant Events Center - Salida, CO</li>
      <li>Tabor Opera House - Leadville, CO</li>
      <li>The Lariat - Buena Vista, CO</li>
      <li>Independent Whitewater - Salida, CO</li>
      <li>Riverside Park - Salida, CO</li>
      <li>Ivy Ballroom - Buena Vista, CO</li>
    </ul>
  </div>
</template>
