<script setup lang="ts">
import { defineProps } from 'vue'
import menuBooks from './menu-books.vue'
import type { IBook } from '@/types/booksTypes'

const props = defineProps<{ products: IBook[] }>()
</script>

<template>
  <div id="carroussel" class="w-full mt-10">
    <ul class="flex overflow-x-auto space-x-10">
      <li v-for="book in products" :key="book.id">
        <menuBooks :book="book" />
      </li>
    </ul>
  </div>
</template>