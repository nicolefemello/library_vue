import api from '@/plugins/api'
import type { IBookResponse } from '@/types/booksTypes'

const apiKey = import.meta.env.VITE_API_KEY

class BookService {
  static async getBooks(query: string, maxResults = 20): Promise<IBookResponse> {
    try {
      const { data } = await api.get(`/volumes`, {
        params: {
          q: query || 'livros',
          maxResults,
          key: apiKey,
        },
      })

      return data
    } catch (error) {
      console.error('Erro ao buscar os livros:', error)
      throw error
    }
  }
}

export default BookService
