import { EBooksFilter, ESalebility, type IBook } from '@/types/booksTypes'

export const bookFilters: Record<EBooksFilter, (book: IBook) => boolean> = {
  [EBooksFilter.OnSale]: (book: IBook) => book.saleInfo.saleability === ESalebility.FOR_SALE,
  [EBooksFilter.IsEbook]: (book: IBook) => book.saleInfo.isEbook === true,
  [EBooksFilter.HasTitle]: (book: IBook) => !!book.volumeInfo.title,
  [EBooksFilter.HasImage]: (book: IBook) => !!book.volumeInfo.imageLinks?.thumbnail,
}
