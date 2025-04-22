import api from '@/plugins/api'
import type { TBookApiResponse } from '@/types/booksTypes'

const apiKey = import.meta.env.VITE_API_KEY
console.log(apiKey)

class BookService {
  static async getBooks(): Promise<TBookApiResponse> {
    try {
      const response: TBookApiResponse = await api.get(`/volumes`, {
        params: {
          q: 'programming',
          maxResults: 10,
          key: apiKey,
        },
      })
      console.log('Response:', response)
      return response
    } catch (error) {
      console.error('Erro ao buscar os livros:', error)
      throw error
    }
  }
}

export default BookService
