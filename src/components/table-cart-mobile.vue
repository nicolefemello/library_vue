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
  <div id="product-cart" class="flex justify-between h-[180px]">
    <div id="product-info" class="grid justify-between py-5">
      <h3>{{ book.title }}</h3>
      <p>R${{ book.price.toFixed(2).replace('.', ',') }}</p>

      <div id="product-quantity" class="flex items-center">
        <button>></button>
        <p>{{ book.quantity }}</p>
        <button>></button>
      </div>
    </div>

    <p>R${{ (book.price * book.quantity).toFixed(2).replace('.', ',') }}</p>
  </div>
</template>
