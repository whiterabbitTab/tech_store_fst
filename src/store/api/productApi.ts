import { BASE_URL } from "../../constants/api.constants"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../types/products.type";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: builder => ({
    getProducts: builder.query<IProduct[], {start: number, end: number} | null>({
      query: (par) => {
        if (par === null) {
          return {
            url: '/products'
          }
        } else {
          const { start, end } = par
          return {
            url: '/products',
            params: {
              _start: start,
              _limit: end
            }
          }
        }
      }
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id: string) => ({
        url: `/products/${id}` // реализовать через params
      })
    })
  })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi