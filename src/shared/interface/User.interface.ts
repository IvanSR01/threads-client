import { ITokens } from "./Token.interface";
import { IThread } from '@/shared/interface/Thread.interface'

export interface IUser extends ITokens {
	_id: string
	email: string
	fullName: string
	userName?: string
	isAdmin: boolean
	img: string
	alert: IAlert[]
	likes: IThread[]
	sub: IUser[]
	subCount: number
	description: string
}

export interface IUserInitialState  {
	user: IUser | null
	isLoading: boolean
}

export interface IAlert {
	_id: string
	img: string
	title: string
	content: string
}