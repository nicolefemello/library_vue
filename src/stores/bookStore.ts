import { defineStore } from 'pinia'
import BookService from '@/services/bookService'
import { computed, ref } from 'vue'
import { EBooksFilter, type IBook } from '@/types/booksTypes'
import { bookFilters } from '@/validators/filterBooks'
import { useLoadingStore } from './loadingStore'

export const useBookStore = defineStore('book', () => {
  const loadingStore = useLoadingStore()
  const books = ref<IBook[]>()
  const query = ref<string>('')
  const filters = ref<Record<EBooksFilter, boolean>>({
    [EBooksFilter.OnSale]: true,
    [EBooksFilter.IsEbook]: true,
    [EBooksFilter.HasTitle]: true,
  })

  const categories = computed(() => {
    if (!books.value) return []

    const allCategories = books.value.flatMap((item) => item.volumeInfo.categories || [])
    return Array.from(new Set(allCategories)).sort()
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
    loadingStore.startLoading()
    try {
      const { items } = await BookService.getBooks(query.value, 40)
      books.value = items
      console.log(books.value)
      console.log(categories.value)
    } catch (err) {
      console.error('Error fetching books', err)
    } finally {
      loadingStore.stopLoading()
    }
  }
  return { books, filteredBooks, filters, query, categories, fetchBooks }
})
