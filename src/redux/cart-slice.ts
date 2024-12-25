import { createSlice } from "@reduxjs/toolkit";
import { book } from "../utils/book";
const initialState = {
  list: book.getCart() || [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action) => {
      state.list.push(action.payload);
      let cart = book.getCart();
      cart.push(action.payload);
      book.setToCart(cart);
    },

    removeFromTheCart: (state: any, action) => {
      const bookId = action.payload;
      const bookIndex = state.list.findIndex(
        (book: any) => book.primary_isbn13 === bookId
      );
      state.list.splice(bookIndex, 1);
      let cart = book.getCart();
      let target = cart.indexOf(
        cart.find((book: any) => book.primary_isbn13 == bookId)
      );
      cart.splice(target, 1);
      book.setToCart(cart);
    },

    calcTotalPrice: (state, action) => {
      console.log(action.payload);
      state.totalPrice = action.payload;
    },

    isInList: (state: any, action) => {
      const bookId = action.payload.primary_isbn13;
      const bookIndex = state.list.find(
        (book: any) => book.primary_isbn13 === bookId
      );
      console.log(state.list);
    },
  },
});
export const { addToCart, removeFromTheCart, isInList, calcTotalPrice } =
  cartSlice.actions;
export const cartReduser = cartSlice.reducer;
