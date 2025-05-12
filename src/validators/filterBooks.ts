import { EBooksFilter, type IBook } from '@/types/booksTypes'

export const bookFilters: Record<EBooksFilter, (book: IBook) => boolean> = {
  [EBooksFilter.OnSale]: (book: IBook) => book.saleInfo.listPrice?.amount !== undefined,
  [EBooksFilter.HasImage]: (book: IBook) => !!book.volumeInfo.imageLinks?.thumbnail,
}
