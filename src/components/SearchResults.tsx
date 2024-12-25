import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { fetchSearchBooks } from "../redux/search-slice";
import { buildSchemePagination } from "../utils/schemePagination";
import { IBookCard, ISearchBook } from "../types/types";
import { BookCard } from "./BookCard";
import styles from "../styles/books.boards.module.scss";

export function SearchResults() {
  const dispatch = useAppDispatch();
  const { currentPage, query } = useParams();
  const { list, searchResultsCount } = useAppSelector((state) => state.search);

  console.log(currentPage);
  function normalizeQuery(item: string | undefined) {
    if (!item) return undefined;
    return item.replace(" ", "+");
  }

  useEffect(() => {
    dispatch(fetchSearchBooks(normalizeQuery(query)));
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
          // onClick={handleClickButtonRemove}
        />
      );
    });
  }
  // function renderPagination() {
  //   if (!searchResultsCount) return null;
  //   if (searchResultsCount <= 10) return null;
  //   return (
  //     <nav>
  //       <ul className="pagination">{renderPaginationItems()}</ul>
  //     </nav>
  //   );
  // }

  // const renderPaginationItems = () => {
  //   const pageCount = searchResultsCount / list.length;
  //   const shceme = buildSchemePagination(currentPage, pageCount);
  //   return shceme.map((item, index) => {
  //     return (
  //       <li className="page-item" key={index}>
  //         {item == "..." ? (
  //           <span className="page-link">...</span>
  //         ) : (
  //           <NavLink className="page-link" to={`/search/${query}/${index}`}>
  //             {item}
  //           </NavLink>
  //         )}
  //       </li>
  //     );
  //   });
  // };
  // function renderSearchResultsByAuthor() {
  //     return (
  //      listByAuthor?.map((book:ISearchBook) => {

  //         return (<article key={book.summary}>
  //            <h5>{book.book_title}</h5>
  //          </article>)
  //        })
  //     )
  //  }
  // function renderSearchResultsByTitle() {
  //     return (
  //      list?.map((book:IBook) => {

  //         return (<article key={book.summary}>
  //            <h5>{book.book_title}</h5>
  //          </article>)
  //        })
  //     )
  //  }
  // function renderSearchResultsByISBN() {
  //     return (
  //      listByISBN?.map((book:ISearchBook) => {

  //         return (<article key={book.summary}>
  //            <h5>{book.book_title}</h5>
  //          </article>)
  //        })
  //     )
  //  }

  return (
    <>
      <div>
        <h1 className="mb-5">
          Search results "{query}" Total : {searchResultsCount}
        </h1>
        <div className={styles.board}>{renderBooks()}</div>

        <div className="d-flex justify-content-center">
          {/* {renderPagination()} */}
        </div>
      </div>
    </>
  );
}
