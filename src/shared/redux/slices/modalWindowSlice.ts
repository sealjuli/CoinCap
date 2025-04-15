import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CurrencyType } from '../../types/currencyTypes'

type InitialState = {
    showWindow: boolean,
    currency: null | CurrencyType
}

const initialState: InitialState = {
    showWindow: false,
    currency: null
}

const modalWindowSlice = createSlice({
    name: 'modalWindowSlice',
    initialState,
    reducers: {
        changeShowWindow: (state) => {
            state.showWindow = !state.showWindow
        },
        changeWindowCurrency: (state, action: PayloadAction<CurrencyType>) => {
            state.currency = action.payload
        },
    },
    selectors: {
        selectShowWindow: (state) => state.showWindow,
        selectWindowCurrency: (state) => state.currency,
    },
})

export const { selectShowWindow, selectWindowCurrency } = modalWindowSlice.selectors
export const { changeShowWindow, changeWindowCurrency } = modalWindowSlice.actions
export const modalWindowReducer = modalWindowSlice.reducer