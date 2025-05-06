<script setup lang="ts">
import { onMounted } from 'vue'
import { useBookStore } from '@/stores/bookStore'

const bookStore = useBookStore()

onMounted(async () => {
  await bookStore.fetchBooks()
})
</script>

<template>
  <header>
    <h1>Lista de Livros</h1>
  </header>
  <main>
    <button @click="bookStore.filters.IS_EBOOK = !bookStore.filters.IS_EBOOK">
      Teste: {{ bookStore.filters.IS_EBOOK }}
    </button>
    <div v-for="book in bookStore.filteredBooks" :key="book.id" class="book-card">
      <h2>{{ book.volumeInfo?.title }}</h2>
      <p v-if="book.volumeInfo?.authors">Autor: {{ book.volumeInfo.authors.join(', ') }}</p>
      <p v-if="book.volumeInfo?.description">
        {{ book.volumeInfo?.description }}
      </p>
      <p>Idioma: {{ book.volumeInfo?.language }}</p>
      <img
        v-if="book.volumeInfo?.imageLinks?.thumbnail"
        :src="book.volumeInfo?.imageLinks.thumbnail"
        :alt="book.volumeInfo?.title"
      />
      <p>Páginas: {{ book.volumeInfo?.pageCount }}</p>
    </div>
  </main>
</template>

<style scoped>
.book-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  max-width: 500px;
}
</style>
