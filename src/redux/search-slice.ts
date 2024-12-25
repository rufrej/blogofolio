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
  async (query: any) => {
    // const state = getState() as RootState;
    // console.log(state);
    const response = await fetch(
      `https://api.itbook.store/1.0/search/${query}`
    );

    const data = response.json();
    return data;
  }
);

// https://api.nytimes.com/svc/books/v3/reviews.json?isbn=9781524763138&api-key=dJM8Ko23QB4CAg7RZX2kl0gl1tHcZZvP

// export const fetchSearchBookByISBN = createAsyncThunk(
//   "posts/fetchSearchBookByISBN",
//   async (isbn: string | undefined) => {
//     const response = await fetch(
//       `${baseURL}/reviews.json?isbn=${isbn}&${apiKey}`
//     );

//     const data = response.json();
//     return data;
//   }
// );
// export const fetchSearchBook = createAsyncThunk(
//   "posts/fetchSearchBook",
//   async (title: string | undefined) => {
//     const response = await fetch(
//       `https://api.itbook.store/1.0/search=${title}&${apiKey}`
//     );

//     const data = response.json();
//     return data;
//   }
// );

export const searchSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // fetchPosts
      // .addCase(fetchSearchBookByAuthor.pending, (state) => {
      //   state.isLoaded = true;
      //   state.error = null;
      // })
      // .addCase(fetchSearchBookByAuthor.fulfilled, (state, action) => {
      //   state.isLoaded = false;
      //   state.listByAuthor = action.payload.results;
      // })
      // .addCase(fetchSearchBookByAuthor.rejected, (state, action) => {
      //   state.isLoaded = false;
      //   // state.error = action.error.message;
      // })
      /////////
      //   .addCase(fetchSearchBookByISBN.pending, (state) => {
      //     state.isLoaded = true;
      //     state.error = null;
      //   })
      //   .addCase(fetchSearchBookByISBN.fulfilled, (state, action) => {
      //     state.isLoaded = false;
      //     console.log(action.payload.result);
      //     state.listByISBN = action.payload.results;
      //   })
      //   .addCase(fetchSearchBookByISBN.rejected, (state, action) => {
      //     state.isLoaded = false;
      //     // state.error = action.error.message;
      //   })
      //////
      .addCase(fetchSearchBooks.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchSearchBooks.fulfilled, (state, action) => {
        state.isLoaded = false;
        console.log(action.payload);
        state.list = action.payload.books;
        state.searchResultsCount = action.payload.total;
      })
      .addCase(fetchSearchBooks.rejected, (state, action) => {
        state.isLoaded = false;
        // state.error = action.error.message;
      });
  },
});

export const searchReduser = searchSlice.reducer;
