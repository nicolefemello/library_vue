<script setup lang="ts">
import { onMounted } from 'vue'
import menuBooks from '@/components/menu-books.vue'
import carrousselBooks from '@/components/carroussel-books.vue'
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
  <section
    id="banner"
    class="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 border-b border-[#27AE60] py-10 px-4 lg:px-8"
  >
    <div id="banner-left" class="grid gap-5 max-w-xl text-center lg:text-left">
      <p class="p-2 w-fit mx-auto lg:mx-0 text-sm text-[#27AE60] border border-[#27AE60]">
        Autor de Abril
      </p>
      <h2 class="font-bold text-4xl md:text-5xl text-[#382C2C]">Eric-Emanuel Schmitt</h2>
      <p class="text-base text-[#4D4C4C]">
        Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in
        2001 he received the title of Chevalier des Arts et des Lettres. His books have been
        translated into over 40 languages.
      </p>
      <button
        class="w-full sm:w-[240px] sm:mx-auto lg:mx-0 bg-[#27AE60] p-2 text-base text-white rounded"
      >
        Acessar página do livro
      </button>
    </div>

    <img
      src="/banner.png"
      alt="Book image"
      class="w-full max-w-[300px] sm:max-w-[415px] object-cover"
    />
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

    <ul id="container-books" class="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      <menuBooks v-for="book in bookStore.filteredBooks" :key="book.id" :book="book" />
    </ul>

    <carrousselBooks class="md:hidden" />
  </section>
</template>
