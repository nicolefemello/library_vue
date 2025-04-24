import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IBook } from '@/types/booksTypes'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<IBook[]>([])

  function addToCart(book: IBook) {
    const alreadyInCart = cart.value.some((item) => item.id === book.id)
    if (!alreadyInCart) {
      cart.value.push(book)
    }
  }

  function removeFromCart(bookId: string) {
    cart.value = cart.value.filter((book) => book.id !== bookId)
  }

  function clearCart() {
    cart.value = []
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  }
})
