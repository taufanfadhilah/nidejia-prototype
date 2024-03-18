import { apiSlice } from "./base-query";

// Define a service using a base URL and expected endpoints
export const transactionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    checkAvailability: builder.mutation({
      query: (payload) => ({
        url: "/transaction/is-available",
        method: "POST",
        body: { ...payload },
      }),
    }),
    transaction: builder.mutation({
      query: (payload) => ({
        url: "/transaction",
        method: "POST",
        body: { ...payload },
      }),
    }),
    getTransactions: builder.query({
      query: (id) => ({
        url: "/transaction",
        method: "GET",
      }),
    }),
    getDetailTransaction: builder.query({
      query: (id) => ({
        url: `/transaction/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCheckAvailabilityMutation,
  useTransactionMutation,
  useGetTransactionsQuery,
  useGetDetailTransactionQuery,
} = transactionApi;
