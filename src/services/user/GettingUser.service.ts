import { IUser } from '@/shared/interface/User.interface'
import instance, { $axios } from '@/api/axios.api'
import { AxiosResponse } from 'axios'
import { USERS } from '@/services/user/User.service'


class GettingUserService {
	async getProfile(): Promise<IUser> {
		const { data } = await instance<IUser>({
			url: `${USERS}/profile`,
			method: 'get'
		})
		return data
	}

	async getUserById(id: string): Promise<AxiosResponse<IUser>> {
		return await $axios<IUser>({
			url: `${USERS}/byId/${id}`,
			method: 'get'
		})
	}

	async getAllUser(): Promise<AxiosResponse<IUser[]>> {
		return await $axios<IUser[]>({
			url: `${USERS}/all`,
			method: 'get'
		})
	}
}
export default GettingUserService