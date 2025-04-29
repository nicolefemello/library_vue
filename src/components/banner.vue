<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { defineProps } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import type { IBook } from '@/types/booksTypes'

const cartStore = useCartStore()
const props = defineProps<{ products: IBook[] }>()

const listRef = ref<HTMLElement | null>(null)
let currentIndex = 0
let intervalId: number

onMounted(() => {
  intervalId = window.setInterval(() => {
    const list = listRef.value
    if (!list) return

    const children = list.children

    currentIndex = (currentIndex + 1) % children.length
    const scrollToElement = children[currentIndex] as HTMLElement

    list.scrollTo({
      left: scrollToElement.offsetLeft,
      behavior: 'smooth',
    })
  }, 4000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>


<template>
  <ul ref="listRef" class="flex overflow-x-auto scroll-smooth snap-x snap-mandatory">
    <li v-for="book in products" :key="book.id"
      class="flex flex-col lg:flex-row justify-center items-center border-b border-[#27AE60] lg:gap-30 px-4 lg:px-10 w-full flex-shrink-0 snap-start">
      <div id="banner-left" class="grid gap-5 max-w-2xl text-center lg:text-left">
        <p class="p-2 w-fit mx-auto lg:mx-0 text-sm text-[#27AE60] border border-[#27AE60]">
          Autor de Abril
        </p>
        <h2 class="font-bold text-3xl md:text-5xl text-[#382C2C]">{{ book.volumeInfo.title }}</h2>
        <p class="text-base text-[#4D4C4C] line-clamp-5">{{ book.volumeInfo.description }}</p>
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
        class="w-full max-w-[300px] sm:min-w-[250px] object-cover my-10" />
    </li>
  </ul>
</template>