import { API_URL } from '@/api/tokens.api'

export const useGetImgUrl = (url: string | undefined ) => `${API_URL}${url}`