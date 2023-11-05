import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuth } from '@/hook'
import { IUser } from '@/shared/interface/User.interface'

export const useUserRedirect = (user: IUser | null) => {
	const { user: loginUser } = useAuth()

	const { query, push } = useRouter()
	const redirect = query.redirect ? String(query.redirect) : '/user/profile'
	useEffect(() => {
		if(loginUser?._id === user?._id) push(redirect)
	}, [loginUser, user, query, push])
}