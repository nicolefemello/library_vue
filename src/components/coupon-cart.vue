<script setup lang="ts">
import { EDiscountCoupon, useCartStore } from '@/stores/cartStore'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

const couponQuery = ref('')

const cartStore = useCartStore()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const coupons = Object.entries(EDiscountCoupon).filter(([key, value]) => isNaN(Number(key)))

const handleApplyCoupon = () => {
  if (couponQuery.value) {
    const result = cartStore.applyCoupon(couponQuery.value.toUpperCase().trim())
    couponQuery.value = ''

    if (result) {
      toast.success('Cupom aplicado com sucesso!', {
        autoClose: 2000,
        position: 'bottom-right',
        theme: 'light',
      })
    } else {
      toast.error('Cupom inválido!', {
        autoClose: 2000,
        position: 'bottom-right',
        theme: 'light',
      })
    }
  }
}
</script>

<template>
  <div>
    <p>
      <input
        type="text"
        v-model="couponQuery"
        @keydown.enter="handleApplyCoupon"
        placeholder="Código do cupom"
        class="border border-black rounded-b-sm outline-none text-sm text-[#4F4C57] p-2"
      />
      <button @click="handleApplyCoupon" class="bg-[#27AE60] p-2 text-sm text-white rounded-sm m-5">
        Inserir cupom
      </button>
    </p>
    <div class>
      <p class="text-[15px] font-semibold mb-2">Coupons</p>
      <table class="min-w-max text-[10px] bg-white border border-gray-200 rounded-lg shadow-md">
        <tbody class="border">
          <tr v-for="(coupon, index) in coupons" :key="index" class="hover:bg-gray-50">
            <td class="px-3 py-1 border-r-1 text-center">{{ coupon[0] }}</td>
            <td class="px-3 py-1 text-center">{{ (coupon[1] as number) * 100 }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
