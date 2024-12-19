import { book } from "../utils/book";
import { IBook } from "../types/types";
import { BookCardBacket } from "./BookCardBacked";
import { makePriceOutOfTheIsbn } from "../utils/price";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";

export function BuyList() {
  const backet = book.getBacket();
  console.warn(backet.length);
  const { list } = useAppSelector((state) => state.backet);

  function getTotalPrice() {
    if (backet.length == 0) return <div>no books in backet</div>;

    let sum = backet.map((book: IBook) => {
      return makePriceOutOfTheIsbn(book.primary_isbn13) || [];
    });
    console.log(sum);
    let result = sum.reduce((acc: number, val: number) => {
      return acc + val;
    });

    return <h2>Total Price : {result}</h2>;
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
          // onClick={handleClickButtonRemove}
        />
      );
    });
  }

  return (
    <>
      {getTotalPrice()}
      <div>{renderBooks()}</div>
    </>
  );
}
