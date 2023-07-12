import { createSlice } from '@reduxjs/toolkit';
import { authAPI, User } from './authAPI';
import { toast } from 'react-hot-toast';

export type AuthState = {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  } as AuthState,

  extraReducers: builder => {
    builder.addMatcher(
      authAPI.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        toast.success(
          `${payload.user.name} successfully registered, please login...!`
        );
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      authAPI.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        toast.success(`${payload.user.name} successfully logged`);
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(authAPI.endpoints.logout.matchFulfilled, state => {
      state.token = null;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
    });
    builder.addMatcher(
      authAPI.endpoints.fetchCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
  },
  reducers: {},
});

export default authSlice.reducer;
