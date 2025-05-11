<script setup lang="ts">
import { Dialog, DialogOverlay, DialogPanel, DialogTitle } from '@headlessui/vue'
import { TransitionRoot } from '@headlessui/vue'

const props = defineProps<{
  isOpen: boolean
  local: string
}>()

const emit = defineEmits(['confirm', 'cancel'])
</script>

<template>
  <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog as="div" class="relative z-50" @close="emit('cancel')">
      <DialogOverlay class="fixed inset-0 bg-black/30" />
      <div class="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel class="max-w-md bg-white rounded-lg p-6 shadow-xl text-center">
          <DialogTitle class="text-lg font-bold text-gray-800">Confirmar remoção</DialogTitle>
          <p class="text-gray-600 mt-2">Tem certeza que deseja remover este item {{ local }}?</p>
          <div class="mt-4 flex justify-center gap-4">
            <button
              class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              @click="emit('confirm')"
            >
              Sim, desejo remover.
            </button>
            <button
              class="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
              @click="emit('cancel')"
            >
              Não.
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
