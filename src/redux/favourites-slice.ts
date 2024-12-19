import { createSlice } from "@reduxjs/toolkit";
import { book } from "../utils/book";
const initialState = {
  list: book.getBacket() || [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state: any, action) => {
      state.list.push(action.payload);
      let backet = book.getBacket();
      backet.push(action.payload);
      book.setToBacket(backet);
    },

    removeFromTheFavourites: (state: any, action) => {
      const bookId = action.payload;
      const bookIndex = state.list.findIndex(
        (book: any) => book.primary_isbn13 === bookId
      );
      state.list.splice(bookIndex, 1);
      let backet = book.getBacket();
      let target = backet.indexOf(
        backet.find((book: any) => book.primary_isbn13 == bookId)
      );
      backet.splice(target, 1);
      book.setToBacket(backet);
    },
  },
});
export const { addToFavourites, removeFromTheFavourites } =
  favouritesSlice.actions;
export const backetReduser = favouritesSlice.reducer;
