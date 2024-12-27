import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { book } from "../utils/book";
import { IBook } from "../types/types";

interface IFavouritesState {
  list: IBook[];
}

const initialState: IFavouritesState = {
  list: book.getFavirites() || [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<IBook>) => {
      state.list.push(action.payload);
      let favourites = book.getFavirites();
      favourites.push(action.payload);
      book.setToFavirites(favourites);
    },

    removeFromTheFavourites: (state, action: PayloadAction<string>) => {
      const bookId = action.payload;
      const bookIndex = state.list.findIndex(
        (book: IBook) => book.isbn13 === bookId
      );
      state.list.splice(bookIndex, 1);
      let favourites = book.getFavirites();
      let target = favourites.indexOf(
        favourites.find((book: IBook) => book.isbn13 == bookId)
      );
      favourites.splice(target, 1);
      book.setToFavirites(favourites);
    },
  },
});
export const { addToFavourites, removeFromTheFavourites } =
  favouritesSlice.actions;
export const favouritesReduser = favouritesSlice.reducer;
