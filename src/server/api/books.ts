import BookService from "../services/BookService";

export default defineEventHandler(async (_event) => {
  const data = await BookService.getBooks("", 20, 0);

  return {
    success: true,
    books: data.items,
  };
});
