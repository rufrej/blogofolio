import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { fetchCategory } from "../redux/category-slice";
import { ICategory, IBook } from "../types/types";
import { book } from "../utils/book";
import { makePriceOutOfTheIsbn } from "../utils/price";
import { addToBacket, removeFromTheBucket } from "../redux/backet-slice";
import { Button } from "../components/Button";
import toast from "react-hot-toast";
import { ButtonsGroup } from "../components/ButtonsGroup";

export function Book() {
  const { id, category } = useParams();
  const dispatch = useAppDispatch();
  const { item, isLoaded, error } = useAppSelector((state) => state.category);
  const { list } = useAppSelector((state) => state.backet);

  useEffect(() => {
    dispatch(fetchCategory(category));
  }, [category, dispatch]);

  // console.warn(item);
  // console.warn(Number(id));
  // console.warn(useParams());

  if (isLoaded) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!item) {
    return <div>No Book</div>;
  }

  const targetBook: IBook | undefined = item.books.find(
    (_, index) => index == Number(id)
  );

  function handleClickButtonBuy() {
    if (targetBook) {
      const bookCopy = structuredClone(targetBook); // создаём копию т.к. обьект не является расширяемым
      bookCopy.category = category;
      console.log(bookCopy);
      dispatch(addToBacket(bookCopy));
      toast.success("book added to backet");
    }
  }

  function handleClickButtonRemove() {
    dispatch(removeFromTheBucket(targetBook?.primary_isbn13));
    toast(`${targetBook?.title} \n\n  removed  from  backet`, {
      duration: 4000,
    });
  }

  function renderButtonsGroup() {
    return;
  }

  function renderBookPage() {
    if (!targetBook) return null;

    return (
      <article className="">
        <div>
          <h1>{targetBook.title}</h1>
          <div className="d-flex">
            <img src={targetBook.book_image} alt="image" />
            <div>
              <p>
                Author: <strong>{targetBook.author}</strong>
              </p>
              <p>
                Publisher: <strong>{targetBook.publisher}</strong>
              </p>
              <p>
                Price:{" "}
                <strong>
                  {makePriceOutOfTheIsbn(targetBook.primary_isbn13)} $
                </strong>
              </p>
              <p>
                Isbn13: <strong>{targetBook.primary_isbn13}</strong>
              </p>

              {/* <button type="button" onClick={handleClickButtonBuy}>
                Buy
              </button> */}

              <Button onClick={handleClickButtonBuy} color="green">
                add to backet
              </Button>
              <Button onClick={handleClickButtonRemove} color="green">
                -
              </Button>
              {/* <ButtonsGroup /> */}
            </div>
          </div>

          <div>
            <p>Description: {targetBook.description}</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <>
      <div>{renderBookPage()}</div>
    </>
  );
}
