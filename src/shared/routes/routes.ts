export const coincapRoutes = {
    root: 'coincap',
    assets: 'assets',
    currency: 'currency'
} as const;

export type RoutesType = (typeof coincapRoutes)[keyof typeof coincapRoutes];