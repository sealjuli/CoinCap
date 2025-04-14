export type CurrencyType = {
    key: string
    rank: number
    symbol: string
    name: string
    vwap24Hr: string
    changePercent24Hr: string
    marketCapUsd: string
    priceUsd: string
}

export type CoincapResponse = {
    data: CurrencyType[]
}