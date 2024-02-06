import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const ApiHeaders = {
    'Content-Type': 'application/json',
}
const ApiFormHeaders = {
    'Content-Type': 'multipart/form-data',
}
const baseUrl = 'https://events.johngaitho.info/api/v1'

export const createRequest = (url, method='GET', body={}, is_form=false) => {
    let  req = {url, headers: is_form ? ApiFormHeaders : ApiHeaders, method:method}
    if (['POST', 'PUT'].indexOf(method) !== -1)
        req.body = body
    return req
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => createRequest(`/login`, 'POST', body)
        }),
        register: builder.mutation({
            query: (body) => createRequest('/users', 'POST', body, true)
        }),
        getUserById: builder.query({
            query: (userId) => createRequest(`/users/${userId}`)
        }),
        getCountries: builder.query({
            query: () => createRequest(`/countries`)
        }),
        getEvents: builder.query({
            query: () => createRequest(`/events`)
        }),
        createEvent: builder.mutation({
            query: () => createRequest('/events', 'POST')
        }),
        getEventDetails: builder.query({
            query: (eventId) => createRequest(`/events/${eventId}`)
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useGetUserByIdQuery,
    useGetCountriesQuery,
    useGetEventsQuery,
    useCreateEventMutation,
    useGetEventDetailsQuery
} = apiSlice;
