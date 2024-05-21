import { BASE_URL } from "../../constants/api.constants"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../types/products.type";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: builder => ({
    getProducts: builder.query<IProduct[], null>({
      query: () => ({
        url: '/products'
      })
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id: string) => ({
        url: `/products/${id}` // реализовать через params
      })
    })
  })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi