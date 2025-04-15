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
  <div id="footer">
    <div class="flex justify-between px-20">
      <div>
        <p>IFbooks</p>
        <ul class="flex items-center gap-5 text-2xl">
          <li v-for="(item, index) in socialFooter" :key="index">
            <RouterLink :to="item.to"><span :class="item.icon"></span></RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="m-3 font-semibold">Contato</h4>
        <ul class="grid gap-3">
          <li v-for="(item, index) in contactFooter" :key="index" class="flex items-center">
            <span class="material-symbols-outlined">{{ item.icon }}</span> {{ item.info }}
          </li>
        </ul>

        <img src="/ways-to-pay.png" alt="Formas de pagamento" class="my-8">
      </div>
    </div>

    <p class="text-center border-t border-white text-white-[60%] pt-5">&copy; Alguns direitos reservados. IFbooks 2025.
    </p>
  </div>
</template>