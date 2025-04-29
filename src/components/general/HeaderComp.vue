<script setup lang="ts">
import { ref } from 'vue'
import { useBookStore } from '@/stores/bookStore'

const bookStore = useBookStore()

const menuOpen = ref(false)

const itemsMenu = [
  { label: 'Termos', to: '/' },
  { label: 'Equipe', to: '/' },
  { label: 'Envio', to: '/' },
  { label: 'Devoluções', to: '/' },
  { icon: 'shopping_cart', to: '/carrinho' },
  { icon: 'favorite', to: '/' },
  { icon: 'person', to: '/' },
]

const handleSearchBook = () => {
  if (bookStore.query.trim().length > 0) {
    bookStore.fetchBooks()
  }
}

// watch(
//   () => bookStore.query,
//   (newQuery) => {
//     if (newQuery.trim().length > 0) {
//       console.log(bookStore.query)
//       debounce(() => {
//         bookStore.fetchBooks()
//       }, 500)()
//     }
//   },
// )
</script>

<template>
  <div id="header" class="flex flex-col lg:flex-row justify-between items-center gap-4 p-4 sm:px-8">
    <RouterLink to="/" class="select-none">
      <div id="logo" class="flex items-center w-fit gap-2">
        <h1 class="text-base text-[#231F2D]">IFbooks</h1>
        <h2 class="text-xs text-[#27AE6099]">Apreço a leitura</h2>
      </div>
    </RouterLink>

    <label
      class="flex items-center gap-2 w-full sm:max-w-md bg-[#F1F1F1] text-sm text-[#B8B8B8] rounded px-3 py-2"
    >
      <input
        v-model="bookStore.query"
        type="text"
        placeholder="Pesquisar"
        class="w-full bg-transparent outline-none text-[#231F2D]"
      />
      <button @click="handleSearchBook" class="cursor-pointer">
        <span class="material-symbols-outlined text-[#231F2D]">search</span>
      </button>
    </label>

    <nav class="flex items-center">
      <button @click="menuOpen = !menuOpen" class="lg:hidden text-[#27AE60] text-3xl">
        <span class="material-symbols-outlined">menu</span>
      </button>

      <ul class="flex items-center gap-7 lg:gap-5 text-sm">
        <li v-for="(item, index) in itemsMenu" :key="index">
          <RouterLink
            v-if="item.label"
            :to="item.to"
            class="hidden lg:block text-[#7B7881] hover:text-[#27AE60]"
            >{{ item.label }}
          </RouterLink>
          <RouterLink v-else :to="item.to">
            <span class="material-symbols-outlined text-[#27AE60]">{{ item.icon }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div v-if="menuOpen" class="fixed inset-0 bg-black/40" @click="menuOpen = false"></div>

    <transition name="fade">
      <div v-if="menuOpen" class="fixed left-0 top-0 z-1 bg-white w-64 h-full p-10 shadow-lg">
        <span
          class="material-symbols-outlined absolute left-4 top-4 cursor-pointer"
          @click="menuOpen = false"
          >close</span
        >
        <ul class="grid gap-3 text-sm mt-10">
          <li v-for="(item, index) in itemsMenu" :key="index">
            <RouterLink
              v-if="item.label"
              :to="item.to"
              class="text-[#7B7881] hover:text-[#27AE60]"
              @click="menuOpen = false"
              >{{ item.label }}</RouterLink
            >
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translatex(-100px);
}
</style>
