<script setup lang="ts">
const socialFooter = [
  { icon: 'fa-brands fa-square-facebook', to: '/' },
  { icon: 'fa-brands fa-square-instagram', to: '/' },
  { icon: 'fa-brands fa-square-twitter', to: '/' }
]
const contactFooter = [
  { icon: 'call', info: '+55 47 40045263' },
  { icon: 'schedule', info: '8h às 23h - Seg a Sex' },
  { icon: 'mail', info: 'contato@ifbooks.com' },
]
</script>

<template>
  <div id="footer" class="text-white py-10">
    <div class="flex flex-col md:flex-row justify-between gap-10 px-6 md:px-20">

      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <p class="text-lg font-semibold mb-4">IFbooks</p>
        <ul class="flex items-center gap-5 text-2xl">
          <li v-for="(item, index) in socialFooter" :key="index">
            <RouterLink :to="item.to"><span :class="item.icon"></span></RouterLink>
          </li>
        </ul>
      </div>

      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <h4 class="text-lg font-semibold mb-4">Contato</h4>
        <ul class="grid gap-2 text-sm">
          <li v-for="(item, index) in contactFooter" :key="index"
            class="flex items-center gap-2 justify-center md:justify-start">
            <span class="material-symbols-outlined">{{ item.icon }}</span>
            <span>{{ item.info }}</span>
          </li>
        </ul>
        <img src="/ways-to-pay.png" alt="Formas de pagamento" class="my-6 w-56 md:w-auto" />
      </div>

    </div>

    <p class="text-center text-white/60 text-xs border-t border-white mt-8 pt-4">
      &copy; Alguns direitos reservados. IFbooks 2025.
    </p>
  </div>

</template>