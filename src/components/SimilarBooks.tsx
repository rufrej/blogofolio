import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { fetchSearchBooks } from "../redux/search-slice";
import { IBookCard, ISimilarBooksProps } from "../types/types";
import { BookCard } from "./BookCard";
import styles from "../styles/books.boards.module.scss";
import { Accordion } from "./Accordion";
import { normalizeQuery } from "../utils/normalizeQuery";

export function SimilarBooks(props: ISimilarBooksProps) {
  const dispatch = useAppDispatch();
  const { isbn: query } = useParams();
  const { list } = useAppSelector((state) => state.search);
  useEffect(() => {
    dispatch(
      fetchSearchBooks({
        query: normalizeQuery(props.subtitle),
        page: "1",
      })
    );
  }, [dispatch, query]);

  function renderSimilarBooks(firstRow: boolean, others: boolean) {
    if (!list) return <div>could not find Similar books</div>;

    const filteredArray = list.filter(
      (book: IBookCard) => book.isbn13 !== query
    );
    const firstsBooks = filteredArray.filter((_, index) => index < 3);

    const othersBooks = filteredArray.filter((_, index) => index > 3);

    function renderBooks(arr: IBookCard[]) {
      return arr.map((book: IBookCard) => {
        return (
          <div>
            <BookCard
              key={crypto.randomUUID()}
              image={book.image}
              title={book.title}
              price={book.price}
              isbn={book.isbn13}
            />
          </div>
        );
      });
    }

    if (firstRow) return renderBooks(firstsBooks);
    if (others) return renderBooks(othersBooks);
  }

  return (
    <>
      <div>
        <div className={styles.similar__books__board}>
          {renderSimilarBooks(true, false)}
        </div>
        <Accordion title="More">
          <div className={styles.similar__books__board}>
            {renderSimilarBooks(false, true)}
          </div>
        </Accordion>
      </div>
    </>
  );
}
