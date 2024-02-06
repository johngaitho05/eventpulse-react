import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery, createRequest} from "../helpers/request.js";

export const countryAPI = createApi({
    reducerPath: 'countryApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => createRequest(`/countries`)
        }),
    })
})

export const {
    useGetCountriesQuery,

} = countryAPI;
