<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

const couponQuery = ref('')

const cartStore = useCartStore()

const handleApplyCoupon = () => {
  if (couponQuery.value) {
    const result = cartStore.applyCoupon(couponQuery.value)
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
        class="border border-black outline-none text-sm text-[#4F4C57] p-2"
      />
      <button @click="handleApplyCoupon" class="bg-[#27AE60] p-2 text-sm text-white rounded-sm m-5">
        Inserir cupom
      </button>
    </p>
  </div>
</template>
