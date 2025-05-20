// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class BookService {
  static async getBooks(
    query: string,
    maxResults = 20,
    startIndex = 0
  ): Promise<IBookResponse> {
    try {
      const data = await $fetch<IBookResponse>(
        `https://www.googleapis.com/books/v1/volumes`,
        {
          params: {
            q: query || "Livros",
            maxResults,
            startIndex,
            orderBy: "relevance",
            printType: "books",
            projection: "lite",
            langRestrict: "pt, en",
          },
        }
      );

      return data;
    } catch (error) {
      console.error("Erro ao buscar os livros:", error);
      throw error;
    }
  }
}
