import styles from "../styles/book-card.module.scss";
import { NavLink } from "react-router-dom";
import { makePriceOutOfTheIsbn } from "../utils/price";

interface IBookCardProps {
  book_image?: string;
  title: string;
  author: string;
  link?: string;
  index: number;
  isbn: string;
}

export function BookCard(props: IBookCardProps) {
  return (
    <NavLink
      to={`/categories/${props.link}/${props.index}`}
      className={styles.book__card}
    >
      <img
        className={styles.book__card__image}
        src={props.book_image}
        alt="preview"
      />
      <h4 className={styles.book__card__title}>{props.title}</h4>
      <div>
        <p className={styles.book__card__author}>
          by <strong>{props.author}</strong>
        </p>
        <span>{makePriceOutOfTheIsbn(props.isbn)} $</span>
      </div>
    </NavLink>
  );
}
