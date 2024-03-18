import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  //   credentials: "same-origin",
  prepareHeaders: async (headers) => {
    const session = await getSession();
    console.log("🚀 ~ prepareHeaders: ~ session:", session);
    // const token = getState().auth.token;
    // if (token) {
    //   headers.set("Authorization", `Bearer ${token}`);
    // }
    headers.set("Accept", "application/json");
    // headers.set("Access-Control-Allow-Origin", "*");
    // headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  //   extractRehydrationInfo(action: any, { reducerPath }) {
  //     if (action.type === HYDRATE) {
  //       return action.payload[reducerPath];
  //     }
  //   },
  endpoints: (builder) => ({}),
});
