import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        auth: AuthReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
