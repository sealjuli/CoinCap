import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StorageItem } from '../../types/storageTypes'
import { CurrencyType } from '../../types/currencyTypes'

type InitialStateType = {
    showWalletWindow: boolean,
    walletPrice: number,
    walletPercent: number
}
const initialState: InitialStateType = { showWalletWindow: false, walletPrice: 0, walletPercent: 0 }

const walletSlice = createSlice({
    name: 'walletSlice',
    initialState,
    reducers: {
        changeShowWalletWindow: (state) => {
            state.showWalletWindow = !state.showWalletWindow
        },
        setWalletPrice: (state, action: PayloadAction<CurrencyType[]>) => {
            const walletString = localStorage.getItem('wallet')
            const wallet: StorageItem[] = walletString ? JSON.parse(walletString) : []
            if (wallet.length > 0) {
                state.walletPrice = wallet.reduce((acc, walletValue) => +(action.payload.find(val => val.id === walletValue.name)?.priceUsd || 0)
                    * walletValue.amount + acc, 0)

                const realPrice = wallet.reduce((acc, walletValue) => walletValue.avgPrice * walletValue.amount + acc, 0)

                if (realPrice) {
                    state.walletPercent = (state.walletPrice * 100 / realPrice) - 100
                }

            }
        },
    },
    selectors: {
        selectWalletPrice: (state) => state.walletPrice,
        selectWalletPercent: (state) => state.walletPercent,
        selectShowWalletWindow: (state) => state.showWalletWindow
    },
})

export const { selectWalletPrice, selectWalletPercent, selectShowWalletWindow } = walletSlice.selectors
export const { changeShowWalletWindow, setWalletPrice } = walletSlice.actions
export const walletReducer = walletSlice.reducer