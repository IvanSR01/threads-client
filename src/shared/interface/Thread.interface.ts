import { IUser } from '@/shared/interface/User.interface'

export interface IThread {
	_id: string
	author: IUser
	content: string
	imgs: string[]
	like: number
	comment: any[]
	status: 'mount' | 'update'
}
export interface ICreate {
	content: string
	imgs: string[]
}

export interface IUpdateThread {
	content?: string
	imgs?: string[]
}
export interface IRequestUpdateThread extends IUpdateThread{
	_id: string | undefined
}