import { IBook } from "../types/types";

export function findSubtitle(book: IBook) {
  if (book.subtitle !== "") {
    const result = book.subtitle.split(" ")[1];
    return result;
  }
  return book.authors;
}
