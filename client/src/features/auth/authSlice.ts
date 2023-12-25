import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { AuthState, User } from './types/types';
import * as api from './api';

// начальный state
const initialState: AuthState = { user: undefined, error: undefined };

export const registration = createAsyncThunk('auth/registration', (user: User) =>
  api.registrationFetch(user),
);
export const authorization = createAsyncThunk(
  'auth/authorization',
  (user: { email: string; password: string }) => api.authorizationFetch(user),
);

export const logOut = createAsyncThunk('auth/logout', () => api.logoutFetch());

export const checkUser = createAsyncThunk('auth/check', () => api.checkUserFetch());

const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(authorization.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(authorization.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = undefined;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(checkUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(checkUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
