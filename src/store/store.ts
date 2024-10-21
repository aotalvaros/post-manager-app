import { configureStore } from '@reduxjs/toolkit';
import {createFormSlice} from './form/createFormSlice';

export const store = configureStore({
    reducer: {
        form: createFormSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch