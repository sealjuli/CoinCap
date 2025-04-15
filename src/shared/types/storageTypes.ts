type PriceHistoryItem = {
    price: number
    amount: number
}

export type StorageItem = {
    name: string
    avgPrice: number
    amount: number
    priceHistory: PriceHistoryItem[]
}