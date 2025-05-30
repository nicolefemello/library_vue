import type { PersistenceOptions } from 'pinia-plugin-persistedstate'

export const piniaPersistConfig: Record<string, PersistenceOptions> = {
  favoritesProducts: {
    key: 'favoriteBooks',
    storage: localStorage,
    pick: ['favoriteProducts'],
  },
  cartProducts: {
    key: 'cartProducts',
    storage: localStorage,
    pick: ['products', 'couponCode'],
  },
}
