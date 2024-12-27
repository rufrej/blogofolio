import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "../hooks/useStore";
import { removeFromTheCart, calcTotalPrice } from "../redux/cart-slice";
import { getTotalPrice } from "../utils/totalPrice";
import { book } from "../utils/book";
import { Button } from "./Button";
import styles from "../styles/book-card.module.scss";
import buttonStyles from "../styles/button.module.scss";
import { IBook, IBookCardCartProps } from "../types/types";
import removeSVG from "../assets/remove.svg";

export function BookCardCart(props: IBookCardCartProps) {
  const dispatch = useAppDispatch();

  const [count, setCount] = useState(props.count);

  function handleClickButtonRemove() {
    dispatch(removeFromTheCart(props.isbn));
    dispatch(calcTotalPrice(getTotalPrice()));
  }

  function handleClickIncrement() {
    let cart = book.getCart();
    const item = cart.findIndex((book: IBook) => book.isbn13 == props.isbn);
    cart[item].count = cart[item].count + 1;
    setCount(count + 1);
    book.setToCart(cart);
    dispatch(calcTotalPrice(getTotalPrice()));
  }
  function handleClickDecrement() {
    let cart = book.getCart();
    const item = cart.findIndex((book: IBook) => book.isbn13 == props.isbn);
    if (count > 1) {
      cart[item].count = cart[item].count - 1;
      setCount(count - 1);
      book.setToCart(cart);
      dispatch(calcTotalPrice(getTotalPrice()));
    }
  }

  return (
    <div className={styles.book__card__cart}>
      <NavLink
        className={styles.book__card__cart__link}
        to={`/books/${props.isbn}`}
      >
        <img
          className={styles.book__card__cart__image}
          src={props.image}
          alt="preview"
        />

        <div className={styles.book__card__cart__info}>
          <h2 className={styles.book__card__cart__title}>{props.title}</h2>
          <div>
            <p className={styles.book__card__cart__author}>
              by <strong>{props.author}</strong>
            </p>
            <p>
              price <strong>{props.price}</strong>
            </p>
          </div>
        </div>
      </NavLink>
      <div className={styles.book__card__cart__buttons__wrapper}>
        <Button
          color="transparent"
          type="button"
          onClick={handleClickButtonRemove}
        >
          <img src={removeSVG} alt="X" />
        </Button>
        <div className={buttonStyles.button_group}>
          <Button onClick={handleClickDecrement} color="transparent">
            -
          </Button>
          <span className={buttonStyles.button_group__counter}>{count}</span>
          <Button onClick={handleClickIncrement} color="transparent">
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
