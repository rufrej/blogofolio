import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

import { ISignIn, ISignUp, IJwt } from "../types/types";

import {
  requestSignUp,
  requestSignIn,
  requestAuthActivation,
  requestUserData,
} from "../servises/auth";

import { jwt } from "../utils/jwt";

interface IauthState {
  userEmail: string | null;
  isLoaded: boolean;
  error: string | undefined | null;
  isRegister: boolean;
  isActivated: boolean;
  currentUser: string | null;
  jwt: any;
}

const initialState: IauthState = {
  userEmail: null,
  isLoaded: false,
  error: null,
  isRegister: false,
  isActivated: false,
  currentUser: null,
  jwt: jwt.getFromLocalStorage() || null,
};

export const fetchSignUp = createAsyncThunk(
  "auth/fetchSignUp",
  async (body: ISignUp, { rejectWithValue }) => {
    const data = await requestSignUp(body);

    if (data.hasError) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const fetchAuthActivation = createAsyncThunk(
  "auth/fetchAuthActivation",
  async (body: ISignIn, { rejectWithValue }) => {
    const data = await requestAuthActivation(body);

    if (data.hasError) {
      return rejectWithValue(data);
    }

    return data;
  }
);

export const fetchSignIn = createAsyncThunk(
  "auth/fetchSignIn",
  async (body: ISignIn, { rejectWithValue }) => {
    const data = await requestSignIn(body);

    if (data.hasError) {
      return rejectWithValue(data);
    }
    jwt.setToLocalStorage(data);
    return data;
  }
);

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (token: IJwt, { rejectWithValue }) => {
    const data = await requestUserData(token);

    if (data.hasError) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      jwt.clearLocalStorage();
      state.jwt = null;
      state.currentUser = null;
      state.userEmail = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      //----- Sign Up ------
      .addCase(fetchSignUp.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchSignUp.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.userEmail = action.payload.email;
        state.isRegister = true;
      })
      .addCase(fetchSignUp.rejected, (state, action) => {
        state.isLoaded = false;
        state.error = action.error.message;
      })
      //----- Activation ------
      .addCase(fetchAuthActivation.pending, (state) => {
        state.isLoaded = true;
        state.isActivated = false;
        state.error = null;
      })
      .addCase(fetchAuthActivation.fulfilled, (state) => {
        state.isActivated = true;
        state.isLoaded = false;
      })
      .addCase(
        fetchAuthActivation.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoaded = false;
          state.isActivated = false;
          state.error = action.payload;
        }
      )
      // ----- Sign In ------
      .addCase(fetchSignIn.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchSignIn.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.jwt = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchSignIn.rejected, (state, action: PayloadAction<any>) => {
        state.isLoaded = false;
        state.error = action.payload.message;
      })
      // ----- Fetch User Data ------
      .addCase(fetchUserData.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoaded = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoaded = false;
        state.error = action.error.message;
      });
  },
});

export const { logOut } = authSlice.actions;

export const authReduser = authSlice.reducer;
