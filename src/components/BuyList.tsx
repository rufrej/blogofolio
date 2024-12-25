import { useState } from "react";
import { book } from "../utils/book";
import { IBook } from "../types/types";
import { BookCardCart } from "./BookCardCart";
import { calcTotalPrice } from "../redux/cart-slice";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { useEffect } from "react";
import { getTotalPrice } from "../utils/totalPrice";
export function BuyList() {
  const dispatch = useAppDispatch();

  const cart = book.getCart();
  const { list, totalPrice } = useAppSelector((state) => state.cart);

  // function getTotalPrice() {
  //   if (cart.length == 0) return null;

  //   let prices = cart.map((book: IBook) => {
  //     return book.count * Number(book.price.replace("$", ""));
  //   });
  //   let result = prices.reduce((acc: number, val: number) => {
  //     return acc + val;
  //   });
  //   return result;
  // }

  useEffect(() => {
    dispatch(calcTotalPrice(getTotalPrice()));
  }, [calcTotalPrice, getTotalPrice]);

  console.log(list);
  function renderBooks() {
    return cart?.map((book: IBook) => {
      return (
        <BookCardCart
          key={book.isbn13}
          image={book.image}
          title={book.title}
          author={book.authors}
          price={book.price}
          isbn={book.isbn13}
          count={book.count}

          // onClick={handleClickButtonRemove}
        />
      );
    });
  }

  return (
    <>
      <h2>Total price: ${totalPrice}</h2>

      <div>{renderBooks()}</div>
    </>
  );
}
