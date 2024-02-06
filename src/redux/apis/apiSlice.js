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
    console.log("req", req)
    return req
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        authenticate: builder.mutation({
            query: (body) => createRequest(`/login`, 'POST', body)
        }),
        register: builder.query({
            query: (body) => createRequest('/users', 'POST', body)
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
        createEvent: builder.query({
            query: (body) => createRequest('/events', 'POST', body, true)
        }),
        getEventDetails: builder.query({
            query: (eventId) => createRequest(`/events/${eventId}`)
        }),
    })
})

export const {
    useAuthenticateMutation,
    useRegisterQuery,
    useGetUserByIdQuery,
    useGetCountriesQuery,
    useGetEventsQuery,
    useCreateEventQuery,
    useGetEventDetailsQuery
} = apiSlice;
