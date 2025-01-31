<script setup lang="ts">
import { ref } from 'vue'

const expanded = ref(false)
</script>
<template>
  <div class="fixed top-0 left-0 right-0 z-10 bg-white">
    <img src="@/assets/images/logo.png" alt="Santa Rios" class="block w-full max-w-3xl mx-auto" />
    <menu class="flex items-center justify-end h-10 border-t border-b sm:hidden">
      <button type="button" class="block w-6 h-6 mr-2" @click="expanded = !expanded">
        <svg
          v-if="!expanded"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 50 50"
        >
          <path
            d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
          ></path>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 50 50"
        >
          <path
            d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
          ></path>
        </svg>
      </button>
    </menu>
    <ul v-if="expanded" class="flex flex-col gap-3 p-4 border-b">
      <li>
        <RouterLink :to="{ name: 'home' }" class="block text-lg" @click="expanded = false">
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'booking' }" class="block text-lg" @click="expanded = false">
          Booking
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'merch' }" class="block text-lg" @click="expanded = false">
          Merch
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'photos' }" class="block text-lg" @click="expanded = false">
          Photos
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'epk' }" class="block text-lg" @click="expanded = false">
          EPK
        </RouterLink>
      </li>
      <!--
      <li>
        <RouterLink :to="{ name: 'home' }" @click="expanded = false"> Bio </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'booking' }" @click="expanded = false"> Booking </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'music' }"> Music </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'videos' }"> Videos </RouterLink>
      </li>
      -->
    </ul>
    <menu class="justify-center hidden py-2 border-t border-b sm:flex grow">
      <ul class="flex flex-row gap-4">
        <li>
          <RouterLink :to="{ name: 'home' }" class="hover:underline focus:underline">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'booking' }" class="hover:underline focus:underline">
            Booking
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'merch' }" class="hover:underline focus:underline">
            Merch
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'photos' }" class="hover:underline focus:underline">
            Photos
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'epk' }" class="hover:underline focus:underline">
            EPK
          </RouterLink>
        </li>
        <!--
        <li>
          <RouterLink :to="{ name: 'booking' }"> Booking </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'music' }"> Music </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'videos' }"> Videos </RouterLink>
        </li>
        -->
      </ul>
    </menu>
  </div>
</template>
