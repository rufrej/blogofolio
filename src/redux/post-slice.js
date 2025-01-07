import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {requestPost} from '../servises/post';

const initialState = {
  post: {},
  isLoaded: false,
  error: null,
};

export const fetchPost = createAsyncThunk('posts/fetchPost', async (id, {rejectWithValue}) => {
  const data = await requestPost(id);

  if (data.hasError) {
    return rejectWithValue(data);
  }

  return data;
});

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchPost.pending, state => {
        state.isLoaded = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoaded = false;
        state.error = action.error.message;
      });
  },
});

export const postReduser = postSlice.reducer;
