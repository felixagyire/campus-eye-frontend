import { apiRequest } from './apiClient'

export const getTracks = () => apiRequest('/tracks')
