import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const usersApiHeaders = {
    'Content-Type': 'application/json',
  }
const baseUrl = 'https://events.johngaitho.info/api/v1'

const createRequest = (url, method='GET', body={}) => {
    let  req = {url, headers:usersApiHeaders, method:method}
    if (['POST', 'PUT'].indexOf(method) !== -1)
        req.body = body
    return req
}

export const userAPI = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl}),
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
