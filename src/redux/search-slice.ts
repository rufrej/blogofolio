import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { baseURL } from "../config/bookApi";
import { ICategory } from "../types/types";
// import { requestBooksList } from "../servises/books";

// interface ISearchState {
//   list: ICategory | null;
//   searchResultsCount: null | number,
//   isLoaded: boolean;
//   error: null | string;
// }

type parameters = {
  query: string | undefined;
  page: string | undefined;
};

const initialState = {
  list: [],
  isLoaded: false,
  error: null,
  searchResultsCount: null,

  pageCount: null,
  ordering: "date",
};

// export const fetchSearchBooks = createAsyncThunk(
//   "books/fetchSearchBooks",
//   async (query, currentPage) => {
//     const response = await requestBooksList(query, currentPage);

//     const data = response.json();
//     return data;
//   }
// );
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
      .addCase(fetchSearchBooks.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.list = action.payload.books;
        state.searchResultsCount = action.payload.total;
      })
      .addCase(fetchSearchBooks.rejected, (state, action) => {
        state.isLoaded = false;
        // state.error = action.error.message?;
      });
  },
});

export const searchReduser = searchSlice.reducer;
