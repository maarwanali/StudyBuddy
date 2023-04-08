import { apiSlice } from "./apiSlice";

export const reqHandler = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: "api/auth/signin",
        method: "POST",
        body: credentials,
        // responseHandler: (response) => response.text(),
      }),
    }),

    register: build.mutation({
      query: (credentials) => ({
        url: "api/auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),

    logout: build.mutation({
      query: () => ({
        url: "api/auth/logout",
        method: "GET",
      }),
    }),

    refresh: build.mutation({
      query: () => ({
        url: "api/auth/refresh",
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = reqHandler;
