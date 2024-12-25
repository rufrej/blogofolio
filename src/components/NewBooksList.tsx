import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { fetchNewBooks } from "../redux/books-slice";
import { ICategory, IBookCard } from "../types/types";
import { NavLink } from "react-router-dom";
import styles from "../styles/books.boards.module.scss";
import { BookCard } from "../components/BookCard";

export function NewBooksList() {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector((state) => state.books);

  console.log(list);

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
          // onClick={handleClickButtonRemove}
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
