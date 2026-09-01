<script setup lang="ts">
import { RouterLink } from 'vue-router'
import bandHomeImage from '@/assets/images/band_home.jpg'

const featuredShows = [
  {
    title: 'Festival Fridays',
    date: 'July 10, 2026',
    location: 'Pueblo, CO',
    link: 'https://my.sdc-arts.org/festivalfridays26/3650',
  },
  {
    title: 'Tunes for Trails',
    date: 'August 20, 2026',
    location: 'Castle Rock, CO',
    link: 'https://www.crgov.com/2670/Tunes-for-Trails-Perks-for-Parks-Free-Co',
  },
  {
    title: 'Buffalo Rose',
    date: 'October 2, 2026',
    location: 'Golden, CO',
    link: 'https://buffalorosegolden.com/shows/',
  },
]
</script>

<template>
  <div class="relative space-y-8">
    <div class="fixed inset-0 -z-10 bg-cover bg-center bg-fixed" :style="{ backgroundImage: `url(${bandHomeImage})` }" />
    <div class="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950/85 via-slate-950/70 to-slate-900/80" />

    <section class="relative ml-0 mr-auto w-full overflow-hidden rounded-[2.4rem] border border-white/10 bg-slate-900/55 p-4 shadow-[0_35px_90px_rgba(2,6,23,0.5)] backdrop-blur-md transition-all duration-500 sm:p-6 lg:max-w-[60%] lg:p-8">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_30%)]" />
      <div class="relative lg:items-center">
        <div class="space-y-4">
          <p class="inline-flex rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Live tribute • Latin rock • Colorado
          </p>
          <h1 class="max-w-2xl leading-tight">
            Dedicated to honoring Santana's legendary legacy...
          </h1>
          <p class="text max-w-2xl text-lg">
            Santa Rios brings the electrifying energy of Santana to life with a ten-piece band that
            blends Afro-Cuban rhythms, blues, and rock into a high-voltage live experience.
          </p>
          <div class="flex flex-wrap gap-3">
            <span class="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-900">
              Ten-piece ensemble
            </span>
            <span class="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-slate-200">
              5+ decades of classics
            </span>
          </div>
        </div>

      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-6 text-slate-100 shadow-[0_20px_50px_rgba(2,6,23,0.25)] transition duration-300 hover:-translate-y-1 sm:p-8">
        <p class="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">Signature sound</p>
        <h2 class="mt-3 text-white">Every set feels like a celebration.</h2>
        <p class="text mt-4 text-slate-300">
          From the first groove to the final encore, Santa Rios delivers a polished, immersive show
          that keeps crowds moving and singing along.
        </p>
        <p class="text mt-3 text-lg font-medium italic text-amber-300">“You can’t not dance!”</p>
      </div>

      <div class="rounded-[1.6rem] border border-white/10 bg-slate-800/70 p-6 shadow-[0_20px_50px_rgba(2,6,23,0.2)] transition duration-300 hover:-translate-y-1 sm:p-8">
        <div class="flex items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Featured shows</p>
            <h2 class="mt-1 text-white">Catch the band live</h2>
          </div>
          <RouterLink :to="{ name: 'shows' }" class="text-sm font-semibold text-amber-300 transition hover:text-amber-200">
            View all
          </RouterLink>
        </div>

        <div class="mt-4 space-y-3">
          <a
            v-for="show in featuredShows"
            :key="show.title"
            :href="show.link"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 transition hover:bg-amber-500/10"
          >
            <div>
              <p class="font-semibold text-slate-100">{{ show.title }}</p>
              <p class="text-sm text-slate-400">{{ show.date }} • {{ show.location }}</p>
            </div>
            <span class="text-sm font-semibold text-amber-300 transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
