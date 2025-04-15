<script setup lang="ts">
const itemsMenu = [
  { label: 'Termos', to: '/' },
  { label: 'Equipe', to: '/' },
  { label: 'Envio', to: '/' },
  { label: 'Devoluções', to: '/' },
  { icon: 'shopping_cart', to: '/' },
  { icon: 'favorite', to: '/' },
  { icon: 'person', to: '/' },
]
</script>

<template>
  <div id="header" class="flex justify-between items-center">

    <div id="logo" class="flex items-center w-[150px] gap-2">
      <h1 class="text-base text-[#231F2D]">IFbooks</h1>
      <h2 class="text-xs text-[#27AE6099]">Apreço a leitura</h2>
    </div>

    <label class="flex justify-between items-center p-1 w-[377px] bg-[#F1F1F1] text-sm color-[#B8B8B8] rounded-xs">
      <input type="text" placeholder="Pesquisar" class="w-full p-1 outline-none">
      <span class="material-symbols-outlined text-[#231F2D]">search</span>
    </label>

    <nav>
      <ul class="flex items-center gap-5 text-sm">
        <li v-for="(item, index) in itemsMenu" :key="index">
          <RouterLink v-if="item.label" :to="item.to" class="text-[#7B7881]">{{ item.label }}</RouterLink>
          <RouterLink v-else :to="item.to"><span class="material-symbols-outlined text-[#27AE60]">{{ item.icon
          }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>