import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchBook } from "../redux/book-slice";
import { findBookInList } from "../utils/findBook";
import { addToCart, removeFromTheCart } from "../redux/cart-slice";
import {
  addToFavourites,
  removeFromTheFavourites,
} from "../redux/favourites-slice";
import { Button } from "../components/Button";
import { Accordion } from "../components/Accordion";
import heart from "../assets/header-icons/heart.svg";
import { SimilarBooks } from "../components/SimilarBooks";
import { ButtonGoBack } from "../components/ButtonGoBack";
import { findSubtitle } from "../utils/findSubtitle";
import styles from "../styles/book-page.module.scss";

export function Book() {
  const { isbn } = useParams();
  const dispatch = useAppDispatch();
  const { book, isLoaded, error } = useAppSelector((state) => state.book);
  const { list } = useAppSelector((state) => state.cart);
  const favorites = useAppSelector((state) => state.favourites.list);

  function sectionAuthors() {
    const arr = book?.authors.split(",");
    return arr?.map((autor, index) => {
      return (
        <NavLink key={index} to={`/search/${autor}/1`}>
          <strong>{autor}</strong>
        </NavLink>
      );
    });
  }

  useEffect(() => {
    dispatch(fetchBook(isbn));
  }, [dispatch, isbn]);

  function handleClickButtonAddToCart() {
    if (book) {
      const bookCopy = structuredClone(book);
      bookCopy.count = 1;
      dispatch(addToCart(bookCopy));
      toast.success("book added to cart");
    }
  }

  function handleClickButtonRemoveToCart() {
    if (!book) return;
    dispatch(removeFromTheCart(book.isbn13));
    toast(`${book?.title} \n\n  removed  from  backet ❌`, {
      duration: 4000,
    });
  }

  function handleClickButtonAddToFavourites() {
    if (book) {
      dispatch(addToFavourites(book));
      toast("book added to favourites ❤️");
    }
  }

  function handleClickButtonRemoveToFavourites() {
    if (!book) return;
    dispatch(removeFromTheFavourites(book.isbn13));
    toast(`${book?.title} \n\n  removed  from  favourites 💔`, {
      duration: 4000,
    });
  }

  function renderAccordion() {
    if (!book) return null;
    return (
      <div>
        <div>
          <Accordion title="More details">
            <div className={styles.book__page__info__item}>
              <p>pages</p>
              <strong>{book.pages}</strong>
            </div>

            <div className={styles.book__page__info__item}>
              <p>year:</p>
              <strong>{book.year}</strong>
            </div>
          </Accordion>
        </div>
      </div>
    );
  }

  function renderButtonsCart() {
    switch (findBookInList(list, book)) {
      case true:
        return (
          <Button onClick={handleClickButtonRemoveToCart} color="dark">
            REMOVE FROM CART
          </Button>
        );
      case false:
        return (
          <Button onClick={handleClickButtonAddToCart} color="dark">
            ADD TO CART
          </Button>
        );
    }
  }

  function renderButtonsFavourires() {
    switch (findBookInList(favorites, book)) {
      case true:
        return (
          <Button
            onClick={handleClickButtonRemoveToFavourites}
            color="orange-full"
          >
            <img src={heart} alt="add to favourites" />
            REMOVE
          </Button>
        );
      case false:
        return (
          <Button onClick={handleClickButtonAddToFavourites} color="orange">
            <img src={heart} alt="add to favourites" />
            ADD
          </Button>
        );
    }
  }

  function renderBookPage() {
    if (!book) return null;

    return (
      <article className={styles.book__page}>
        <div>
          <h1 className={styles.book__page__title}>{book.title}</h1>
          <div className={styles.book__page__container}>
            <img
              className={styles.book__page__image}
              src={book.image}
              alt="image"
            />

            <div className={styles.book__page__info}>
              <h2>{book.price}</h2>
              <div className={styles.book__page__info__item}>
                <p>Authors</p>
                <div>{sectionAuthors()}</div>
              </div>

              <div className={styles.book__page__info__item}>
                <p>Publisher</p>
                <strong>{book.publisher}</strong>
              </div>
              <div className={styles.book__page__info__item}>
                <p>Language</p>
                <strong>{book.language}</strong>
              </div>

              <div className={styles.book__page__info__item}>
                <p>Rating </p>
                <strong>{book.rating}</strong>
              </div>

              {renderAccordion()}
              <div className={styles.book__page__buttons__wrapper}>
                {renderButtonsCart()}
                {renderButtonsFavourires()}
              </div>
            </div>
          </div>

          <div>
            <p>
              <strong>Description</strong> <br /> {book.desc}
            </p>
            <p>
              Isbn13: <strong>{book.isbn13}</strong>
            </p>
            <p>
              subtitle: <strong>{book.subtitle}</strong>
            </p>
          </div>
        </div>
      </article>
    );
  }

  if (isLoaded) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!book) {
    return <div>No Book</div>;
  }

  return (
    <>
      <div>
        <ButtonGoBack />
        {renderBookPage()}
      </div>
      <div>
        <NavLink to={`/search/${findSubtitle(book)}/1`}>
          <h2 className={styles.book__page__similar__books__title}>
            Similar Books{" "}
          </h2>
        </NavLink>
      </div>
      <SimilarBooks isbn={book.isbn13} subtitle={findSubtitle(book)} />
    </>
  );
}
