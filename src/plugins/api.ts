import axios, { type AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: `https://www.googleapis.com/books/v1`,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
