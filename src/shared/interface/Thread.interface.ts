import { IUser } from '@/shared/interface/User.interface'
import { IComment } from '@/shared/interface/Comment.interface'

export interface IThread {
	_id: string
	author: IUser
	content: string
	imgs: string[]
	like: number
	comment: IComment[]
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