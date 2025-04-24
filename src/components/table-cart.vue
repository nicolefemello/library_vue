<script setup lang="ts">
import type { ICartItem } from '@/stores/cartStore'
import { formatCurrency } from '@/utils/formatCurrency'
import { computed } from 'vue'

const props = defineProps<{
  book: ICartItem
}>()

const totalItem = computed(() => {
  return (props.book.saleInfo.listPrice?.amount ?? 0) * props.book.quantity
})
</script>

<template>
  <tr class="flex justify-between items-center border-b border-[#BDBDBD] px-5 h-[180px] sm:h-[200px]">
    <td class="w-1/2 py-1">
      <div id="product-cart" class="flex gap-5 py-3">
        <img :src="book.volumeInfo.imageLinks?.smallThumbnail" :alt="book.volumeInfo.title"
          class="h-[170px] rounded-sm object-cover" />
        <div>
          <h4 class="text-semibold text-2xl text-[#382C2C]">{{ book.volumeInfo.title }}</h4>
          <p class="text-base text-[#4F4C57] my-1">{{ book.volumeInfo.authors }}</p>
          <p class="text-semibold text-xl text-[#382C2C]">
            {{ formatCurrency(book.saleInfo.listPrice?.amount) }}
          </p>
        </div>
      </div>
    </td>
    <td class="w-1/6 py-1">
      <div class="flex items-center border border-black">
        <button>-</button>
        <p>{{ book.quantity }}</p>
        <button>+</button>
      </div>
    </td>
    <td class="w-1/6 py-1">
      <p>{{ formatCurrency(totalItem) }}</p>
    </td>
  </tr>
</template>
