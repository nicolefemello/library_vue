<script setup lang="ts">
defineProps<{
  book: {
    id: number
    title: string
    author: string
    price: number
    image: string
    quantity: number
    favorite: boolean
  }
}>()
</script>

<template>
  <li class="w-full sm:w-[235px] rounded-lg border border-zinc-200 shadow-md hover:shadow-lg transition">

    <img :src="book.image" :alt="book.title" class="w-full h-[280px] sm:h-[300px] object-cover rounded-t-lg" />

    <div id="info-book" class="grid gap-2 p-3 sm:p-4">
      <h4 class="font-semibold text-base sm:text-lg text-[#382C2C] leading-snug">{{ book.title }}</h4>
      <p class="text-sm text-[#4F4C57]">{{ book.author }}</p>

      <p class="flex justify-between items-center text-base text-[#382C2C]">
        R${{ book.price.toFixed(2).replace(".", ",") }}
        <span
          :class="['material-symbols-outlined', 'cursor-pointer', book.favorite ? 'text-white bg-[#27AE60] rounded-full p-1' : 'text-[#27AE60]']">
          favorite
        </span>
      </p>

      <button
        class="flex justify-center items-center gap-1 bg-[#27AE60] hover:bg-[#219653] transition text-white py-2 px-4 w-full rounded text-sm sm:text-base">
        <span class="material-symbols-outlined text-base">shopping_cart</span>
        Comprar
      </button>
    </div>
  </li>
</template>