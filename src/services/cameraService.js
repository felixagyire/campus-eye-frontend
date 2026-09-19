import { apiRequest } from './apiClient'

export const getCameras = () => apiRequest('/cameras')
