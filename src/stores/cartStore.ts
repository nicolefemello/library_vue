import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { IBook } from '@/types/booksTypes'

export interface ICartItem extends IBook {
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const products = ref<ICartItem[]>([])

  const total = computed(() => {
    return products.value.reduce((acc, book) => {
      const price = book.saleInfo.listPrice?.amount || 0
      return acc + price * book.quantity
    }, 0)
  })

  function addToCart(book: IBook) {
    const alreadyExist = products.value.find((item) => item.id === book.id)
    if (alreadyExist) {
      alreadyExist.quantity += 1
    } else {
      products.value.push({ ...book, quantity: 1 })
    }
  }

  function removeFromCart(bookId: string) {
    const index = products.value.findIndex((book) => book.id === bookId)
    if (index !== -1) {
      if (products.value[index].quantity > 1) {
        products.value[index].quantity -= 1
      } else {
        products.value.splice(index, 1)
      }
    }
  }

  function getProductQuantity(bookId: string) {
    const product = products.value.find((book) => book.id === bookId)
    return product ? product.quantity : 0
  }

  function getProductSubtotal(bookId: string) {
    const product = products.value.find((book) => book.id === bookId)
    if (product) {
      const price = product.saleInfo.listPrice?.amount || 0
      return product.quantity * price
    }
  }

  function clearCart() {
    products.value = []
  }

  return {
    products,
    total,
    addToCart,
    removeFromCart,
    getProductQuantity,
    getProductSubtotal,
    clearCart,
  }
})
