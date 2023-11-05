import { IUser } from '@/shared/interface/User.interface'
import { IThread } from '@/shared/interface/Thread.interface'

interface IFilter {
	users: IUser[]
	threads: IThread[]
	valueFilter: string
}

interface IReturnFilter {
	users: IUser[]
	threads: IThread[]
}
export const useFilter = ({ users, threads, valueFilter }: IFilter): IReturnFilter => {
	if (!valueFilter) return { users, threads }
	const search = valueFilter.toLowerCase()
	const newUsers = users.filter(item => {
		return item.userName
			? item.userName.toLowerCase().includes(search)
			: item.fullName.toLowerCase().includes(search)
	})
	const newThreads = threads.filter((item) => {
		return item.content.toLowerCase().includes(search)
	})
	return { threads: newThreads, users: newUsers }
}