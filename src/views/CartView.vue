<script setup lang="ts">
import { computed } from 'vue'
import tableCart from '@/components/table-cart.vue'
import { useCartStore } from '@/stores/cartStore'
import { formatCurrency } from '@/utils/formatCurrency'

const cartStore = useCartStore()

const products = computed(() => {
  return cartStore.products
})
</script>

<template>
  <section id="cart" class="p-5 lg:p-20">
    <h1 class="font-semibold text-3xl sm:text-4xl text-[#27AE60]">Carrinho</h1>

    <table id="cart-desktop" class="hidden lg:grid mt-10 m-5 w-full">
      <thead>
        <tr class="flex justify-between font-semibold text-lg text-[#382C2C] border-b border-[#27AE60]">
          <td class="w-1/2 py-1">Título</td>
          <td class="w-1/6 py-1">Quantidade</td>
          <td class="w-1/6 py-1">Subtotal</td>
        </tr>
      </thead>
      <tbody>
        <tableCart v-for="book in products" :key="book.id" :book="book" />
      </tbody>
    </table>

    <div id="cart-mobile" class="grid gap-5 my-5 lg:hidden">
      <!-- <tableCartMobile v-for="book in cartStore.products" :key="book.id" :book="book" /> -->
    </div>

    <RouterLink to="/" class="border border-black p-2 text-base font-medium">Voltar para loja</RouterLink>

    <div class="flex justify-between my-5">
      <p>
        <input type="text" placeholder="Código do cupom"
          class="border border-black outline-none text-sm text-[#4F4C57] p-2" />
        <button class="bg-[#27AE60] p-2 text-sm text-white rounded-sm ml-5">Inserir cupom</button>
      </p>

      <div class="w-[470px] border border-black p-5">
        <h3 class="font-medium text-xl">Total da Compra</h3>
        <table class="my-5 w-full">
          <tr class="flex justify-between p-2 border-b border-[#4F4C57]">
            <td>Produtos:</td>
            <!-- <td>R${{ products.toFixed(2).replace('.', ',') }}</td> -->
          </tr>
          <tr class="flex justify-between p-2 border-b border-[#4F4C57]">
            <td>Frete:</td>
            <td>Grátis</td>
          </tr>
          <tr class="flex justify-between p-2 border-b border-[#4F4C57]">
            <td>Total:</td>
            <td>{{ formatCurrency(cartStore.total) }}</td>
          </tr>
        </table>
        <button class="p-2 bg-[#27AE60] text-base text-[#FAFAFA]">Ir para o pagamento</button>
      </div>
      <totalShop :products="products" />
    </div>
  </section>
</template>
