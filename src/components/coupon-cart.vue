<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { ref } from 'vue'

const couponQuery = ref('')

const cartStore = useCartStore()

const handleApplyCoupon = () => {
  if (couponQuery.value) {
    cartStore.applyCoupon(couponQuery.value)
    couponQuery.value = ''
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
