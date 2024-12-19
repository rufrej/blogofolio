import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../hooks/useStore";
import { removeFromTheBucket } from "../redux/backet-slice";
import { makePriceOutOfTheIsbn } from "../utils/price";
import { Button } from "./Button";
import styles from "../styles/book-card.module.scss";

interface IBookCardProps {
  book_image?: string;
  title: string;
  author: string;
  link?: string;
  index: number;
  isbn: string;
}

export function BookCardBacket(props: IBookCardProps) {
  const dispatch = useAppDispatch();

  function handleClickButtonRemove() {
    dispatch(removeFromTheBucket(props.isbn));
  }

  return (
    <div className={styles.book__card__backed}>
      <NavLink
        className={styles.book__card__backed__link}
        to={`/categories/${props.link}/${props.index}`}
      >
        <img
          className={styles.book__card__backed__image}
          src={props.book_image}
          alt="preview"
        />

        <div className={styles.book__card__backed__info}>
          <h4 className={styles.book__card__backed__title}>{props.title}</h4>
          <div>
            <p className={styles.book__card__backed__author}>
              by <strong>{props.author}</strong>
            </p>
            <p>
              price <strong>{makePriceOutOfTheIsbn(props.isbn)} $</strong>
            </p>
          </div>
        </div>
      </NavLink>
      <div>
        <Button
          color="red"
          className={styles.book__card__backed__button__delete}
          type="button"
          onClick={handleClickButtonRemove}
        >
          убрать из корзины
        </Button>
      </div>
    </div>
  );
}
