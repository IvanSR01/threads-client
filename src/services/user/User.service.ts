import instance, { $axios } from '@/api/axios.api'
import { IUser } from '@/shared/interface/User.interface'
import { AxiosResponse } from 'axios'
import { IThread } from '@/shared/interface/Thread.interface'
import GettingUserService from '@/services/user/GettingUser.service'
import { IUpdate } from '@/shared/interface/Auth.interface'

export const USERS = '/users'

class UserService extends GettingUserService {
	async setProfile(props: IUpdate): Promise<AxiosResponse<IUser>> {
		return await instance<IUser>({
			url: `${USERS}/profile`,
			method: 'put',
			data: { ...props }
		})
	}

	async setSubscription(
		subId: string | undefined
	): Promise<AxiosResponse<IUser>> {
		return await instance<IUser>({
			url: `${USERS}/sub`,
			method: 'put',
			data: { subId }
		})
	}
}

export default new UserService()
