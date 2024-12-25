import { configureStore } from "@reduxjs/toolkit";
import { authReduser } from "./auth-slice";
import { searchReduser } from "./search-slice";
import { booksReduser } from "./books-slice";
import { bookReduser } from "./book-slice";
import { cartReduser } from "./cart-slice";
import { favouritesReduser } from "./favourites-slice";

export const store = configureStore({
  reducer: {
    auth: authReduser,
    search: searchReduser,
    books: booksReduser,
    book: bookReduser,
    cart: cartReduser,
    favourites: favouritesReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
