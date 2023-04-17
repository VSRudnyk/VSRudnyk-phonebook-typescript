import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';

export interface User {
  name: string | null;
  email: string | null;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  name?: string;
  password: string;
  email: string;
}
export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchCurrentUser: builder.query({
      query: () => 'users/current',
    }),
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'users/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: (credentials) => ({
        url: 'users/logout',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useFetchCurrentUserQuery,
} = authAPI;
