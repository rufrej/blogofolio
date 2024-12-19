import { configureStore } from "@reduxjs/toolkit";
import { authReduser } from "./auth-slice";
import { categoriesReduser } from "./categories-slice";
import { categoryReduser } from "./category-slice";
import { searchReduser } from "./search-slice";
import { booksReduser } from "./books-slice";
import { backetReduser } from "./backet-slice";

export const store = configureStore({
  reducer: {
    auth: authReduser,
    categories: categoriesReduser,
    category: categoryReduser,
    search: searchReduser,
    books: booksReduser,
    backet: backetReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
