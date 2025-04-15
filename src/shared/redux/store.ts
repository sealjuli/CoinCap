import { configureStore } from '@reduxjs/toolkit'
import { currenciesReducer } from './slices/currenciesSlice';
import { modalWindowReducer } from './slices/modalWindowSlice';
import { inputValueReducer } from './slices/inputValueSlice';
import { walletReducer } from './slices/walletSlice';

export const store = configureStore({
    reducer: {
        currenciesSlice: currenciesReducer,
        modalWindowSlice: modalWindowReducer,
        inputValueSlice: inputValueReducer,
        walletSlice: walletReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;