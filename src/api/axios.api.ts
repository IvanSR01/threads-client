import axios from 'axios'
import { API_URL, getTokens, removeTokens } from './tokens.api'
import { useError } from '@/hook'
import AuthService from '@/services/auth/Auth.service'

export const $axios = axios.create({
	baseURL: `${API_URL}/api`,
	headers: {
		'Content-Type': 'application/json'
	}
})

const instance = axios.create({
	baseURL: `${API_URL}/api`,
	headers: {
		'Content-Type': 'application/json'
	}
})
instance.interceptors.request.use(config => {
	const { accessToken } = getTokens()
	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response?.status === 401 ||
				useError(error) === 'jwt expired' ||
				useError(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()

				return instance.request(originalRequest)
			} catch (e) {
				if (useError(e) === 'jwt expired') removeTokens()
			}
		}

		throw error
	}
)

export default instance
