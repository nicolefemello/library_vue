<script setup lang="ts">
import type { IBook } from '@/types/booksTypes'
import { formatCurrency } from '@/utils/formatCurrency'
import { useCartStore } from '@/stores/cartStore'

defineProps<{
  book: IBook
}>()

const cartStore = useCartStore()
</script>

<template>
  <li class="grid w-[280px] h-[500px] rounded-lg border border-zinc-200 shadow-md hover:shadow-lg transition">
    <img :src="book.volumeInfo.imageLinks?.thumbnail" :alt="book.volumeInfo.title"
      class="w-full h-[280px] sm:h-[300px] object-cover rounded-t-lg" />

    <div id="info-book" class="grid gap-3 p-3 sm:p-4">
      <h3 class="font-semibold text-base sm:text-lg text-[#382C2C] line-clamp-1">
        {{ book.volumeInfo.title }}
      </h3>
      <p class="text-sm text-[#4F4C57] line-clamp-2">{{ book.volumeInfo.title }}</p>

      <p :class="[
        'flex justify-between items-center text-base',
        book.saleInfo.listPrice?.amount == 0 ? 'text-green-500' : 'text-[#382C2C]',
      ]">
        {{ formatCurrency(book.saleInfo.listPrice?.amount) }}
      </p>

      <button @click="
        () => {
          cartStore.addToCart(book)
          return console.log(cartStore.total)
        }
      " class="flex justify-center items-center gap-1 bg-[#27AE60] hover:bg-[#219653] trans:ition text-white py-2 px-4 w-full rounded text-sm sm:text-base"
        :class="book.saleInfo.listPrice?.amount
          ? 'bg-[#27AE60] hover:bg-[#219653]'
          : 'bg-gray-400 hover:bg-gray-500'
          ">
        <span class="material-symbols-outlined text-base">shopping_cart</span>
        {{ book.saleInfo.listPrice?.amount ? 'Comprar' : 'Resgatar' }}
      </button>
    </div>
  </li>
</template>
