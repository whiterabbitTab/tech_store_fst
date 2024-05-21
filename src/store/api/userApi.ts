import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../types/users.type";
import { BASE_URL } from "../../constants/api.constants"


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: builder => ({
        getUser: builder.query<IUser, string>({
            query: (id: string) => ({
                url: `users/${id}`
            })
        })
    })
})