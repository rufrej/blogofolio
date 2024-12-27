import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBookCard } from "../types/types";

interface IfetchBooksAction {
  books: IBookCard[];
  error: string;
  page: string;
  total: string;
}
interface IbooksState {
  list: IBookCard[];
  isLoaded: boolean;
  error: null | string;
}

const initialState: IbooksState = {
  list: [],
  isLoaded: false,
  error: null,
};

export const fetchNewBooks = createAsyncThunk(
  "books/fetchNewBooks",
  async () => {
    const response = await fetch("https://api.itbook.store/1.0/new");

    const data = response.json();

    return data;
  }
);

export const booksSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // fetchPosts
      .addCase(fetchNewBooks.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(
        fetchNewBooks.fulfilled,
        (state, action: PayloadAction<IfetchBooksAction>) => {
          state.isLoaded = false;
          state.list = action.payload.books;
        }
      )
      .addCase(fetchNewBooks.rejected, (state) => {
        state.isLoaded = false;
        state.error = "fetch New Books Error";
      });
  },
});

export const booksReduser = booksSlice.reducer;
