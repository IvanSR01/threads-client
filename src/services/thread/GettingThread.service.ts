import { AxiosResponse } from 'axios'
import { IThread } from '@/shared/interface/Thread.interface'
import instance, { $axios } from '@/api/axios.api'
import { THREADS } from '@/services/thread/Thread.service'


class GettingThreadService {

	async getThreadsById(id:string | undefined): Promise<AxiosResponse<IThread>> {
		return await instance<IThread>({
			url: `${THREADS}/byId/${id}`,
			method: 'get'
		})
	}
	async getAllThread(): Promise<AxiosResponse<IThread[]>>{
		return await $axios<IThread[]>({
			url: `${THREADS}`,
			method: 'get'
		})
	}
	async getMeThread(): Promise<IThread[]>{
		const { data } =  await instance<IThread[]>({
			url: `${THREADS}/getMe`,
			method: 'get',
		})
		return  data
	}

	async getByAuthor(_id:string): Promise<AxiosResponse<IThread[]>>{
		return await $axios<IThread[]>({
			url: `${THREADS}/by-author`,
			method: 'get',
			data: {
				_id
			}
		})
	}
}
export default GettingThreadService