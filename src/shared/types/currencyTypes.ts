export type CurrencyType = {
    key: string
    id: string
    rank: number
    symbol: string
    name: string
    vwap24Hr: string
    changePercent24Hr: string
    marketCapUsd: string
    priceUsd: string
    explorer: string
    maxSupply: string
    supply: string
    volumeUsd24Hr: string
}

export type CoincapResponse = {
    data: CurrencyType[]
}

export type CoincapHistoryItem = {
    priceUsd: number
    time: number
    date: string
    circulatingSupply: number
}

export type CoincapHistoryResponse = {
    data: CoincapHistoryItem[]
}