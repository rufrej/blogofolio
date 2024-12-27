import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { book } from "../utils/book";
import { IBook } from "../types/types";

interface ICartState {
  list: IBook[];
  totalPrice: number;
}

const initialState: ICartState = {
  list: book.getCart() || [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IBook>) => {
      state.list.push(action.payload);
      let cart = book.getCart();
      cart.push(action.payload);
      book.setToCart(cart);
    },

    removeFromTheCart: (state, action: PayloadAction<string>) => {
      const bookId = action.payload;
      const bookIndex = state.list.findIndex(
        (book: IBook) => book.isbn13 === bookId
      );
      state.list.splice(bookIndex);
      let cart = book.getCart();
      let target = cart.findIndex((book: IBook) => book.isbn13 == bookId);
      cart.splice(target, 1);

      book.setToCart(cart);
    },

    calcTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
  },
});
export const { addToCart, removeFromTheCart, calcTotalPrice } =
  cartSlice.actions;
export const cartReduser = cartSlice.reducer;
