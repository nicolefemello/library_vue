<script setup lang="ts">
import { defineProps } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import type { IBook } from '@/types/booksTypes'

const cartStore = useCartStore()
const props = defineProps<{ products: IBook[] }>()
</script>

<template>
  <ul class="flex overflow-x-auto lg:py-10">
    <li v-for="book in products" :key="book.id"
      class="flex flex-col lg:flex-row justify-center items-center border-b border-[#27AE60] lg:gap-50 px-4 lg:px-10 min-w-full">
      <div id="banner-left" class="grid gap-5 max-w-2xl text-center lg:text-left">
        <p class="p-2 w-fit mx-auto lg:mx-0 text-lg text-[#27AE60] border border-[#27AE60]">
          Autor de Abril
        </p>
        <h2 class="font-bold text-4xl md:text-6xl text-[#382C2C]">{{ book.volumeInfo.title }}</h2>
        <p class="text-xl text-[#4D4C4C] line-clamp-5">{{ book.volumeInfo.description }}</p>
        <button @click="
          () => {
            cartStore.addToCart(book)
            return console.log(cartStore.total)
          }
        " class="flex justify-center items-center gap-2 bg-[#27AE60] hover:bg-[#219653] transition text-white p-4 w-full rounded text-base sm:text-lg"
          :class="book.saleInfo.listPrice?.amount
            ? 'bg-[#27AE60] hover:bg-[#219653]'
            : 'bg-gray-400 hover:bg-gray-500'
            ">
          <span class="material-symbols-outlined text-base">shopping_cart</span>
          {{ book.saleInfo.listPrice?.amount ? 'Comprar' : 'Resgatar' }}
        </button>
      </div>

      <img :src="book.volumeInfo.imageLinks?.thumbnail" :alt="book.volumeInfo.title"
        class="w-full max-w-[300px] sm:max-w-[400px] sm:min-w-[250px] object-cover my-10" />
    </li>
  </ul>
</template>