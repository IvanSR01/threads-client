import instance from '@/api/axios.api'
import { AxiosResponse } from 'axios'
import { IUser } from '@/shared/interface/User.interface'

const ALERT = `/alert`
class AlertService {
	async deleteAllAlerts(): Promise<AxiosResponse<IUser>>{
		return await instance({
			url: `${ALERT}/all`,
			method: 'delete'
		})
	}
	async deleteById(alertId: string): Promise<AxiosResponse<IUser>>{
		return await instance({
			url: `${ALERT}/byId/${alertId}`,
			method: 'delete'
		})
	}
}

export default new AlertService()