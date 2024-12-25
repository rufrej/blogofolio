import { createSlice } from "@reduxjs/toolkit";
import { book } from "../utils/book";
const initialState = {
  list: book.getFavirites() || [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state: any, action) => {
      state.list.push(action.payload);
      let favirites = book.getFavirites();
      favirites.push(action.payload);
      book.setToFavirites(favirites);
    },

    removeFromTheFavourites: (state: any, action) => {
      const bookId = action.payload;
      const bookIndex = state.list.findIndex(
        (book: any) => book.primary_isbn13 === bookId
      );
      state.list.splice(bookIndex, 1);
      let favirites = book.getFavirites();
      let target = favirites.indexOf(
        favirites.find((book: any) => book.primary_isbn13 == bookId)
      );
      favirites.splice(target, 1);
      book.setToFavirites(favirites);
    },
  },
});
export const { addToFavourites, removeFromTheFavourites } =
  favouritesSlice.actions;
export const favouritesReduser = favouritesSlice.reducer;
