import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
    inputValue: null | number
}
const initialState: InitialStateType = { inputValue: null }

const inputValueSlice = createSlice({
    name: 'inputValueSlice',
    initialState,
    reducers: {
        setInputValue: (state, action: PayloadAction<null | number>) => {
            state.inputValue = action.payload
        },
        clearInputValue: (state) => {
            state.inputValue = null
        }
    },
    selectors: {
        selectInputValue: (state) => state.inputValue,
    },
})

export const { selectInputValue } = inputValueSlice.selectors
export const { setInputValue, clearInputValue } = inputValueSlice.actions
export const inputValueReducer = inputValueSlice.reducer