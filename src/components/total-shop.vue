<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { formatCurrency } from '@/utils/formatCurrency'
import { computed } from 'vue'

const cartStore = useCartStore()

const hasCoupon = computed(() => cartStore.discount > 0)
</script>

<template>
  <div class="border border-black p-5">
    <h3 class="font-medium text-xl">Total da Compra</h3>
    <table class="w-[40vw] my-5">
      <tbody>
        <tr class="flex justify-between p-2 border-b border-[#4F4C57]">
          <td class="w-[2/3]">Produtos:</td>
          <td>{{ formatCurrency(cartStore.subtotal) }}</td>
        </tr>
        <tr class="flex justify-between p-2 border-b border-[#4F4C57]">
          <td class="w-[2/3]">Frete:</td>
          <td>Grátis</td>
        </tr>
        <tr v-if="hasCoupon" class="flex justify-between p-2 border-b border-[#4F4C57]">
          <td class="w-[2/3]">Cupom:</td>
          <td>-{{ formatCurrency(cartStore.discount) }}</td>
        </tr>
        <tr class="flex justify-between p-2 border-b border-[#4F4C57]">
          <td class="w-[2/3]">Total:</td>
          <td>{{ formatCurrency(cartStore.total) }}</td>
        </tr>
      </tbody>
    </table>
    <button class="p-2 bg-[#27AE60] hover:bg-[#219653] text-base text-[#FAFAFA]">Ir para o pagamento</button>
  </div>
</template>
