import { instance } from '../api/instance'
import { CoincapResponse, CoincapHistoryResponse } from '../types/currencyTypes';

export const currenciesApi = {
    getAssets() {
        return instance.get<CoincapResponse>('/assets', {
            params: {
                apiKey: import.meta.env.VITE_API_KEY
            }
        });
    },
    getAssetsHistory(id: string) {
        return instance.get<CoincapHistoryResponse>(`/assets/${id}/history`, {
            params: {
                apiKey: import.meta.env.VITE_API_KEY,
                interval: 'm5'
            }
        });
    },
}