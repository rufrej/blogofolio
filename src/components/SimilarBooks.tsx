import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { fetchSearchBooks } from "../redux/search-slice";
import { buildSchemePagination } from "../utils/schemePagination";
import { IBookCard, ISearchBook } from "../types/types";
import { BookCard } from "./BookCard";
import styles from "../styles/books.boards.module.scss";

interface ISimilarBooksProps {
  subtitle: string;
}

export function SimilarBooks(props: ISimilarBooksProps) {
  const dispatch = useAppDispatch();
  const { currentPage, query } = useParams();
  const { list, searchResultsCount } = useAppSelector((state) => state.search);

  function normalizeQuery(item: string | undefined) {
    if (!item) return undefined;
    return item.replace(" ", "+");
  }

  console.log(list);
  useEffect(() => {
    dispatch(fetchSearchBooks(normalizeQuery(props.subtitle)));
  }, [dispatch, currentPage, query]);

  function renderBooks() {
    if (!list) return <div>could not find Similar books</div>;
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
      <div className={styles.similar__books__board}>{renderBooks()}</div>
    </>
  );
}
