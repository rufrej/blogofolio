import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import {requestPostsList, requestNewPost, requestMyPostsList} from '@/servises/posts';
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  list: [],
  isLoaded: false,
  error: null,
  limit: 11,
  searchResultsCount: null,
  pageCount: null,
  ordering: 'date',
};

export const fetchBooksList = createAsyncThunk('posts/fetchBooksList', async (params = {}, {getState}) => {
  const limit = getState().posts.limit;
  const offset = limit * (params.currentPage - 1);
  const data = await requestBooksList({
    limit,
    offset,
    ...params,
    ordering: getState().posts.ordering,
  });
  return data;
});
// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (params = {}, {getState}) => {
//   const limit = getState().posts.limit;
//   const offset = limit * (params.currentPage - 1);
//   const data = await requestPostsList({
//     limit,
//     offset,
//     ...params,
//     ordering: getState().posts.ordering,
//   });
//   return data;
// });

// export const fetchMyPosts = createAsyncThunk(
//   'posts/fetchMyPosts',
//   async (params = {}, {getState, rejectWithValue}) => {
//     const limit = getState().posts.limit;
//     const offset = limit * (params.currentPage - 1);
//     const data = await requestMyPostsList({limit, offset});

//     if (data.hasError) {
//       return rejectWithValue(data);
//     }

//     return data;
//   }
// );

// export const fetchCreatePosts = createAsyncThunk(
//   'posts/fetchCreatePosts',
//   async (formData, {rejectWithValue}) => {
//     const data = await requestNewPost(formData);

//     if (data.hasError) {
//       return rejectWithValue(data);
//     }
//     return data;
//   }
// );



export const booksSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setOrdering: (state, action) => {
      state.ordering = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      // fetchPosts
      .addCase(fetchPosts.pending, state => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.list = action.payload.results;
        state.pageCount = Math.ceil(action.payload.count / state.limit);
        state.searchResultsCount = action.payload.count;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoaded = false;
        state.error = action.error.message;
      })

      
  },
});

export const {setOrdering} = booksSlice.actions;
export const postsReduser = booksSlice.reducer;


// export const postsSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {
//     setOrdering: (state, action) => {
//       state.ordering = action.payload;
//     },
//   },

//   extraReducers: builder => {
//     builder
//       // fetchPosts
//       .addCase(fetchPosts.pending, state => {
//         state.isLoaded = true;
//         state.error = null;
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.isLoaded = false;
//         state.list = action.payload.results;
//         state.pageCount = Math.ceil(action.payload.count / state.limit);
//         state.searchResultsCount = action.payload.count;
//       })
//       .addCase(fetchPosts.rejected, (state, action) => {
//         state.isLoaded = false;
//         state.error = action.error.message;
//       })

//       // fetchCreatePosts
//       .addCase(fetchCreatePosts.pending, state => {
//         state.isLoaded = true;
//         state.error = null;
//       })
//       .addCase(fetchCreatePosts.fulfilled, (state, action) => {
//         state.isLoaded = false;
//       })
//       .addCase(fetchCreatePosts.rejected, (state, action) => {
//         state.isLoaded = false;
//         state.error = action.error.message;
//       })
//       // fetchMyPosts
//       .addCase(fetchMyPosts.pending, state => {
//         state.isLoaded = true;
//         state.error = null;
//       })
//       .addCase(fetchMyPosts.fulfilled, (state, action) => {
//         state.isLoaded = false;
//         state.error = null;
//         state.list = action.payload.results;
//         state.pageCount = Math.ceil(action.payload.count / state.limit);
//       })
//       .addCase(fetchMyPosts.rejected, (state, action) => {
//         state.isLoaded = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const {setOrdering} = postsSlice.actions;
// export const postsReduser = postsSlice.reducer;
