import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../../hooks/hooks'
import { currenciesApi } from '../../api/currenciesApi'
import { CurrencyType } from '../../types/currencyTypes'

const fetchGetCurrencies = createAppAsyncThunk<CurrencyType[]>('videosSlice/fetchGetCurrencies', async (_, thunkAPI) => {
    try {
        const { data: response } = await currenciesApi.getAssets()
        return response.data
    } catch (e) {
        const error = e as { message: string }
        return thunkAPI.rejectWithValue(error.message)
    }
})

export type InitialStateType = {
    status: '' | 'loading' | 'succeeded' | 'failed';
    data: CurrencyType[],
    error: null | string;
}

const initialState: InitialStateType = { status: '', data: [], error: null }


const currenciesSlice = createSlice({
    name: 'currenciesSlice',
    initialState,
    reducers: {
        clearCurrenciesState: (state) => {
            state.data = [];
            state.error = null;
            state.status = '';
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetCurrencies.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchGetCurrencies.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchGetCurrencies.rejected, (state, action) => {
                state.status = 'failed'
                if (action.payload) {
                    state.error = action.payload
                }
            })
    },
    selectors: {
        selectCurrenciesStatus: (state) => state.status,
        selectIsSucceededStatus: (state) => state.status === 'succeeded',
        selectCurrenciesArray: (state) => state.data,
        selectCurrenciesError: (state) => state.error
    },
})

export { fetchGetCurrencies }
export const { clearCurrenciesState } = currenciesSlice.actions
export const currenciesReducer = currenciesSlice.reducer
export const {
    selectCurrenciesStatus,
    selectIsSucceededStatus,
    selectCurrenciesArray,
    selectCurrenciesError } = currenciesSlice.selectors