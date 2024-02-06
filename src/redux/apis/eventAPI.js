import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const eventsApiHeaders = {
    'Content-Type': 'application/json',
}
const eventsApiFormHeaders = {
    'Content-Type': 'multipart/form-data',
}
const baseUrl = 'https://events.johngaitho.info/api/v1'

const createRequest = (url, method='GET', body={}) => {
    let  req = {url, headers:eventsApiHeaders, method:method}
    if (['POST', 'PUT'].indexOf(method) !== -1)
        req.body = body
    return req
}

export const eventAPI = createApi({
    reducerPath: 'eventsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
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
    useGetEventsQuery,
    useCreateEventQuery,
    useGetEventDetailsQuery

} = eventAPI;
