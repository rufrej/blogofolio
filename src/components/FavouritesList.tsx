import { book } from "../utils/book";
import { IBook } from "../types/types";
import { BookCardBacket } from "./BookCardBacked";
import { makePriceOutOfTheIsbn } from "../utils/price";
import { useAppSelector } from "../hooks/useStore";

export function FavouritesList() {
  const backet = book.getBacket();
  const { list } = useAppSelector((state) => state.backet);
  function getTotalPrice() {
    if (!backet) return null;

    let sum = backet.map((book: IBook) => {
      return makePriceOutOfTheIsbn(book.primary_isbn13);
    });
    const result = sum.reduce((acc: number, val: number) => {
      return acc + val;
    });
    return result;
  }

  function handleClickButtonDelete(
    event: React.MouseEvent<HTMLButtonElement>
  ): void {
    console.log(event);
  }

  console.log(list);
  function renderBooks() {
    return backet?.map((book: IBook) => {
      return (
        <BookCardBacket
          key={book.primary_isbn13}
          book_image={book.book_image}
          title={book.title}
          author={book.author}
          link={book.category}
          index={book.rank - 1}
          isbn={book.primary_isbn13}
        />
      );
    });
  }

  return (
    <>
      <h2>Total Price : {getTotalPrice()} $</h2>
      <div>{renderBooks()}</div>
    </>
  );
}
