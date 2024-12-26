import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { fetchNewBooks } from "../redux/books-slice";
import { IBookCard } from "../types/types";
import styles from "../styles/books.boards.module.scss";
import { BookCard } from "../components/BookCard";

export function NewBooksList() {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  function renderBooks() {
    return list.map((book: IBookCard) => {
      return (
        <BookCard
          key={book.isbn13}
          image={book.image}
          title={book.title}
          price={book.price}
          isbn={book.isbn13}
        />
      );
    });
  }

  return (
    <>
      <h3 className={styles.board__title}>NEW RELEASES BOOKS</h3>
      <div className={styles.board}>{renderBooks()}</div>
    </>
  );
}
