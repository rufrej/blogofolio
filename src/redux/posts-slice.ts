import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestPostsList,
  requestNewPost,
  requestMyPostsList,
} from "../servises/posts";
import { RootState } from "./store";

interface IPostState {
  list: [];
  isLoaded: boolean;
  error: null | string | undefined;
  limit: 11;
  searchResultsCount: null;
  count: number | null;
  ordering: "date";
}
const initialState: IPostState = {
  list: [],
  isLoaded: false,
  error: null,
  limit: 11,
  searchResultsCount: null,
  count: null,
  ordering: "date",
};

type params = {
  currentPage: string;
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (params: params, { getState }) => {
    const state = getState() as RootState;
    const limit = state.posts.limit;
    const offset = limit * (+params.currentPage - 1);
    const data = await requestPostsList({
      limit,
      offset,
      ...params,
      ordering: state.posts.ordering,
    });
    return data;
  }
);

export const fetchMyPosts = createAsyncThunk(
  "posts/fetchMyPosts",
  async (params: params, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const limit = state.posts.limit;
    const offset = limit * (+params.currentPage - 1);
    const data = await requestMyPostsList({
      limit,
      offset,
      ...params,
      ordering: state.posts.ordering,
    });

    if (data.hasError) {
      return rejectWithValue(data);
    }

    return data;
  }
);

export const fetchCreatePosts = createAsyncThunk(
  "posts/fetchCreatePosts",
  async (formData, { rejectWithValue }) => {
    const data = await requestNewPost(formData);

    if (data.hasError) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setOrdering: (state, action) => {
      state.ordering = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // fetchPosts
      .addCase(fetchPosts.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.list = action.payload.results;
        state.count = Math.ceil(action.payload.count / state.limit);
        state.searchResultsCount = action.payload.count;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoaded = false;
        state.error = action.error.message;
      })

      // fetchCreatePosts
      .addCase(fetchCreatePosts.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchCreatePosts.fulfilled, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchCreatePosts.rejected, (state, action) => {
        state.isLoaded = false;
        state.error = action.error.message;
      })
      // fetchMyPosts
      .addCase(fetchMyPosts.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchMyPosts.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.error = null;
        state.list = action.payload.results;
        state.count = Math.ceil(action.payload.count / state.limit);
      })
      .addCase(fetchMyPosts.rejected, (state, action) => {
        state.isLoaded = false;
        state.error = action.error.message;
      });
  },
});

export const { setOrdering } = postsSlice.actions;
export const postsReduser = postsSlice.reducer;
