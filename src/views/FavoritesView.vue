<script setup lang="ts">
import { useFavoriteStore } from '@/stores/favoriteStore'
import { formatCurrency } from '@/utils/formatCurrency'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import popup from '@/components/popup.vue'
import type { IBook } from '@/types/booksTypes'

const favoriteStore = useFavoriteStore()

const isOpen = ref(false)

const handleRemoveProduct = () => {
  isOpen.value = true
}

const confirmRemove = (book: IBook) => {
  isOpen.value = false
  favoriteStore.toggleFavorite(book)
  toast.success('Livro removido dos favoritos!', {
    autoClose: 2000,
    position: 'bottom-right',
    theme: 'light',
  })
}
</script>

<template>
  <section id="cart" class="p-5 lg:p-20">
    <h1 class="font-semibold text-3xl sm:text-4xl text-[#27AE60]">Favoritos</h1>

    <img
      v-if="favoriteStore.favoriteProducts.length == 0"
      src="/favorites.png"
      alt="Não há nenhum produto nos favoritos!"
      class="object-cover m-auto"
    />

    <div v-else>
      <table id="cart" class="grid mt-10 sm:m-5 w-auto">
        <thead>
          <tr class="flex font-semibold text-lg text-[#382C2C] border-b border-[#27AE60]">
            <td class="w-4/6 py-1 hidden sm:block">Título</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(favorite, index) in favoriteStore.favoriteProducts"
            :key="index"
            class="flex justify-between items-center border-b border-[#BDBDBD]"
          >
            <td class="w-5/6 py-1">
              <div id="product-cart" class="flex gap-5 py-3">
                <img
                  :src="favorite.volumeInfo.imageLinks?.smallThumbnail"
                  :alt="favorite.volumeInfo.title"
                  class="h-[170px] rounded-sm object-cover"
                />
                <div class="grid">
                  <h4 class="text-lg lg:text-xl font-semibold text-[#382C2C]">
                    {{ favorite.volumeInfo.title }}
                  </h4>
                  <p class="text-base text-[#4F4C57] my-1">
                    {{ favorite.volumeInfo.authors?.join(', ') }}
                  </p>
                  {{ formatCurrency(favorite.saleInfo.listPrice?.amount) }}
                </div>
              </div>
            </td>
            <td class="w-1/6 py-1">
              <button
                @click="handleRemoveProduct()"
                class="p-2 bg-red-600 hover:bg-red-700 rounded"
              >
                <span class="material-symbols-outlined">delete</span>
              </button>
              <popup
                :is-open="isOpen"
                @confirm="confirmRemove(favorite)"
                @cancel="isOpen = false"
                local="dos favoritos"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
