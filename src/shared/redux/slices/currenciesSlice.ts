import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../../hooks/hooks'
import { currenciesApi } from '../../api/currenciesApi'
import { CurrencyType, CoincapHistoryItem } from '../../types/currencyTypes'

const fetchGetCurrencies = createAppAsyncThunk<CurrencyType[]>('videosSlice/fetchGetCurrencies', async (_, thunkAPI) => {
    try {
        const { data: response } = await currenciesApi.getAssets()
        return response.data
    } catch (e) {
        const error = e as { message: string }
        return thunkAPI.rejectWithValue(error.message)
    }
})

const fetchGetCurrencyHistory = createAppAsyncThunk<CoincapHistoryItem[], string>('videosSlice/fetchGetCurrencyHistory', async (id: string, thunkAPI) => {
    try {
        const { data: response } = await currenciesApi.getAssetsHistory(id)
        return response.data.slice(-100)
    } catch (e) {
        const error = e as { message: string }
        return thunkAPI.rejectWithValue(error.message)
    }
})

export type InitialStateType = {
    status: '' | 'loading' | 'succeeded' | 'failed'
    data: CurrencyType[]
    error: null | string
    historyStatus: '' | 'loading' | 'succeeded' | 'failed'
    historyData: CoincapHistoryItem[]
    historyError: null | string
}

const initialState: InitialStateType = {
    status: '',
    data: [],
    error: null,
    historyStatus: '',
    historyData: [],
    historyError: null
}

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
            .addCase(fetchGetCurrencies.fulfilled, (state, action: PayloadAction<CurrencyType[]>) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchGetCurrencies.rejected, (state, action) => {
                state.status = 'failed'
                if (action.payload) {
                    state.error = action.payload
                }
            })

            .addCase(fetchGetCurrencyHistory.pending, (state) => {
                state.historyStatus = 'loading'
                state.historyError = null
            })
            .addCase(fetchGetCurrencyHistory.fulfilled, (state, action: PayloadAction<CoincapHistoryItem[]>) => {
                state.historyStatus = 'succeeded'
                state.historyData = action.payload
            })
            .addCase(fetchGetCurrencyHistory.rejected, (state, action) => {
                state.historyStatus = 'failed'
                if (action.payload) {
                    state.historyError = action.payload
                }
            })
    },
    selectors: {
        selectCurrenciesStatus: (state) => state.status,
        selectCurrenciesArray: (state) => state.data,
        selectCurrenciesError: (state) => state.error,
        selectHistoryStatus: (state) => state.historyStatus,
        selectHistoryArray: (state) => state.historyData,
        selectHistoryError: (state) => state.historyError
    },
})

export { fetchGetCurrencies, fetchGetCurrencyHistory }
export const { clearCurrenciesState } = currenciesSlice.actions
export const currenciesReducer = currenciesSlice.reducer
export const {
    selectCurrenciesStatus,
    selectCurrenciesArray,
    selectCurrenciesError,
    selectHistoryStatus,
    selectHistoryArray,
    selectHistoryError } = currenciesSlice.selectors