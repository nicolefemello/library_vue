<script setup lang="ts">
import { ref } from 'vue'
import tableCart from '@/components/table-cart.vue';

const products = ref([
  { id: 0, title: 'Chain of Iron: Volume 2', author: 'Cassandra Clare', price: 23.24, image: 'https://m.media-amazon.com/images/I/51hhM-xpf2L._SY445_SX342_.jpg', quantity: 1, favorite: false },
  { id: 0, title: 'Chain of Iron: Volume 2', author: 'Cassandra Clare', price: 23.24, image: 'https://m.media-amazon.com/images/I/51hhM-xpf2L._SY445_SX342_.jpg', quantity: 1, favorite: false },
])

</script>

<template>
  <section id="cart" class="p-20">
    <h1 class="font-semibold text-4xl text-[#27AE60]">Carrinho</h1>

    <table class="mt-10 m-5 w-full">
      <tr class="flex justify-between font-semibold text-lg text-[#382C2C] border-b border-[#27AE60]">
        <td class="w-[800px] py-1">Título</td>
        <td class="py-1">Quantidade</td>
        <td class="py-1">Subtotal</td>
      </tr>
      <tableCart v-for="book in products" :key="book.id" :book="book" />
    </table>

    <RouterLink to="/" class="border border-black p-2 text-base font-medium">Voltar para loja</RouterLink>

    <div class="flex justify-between my-5">
      <p>
        <input type="text" placeholder="Código do cupom"
          class="border border-black outline-none text-sm text-[#4F4C57] p-2">
        <button class="bg-[#27AE60] p-2 text-sm text-white rounded-sm ml-5">Inserir cupom</button>
      </p>

      <div class="w-[470px] border border-black p-5">
        <h3 class="font-medium text-xl">Total da Compra</h3>
        <table class="my-5 w-full">
          <tr class="flex justify-between p-2 border-b border-[#4F4C57]">
            <td>Produtos:</td>
            <td>R${{ products[0].price.toFixed(2).replace(".", ",") }}</td>
          </tr>
          <tr class="flex justify-between p-2 border-b border-[#4F4C57]">
            <td>Frete:</td>
            <td>Grátis</td>
          </tr>
          <tr class="flex justify-between p-2 border-b border-[#4F4C57]">
            <td>Total:</td>
            <td>R${{ products[0].price.toFixed(2).replace(".", ",") }}</td>
          </tr>
        </table>
        <button class="p-2 bg-[#27AE60] text-base text-[#FAFAFA]">Ir para o pagamento</button>
      </div>
    </div>
  </section>

  <!--
  <section id="cart" class="px-4 sm:px-8 md:px-16 lg:px-20 py-10">
    <h1 class="font-semibold text-3xl sm:text-4xl text-[#27AE60]">Carrinho</h1>


    <div
      class="mt-10 mb-5 hidden sm:flex justify-between font-semibold text-lg text-[#382C2C] border-b border-[#27AE60] pb-2">
      <span class="w-2/3">Título</span>
      <span class="w-1/6 text-center">Quantidade</span>
      <span class="w-1/6 text-right">Subtotal</span>
    </div>


    <div class="space-y-4">
      <tableCart v-for="book in products" :key="book.id" :book="book" />
    </div>


    <RouterLink to="/" class="inline-block mt-8 border border-black p-2 text-sm sm:text-base font-medium">
      Voltar para loja
    </RouterLink>


    <div class="flex flex-col lg:flex-row justify-between gap-8 mt-10">


      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <input type="text" placeholder="Código do cupom"
          class="border border-black outline-none text-sm text-[#4F4C57] p-2 w-full sm:w-auto" />
        <button class="bg-[#27AE60] p-2 text-sm text-white rounded-sm">Inserir cupom</button>
      </div>


      <div class="w-full lg:w-[470px] border border-black p-5">
        <h3 class="font-medium text-xl mb-4">Total da Compra</h3>
        <div class="space-y-2 text-sm sm:text-base">
          <div class="flex justify-between border-b border-[#4F4C57] pb-1">
            <span>Produtos:</span>
            <span>R${{ products[0].price.toFixed(2).replace(".", ",") }}</span>
          </div>
          <div class="flex justify-between border-b border-[#4F4C57] pb-1">
            <span>Frete:</span>
            <span>Grátis</span>
          </div>
          <div class="flex justify-between border-b border-[#4F4C57] pb-1">
            <span>Total:</span>
            <span>R${{ products[0].price.toFixed(2).replace(".", ",") }}</span>
          </div>
        </div>

        <button class="w-full mt-5 p-2 bg-[#27AE60] text-base text-[#FAFAFA]">
          Ir para o pagamento
        </button>
      </div>
    </div>
  </section> -->
</template>
