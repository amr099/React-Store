import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (skip) => `products?limit=12&skip=${skip}`,
    }),
    getCategories: builder.query({
      query: () => `products/categories`,
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    getCategory: builder.query({
      query: (category) => `products/category/${category}`,
    }),
    search: builder.query({
      query: (param) => `products/search?q=${param}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetCategoryQuery,
  useGetCategoriesQuery,
  useSearchQuery,
} = productsApi;
