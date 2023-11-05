import instance from '@/api/axios.api'
import {
	ICreate,
	IRequestUpdateThread,
	IThread
} from '@/shared/interface/Thread.interface'
import { IUser } from '@/shared/interface/User.interface'
import { AxiosResponse } from 'axios'
import GettingThreadService from '@/services/thread/GettingThread.service'

export const THREADS = '/threads'

class ThreadService extends GettingThreadService {
	async toggleLikeThread(threadId: string): Promise<AxiosResponse<IUser>> {
		return await instance<IUser>({
			url: `${THREADS}/${threadId}`,
			method: 'put'
		})
	}

	async createThread({
		content,
		imgs
	}: ICreate): Promise<AxiosResponse<IThread>> {
		return await instance<IThread>({
			url: `${THREADS}`,
			method: 'post',
			data: {
				content,
				imgs
			}
		})
	}

	async setThread({
		content,
		imgs
	}: IRequestUpdateThread): Promise<AxiosResponse<IThread>> {
		return await instance<IThread>({
			url: `${THREADS}/update`,
			method: 'put',
			data: {
				content,
				imgs
			}
		})
	}
}

export default new ThreadService()
