<script setup lang="ts">
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
</script>

<template>
  <header class="py-5 px-20 border-b border-[#27AE60]">
    <HeaderComp />
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="py-5 bg-[#27AE60] text-base text-white">
    <FooterComp />
  </footer>
</template>