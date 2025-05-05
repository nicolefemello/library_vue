<script setup lang="ts">
import type { ICartItem } from '@/stores/cartStore'
import { formatCurrency } from '@/utils/formatCurrency';
import { useCartStore } from '@/stores/cartStore'
import { ref, computed } from 'vue'
import popup from './popup.vue';

const props = defineProps<{
  book: ICartItem
}>()

const cartStore = useCartStore()
const isOpen = ref(false)

const handleAddProduct = () => {
  cartStore.addToCart(props.book)
}

const handleSubtractProduct = () => {
  cartStore.subtractFromCart(props.book['id'])
}

const handleRemoveProduct = () => {
  cartStore.removeFromCart(props.book['id'])
  isOpen.value = true
}

const quantity = computed(() => cartStore.getProductQuantity(props.book.id))
const subtotal = computed(() => cartStore.getProductSubtotal(props.book.id))
</script>

<template>
  <tr class="hidden sm:flex justify-between items-center border-b border-[#BDBDBD] px-5 h-[220px] sm:h-[200px]">
    <td class="w-1/2 py-1">
      <div id="product-cart" class="flex gap-5 py-3">
        <img :src="book.volumeInfo.imageLinks?.smallThumbnail" :alt="book.volumeInfo.title"
          class="h-[170px] rounded-sm object-cover" />
        <div class="grid">
          <h4 class="text-lg lg:text-xl font-semibold text-[#382C2C]">
            {{ book.volumeInfo.title }}
          </h4>
          <p class="text-base text-[#4F4C57] my-1">{{ book.volumeInfo.authors?.join(', ') }}</p>
          <p class="font-semibold text-lg text-[#382C2C]">
            {{ formatCurrency(book.saleInfo.listPrice?.amount) }}
          </p>
        </div>
      </div>
    </td>
    <td class="w-1/6 py-1 flex items-center gap-2">
      <div class="flex justify-center items-center border border-black gap-8 w-fit px-5 py-2">
        <button @click="handleSubtractProduct">-</button>
        <p>{{ quantity }}</p>
        <button @click="handleAddProduct">+</button>
      </div>
      <button @click="handleRemoveProduct, isOpen = !isOpen" class="p-2 bg-red-600 hover:bg-red-700 rounded">
        <span class="material-symbols-outlined">delete</span>
      </button>
      <popup :is-open="isOpen" @confirm="confirmRemove" @cancel="isOpen = false" />
    </td>
    <td class="w-1/6 py-1">
      <p>{{ formatCurrency(subtotal) }}</p>
    </td>
  </tr>

  <tr class="flex sm:hidden justify-between items-center">
    <td class="py-1">
      <div id="product-cart" class="flex gap-5 py-3">
        <img :src="book.volumeInfo.imageLinks?.smallThumbnail" :alt="book.volumeInfo.title"
          class="h-[170px] rounded-sm object-cover" />
        <div class="grid">
          <h4 class="text-lg lg:text-xl font-semibold text-[#382C2C]">
            {{ book.volumeInfo.title }}
          </h4>
          <p>
            {{ formatCurrency(book.saleInfo.listPrice?.amount) }} <span class="text-sm">un.</span>
          </p>
          <div class="flex gap-3">
            <div class="flex justify-center items-center border border-black gap-8 w-fit px-2">
              <button @click="handleRemoveProduct">-</button>
              <p>{{ quantity }}</p>
              <button @click="handleAddProduct">+</button>
            </div>
            <button @click="handleRemoveProduct" class="p-2 bg-red-600 hover:bg-red-700 rounded">
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
          <p class="font-semibold text-lg text-[#382C2C] mt-2">
            Total: {{ formatCurrency(subtotal) }}
          </p>
        </div>
      </div>
    </td>
  </tr>
</template>
