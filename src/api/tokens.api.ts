import { ITokens } from "@/shared/interface/Token.interface"
import Cookie from "js-cookie"

export const API_URL: string = `http://localhost:4200`
export const APP_URl: string = `http://localhost:3000`

export const getTokens = () => {
	const accessToken = Cookie.get('access-token')
	const refreshToken = Cookie.get('refresh-token')
	return {accessToken, refreshToken}
}

export const saveTokens = ({ accessToken, refreshToken}: ITokens) => {
	Cookie.set('access-token', accessToken)
	Cookie.set('refresh-token', refreshToken)
}

export const removeTokens = () => {
	Cookie.remove('access-token')
	Cookie.remove('refresh-token')
}