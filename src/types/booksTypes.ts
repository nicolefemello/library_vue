export enum EBooksFilter {
  OnSale = 'ON_SALE',
  IsEbook = 'IS_EBOOK',
  HasTitle = 'HAS_TITLE',
  HasImage = 'HAS_IMAGE',
}

export interface IndustryIdentifier {
  type: string
  identifier: string
}

export interface ReadingModes {
  text: boolean
  image: boolean
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

export interface ImageLinks {
  smallThumbnail?: string
  thumbnail?: string
}

export interface VolumeInfo {
  title: string
  authors?: string[]
  publisher?: string
  publishedDate?: string
  description?: string
  industryIdentifiers?: IndustryIdentifier[]
  readingModes: ReadingModes
  pageCount?: number
  printType: string
  categories?: string[]
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary?: PanelizationSummary
  imageLinks?: ImageLinks
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

export interface Price {
  amount: number
  currencyCode: string
}

export interface Offer {
  finskyOfferType: number
  listPrice: {
    amountInMicros: number
    currencyCode: string
  }
  retailPrice: {
    amountInMicros: number
    currencyCode: string
  }
  giftable: boolean
}

export interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
  listPrice?: Price
  retailPrice?: Price
  buyLink?: string
  offers?: Offer[]
}

export interface Epub {
  isAvailable: boolean
  acsTokenLink?: string
}

export interface Pdf {
  isAvailable: boolean
}

export interface AccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: Epub
  pdf: Pdf
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

export interface SearchInfo {
  textSnippet: string
}

export interface IBook {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
  searchInfo?: SearchInfo
}

export interface IBookResponse {
  kind: string
  totalItems: number
  items?: IBook[]
}

export interface IBookFilterOptions {
  onSale?: boolean
  author?: string
  genre?: string
  minPrice?: number
  maxPrice?: number
  minPages?: number
}

export enum ESalebility {
  NOT_FOR_SALE = 'NOT_FOR_SALE',
  FOR_SALE = 'FOR_SALE',
}
