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
  <tr class="flex justify-between items-center border-b border-[#BDBDBD] px-5">
    <td class="w-[800px] py-1">
      <div id="product-cart" class="flex gap-5 py-3">
        <img :src="book.image" :alt="book.title" class="h-[170px] rounded-sm object-cover">
        <div>
          <h4 class="text-semibold text-2xl text-[#382C2C]">{{ book.title }}</h4>
          <p class="text-base text-[#4F4C57] my-1">{{ book.author }}</p>
          <p class="text-semibold text-xl text-[#382C2C]">R${{ book.price.toFixed(2).replace(".", ",") }}
          </p>
        </div>
      </div>
    </td>
    <td class="py-1">
      <button>-</button>{{ book.quantity }}<button>+</button>
    </td>
    <td class="py-1">R${{ book.price.toFixed(2).replace(".", ",") }}</td>
  </tr>
</template>