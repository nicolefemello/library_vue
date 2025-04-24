<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import { formatCurrency } from '@/utils/formatCurrency';

const cartStore = useCartStore()

</script>

<template>
  <div class="w-[470px] border border-black p-5">
    <h3 class="font-medium text-xl">Total da Compra</h3>
    <table class="my-5 w-full">
      <tbody>
        <tr class="flex justify-between p-2 border-b border-[#4F4C57]">
          <td>Produtos:</td>
          <td>R$00</td>
        </tr>
        <tr class="flex justify-between p-2 border-b border-[#4F4C57]">
          <td>Frete:</td>
          <td>Grátis</td>
        </tr>
        <tr class="flex justify-between p-2 border-b border-[#4F4C57]">
          <td>Total:</td>
          <td>R${{ formatCurrency(cartStore.total) }}</td>
        </tr>
      </tbody>
    </table>
    <button class="p-2 bg-[#27AE60] text-base text-[#FAFAFA]">Ir para o pagamento</button>
  </div>
</template>
