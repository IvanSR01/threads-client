import { $axios } from '@/api/axios.api'
import { getTokens, saveTokens } from '@/api/tokens.api'
import { ILogin, IRegister } from '@/shared/interface/Auth.interface'
import { IUser } from '@/shared/interface/User.interface'

const AUTH_LOGIN = '/auth/login'


class AuthService {
	async login(props: ILogin): Promise<IUser> {
		const { data } = await $axios<IUser>({
			url: `${AUTH_LOGIN}`,
			method: 'post',
			data: { ...props}
		})
		this.newTokens(data)
		return data
	}
	async register(props: IRegister): Promise<IUser> {
		const { data } = await $axios<IUser>({
			url: `/auth/register`,
			method: 'post',
			data: { ...props }
		})
		this.newTokens(data)
		return data
	}
	async getNewTokens(): Promise<IUser> {
		const { refreshToken } = getTokens()
		const { data } = await $axios<IUser>({
			url: `${AUTH_LOGIN}/access-Token`,
			method: 'post',
			data: { refreshToken }
		})
		this.newTokens(data)
		return data
	}
	private newTokens(data: IUser): void {
		if (data.accessToken) {
			saveTokens({
				accessToken: data.accessToken,
				refreshToken: data.refreshToken
			})
		}
	}
}
export default new AuthService()
