import { defineStore } from 'pinia'
import BookService from '@/services/bookService'
import { computed, ref } from 'vue'
import { EBooksFilter, type IBook } from '@/types/booksTypes'
import { bookFilters } from '@/validators/filterBooks'

export const useBookStore = defineStore('book', () => {
  const books = ref<IBook[]>()
  const bookQuery = ref<string>('livros')
  const filters = ref<Record<EBooksFilter, boolean>>({
    [EBooksFilter.OnSale]: true,
    [EBooksFilter.IsEbook]: true,
    [EBooksFilter.HasTitle]: false,
  })

  const filteredBooks = computed(() => {
    const filtersToBeApplied = Object.entries(filters.value)
      .filter(([, value]) => value)
      .map(([key]) => key as EBooksFilter)

    return books.value?.filter((book) =>
      filtersToBeApplied.every((filter) => bookFilters[filter](book)),
    )
  })

  async function fetchBooks() {
    try {
      const response = await BookService.getBooks()
      books.value = response.data.items
    } catch (err) {
      console.error('Error fetching books', err)
    }
  }

  return { books, filteredBooks, filters, bookQuery, fetchBooks }
})
