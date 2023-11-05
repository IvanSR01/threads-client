import instance from '@/api/axios.api'
import { AxiosResponse } from 'axios'
import { TypeFile, TypePropsFile } from '@/shared/types/files.types'


class FileService {
	async uploads({files, folder}: TypePropsFile):Promise<AxiosResponse<TypeFile[]>> {
		console.log(files, folder)
		return await instance.post<TypeFile[]>(`/files?folder=${folder}`, files, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}
}

export default new FileService()