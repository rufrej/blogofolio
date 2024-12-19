import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { fetchCategory } from "../redux/category-slice";
import { ICategory, IBook } from "../types/types";
import { NavLink } from "react-router-dom";
import styles from "../styles/categories.module.scss";
import { BookCard } from "../components/BookCard";

export function Category() {
  const { category } = useParams();
  const dispatch = useAppDispatch();
  const { item } = useAppSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategory(category));
  }, [category, dispatch]);

  function renderBooks() {
    return item?.books.map((book: IBook, index) => {
      return (
        <BookCard
          key={book.primary_isbn13}
          book_image={book.book_image}
          title={book.title}
          author={book.author}
          link={category}
          index={index}
          isbn={book.primary_isbn13}
        />
      );
    });
  }

  return (
    <>
      <h3 className={styles.category__board__title}>
        Category {item?.list_name}
      </h3>
      <div className={styles.category__board}>{renderBooks()}</div>
    </>
  );
}
