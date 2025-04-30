<script setup lang="ts">
import { onMounted } from 'vue'
import menuBooks from '@/components/menu-books.vue'
import carrousselBooks from '@/components/carroussel-books.vue'
import banner from '@/components/banner.vue'
import { useBookStore } from '@/stores/bookStore'

const bookStore = useBookStore()

onMounted(async () => {
  await bookStore.fetchBooks()
})

const infos = [
  { icon: 'local_shipping', label: 'Frete grátis para SC' },
  { icon: 'star', label: 'Livros recomendados' },
  { icon: 'import_contacts', label: 'Mais vendidos' },
]
</script>

<template>
  <section id="banner" class="flex overflow-hidden space-x-30 mt-10">
    <banner :products="bookStore.filteredBooks ?? []" />
  </section>

  <section id="info">
    <ul
      class="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 text-lg font-semibold text-[#231F2D] p-10 border-b border-[#27AE60]"
    >
      <li
        v-for="info in infos"
        :key="info.icon"
        class="flex items-center gap-3 sm:gap-5 px-4 py-2 text-center"
      >
        <span class="material-symbols-outlined">{{ info.icon }}</span>
        {{ info.label }}
      </li>
    </ul>
  </section>

  <section id="releases" class="p-5 md:p-10 overflow-x-hidden">
    <h2 class="font-semibold text-3xl sm:text-4xl text-[#231F2D]">Lançamentos</h2>

    <ul
      id="container-books"
      class="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 p-10"
    >
      <menuBooks v-for="book in bookStore.filteredBooks" :key="book.id" :book="book" />
    </ul>

    <carrousselBooks :products="bookStore.filteredBooks ?? []" class="sm:hidden" />

    <button
      @click="bookStore.fetchAddBooks"
      class="px-3 py-2 bg-[#27AE60] hover:bg-[#219653] rounded text-white w-full mt-5 cursor-pointer"
    >
      Adicionar mais livros
    </button>
  </section>
</template>
