export function makePriceOutOfTheIsbn(isbn: string) {
  let price: number = Number(isbn.slice(-2));
  if (price == 0) {
    price = Number(isbn.slice(-3, -1));
  }
  return price;
}
