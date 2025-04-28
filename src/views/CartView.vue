<script setup lang="ts">
import { computed } from 'vue'
import tableCart from '@/components/table-cart.vue'
import { useCartStore } from '@/stores/cartStore'
import totalShop from '@/components/total-shop.vue'

const cartStore = useCartStore()

const products = computed(() => {
  return cartStore.products
})
</script>

<template>
  <section id="cart" class="p-5 lg:p-20">
    <h1 class="font-semibold text-3xl sm:text-4xl text-[#27AE60]">Carrinho</h1>

    <table id="cart" class="grid mt-10 sm:m-5 w-full">
      <thead>
        <tr class="flex justify-between font-semibold text-lg text-[#382C2C] border-b border-[#27AE60]">
          <td class="w-1/2 py-1 hidden sm:block">Título</td>
          <td class="w-1/6 py-1 hidden sm:block">Quantidade</td>
          <td class="w-1/6 py-1 hidden sm:block">Subtotal</td>
        </tr>
      </thead>
      <tbody>
        <tableCart v-for="book in products" :key="book.id" :book="book" />
      </tbody>
    </table>

    <RouterLink to="/" class="border border-black p-2 text-base font-medium">Voltar para loja</RouterLink>

    <div class="flex justify-between my-10 gap-2">
      <p>
        <input type="text" placeholder="Código do cupom"
          class="border border-black outline-none text-sm text-[#4F4C57] p-2" />
        <button class="bg-[#27AE60] p-2 text-sm text-white rounded-sm m-5">Inserir cupom</button>
      </p>

      <totalShop />
    </div>
  </section>
</template>
