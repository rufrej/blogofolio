import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { baseURL } from "../config/bookApi";
import { categoriesEndPoint } from "../config/bookApi";
import { apiKey } from "../config/bookApi";

const initialState = {
  list: [],
  isLoaded: false,
  error: null,
};

export const fetchCategoriesList = createAsyncThunk(
  "posts/fetchCategoriesList",
  async () => {
    const response = await fetch(`${baseURL}${categoriesEndPoint}${apiKey}`);

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
      .addCase(fetchCategoriesList.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.isLoaded = false;
        console.warn(action.payload.results);
        state.list = action.payload.results;
      })
      .addCase(fetchCategoriesList.rejected, (state, action) => {
        state.isLoaded = false;
        // state.error = action.error.message;
      });
  },
});

export const categoriesReduser = categoriesSlice.reducer;
