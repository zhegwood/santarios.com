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
        <strong>Saturday 10/31/2026</strong><br />
        A Church — Salida, CO
        <a
          href="https://www.achurchsalida.org/event-details/santa-rios-halloween-show"
          class="global-link"
          target="_blank"
        >
          Tickets
        </a>
      </li>
      <li>
        <strong>Saturday 12/19/2026</strong><br />
        The Federal Theatre — Denver, CO
      </li>
      <li>
        <strong>Thursday 12/31/2026</strong><br />
        Stargazers Theatre — Colorado Springs, CO<br />
        <span>New Year's Eve Special Show</span>
      </li>
      <li>
        <strong>Friday 01/16/2027</strong><br />
        The Lariat — Buena Vista, CO
      </li>
    </ul>
  </div>
</template>
