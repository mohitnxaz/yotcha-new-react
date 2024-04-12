import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  tokens: {
    access_token?: string;
    refresh_token?: string;
    role?: string;
  };
  user: {
    id?: string;
    name?: string;
    email?: string;
  };
  loading: boolean;
  otp: string;
  error: string | null;
  isLoggedIn: boolean;
  email: string;
}
const initialState: AuthState = {
  tokens: {},
  user: {},
  loading: false,
  error: null,
  isLoggedIn: false,
  email: "",
  otp: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTokens(
      state: AuthState,
      action: PayloadAction<{
        access_token?: string;
        refresh_token?: string;
        role?: string;
      }>
    ) {
      state.tokens = {
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        role: action.payload.role,
      };
      state.isLoggedIn = true;
    },

    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setOtpforForgetPassword(state, action: PayloadAction<string>) {
      state.otp = action.payload;
    },
    setUser(
      state: AuthState,
      action: PayloadAction<{ id: string; name: string; email: string }>
    ) {
      state.user = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };
    },
    setAuthLoading(state: AuthState, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setAuthError(state: AuthState, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setLogout(state: AuthState) {
      state.tokens = {};
      state.user = {};
      state.loading = false;
      state.error = null;
      state.isLoggedIn = false;
    },
  },
});

export const {
  setAuthTokens,
  setEmail,
  setUser,
  setAuthError,
  setAuthLoading,
  setLogout,
  setOtpforForgetPassword,
} = authSlice.actions;

export const selectAuthTokens = (state: AuthState) => state.tokens;
export const selectEmail = (state: AuthState) => state.email;
export const selectUser = (state: AuthState) => state.user;
export const selectAuthError = (state: AuthState) => state.error;
export const selectAuthLoading = (state: AuthState) => state.loading;
export default authSlice.reducer;
