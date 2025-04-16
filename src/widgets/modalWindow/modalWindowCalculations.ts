import { CurrencyType } from '../../shared/types/currencyTypes'
import { StorageItem } from '../../shared/types/storageTypes'

export const modalWindowCalculations = (currency: CurrencyType, inputValue: number) => {
    const walletString = localStorage.getItem('wallet')
    const wallet: StorageItem[] = walletString ? JSON.parse(walletString) : []
    const currentIndex = wallet.findIndex((val) => val.name === currency?.id)
    if (currentIndex >= 0) {
        wallet[currentIndex].priceHistory.push({
            price: +currency?.priceUsd,
            amount: inputValue,
        })
        wallet[currentIndex].amount = wallet[currentIndex].amount + inputValue
        wallet[currentIndex].avgPrice =
            wallet[currentIndex].priceHistory.reduce(
                (acc, val) => acc + val.amount * val.price,
                0
            ) / wallet[currentIndex].amount
    } else {
        wallet.push({
            name: currency?.id,
            avgPrice: +currency?.priceUsd,
            amount: inputValue,
            priceHistory: [{ price: +currency?.priceUsd, amount: inputValue }],
        })
    }
    localStorage.setItem('wallet', JSON.stringify(wallet))
}
