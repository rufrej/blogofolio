import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ISignIn, ISignUp, IJwt, IUserData } from "../types/types";

import {
  requestSignUp,
  requestSignIn,
  requestAuthActivation,
  requestUserData,
} from "../servises/auth";

import { jwt } from "../utils/jwt";

type currentUser = {
  username: string;
  id: number;
  email: string;
};

interface IauthState {
  userEmail: string | null;
  isLoaded: boolean;
  error: string | undefined | null;
  isRegister: boolean;
  isActivated: boolean;
  currentUser: currentUser | null;
  jwt: IJwt | null;
}

interface IfetchSignUpAction {
  id: number;
  username: string;
  email: string;
  course_group: number;
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
      .addCase(
        fetchSignUp.fulfilled,
        (state, action: PayloadAction<IfetchSignUpAction>) => {
          state.isLoaded = false;
          state.userEmail = action.payload.email;
          state.isRegister = true;
        }
      )
      .addCase(fetchSignUp.rejected, (state) => {
        state.isLoaded = false;
        state.error = "Sign Up Error";
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
      .addCase(fetchAuthActivation.rejected, (state) => {
        state.isLoaded = false;
        state.isActivated = false;
        state.error = "Activation error";
      })
      // ----- Sign In ------
      .addCase(fetchSignIn.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchSignIn.fulfilled, (state, action: PayloadAction<IJwt>) => {
        state.isLoaded = false;
        state.jwt = action.payload;
      })
      .addCase(fetchSignIn.rejected, (state) => {
        state.isLoaded = false;
        state.error = "Sing in Error";
      })
      // ----- Fetch User Data ------
      .addCase(fetchUserData.pending, (state) => {
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(
        fetchUserData.fulfilled,
        (state, action: PayloadAction<IUserData>) => {
          state.isLoaded = false;
          console.warn(action.payload);
          state.currentUser = action.payload;
        }
      )
      .addCase(fetchUserData.rejected, (state) => {
        state.isLoaded = false;
        state.error = "Data Error";
      });
  },
});

export const { logOut } = authSlice.actions;

export const authReduser = authSlice.reducer;
