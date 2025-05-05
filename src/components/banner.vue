<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { defineProps } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import type { IBook } from '@/types/booksTypes'

const cartStore = useCartStore()
const props = defineProps<{ products: IBook[] }>()

const displayedProducts = ref<IBook[]>([])
const currentIndex = ref(0)
let intervalId: number

const goToSlide = (index: number) => {
  currentIndex.value = index
}

onMounted(() => {
  displayedProducts.value = props.products.slice(0, 10)
  intervalId = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % displayedProducts.value.length
  }, 4000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="relative overflow-hidden w-full h-full">
    <ul class="flex transition-transform duration-700 ease-in-out w-full"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <li v-for="book in products" :key="book.id"
        class="w-full flex-shrink-0 flex flex-col lg:flex-row justify-center items-center px-4 lg:px-10 lg:gap-30">
        <div id="banner-left" class="grid gap-5 max-w-xl text-center lg:text-left">
          <p class="p-2 w-fit mx-auto lg:mx-0 text-sm text-[#27AE60] border border-[#27AE60]">
            Autor de Abril
          </p>
          <h2 class="font-bold text-3xl md:text-5xl text-[#382C2C] line-clamp-3">{{ book.volumeInfo.title }}</h2>
          <p class="text-base text-[#4D4C4C] line-clamp-5">{{ book.volumeInfo.description }}</p>
          <button @click="() => cartStore.addToCart(book)"
            class="flex justify-center items-center gap-2 p-4 w-full rounded text-white text-base sm:text-lg cursor-pointer transition"
            :class="book.saleInfo.listPrice?.amount ? 'bg-[#27AE60] hover:bg-[#219653]' : 'bg-gray-400 hover:bg-gray-500'">
            <span class="material-symbols-outlined text-base">shopping_cart</span>
            {{ book.saleInfo.listPrice?.amount ? 'Comprar' : 'Resgatar' }}
          </button>
        </div>

        <img :src="book.volumeInfo.imageLinks?.thumbnail" :alt="book.volumeInfo.title"
          class="w-full max-w-[300px] sm:min-w-[250px] object-cover my-10" />
      </li>
    </ul>

    <div id="manual-navigation" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      <button v-for="(book, index) in displayedProducts" :key="index" @click="goToSlide(index)"
        class="w-3 h-3 rounded-full" :class="currentIndex === index ? 'bg-[#27AE60]' : 'bg-gray-300'"></button>
    </div>
  </div>
</template>