import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, IUserCreate } from "../../types/users.type";
import { BASE_URL } from "../../constants/api.constants"


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['User'],
    endpoints: builder => ({
        getAllUsers: builder.query<IUser[], null>({
            query: () => ({
                url: '/users'
            })
        }),
        getUser: builder.query<IUser, string>({
            query: (id: string) => ({
                url: `users/${id}`
            })
        }),
        createUser: builder.mutation<IUser, IUserCreate>({
            query: (body) => ({
                url: 'users',
                method: 'POST',
                body: body
            }),
            invalidatesTags: () => 
                [{
                    type: 'User'
                }]
        }),
        changeUserData: builder.mutation<IUser, IUser>({
            query: (body) => ({
                url: `users/${body.id}`,
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: () => 
            [{
                type: 'User'
            }]
        })
    })
})

export const { useGetUserQuery, useChangeUserDataMutation, useGetAllUsersQuery, useCreateUserMutation } = userApi