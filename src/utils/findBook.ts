import { IBook } from "../types/types";

export function findBookInList(list: IBook[], book: IBook | null) {
  if (list.find((item: IBook) => item.isbn13 == book?.isbn13)) return true;

  return false;
}
