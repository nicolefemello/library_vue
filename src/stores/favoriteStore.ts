import type { IBook } from '@/types/booksTypes'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoriteStore = defineStore('favorite', () => {
  const favoriteProducts = ref<IBook[]>([])

  const addFavorite = (book: IBook) => {
    if (!favoriteProducts.value.find((item) => item.id === book.id)) {
      favoriteProducts.value.push(book)
    }
  }

  const removeFavorite = (bookId: string) => {
    favoriteProducts.value = favoriteProducts.value.filter((item) => item.id !== bookId)
  }

  const toggleFavorite = (book: IBook): void => {
    const exists = favoriteProducts.value.find((item) => item.id === book.id)
    return exists ? removeFavorite(book.id) : addFavorite(book)
  }

  return { favoriteProducts, toggleFavorite }
})
