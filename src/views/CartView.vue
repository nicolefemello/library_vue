<script setup lang="ts">
import { computed } from 'vue'
import tableCart from '@/components/table-cart.vue'
import { useCartStore } from '@/stores/cartStore'
import totalShop from '@/components/total-shop.vue'
import CouponCart from '@/components/coupon-cart.vue'

const cartStore = useCartStore()

const products = computed(() => {
  return cartStore.products
})
</script>

<template>
  <section id="cart" class="p-5 lg:p-20">
    <h1 class="font-semibold text-3xl sm:text-4xl text-[#27AE60]">Carrinho</h1>

    <img v-if="products.length == 0" src="/carrinho.png" alt="O carrinho está vazio!" class="object-cover m-auto">

    <div v-else>
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

      <div class="flex justify-between my-10 gap-2">
        <CouponCart />
        <totalShop />
      </div>
    </div>

    <RouterLink to="/" class="border border-black p-2 text-base font-medium">Voltar para loja</RouterLink>
  </section>
</template>
