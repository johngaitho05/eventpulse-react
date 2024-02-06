import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery, createRequest} from "../helpers/request.js";

export const userAPI = createApi({
    reducerPath: 'usersApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        login: builder.query({
            query: () => createRequest(`/login`)
        }),
        register: builder.mutation({
            query: () => createRequest('/users', 'POST')
        }),
        getUserById: builder.query({
            query: (userId) => createRequest(`/users/${userId}`)
        }),
    })
})

export const {
    useLoginQuery,
    useRegisterQuery,
    useGetUserByIdQuery

} = userAPI;
