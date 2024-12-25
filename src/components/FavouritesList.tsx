import { IBook } from "../types/types";
import { BookCardFavourites } from "./BookCardFavourites";
import { useAppSelector } from "../hooks/useStore";

export function FavouritesList() {
  const { list } = useAppSelector((state) => state.favourites);

  console.log(list);
  function renderBooks() {
    return list?.map((book: IBook) => {
      return (
        <BookCardFavourites
          key={book.isbn13}
          image={book.image}
          title={book.title}
          author={book.authors}
          price={book.price}
          isbn={book.isbn13}
        />
      );
    });
  }

  return (
    <>
      <div>{renderBooks()}</div>
    </>
  );
}
