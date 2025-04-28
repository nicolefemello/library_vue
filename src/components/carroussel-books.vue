<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'
import menuBooks from './menu-books.vue'
import type { IBook } from '@/types/booksTypes'

const props = defineProps<{ products: IBook[] }>()

const indexStart = ref(0)

const nextStart = () => indexStart.value = (indexStart.value + 1) % props.products.length
const prevStart = () => indexStart.value = (indexStart.value - 1 + props.products.length) % props.products.length

const translateStyle = computed(() => {
  return { transform: `translateX(-${indexStart.value * 100}%)` }
})
</script>

<template>
  <div class="relative flex justify-center mt-5">
    <button @click="prevStart"
      class="absolute flex justify-center items-center left-0 top-1/2 z-2 bg-white/70 rounded-full p-2">
      <span class="material-symbols-outlined text-green-600">arrow_back_ios</span>
    </button>

    <div id="carroussel" class="w-[300px] overflow-hidden">
      <ul class="flex transition-transform duration-500 ease-in-out" :style="translateStyle">
        <li v-for="book in products" :key="book.id" class="min-w-full">
          <menuBooks :book="book" />
        </li>
      </ul>
    </div>

    <button @click="nextStart"
      class="absolute flex justify-center items-center right-0 top-1/2 z-2 bg-white/70 rounded-full p-2">
      <span class="material-symbols-outlined text-green-600">arrow_forward_ios</span>
    </button>
  </div>
</template>

<!-- <template>
  <div class="relative w-full flex justify-center items-center mt-5 overflow-hidden">
    <button @click="prevStart"
      class="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 shadow">
      <span class="material-symbols-outlined text-green-600">arrow_back_ios</span>
    </button>

    <div class="w-[300px] overflow-hidden">
      <ul class="flex transition-transform duration-500 ease-in-out" :style="translateStyle"
        style="width: fit-content;">
        <li v-for="book in props.products" :key="book.id" class="w-[300px] flex-shrink-0">
          <menuBooks :book="book" />
        </li>
      </ul>
    </div>

    <button @click="nextStart"
      class="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 shadow">
      <span class="material-symbols-outlined text-green-600">arrow_forward_ios</span>
    </button>
  </div>
</template> -->