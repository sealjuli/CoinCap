import { instance } from '../api/instance'
import { CoincapResponse } from '../types/currencyTypes';

export const currenciesApi = {
    getAssets() {
        return instance.get<CoincapResponse>('/assets', {
            params: {
                apiKey: import.meta.env.VITE_API_KEY
            }
        });
    },
}