import { apiRequest } from './apiClient'

export const getAlerts = () => apiRequest('/alerts')
export const getAlert = (id) => apiRequest(`/alerts/${id}`)
