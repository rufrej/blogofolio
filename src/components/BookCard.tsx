import styles from "../styles/book-card.module.scss";
import { NavLink } from "react-router-dom";
import { IBookCardProps } from "../types/types";

export function BookCard(props: IBookCardProps) {
  return (
    <NavLink to={`/books/${props.isbn}`} className={styles.book__card}>
      <img
        className={styles.book__card__image}
        src={props.image}
        alt="preview"
      />
      <h4 className={styles.book__card__title}>{props.title}</h4>
      <div></div>
      <span className={styles.book__card__price}>{props.price} $</span>
    </NavLink>
  );
}
