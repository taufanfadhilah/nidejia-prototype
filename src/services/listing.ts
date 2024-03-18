import { apiSlice } from "./base-query";

// Define a service using a base URL and expected endpoints
export const listingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllListing: builder.query({
      query: () => ({
        url: "/listing",
        method: "GET",
      }),
    }),
    getDetailListing: builder.query({
      query: (slug: string) => ({
        url: `/listing/${slug}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllListingQuery, useGetDetailListingQuery } = listingApi;
