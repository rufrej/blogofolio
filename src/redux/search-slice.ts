import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IBookCard } from "../types/types";

interface IfetchSearchBooksAction {
  books: IBookCard[];
  error: string;
  page: string;
  total: string;
}

type parameters = {
  query: string | undefined;
  page: string | undefined;
};

interface ISearchState {
  list: IBookCard[];
  isLoaded: boolean;
  error: null | string;
  searchResultsCount: null | number;
}

const initialState: ISearchState = {
  list: [],
  isLoaded: false,
  error: null,
  searchResultsCount: null,
};

export const fetchSearchBooks = createAsyncThunk(
  "books/fetchSearchBooks",
  async (params: parameters) => {
    if (!params) return null;
    const parameters = params;

    const response = await fetch(
      `https://api.itbook.store/1.0/search/${parameters.query}/${parameters.page}`
    );

    const data = response.json();
    return data;
  }
);

export const searchSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchSearchBooks.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(
        fetchSearchBooks.fulfilled,
        (state, action: PayloadAction<IfetchSearchBooksAction>) => {
          state.isLoaded = false;
          state.list = action.payload.books;
          state.searchResultsCount = +action.payload.total;
        }
      )
      .addCase(fetchSearchBooks.rejected, (state) => {
        state.isLoaded = false;
        state.error = "Search Error";
      });
  },
});

export const searchReduser = searchSlice.reducer;
