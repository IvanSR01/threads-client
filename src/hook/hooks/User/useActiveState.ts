import { IUser } from '@/shared/interface/User.interface'
import { IThread } from '@/shared/interface/Thread.interface'
import { useAuth } from '@/hook'

export type TypeActiveState = {
	type: 'like' | 'sub'
	ids?: string // threadId || subId
}
export const useActiveState = ({ ids, type }: TypeActiveState): boolean => {
	const { user } = useAuth()
	if(type === 'sub') {
		let isSub: boolean = false
		if(!user) return isSub
		user.sub?.forEach((item: IUser): void => {
			if (String(item._id) === String(ids)) isSub = true
		})
		return isSub
	}
	let isLike: boolean = false
	if(!user) return isLike
	user.likes?.forEach((item: IThread): void => {
		if (String(item._id) === String(ids)) isLike = true
	})
	return isLike
}
