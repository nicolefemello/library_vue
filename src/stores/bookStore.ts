import { defineStore } from 'pinia'
import BookService from '@/services/bookService'
import { computed, ref } from 'vue'
import { EBooksFilter, type IBook } from '@/types/booksTypes'
import { bookFilters } from '@/validators/filterBooks'
import { useLoadingStore } from './loadingStore'

export const useBookStore = defineStore('book', () => {
  const loadingStore = useLoadingStore()
  const books = ref<IBook[]>([])
  const query = ref<string>('')
  const startIndex = ref(books.value.length)

  const filters = ref<Record<EBooksFilter, boolean>>({
    [EBooksFilter.OnSale]: false,
    [EBooksFilter.IsEbook]: false,
    [EBooksFilter.HasTitle]: false,
    [EBooksFilter.HasImage]: true,
  })

  const categories = computed(() => {
    if (!books.value) return []

    const allCategories = books.value.flatMap((item) => item.volumeInfo.categories || [])
    return Array.from(new Set(allCategories)).sort()
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

  const fetchBooks = async () => {
    loadingStore.startLoading()
    try {
      startIndex.value = 0
      const { items } = await BookService.getBooks(query.value, 10, startIndex.value)
      books.value = items ?? []
      startIndex.value += 10
    } catch (err) {
      console.error('Error fetching books', err)
    } finally {
      loadingStore.stopLoading()
    }
  }

  const fetchAddBooks = async () => {
    loadingStore.startLoading()
    try {
      const { items } = await BookService.getBooks(query.value, 10, startIndex.value)
      books.value = [...books.value, ...(items ?? [])]
      startIndex.value += 10
    } catch (err) {
      console.error('Error fetching books', err)
    } finally {
      loadingStore.stopLoading()
    }
  }

  return {
    books,
    filteredBooks,
    filters,
    query,
    categories,
    fetchBooks,
    fetchAddBooks,
  }
})
