import { configureStore } from '@reduxjs/toolkit';
import createForm from './createFormSlice';

export const store = configureStore({
    reducer: {
        inputForm: createForm,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch