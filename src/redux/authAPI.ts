import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';

export interface User {
  _id: string | null;
  name: string | null;
  email: string | null;
  subscription: string | null;
  avatarURL: string | undefined;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  password: string;
  email: string;
}

export interface RegisterRequest {
  name: string;
  password: string;
  email: string;
}

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nodejs-homework-rest-api-rho.vercel.app/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    fetchCurrentUser: builder.query({
      query: () => 'users/current',
    }),
    login: builder.mutation<UserResponse, LoginRequest>({
      query: credentials => ({
        url: 'users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<UserResponse, RegisterRequest>({
      query: credentials => ({
        url: 'users/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => 'users/logout',
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useFetchCurrentUserQuery,
} = authAPI;
