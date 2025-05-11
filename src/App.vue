<script setup lang="ts">
import HeaderComp from './components/general/HeaderComp.vue'
import FooterComp from './components/general/FooterComp.vue'

import { useLoadingStore } from '@/stores/loadingStore'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const loadingStore = useLoadingStore()
</script>

<template>
  <header class="px-20 border-b border-[#27AE60]">
    <HeaderComp />
  </header>

  <main>
    <RouterView />
    <Loading :active="loadingStore.isLoading" :is-full-page="true" />
  </main>

  <footer class="py-5 bg-[#27AE60] text-white">
    <FooterComp />
  </footer>
</template>
