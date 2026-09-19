import { apiRequest } from './apiClient'

export const getEvidence = () => apiRequest('/evidence')
export const getEvidenceItem = (id) => apiRequest(`/evidence/${id}`)
