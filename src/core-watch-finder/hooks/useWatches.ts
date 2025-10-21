/// <reference types="vite/client" />
import { useQuery } from '@tanstack/react-query'
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { Watch } from '../models'
// Configuración de la instancia de axios con baseURL
const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_ENDPOINT as string,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};

const api: AxiosInstance = axios.create(axiosRequestConfig);

export interface GetWatchesProps {
  count?: number
}

export interface GetWatchesResponse {
  status: 'success' | 'error'
  totalResults: number
  results: Watch[]
  nextPage?: string
}

export function useWatches(params: GetWatchesProps = { count: 100 }) {
  return useQuery({
    queryKey: ['watches', params],
    queryFn: async () => {
      const response = await api.get('/Watch/list', {
        params,
        headers: { accept: '*/*' },
      })

      const data: GetWatchesResponse = {
        status: response.data.success ? 'success' : 'error',
        totalResults: response.data.totalGroups,
        results: response.data.data,
        nextPage: undefined,
      }
      return data
    }
  })
}
