export const coinCapRoutes = {
    root: 'CoinCap',
    assets: 'Assets'
} as const;

export type RoutesType = (typeof coinCapRoutes)[keyof typeof coinCapRoutes];