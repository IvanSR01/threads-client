import { IUser } from '@/shared/interface/User.interface'
import { IThread } from '@/shared/interface/Thread.interface'

export interface IHome {
	threads: IThread[]
}
export interface ISearchPage {
	threads: IThread[]
	users: IUser[]
}

export interface IUserPage {
	user: IUser | null
	threads: IThread[]
}

export interface IProfile {}

export interface IFullThread {
	thread: IThread
}