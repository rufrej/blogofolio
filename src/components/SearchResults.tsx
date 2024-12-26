import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { fetchSearchBooks } from "../redux/search-slice";
import { buildSchemePagination } from "../utils/schemePagination";
import { IBookCard } from "../types/types";
import { BookCard } from "./BookCard";
import styles from "../styles/books.boards.module.scss";

export function SearchResults() {
  const dispatch = useAppDispatch();
  const { currentPage, query } = useParams();
  const { list, searchResultsCount } = useAppSelector((state) => state.search);

  function normalizeQuery(item: string | undefined) {
    if (!item) return undefined;
    return item.replace(" ", "+");
  }

  useEffect(() => {
    if (!query) return;
    dispatch(
      fetchSearchBooks({ query: normalizeQuery(query), page: currentPage })
    );
  }, [dispatch, currentPage, query]);

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
  function renderPagination() {
    if (!searchResultsCount) return null;
    if (searchResultsCount <= 10) return null;
    return (
      <nav>
        <ul className="pagination">{renderPaginationItems()}</ul>
      </nav>
    );
  }

  const renderPaginationItems = () => {
    if (!searchResultsCount || !currentPage) return null;
    const pageCount = searchResultsCount / list.length;

    const shceme = buildSchemePagination(currentPage, Math.round(pageCount));

    return shceme.map((item, index) => {
      return (
        <li className="page-item" key={index}>
          {item == "..." ? (
            <span className="page-link">...</span>
          ) : (
            <NavLink className="page-link" to={`/search/${query}/${item}`}>
              {item}
            </NavLink>
          )}
        </li>
      );
    });
  };

  return (
    <>
      <div>
        <h1 className="mb-5">
          " {query} "
          <br /> Total : {searchResultsCount}
        </h1>
        <div className={styles.board}>{renderBooks()}</div>

        <div className="d-flex justify-content-center">
          {renderPagination()}
        </div>
      </div>
    </>
  );
}
