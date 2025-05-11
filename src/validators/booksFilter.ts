import type { IBook } from '@/types/booksTypes'
type TBookFilter = (book: IBook) => boolean

export const bookFilter = (books: IBook[], filters: TBookFilter[]) => {
  return books.filter((book: IBook) => filters.every((fn) => fn(book)))
}
