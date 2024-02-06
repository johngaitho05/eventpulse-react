import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const ApiHeaders = {
    'Content-Type': 'application/json',
}
const ApiFormHeaders = {
    'Content-Type': 'multipart/form-data',
}
export const baseUrl = 'https://events.johngaitho.info/api/v1'

export const baseQuery = fetchBaseQuery({baseUrl})

export const createRequest = (url, method='GET', body={}, is_form=false) => {
    let  req = {url, headers: is_form ? ApiFormHeaders : ApiHeaders, method:method}
    if (['POST', 'PUT'].indexOf(method) !== -1)
        req.body = body
    return req
}
