import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { fetchSearchBooks } from "../redux/search-slice";
import { IBook, IBookCard, ISimilarBooksProps } from "../types/types";
import { BookCard } from "./BookCard";
import styles from "../styles/books.boards.module.scss";

export function SimilarBooks(props: ISimilarBooksProps) {
  const dispatch = useAppDispatch();

  const { currentPage, query } = useParams();
  const { list } = useAppSelector((state) => state.search);

  function normalizeQuery(item: string | undefined) {
    if (!item) return undefined;
    return item.replace(" ", "+");
  }

  useEffect(() => {
    dispatch(
      fetchSearchBooks({
        query: normalizeQuery(props.subtitle),
        page: "1",
      })
    );
  }, [dispatch, currentPage, query]);

  function renderBooks() {
    if (!list) return <div>could not find Similar books</div>;
    const firstsBooks = list.filter(
      (book: IBook, index) => book.isbn13 !== query
    );
    console.log(firstsBooks);
    console.log(query);
    return firstsBooks.map((book: IBookCard) => {
      return (
        <div>
          <BookCard
            key={book.isbn13}
            image={book.image}
            title={book.title}
            price={book.price}
            isbn={book.isbn13}
          />
        </div>
      );
    });
  }

  return (
    <>
      <div className={styles.similar__books__board}>{renderBooks()}</div>
    </>
  );
}
