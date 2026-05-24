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
      <li>
        <a
          href="https://www.glenwoodchamber.com/main-stage-lineup/"
          class="global-link"
          target="_blank"
        >
          6/19/2026 - 129th Strawberry Days Festival - Glenwood Springs, CO
        </a>
      </li>
      <li>
        <a href="https://nissis.com/" class="global-link" target="_blank">
          6/12/2026 - Nissi's - Lafayette, CO
        </a>
      </li>
      <li>7/4/2026 - Riverside Park - Salida, CO</li>
      <li>
        <a
          href="https://my.sdc-arts.org/festivalfridays26/3650"
          class="global-link"
          target="_blank"
        >
          7/10/2026 - Festival Fridays - Pueblo, CO
        </a>
      </li>
      <li>7/18/2026 - Private Party</li>
      <li>8/13/2026 - Riverside Park - Salida, CO</li>
      <li>
        <a
          href="https://www.crgov.com/2670/Tunes-for-Trails-Perks-for-Parks-Free-Co"
          class="global-link"
          target="_blank"
        >
          8/20/2026 - Tunes for Trails - Castle Rock, CO
        </a>
      </li>
      <li>
        <a href="https://stargazerstheatre.com/" class="global-link" target="_blank">
          8/21/2026 - Stargazer's - Colorado Springs, CO
        </a>
      </li>
      <li>
        <a href="https://cshispanicchamber.com/events/la-vida/" class="global-link" target="_blank">
          8/23/2026 - La Vida Festival - Cheyenne Moutain Resort Colorado Springs, CO
        </a>
      </li>
      <li>9/12/2026 - Private Party</li>
      <li>
        <a href="https://www.salida76.com/" class="global-link" target="_blank">
          9/19/2026 - Bike Fest, Riverside Park - Salida, CO
        </a>
      </li>
      <li>
        <a href="https://buffalorosegolden.com/shows/" class="global-link" target="_blank">
          10/2/2026 - Buffalo Rose - Golden, CO
        </a>
      </li>
      <li>
        <a href="https://buffalorosegolden.com/shows/" class="global-link" target="_blank">
          10/16/2026 - Vilar Center - Beaver Creek, CO
        </a>
      </li>
    </ul>
  </div>
</template>
