import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { baseURL } from "../config/bookApi";
import { IBook } from "../types/types";

interface IBookState {
  book: IBook | null;
  isLoaded: boolean;
  error: null | string;
}

const initialState: IBookState = {
  book: null,
  isLoaded: false,
  error: null,
};

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (isbn?: string) => {
    const response = await fetch(`https://api.itbook.store/1.0/books/${isbn}`);

    const data = response.json();

    return data;
  }
);

export const bookSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // fetchPosts
      .addCase(fetchBook.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.book = action.payload;
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.isLoaded = false;
        // state.error = action.error.message;
      });
  },
});

export const bookReduser = bookSlice.reducer;
