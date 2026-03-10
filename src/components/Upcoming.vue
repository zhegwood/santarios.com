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
        <a href="https://stargazerstheatre.com/product/santa-rios-april-24/" class="global-link"
          >4/25/2026 - Stargazer's - Colorado Springs, CO</a
        >
      </li>
      <li>
        <a
          href="https://dice.fm/event/l8o6ox-santa-rios-9th-may-the-lariat-buena-vista-tickets?pid=FSXRQ6PG&_branch_match_id=1349526693002743835&utm_medium=partners_api&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1fcyNTE2MjMwTjQwsrQvyEyxdQuOCAo0C3BXqytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAKEn4dEgAAAA%3D"
          class="global-link"
          >5/09/2026 - The Lariat - Buena Vista, CO</a
        >
      </li>
      <li>
        <a href="https://nissis.com/" class="global-link">6/12/2026 - Nissi's - Lafayette, CO</a>
      </li>
      <li>7/4/2026 - Riverside Park - Salida, CO</li>
      <li>7/4/2026 - Riverside Park - Salida, CO</li>
      <li>7/18/2026 - Private Party</li>
      <li>8/13/2026 - Riverside Park - Salida, CO</li>
      <li>
        <a
          href="https://www.crgov.com/2670/Tunes-for-Trails-Perks-for-Parks-Free-Co"
          class="global-link"
          >8/20/2026 - Tunes for Trails - Castle Rock, CO</a
        >
      </li>
      <li>
        <a href="https://stargazerstheatre.com/" class="global-link" target="__blank"
          >8/21/2026 - Stargazer's - Colorado Springs, CO</a
        >
      </li>
      <li>
        <a href="https://cshispanicchamber.com/events/la-vida/" class="global-link" target="__blank"
          >8/23/2026 - La Vida Festival - Cheyenne Moutain Resort Colorado Springs, CO</a
        >
      </li>
    </ul>
  </div>
</template>
