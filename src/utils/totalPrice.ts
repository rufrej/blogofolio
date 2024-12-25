import { book } from "../utils/book";
import { IBook } from "../types/types";

export function getTotalPrice() {
  const cart = book.getCart();
  if (cart.length == 0) return null;

  let prices = cart.map((book: IBook) => {
    return book.count * Number(book.price.replace("$", ""));
  });
  let result = prices.reduce((acc: number, val: number) => {
    return acc + val;
  });
  return result.toFixed(2);
}
