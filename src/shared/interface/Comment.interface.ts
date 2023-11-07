import { IUser } from '@/shared/interface/User.interface'

export interface IComment {
	user: IUser
	comment: IComment
	content: string
	likeCount: number
}


