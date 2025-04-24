import api from '@/plugins/api'
import type { TBookApiResponse } from '@/types/booksTypes'

const apiKey = import.meta.env.VITE_API_KEY

class BookService {
  static async getBooks(): Promise<TBookApiResponse> {
    try {
      const response: TBookApiResponse = await api.get(`/volumes`, {
        params: {
          q: 'Programming',
          maxResults: 20,
          key: apiKey,
        },
      })
      return response
    } catch (error) {
      console.error('Erro ao buscar os livros:', error)
      throw error
    }
  }
}

export default BookService
