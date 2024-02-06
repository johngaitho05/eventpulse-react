import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery, createRequest} from "../helpers/request.js";

export const eventAPI = createApi({
    reducerPath: 'eventsApi',
    baseQuery: baseQuery,
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
