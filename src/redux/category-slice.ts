import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { baseURL } from "../config/bookApi";
import { categoriesEndPoint } from "../config/bookApi";
import { apiKey } from "../config/bookApi";
import { ICategory } from "../types/types";

interface ICategoryState {
  item: ICategory | null;
  isLoaded: boolean;
  error: null | string;
}

const initialState: ICategoryState = {
  item: null,
  isLoaded: false,
  error: null,
};

export const fetchCategory = createAsyncThunk(
  "posts/fetchCategory",
  async (category: string | undefined) => {
    const response = await fetch(
      `${baseURL}/lists/current/${category}.json?${apiKey}`
    );

    const data = response.json();
    return data;
  }
);

export const categoriesSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // fetchPosts
      .addCase(fetchCategory.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.item = action.payload.results;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.isLoaded = false;
        // state.error = action.error.message;
      });
  },
});

export const categoryReduser = categoriesSlice.reducer;
