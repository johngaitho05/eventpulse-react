import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {userAPI} from "./apis/userAPI";
import {eventAPI} from './apis/eventAPI'

const store =  configureStore({
    reducer: {
        [userAPI.reducerPath]: userAPI.reducer,
        [eventAPI.reducerPath]: eventAPI.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(userAPI.middleware)
        .concat(eventAPI.middleware)
})

setupListeners(store.dispatch)

export default store
